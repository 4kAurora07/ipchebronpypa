
export function About() {
  return (
    <section id="about" className="relative py-20 md:py-36 bg-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div>
          <p className="eyebrow">സ്വാഗതം · Welcome</p>
          <span className="mt-4 block gold-divider"></span>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            A congregation rooted in faith,
            <span className="italic text-gold"> worship, and community.</span>
          </h2>

          <div className="mt-6 space-y-4 text-foreground/80 text-[15px] sm:text-base leading-relaxed md:mt-8 md:space-y-5">
            <p>
              For over five decades, IPC Hebron has stood quietly in
              Manjanikara — a small congregation of families gathering each
              week to worship, to pray, and to share life together. What
              began in 1971 with a handful of believers is today a family
              of sixty-one households, knit together across generations.
            </p>
            <p>
              Our Sundays are unhurried. There is scripture read aloud,
              hymns in Malayalam and English, prayer that lingers, and
              fellowship that continues long after the closing prayer.
              Mid-week, the church scatters — into homes for cell prayer,
              into the sanctuary for the ladies&rsquo; meeting, and onto
              our knees together every Friday for fasting prayer.
            </p>
            <p className="font-mal text-foreground/75 italic mt-4">
              പ്രാർത്ഥനയും സഹവാസവും — ദൈവകൃപയിൽ വളരുന്ന കുടുംബം.
            </p>
          </div>

          <blockquote className="mt-8 pl-5 border-l border-gold/70 md:mt-10 md:pl-6 md:border-l-2">
            <p className="font-serif italic text-lg md:text-2xl leading-snug text-foreground/90">
              &ldquo;Where two or three gather in my name, there am I with
              them.&rdquo;
            </p>
            <footer className="mt-2.5 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
              Matthew 18:20
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
