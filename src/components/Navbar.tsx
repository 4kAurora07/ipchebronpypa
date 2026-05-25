import React, { useEffect, useRef, useState } from "react";
import pypaLogo from "@/assets/pypa-logo.png";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#connect", label: "Connect" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track header height so dropdown sits flush below it
  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [scrolled, open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: "smooth" }), 300);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          open || scrolled
            ? "bg-[#F7F4EE]/98 backdrop-blur-md border-b border-black/10 py-3.5"
            : "bg-gradient-to-b from-[#1F1B17]/60 via-[#1F1B17]/25 to-transparent py-5 md:py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#top"
            onClick={(e) => handleScrollTo(e, "#top")}
            className="flex items-center gap-3"
          >
            <img
              src={pypaLogo}
              alt="PYPA Logo"
              className={`w-9 h-9 md:w-11 md:h-11 object-contain transition-all duration-300 ${
                scrolled || open ? "drop-shadow-none" : "drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
              }`}
            />
            <span className={`flex flex-col items-start gap-0.5 ${scrolled || open ? "" : "[text-shadow:0_1px_14px_rgba(0,0,0,0.5)]"}`}>
              <span className={`font-serif text-lg md:text-xl tracking-wide font-medium transition-colors duration-300 ${scrolled || open ? "text-[#111111]" : "text-white"}`}>
                IPC Hebron
              </span>
              <span className={`text-[11px] md:text-[12px] tracking-[0.25em] uppercase transition-colors duration-300 ${scrolled || open ? "text-[#111111]" : "text-white"}`}>
                PYPA
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`nav-link font-medium ${
                  scrolled ? "" : "!text-white [text-shadow:0_1px_12px_rgba(0,0,0,0.5)] hover:!text-[#B89B5E]"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            type="button"
            aria-label={open ? "Close Menu" : "Open Menu"}
            aria-expanded={open}
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-full hover:bg-black/8 active:scale-95 transition-all duration-200 cursor-pointer"
            onClick={() => setOpen((p) => !p)}
          >
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 origin-center ${scrolled || open ? "bg-[#1F1B17]" : "bg-white"} ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 ${scrolled || open ? "bg-[#1F1B17]" : "bg-white"} ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full transition-all duration-300 origin-center ${scrolled || open ? "bg-[#1F1B17]" : "bg-white"} ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile dropdown — rendered outside header, positioned below it */}
      <div
        className={`fixed left-0 right-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{ top: headerHeight }}
      >
        {/* Sliding panel */}
        <div
          className={`bg-[#F7F4EE] shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col">
            {links.map((l, i) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleScrollTo(e, l.href)}
                className={`flex items-center justify-between px-6 py-4 font-serif text-lg text-[#1F1B17] border-b border-black/6 last:border-b-0 hover:text-[#B89B5E] hover:bg-[#f0ece3] active:bg-[#e8e3d8] transition-all duration-200 ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: open ? `${i * 60 + 100}ms` : "0ms",
                  transitionProperty: "transform, opacity, color, background-color",
                }}
              >
                {l.label}
                <svg className="w-4 h-4 text-[#B89B5E] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
            <div className="px-6 py-3 flex justify-center border-t border-black/6">
              <p className="font-mal text-xs text-[#B89B5E]/70 tracking-wide">
                വിശ്വാസത്തിലും പ്രാർത്ഥനയിലും ഒന്നായി
              </p>
            </div>
          </nav>
        </div>

        {/* Dim backdrop — tap to close */}
        <div
          className={`h-screen bg-black/30 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setOpen(false)}
        />
      </div>
    </>
  );
}