import heroImg from "@/assets/hero-church.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="IPC Hebron Manjanikara church building at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        {/* base darkening for overall legibility */}
        <div className="absolute inset-0 bg-[color:var(--color-charcoal)]/60"></div>
        {/* top gradient — strengthens navbar readability */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[color:var(--color-charcoal)]/80 to-transparent"></div>
        {/* radial vignette — soft safe zone behind hero text */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, color-mix(in oklab, var(--color-charcoal) 55%, transparent) 0%, transparent 75%)",
          }}
        ></div>
        {/* bottom — soft warm fade, but no white wash */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[color:var(--color-charcoal)]/55 to-[color:var(--color-charcoal)]/85"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10 text-center pt-28 pb-20 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
        <p className="eyebrow fade-in delay-1 text-[color:var(--color-ivory)]/95">Est. 1971 · Pathanamthitta, Kerala</p>

        <div className="mt-6 flex justify-center fade-in delay-2">
          <span className="gold-divider"></span>
        </div>

        <h1 className="mt-8 font-serif text-[2.5rem] sm:text-6xl md:text-7xl leading-[1.05] text-[color:var(--color-ivory)] fade-up delay-2">
          IPC Hebron
          <span className="block italic text-gold font-normal">Manjanikara</span>
        </h1>

        <p
          className="mt-10 max-w-xl mx-auto font-light italic text-[1.35rem] md:text-[1.6rem] text-[color:var(--color-ivory)]/95 leading-[1.55] tracking-[0.01em] fade-up delay-3"
          style={{ fontFamily: 'var(--font-serif-body)' }}
        >
          A Spirit-filled congregation
          <br className="hidden sm:block" />
          rooted in faith, worship,
          <br className="hidden sm:block" />
          and community since 1971.
        </p>

        <p
          className="mt-10 font-mal text-base md:text-lg tracking-[0.04em] leading-loose fade-up delay-4"
          style={{
            color: "color-mix(in oklab, var(--color-gold) 80%, white)",
            textShadow: "0 1px 14px rgba(0,0,0,0.6), 0 0 28px color-mix(in oklab, var(--color-gold) 25%, transparent)",
          }}
        >
          വിശ്വാസത്തിലും പ്രാർത്ഥനയിലും ഒന്നായി
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up delay-4">
          <a href="#contact" className="btn-primary shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
            Plan Your Visit
          </a>
          <a
            href="#services"
            className="btn-outline border-[color:var(--color-ivory)]/80 text-[color:var(--color-ivory)] hover:bg-[color:var(--color-ivory)] hover:text-[color:var(--color-charcoal)] shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          >
            Service Times
          </a>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-3 max-w-2xl mx-auto fade-up delay-5">
          {[
            { v: "1971", l: "Established" },
            { v: "61", l: "Families" },
            { v: "6", l: "Weekly Meetings" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`px-4 py-2 ${i !== 0 ? "border-l border-[color:var(--color-gold)]/40" : ""}`}
            >
              <div className="font-serif text-3xl md:text-4xl font-medium text-[color:var(--color-ivory)]">{s.v}</div>
              <div className="mt-2 text-[11px] tracking-[0.25em] uppercase text-[color:var(--color-ivory)]/85">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-ivory)]/80 fade-in delay-5">
        Scroll
      </div>
    </section>
  );
}
