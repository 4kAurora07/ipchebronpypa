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
      className="relative py-20 md:py-36 bg-[color:var(--color-cream)]/40 overflow-hidden"
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
          <div className="mt-4 flex justify-center"><span className="gold-divider"></span></div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Stay <span className="italic text-gold">connected</span> with our community
          </h2>
          <p className="mt-5 text-muted-foreground text-[15px] sm:text-base leading-relaxed">
            Moments of worship, fellowship, and youth gatherings.
            Follow along as our church family lives out its faith together.
          </p>
          <p className="mt-4 font-mal text-gold/85 text-xs md:text-sm tracking-[0.05em]">
            സഹവാസത്തിൽ ഒന്നായി
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 gap-6 lg:gap-8">
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
            handle="IPC Hebron Manjanikkara"
            platform="YouTube"
            description="Messages, worship moments, sermons, and church updates."
            cta="Watch Sermons & Shorts"
          />
        </div>

        {/* Latest video */}
        <div className="mt-12 md:mt-20">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <p className="eyebrow">Latest from Hebron</p>
              <h3 className="mt-2 font-serif text-xl md:text-3xl">
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
            <div className="absolute -inset-3 bg-gradient-to-br from-[color:var(--color-gold)]/15 via-transparent to-[color:var(--color-gold)]/10 blur-xl rounded-[1.25rem] hidden md:block" aria-hidden />
            <div className="relative aspect-video overflow-hidden rounded-md border border-[color:var(--color-gold)]/25 bg-[color:var(--color-charcoal)] shadow-[0_15px_40px_-25px_rgba(31,27,23,0.4)] md:shadow-[0_30px_80px_-40px_rgba(31,27,23,0.55)]">
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
                    className="h-full w-full object-cover transition-transform duration-700 md:group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-charcoal)]/70 via-[color:var(--color-charcoal)]/10 to-transparent" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-[color:var(--color-ivory)]/95 text-[color:var(--color-charcoal)] shadow-[0_15px_40px_rgba(0,0,0,0.4)] transition-all duration-300 active:scale-90 md:group-hover:scale-110 md:group-hover:bg-[color:var(--color-gold)] md:group-hover:text-[color:var(--color-ivory)]">
                      <Play size={24} className="ml-1 md:ml-1.5 md:w-7 md:h-7" fill="currentColor" />
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
      className="group relative block bg-card border border-border/70 p-6 md:p-10 transition-all duration-500 hover:border-gold md:hover:-translate-y-1 md:hover:shadow-[0_30px_70px_-40px_rgba(184,155,94,0.55)] active:scale-[0.99]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, color-mix(in oklab, var(--color-gold) 10%, transparent), transparent 70%)",
        }}
      />
      <div className="relative flex items-start gap-4 md:gap-5">
        <span className="flex items-center justify-center w-11 h-11 md:w-12 md:h-12 border border-border/80 text-foreground/80 md:group-hover:text-gold md:group-hover:border-gold transition-colors shrink-0">
          {icon}
        </span>
        <div className="flex-1 min-w-0">
          <p className="eyebrow">{platform}</p>
          <p className="mt-2 font-serif text-lg md:text-xl truncate">{handle}</p>
          <p className="mt-2.5 text-[14px] md:text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
          <span className="mt-5 inline-flex items-center gap-1.5 text-xs md:text-sm tracking-[0.18em] uppercase text-foreground md:group-hover:text-gold transition-colors">
            {cta}
            <ArrowUpRight size={13} className="transition-transform md:group-hover:translate-x-0.5 md:group-hover:-translate-y-0.5 shrink-0" />
          </span>
        </div>
      </div>
    </a>
  );
}
