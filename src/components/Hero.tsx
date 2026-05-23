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
        {/* darken for legibility */}
        <div className="absolute inset-0 bg-[color:var(--color-charcoal)]/55"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-charcoal)]/40 via-[color:var(--color-charcoal)]/30 to-[color:var(--color-ivory)]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10 text-center pt-28 pb-20 [text-shadow:0_1px_24px_rgba(0,0,0,0.35)]">
        <p className="eyebrow fade-in delay-1 text-[color:var(--color-ivory)]/85">Est. 1971 · Pathanamthitta, Kerala</p>

        <div className="mt-6 flex justify-center fade-in delay-2">
          <span className="gold-divider"></span>
        </div>

        <h1 className="mt-8 font-serif text-[2.5rem] sm:text-6xl md:text-7xl leading-[1.05] text-[color:var(--color-ivory)] fade-up delay-2">
          IPC Hebron
          <span className="block italic text-gold font-normal">Manjanikara</span>
        </h1>

        <p
          className="mt-10 max-w-xl mx-auto font-light italic text-[1.35rem] md:text-[1.6rem] text-[color:var(--color-ivory)]/80 leading-[1.55] tracking-[0.01em] fade-up delay-3"
          style={{ fontFamily: 'var(--font-serif-body)' }}
        >
          A Spirit-filled congregation
          <br className="hidden sm:block" />
          rooted in faith, worship,
          <br className="hidden sm:block" />
          and community since 1971.
        </p>

        <p className="mt-10 font-mal font-light text-sm md:text-base text-gold/85 tracking-[0.05em] leading-loose fade-up delay-4">
          വിശ്വാസത്തിലും പ്രാർത്ഥനയിലും ഒന്നായി
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 fade-up delay-4">
          <a href="#contact" className="btn-primary">
            Plan Your Visit
          </a>
          <a href="#services" className="btn-outline">
            Service Times
          </a>
        </div>

        {/* stats */}
        <div className="mt-20 grid grid-cols-3 max-w-2xl mx-auto fade-up delay-5">
          {[
            { v: "1971", l: "Established" },
            { v: "61", l: "Families" },
            { v: "6", l: "Weekly Meetings" },
          ].map((s, i) => (
            <div
              key={s.l}
              className={`px-4 py-2 ${i !== 0 ? "border-l border-[color:var(--color-ivory)]/30" : ""}`}
            >
              <div className="font-serif text-3xl md:text-4xl text-[color:var(--color-ivory)]">{s.v}</div>
              <div className="mt-2 text-[11px] tracking-[0.25em] uppercase text-[color:var(--color-ivory)]/70">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-ivory)]/70 fade-in delay-5">
        Scroll
      </div>
    </section>
  );
}
