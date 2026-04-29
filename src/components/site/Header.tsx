import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/ternion-logo.png";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technology", href: "#technology" },
  { label: "RO Systems", href: "#ro" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className={`mx-auto max-w-7xl px-4 md:px-6`}>
        <div className={`glass rounded-2xl flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-500 ${scrolled ? "shadow-elegant" : ""}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="Ternion" width={40} height={40} className="h-9 w-9 object-contain transition-transform group-hover:scale-110" />
            <span className="font-display text-lg font-semibold tracking-tight text-deep-blue">Ternion</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <a key={n.label} href={n.href} className="text-sm font-medium text-deep-blue/80 hover:text-deep-blue relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-brand after:transition-all hover:after:w-full">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-deep-blue shadow-glow hover:shadow-aqua transition-all hover:-translate-y-0.5">
              Get Started
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Menu" className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full glass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={open ? "M6 6l12 12M6 18L18 6" : "M4 7h16M4 12h16M4 17h16"} /></svg>
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 flex flex-col gap-2">
            {nav.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg hover:bg-lavender/30 text-deep-blue text-sm font-medium">{n.label}</a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
