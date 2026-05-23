import { createServerFn } from "@tanstack/react-start";

const CHANNEL_ID = "UCswkLTPl6Vd44DKTInEumYw";
const FEED_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;

export type LatestVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  published: string;
};

function pick(xml: string, tag: string, from = 0): { value: string; end: number } | null {
  const open = xml.indexOf(`<${tag}`, from);
  if (open === -1) return null;
  const close = xml.indexOf(`</${tag}>`, open);
  if (close === -1) return null;
  const gt = xml.indexOf(">", open);
  return { value: xml.slice(gt + 1, close), end: close };
}

function attr(xml: string, tag: string, attribute: string): string | null {
  const re = new RegExp(`<${tag}[^>]*\\b${attribute}="([^"]+)"`);
  const m = xml.match(re);
  return m ? m[1] : null;
}

export const getLatestVideo = createServerFn({ method: "GET" }).handler(
  async (): Promise<LatestVideo | null> => {
    try {
      const res = await fetch(FEED_URL, {
        headers: { "user-agent": "Mozilla/5.0 (compatible; IPCHebronBot/1.0)" },
      });
      if (!res.ok) return null;
      const xml = await res.text();

      // First entry
      const entryStart = xml.indexOf("<entry>");
      if (entryStart === -1) return null;
      const entryEnd = xml.indexOf("</entry>", entryStart);
      const entry = xml.slice(entryStart, entryEnd);

      const idRaw = pick(entry, "yt:videoId")?.value ?? null;
      const title = pick(entry, "title")?.value ?? "";
      const published = pick(entry, "published")?.value ?? "";
      const url = attr(entry, "link", "href") ?? (idRaw ? `https://www.youtube.com/watch?v=${idRaw}` : "");

      if (!idRaw) return null;

      return {
        id: idRaw,
        title: title.replace(/&amp;/g, "&"),
        url,
        thumbnail: `https://i.ytimg.com/vi/${idRaw}/hqdefault.jpg`,
        published,
      };
    } catch {
      return null;
    }
  },
);
