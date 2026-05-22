import { useState } from "react";
import { MapPin, Phone, ExternalLink } from "lucide-react";

const people = [
  { role: "Pastor", name: "Pr. Shaji Kallissery", phone: "+91 94461 25557" },
  { role: "Church Secretary", name: "Br. Philip George", phone: "+91 88911 43560" },
  { role: "PYPA Secretary", name: "Br. Alwin Anil Zachariah", phone: "+91 97784 42517" },
];

const MAPS = "https://maps.app.goo.gl/hwUhrPBwtAe5jQAu7";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact" className="relative py-24 md:py-36 bg-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto">
          <p className="eyebrow">Get in Touch</p>
          <div className="mt-5 flex justify-center"><span className="gold-divider"></span></div>
          <h2 className="mt-6 font-serif text-4xl md:text-5xl leading-tight">
            We would love to <span className="italic text-gold">hear from you</span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: details */}
          <div className="space-y-8">
            <div className="bg-[color:var(--color-cream)]/60 border border-border/70 p-7">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 shrink-0" size={20} />
                <div>
                  <p className="eyebrow">Visit Us</p>
                  <p className="mt-2 font-serif text-xl">
                    Manjanikara, Pathanamthitta
                  </p>
                  <p className="text-muted-foreground text-sm">Kerala, India</p>
                  <a
                    href={MAPS}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:underline underline-offset-4"
                  >
                    Open in Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {people.map((p) => (
                <a
                  key={p.role}
                  href={`tel:${p.phone.replace(/\s+/g, "")}`}
                  className="group block bg-card border border-border/70 p-6 transition-all hover:border-gold hover:shadow-[0_20px_50px_-30px_rgba(184,155,94,0.5)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="eyebrow">{p.role}</p>
                      <p className="mt-2 font-serif text-lg">{p.name}</p>
                      <p className="mt-1 text-sm text-foreground/80 flex items-center gap-2">
                        <Phone size={13} className="text-gold" />
                        {p.phone}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-card border border-border/70 p-8 md:p-10">
            <h3 className="font-serif text-2xl">Send a message</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We&rsquo;ll respond as soon as we can.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <FormField label="Name" name="name" required />
              <FormField label="Phone" name="phone" type="tel" required />
              <div>
                <label className="block eyebrow mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base resize-none transition-colors"
                />
              </div>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                {sent ? "Thank you" : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block eyebrow mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-base transition-colors"
      />
    </div>
  );
}
