import { Instagram, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[color:var(--color-charcoal)] text-[color:var(--color-ivory)]">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-serif text-2xl">IPC Hebron Manjanikara</p>
            <p className="mt-3 text-sm text-ivory/65 leading-relaxed">
              Est. 1971 · Manjanikara, Pathanamthitta, Kerala
            </p>
            <p className="mt-4 font-mal text-gold/90 text-sm">
              ദൈവ മഹത്വത്തിനായി
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { href: "#about", label: "About" },
                { href: "#services", label: "Service Times" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-ivory/75 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Follow</p>
            <p className="mt-4 text-xs text-ivory/55">Coming soon</p>
            <div className="mt-3 flex gap-3">
              <span className="p-2.5 border border-ivory/15 text-ivory/35 rounded-sm cursor-not-allowed">
                <Instagram size={16} />
              </span>
              <span className="p-2.5 border border-ivory/15 text-ivory/35 rounded-sm cursor-not-allowed">
                <Youtube size={16} />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-ivory/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} IPC Hebron Manjanikara. All rights reserved.</p>
          <p className="italic">Soli Deo Gloria</p>
        </div>
      </div>
    </footer>
  );
}
