import heroImg from "@/assets/hero-church.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="A peaceful Kerala church at golden hour"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-ivory)]/55 via-[color:var(--color-ivory)]/30 to-[color:var(--color-ivory)]"></div>
        <div className="absolute inset-0 bg-[color:var(--color-charcoal)]/10"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 md:px-10 text-center pt-28 pb-20">
        <p className="eyebrow fade-in delay-1">Est. 1971 · Pathanamthitta, Kerala</p>

        <div className="mt-6 flex justify-center fade-in delay-2">
          <span className="gold-divider"></span>
        </div>

        <h1 className="mt-8 font-serif text-[2.5rem] sm:text-6xl md:text-7xl leading-[1.05] text-foreground fade-up delay-2">
          IPC Hebron
          <span className="block italic text-gold font-normal">Manjanikara</span>
        </h1>

        <p className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 leading-relaxed fade-up delay-3">
          A Spirit-filled congregation rooted in faith, worship, and community
          since 1971.
        </p>

        <p className="mt-4 font-mal text-base md:text-lg text-gold/90 fade-up delay-4">
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
              className={`px-4 py-2 ${i !== 0 ? "border-l border-border/70" : ""}`}
            >
              <div className="font-serif text-3xl md:text-4xl text-foreground">{s.v}</div>
              <div className="mt-2 text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.3em] uppercase text-foreground/50 fade-in delay-5">
        Scroll
      </div>
    </section>
  );
}
