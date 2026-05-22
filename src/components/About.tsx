import aboutImg from "@/assets/about-interior.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
          <div>
            <p className="eyebrow">സ്വാഗതം · Welcome</p>
            <span className="mt-5 block gold-divider"></span>
            <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
              A congregation rooted in faith,
              <span className="italic text-gold"> worship, and community.</span>
            </h2>

            <div className="mt-8 space-y-5 text-foreground/80 leading-relaxed">
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
              <p className="font-mal text-foreground/75 italic">
                പ്രാർത്ഥനയും സഹവാസവും — ദൈവകൃപയിൽ വളരുന്ന കുടുംബം.
              </p>
            </div>

            <blockquote className="mt-10 pl-6 border-l-2 border-gold/70">
              <p className="font-serif italic text-xl md:text-2xl leading-snug text-foreground/90">
                &ldquo;Where two or three gather in my name, there am I with
                them.&rdquo;
              </p>
              <footer className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Matthew 18:20
              </footer>
            </blockquote>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_80px_-30px_rgba(31,27,23,0.35)]">
              <img
                src={aboutImg}
                alt="Open Bible by warm window light"
                width={1400}
                height={1750}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block bg-[color:var(--color-cream)] border border-border px-6 py-5 max-w-xs">
              <p className="eyebrow">Since 1971</p>
              <p className="mt-2 font-serif text-lg leading-snug">
                Five decades of worship in Manjanikara.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
