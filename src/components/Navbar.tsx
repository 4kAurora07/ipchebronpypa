import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#connect", label: "Connect" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[color:var(--color-ivory)]/92 backdrop-blur-md border-b border-border/50 py-3.5"
            : open
            ? "bg-transparent py-5"
            : "bg-gradient-to-b from-[color:var(--color-charcoal)]/60 via-[color:var(--color-charcoal)]/25 to-transparent py-5 md:py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
          <a
            href="#top"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-2.5 transition-colors duration-300 ${
              scrolled || open ? "" : "[text-shadow:0_1px_14px_rgba(0,0,0,0.5)]"
            }`}
          >
            <span
              className={`font-serif text-lg md:text-xl tracking-wide font-medium transition-colors duration-300 ${
                scrolled || open ? "text-foreground" : "text-[color:var(--color-ivory)]"
              }`}
            >
              IPC Hebron
            </span>
            <span
              className={`text-[9px] md:text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 ${
                scrolled || open ? "text-gold" : "text-gold-soft"
              }`}
            >
              Manjanikara
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link font-medium ${
                  scrolled
                    ? ""
                    : "!text-[color:var(--color-ivory)] [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] hover:!text-[color:var(--color-gold)]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            aria-label={open ? "Close Menu" : "Open Menu"}
            className={`md:hidden p-2 rounded-full transition-all duration-300 hover:bg-black/5 active:scale-95 ${
              scrolled || open ? "text-foreground" : "text-[color:var(--color-ivory)]"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} className="transition-transform duration-300 rotate-90" /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Premium Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-[color:var(--color-ivory)]/98 backdrop-blur-lg flex flex-col justify-center px-8 transition-all duration-500 ease-in-out ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-7 text-center">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-serif text-3xl tracking-wide text-[color:var(--color-charcoal)] hover:text-gold transition-all duration-300 ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                transitionProperty: "transform, opacity",
              }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <div className="mt-8 flex justify-center">
            <span className="gold-divider"></span>
          </div>
          <p className="font-mal text-sm text-gold/80 mt-4 tracking-wide">
            വിശ്വാസത്തിലും പ്രാർത്ഥനയിലും ഒന്നായി
          </p>
        </nav>
      </div>
    </>
  );
}
