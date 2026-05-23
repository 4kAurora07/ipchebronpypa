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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--color-ivory)]/90 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-gradient-to-b from-[color:var(--color-charcoal)]/55 to-transparent py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          className={`flex items-baseline gap-3 ${
            scrolled ? "" : "[text-shadow:0_1px_14px_rgba(0,0,0,0.6)]"
          }`}
        >
          <span
            className={`font-serif text-lg md:text-xl tracking-wide font-medium ${
              scrolled ? "text-foreground" : "text-[color:var(--color-ivory)]"
            }`}
          >
            IPC Hebron
          </span>
          <span className="hidden sm:inline text-[11px] tracking-[0.3em] uppercase text-gold">
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
                  : "!text-[color:var(--color-ivory)] [text-shadow:0_1px_12px_rgba(0,0,0,0.55)] hover:!text-[color:var(--color-gold)]"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          aria-label="Menu"
          className={`md:hidden p-2 ${
            scrolled ? "text-foreground" : "text-[color:var(--color-ivory)]"
          }`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[color:var(--color-ivory)] border-t border-border mt-3">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
