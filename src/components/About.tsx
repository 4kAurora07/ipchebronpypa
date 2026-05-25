
export function About() {
  return (
    <section id="about" className="relative py-20 md:py-36 bg-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <p className="eyebrow">സ്വാഗതം · Welcome</p>
          <div className="mt-4 flex justify-center"><span className="gold-divider"></span></div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            A church with a big
            <span className="italic text-gold"> heart for God.</span>
          </h2>

          <div className="mt-6 space-y-4 text-foreground/80 text-[15px] sm:text-base leading-relaxed md:mt-8 md:space-y-5">
            <p>
              IPC Hebron started in Manjanikkara back in 1971 with just a
              few families who wanted to worship together. Over fifty years
              later, we're still here, now 61 households, but with the same
              heart for prayer, fellowship, and the Word.
            </p>
            <p>
              Sunday mornings are the heartbeat of the week. We gather for
              Sunday school, worship, and a service that usually runs long
              because nobody's in a hurry to leave. Through the week,
              families meet for cell prayer, the ladies gather on Wednesdays,
              and we fast and pray together every Friday.
            </p>
            <p className="font-mal text-foreground/75 italic mt-4">
              പ്രാർത്ഥനയും സഹവാസവും · ദൈവകൃപയിൽ വളരുന്ന കുടുംബം.
            </p>
          </div>

          <blockquote className="mt-8 md:mt-10 max-w-xl mx-auto border-y border-gold/30 py-6 md:py-8">
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
