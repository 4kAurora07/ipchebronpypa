import { useEffect, useState } from "react";
import { Instagram, Youtube, ArrowUpRight, Play } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { getLatestVideo, type LatestVideo } from "@/lib/youtube.functions";

export const INSTAGRAM_URL = "https://www.instagram.com/ipc.hebronpypa/";
export const YOUTUBE_URL = "https://www.youtube.com/channel/UCswkLTPl6Vd44DKTInEumYw";

export function Connect() {
  const fetchLatest = useServerFn(getLatestVideo);
  const [video, setVideo] = useState<LatestVideo | null>(null);
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let alive = true;
    fetchLatest()
      .then((v) => {
        if (alive) setVideo(v);
      })
      .catch(() => {})
      .finally(() => {
        if (alive) setLoading(false);
      });
    return () => {
      alive = false;
    };
  }, [fetchLatest]);

  return (
    <section
      id="connect"
      className="relative py-24 md:py-36 bg-[color:var(--color-cream)]/40 overflow-hidden"
    >
      {/* soft floating backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 10%, color-mix(in oklab, var(--color-gold) 14%, transparent), transparent 70%), radial-gradient(50% 45% at 10% 90%, color-mix(in oklab, var(--color-gold) 10%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Hebron Online</p>
          <div className="mt-5 flex justify-center"><span className="gold-divider"></span></div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
            Stay <span className="italic text-gold">connected</span> with our community
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Moments of worship, fellowship, and youth gatherings —
            follow along as our church family lives out its faith together.
          </p>
          <p className="mt-4 font-mal text-gold/85 text-sm tracking-[0.05em]">
            സഹവാസത്തിൽ ഒന്നായി
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
          <SocialCard
            href={INSTAGRAM_URL}
            icon={<Instagram size={22} />}
            handle="@ipc.hebronpypa"
            platform="Instagram"
            description="Moments of worship, fellowship, youth meetings, and church life."
            cta="Follow on Instagram"
          />
          <SocialCard
            href={YOUTUBE_URL}
            icon={<Youtube size={22} />}
            handle="IPC Hebron Manjanikara"
            platform="YouTube"
            description="Messages, worship moments, sermons, and church updates."
            cta="Watch Sermons & Shorts"
          />
        </div>

        {/* Latest video */}
        <div className="mt-16">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="eyebrow">Latest from Hebron</p>
              <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                {video?.title ? video.title : "Fresh from our channel"}
              </h3>
            </div>
            {video && (
              <a
                href={video.url}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm text-gold hover:underline underline-offset-4 whitespace-nowrap"
              >
                Watch on YouTube <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute -inset-3 bg-gradient-to-br from-[color:var(--color-gold)]/15 via-transparent to-[color:var(--color-gold)]/10 blur-xl rounded-[1.25rem]" aria-hidden />
            <div className="relative aspect-video overflow-hidden rounded-md border border-[color:var(--color-gold)]/25 bg-[color:var(--color-charcoal)] shadow-[0_30px_80px_-40px_rgba(31,27,23,0.55)]">
              {loading && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[color:var(--color-charcoal)] to-[color:var(--color-charcoal)]/70" />
              )}

              {!loading && !video && (
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[color:var(--color-ivory)]/85 hover:text-[color:var(--color-gold)] transition"
                >
                  <Youtube size={42} />
                  <span className="text-sm tracking-[0.2em] uppercase">Visit our channel</span>
                </a>
              )}

              {video && !playing && (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  className="group absolute inset-0 block"
                  aria-label={`Play ${video.title}`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-charcoal)]/70 via-[color:var(--color-charcoal)]/10 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center justify-center w-20 h-20 rounded-full bg-[color:var(--color-ivory)]/95 text-[color:var(--color-charcoal)] shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[color:var(--color-gold)] group-hover:text-[color:var(--color-ivory)]">
                      <Play size={28} className="ml-1" fill="currentColor" />
                    </span>
                  </span>
                </button>
              )}

              {video && playing && (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialCard({
  href,
  icon,
  handle,
  platform,
  description,
  cta,
}: {
  href: string;
  icon: React.ReactNode;
  handle: string;
  platform: string;
  description: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block bg-card border border-border/70 p-8 md:p-10 transition-all duration-500 hover:border-gold hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(184,155,94,0.55)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, color-mix(in oklab, var(--color-gold) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="relative flex items-start gap-5">
        <span className="flex items-center justify-center w-12 h-12 border border-border/80 text-foreground/80 group-hover:text-gold group-hover:border-gold transition-colors">
          {icon}
        </span>
        <div className="flex-1">
          <p className="eyebrow">{platform}</p>
          <p className="mt-2 font-serif text-xl">{handle}</p>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <span className="mt-6 inline-flex items-center gap-1.5 text-sm tracking-[0.18em] uppercase text-foreground group-hover:text-gold transition-colors">
            {cta}
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}
