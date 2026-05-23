const services = [
  { day: "Sunday", name: "Sunday School", time: "8:30 – 9:15 AM", note: "" },
  { day: "Sunday", name: "Worship Service", time: "9:30 AM – 12:30 PM", note: "Main Service" },
  { day: "Sunday", name: "PYPA Meeting", time: "12:00 – 12:30 PM", note: "Alternate weeks" },
  { day: "Tuesday", name: "Cell Prayer Meeting", time: "6:30 – 8:00 PM", note: "At members' homes" },
  { day: "Wednesday", name: "Ladies Meeting", time: "10:30 AM – 12:30 PM", note: "" },
  { day: "Friday", name: "Fasting Prayer", time: "10:30 AM – 12:30 PM", note: "" },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-36 bg-[color:var(--color-cream)]">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Weekly Gatherings</p>
          <div className="mt-4 flex justify-center"><span className="gold-divider"></span></div>
          <h2 className="mt-5 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight">
            Come and worship <span className="italic text-gold">with us</span>
          </h2>
          <p className="mt-4 font-mal text-foreground/75 text-sm md:text-base">എല്ലാവർക്കും സ്വാഗതം</p>
        </div>

        <div className="mt-12 md:mt-16 bg-[color:var(--color-ivory)] border border-border/80 rounded-sm shadow-[0_20px_50px_-30px_rgba(31,27,23,0.15)] md:shadow-[0_30px_80px_-40px_rgba(31,27,23,0.25)]">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group grid grid-cols-12 items-center gap-3.5 px-5 md:px-10 py-5 md:py-7 transition-colors hover:bg-[color:var(--color-cream)]/50 ${
                i !== 0 ? "border-t border-border/70" : ""
              }`}
            >
              <div className="col-span-12 md:col-span-3">
                <div className="eyebrow text-gold text-[10px] md:text-xs">{s.day}</div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="font-serif text-xl md:text-2xl leading-snug">
                  {s.name}
                </h3>
                {s.note && (
                  <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                )}
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <span className="font-serif text-base md:text-lg text-foreground/85">
                  {s.time}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          First-time visitor? Reach out to us — we&rsquo;d love to welcome you in person.
        </p>
      </div>
    </section>
  );
}
