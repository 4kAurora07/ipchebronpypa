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
        {/* base darkening for overall legibility — slightly darker on mobile */}
        <div className="absolute inset-0 bg-[color:var(--color-charcoal)]/75 md:bg-[color:var(--color-charcoal)]/60"></div>
        {/* top gradient — strengthens navbar readability */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[color:var(--color-charcoal)]/80 to-transparent"></div>
        {/* radial vignette — soft safe zone behind hero text */}
        <div
          className="absolute inset-0 animate-fade-in"
          style={{
            background:
              "radial-gradient(ellipse 80% 65% at 50% 50%, color-mix(in oklab, var(--color-charcoal) 60%, transparent) 0%, transparent 80%)",
          }}
        ></div>
        {/* bottom — soft warm fade, but no white wash */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-[color:var(--color-charcoal)]/55 to-[color:var(--color-charcoal)]/85"></div>
      </div>

      {/* Readability Zone: Subtle blur pocket behind typography for mobile */}
      <div
        className="absolute inset-x-4 top-[15%] bottom-[22%] md:hidden bg-[color:var(--color-charcoal)]/15 backdrop-blur-[2px] rounded-[2rem] pointer-events-none"
        style={{
          maskImage: "radial-gradient(circle, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 75%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10 text-center pt-28 pb-24 md:pt-40 md:pb-24 [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] flex flex-col items-center">
        <p className="eyebrow fade-in delay-1 text-[color:var(--color-ivory)]/95 text-[10px] md:text-xs tracking-[0.24em] md:tracking-[0.28em]">
          Est. 1971 · Pathanamthitta, Kerala
        </p>

        <div className="mt-3 md:mt-5 flex justify-center fade-in delay-2">
          <span className="gold-divider"></span>
        </div>

        <h1 className="mt-5 md:mt-8 font-serif text-[2.25rem] sm:text-6xl md:text-7xl leading-[1.1] md:leading-[1.05] text-[color:var(--color-ivory)] fade-up delay-2">
          IPC Hebron
          <span className="block italic text-gold font-normal text-2xl sm:text-4xl md:text-5xl mt-1 md:mt-2.5 tracking-wide">
            Manjanikara
          </span>
        </h1>

        <p
          className="mt-5 md:mt-10 max-w-md md:max-w-xl mx-auto font-light italic text-base md:text-2xl text-[color:var(--color-ivory)]/90 leading-relaxed md:leading-[1.55] tracking-[0.01em] fade-up delay-3 px-2 md:px-0"
          style={{ fontFamily: 'var(--font-serif-body)' }}
        >
          A Spirit-filled congregation{" "}
          <br className="hidden sm:block" />
          rooted in faith, worship,{" "}
          <br className="hidden sm:block" />
          and community since 1971.
        </p>

        <p
          className="mt-5 mb-7 md:my-10 font-mal text-sm md:text-base tracking-[0.04em] leading-loose fade-up delay-4 px-4"
          style={{
            color: "color-mix(in oklab, var(--color-gold) 90%, white)",
            textShadow: "0 1px 14px rgba(0,0,0,0.6), 0 0 28px color-mix(in oklab, var(--color-gold) 20%, transparent)",
          }}
        >
          വിശ്വാസത്തിലും പ്രാർത്ഥനയിലും ഒന്നായി
        </p>

        <div className="mt-7 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[280px] sm:max-w-none mx-auto fade-up delay-4">
          <a
            href="#contact"
            className="btn-primary w-full sm:w-auto shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.4)] active:scale-[0.98] transition-all duration-300"
          >
            Plan Your Visit
          </a>
          <a
            href="#services"
            className="btn-outline w-full sm:w-auto border-[color:var(--color-ivory)]/75 text-[color:var(--color-ivory)] hover:bg-[color:var(--color-ivory)] hover:text-[color:var(--color-charcoal)] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] active:scale-[0.98] transition-all duration-300"
          >
            Service Times
          </a>
        </div>

        {/* stats — clean 3-column minimal display with softer dividers */}
        <div className="mt-10 md:mt-20 grid grid-cols-3 w-full max-w-xl mx-auto divide-x divide-[color:var(--color-gold)]/20 fade-up delay-5">
          {[
            { v: "1971", l: "Established" },
            { v: "61", l: "Families" },
            { v: "6", l: "Meetings", lFull: "Weekly Meetings" },
          ].map((s) => (
            <div key={s.l} className="px-2 md:px-6 py-1 text-center">
              <div className="font-serif text-2xl md:text-4xl font-medium text-[color:var(--color-ivory)] leading-none">
                {s.v}
              </div>
              <div className="mt-2 text-[9px] md:text-[11px] tracking-[0.2em] md:tracking-[0.25em] uppercase text-[color:var(--color-ivory)]/80 leading-none">
                <span className="sm:hidden">{s.l}</span>
                <span className="hidden sm:inline">{s.lFull || s.l}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-[color:var(--color-ivory)]/70 fade-in delay-5 pointer-events-none">
        Scroll
      </div>
    </section>
  );
}
