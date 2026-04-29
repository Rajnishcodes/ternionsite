import { useEffect, useState } from "react";
import { WaterBackground } from "./WaterBackground";
import roSystem from "@/assets/ro-system.png";
import logo from "@/assets/ternion-logo.png";

export function Hero() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const onScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const parallax = Math.min(y * 0.25, 120);
  const fade = Math.max(1 - y / 600, 0);

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-24 overflow-hidden bg-gradient-hero">
      <WaterBackground />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="relative z-10" style={{ opacity: fade, transform: `translateY(${y * 0.1}px)` }}>
          <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-medium text-deep-blue animate-fade-up">
            <span className="h-2 w-2 rounded-full bg-aqua animate-glow" />
            Smart Water Technology · 2026
          </span>

          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-deep-blue animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Revolutionizing Water with{" "}
            <span className="text-gradient">Smart RO Systems</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-deep-blue/70 leading-relaxed animate-fade-up" style={{ animationDelay: "0.25s", opacity: 0, animationFillMode: "forwards" }}>
            Advanced reverse osmosis solutions powered by intelligent technology to deliver clean, safe, and sustainable water — anywhere in the world.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            <a href="#solutions" className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-deep-blue shadow-glow hover:shadow-aqua transition-all hover:-translate-y-0.5">
              Explore Solutions
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a href="#ro" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-deep-blue hover:bg-white/80 transition-all">
              View RO Systems
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { v: "99.9%", l: "Purity" },
              { v: "5-Stage", l: "Filtration" },
              { v: "IoT", l: "Smart Sensors" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4">
                <div className="font-display text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-deep-blue/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[520px] lg:h-[640px]" style={{ transform: `translateY(${-parallax}px)` }}>
          {/* Glow ring */}
          <div className="absolute inset-0 m-auto h-[420px] w-[420px] rounded-full bg-gradient-brand opacity-30 blur-3xl animate-glow" />
          <div className="absolute inset-0 m-auto h-[300px] w-[300px] rounded-full border border-lavender/40 animate-spin-slow" />
          <div className="absolute inset-0 m-auto h-[400px] w-[400px] rounded-full border border-aqua/30 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "40s" }} />

          {/* RO Image */}
          <div className="absolute inset-0 flex items-center justify-center animate-float-slow">
            <img
              src={roSystem}
              alt="Ternion smart RO water purification system"
              width={1024}
              height={1280}
              className="relative z-10 h-full w-auto max-h-[600px] object-contain drop-shadow-[0_30px_60px_rgba(15,42,90,0.35)]"
            />
          </div>

          {/* Floating logo badge */}
          <div className="absolute top-6 right-6 glass rounded-2xl p-4 shadow-glow animate-float" style={{ opacity: fade }}>
            <img src={logo} alt="Ternion" width={48} height={48} className="h-12 w-12 object-contain" />
          </div>

          {/* Floating stat cards */}
          <div className="absolute bottom-12 left-0 glass rounded-2xl px-4 py-3 shadow-aqua animate-float" style={{ animationDelay: "1s" }}>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-brand flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2v6m0 0l-3-3m3 3l3-3M5 13a7 7 0 1014 0c0-2-1-4-3-6l-4-5-4 5c-2 2-3 4-3 6z"/></svg>
              </div>
              <div>
                <div className="text-xs text-deep-blue/60">Live TDS</div>
                <div className="font-display font-bold text-deep-blue">12 ppm</div>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 right-0 glass rounded-2xl px-4 py-3 animate-float" style={{ animationDelay: "2s" }}>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-aqua animate-glow" />
              <div>
                <div className="text-xs text-deep-blue/60">System</div>
                <div className="font-display font-bold text-deep-blue text-sm">Optimal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
