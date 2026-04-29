const solutions = [
  { icon: "M3 12l2-2 4 4 8-8 4 4", title: "Residential", desc: "Compact smart RO purifiers for homes with real-time water quality monitoring." },
  { icon: "M3 21h18M5 21V7l7-4 7 4v14M9 9h2M13 9h2M9 13h2M13 13h2", title: "Commercial", desc: "Scalable filtration for offices, restaurants & hotels with enterprise dashboards." },
  { icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", title: "Industrial", desc: "High-volume modular RO plants engineered for manufacturing and utilities." },
  { icon: "M12 22s-8-4.5-8-12a8 8 0 1116 0c0 7.5-8 12-8 12z", title: "Field & Rural", desc: "Portable, off-grid systems bringing safe water to remote communities." },
];

const tech = [
  { step: "01", title: "Sediment Pre-Filter", desc: "Removes dust, rust & visible particles down to 5 microns." },
  { step: "02", title: "Activated Carbon", desc: "Strips chlorine, odors and organic compounds." },
  { step: "03", title: "RO Membrane", desc: "0.0001µm semipermeable membrane — eliminates 99.9% TDS." },
  { step: "04", title: "UV Sterilization", desc: "Inactivates bacteria, viruses & cysts instantly." },
  { step: "05", title: "Mineralizer + IoT", desc: "Re-balances pH, monitors purity in real time via cloud." },
];

const impact = [
  { v: "2.4M+", l: "Liters purified daily" },
  { v: "180+", l: "Smart deployments" },
  { v: "32", l: "Countries served" },
  { v: "98%", l: "Water recovery rate" },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">Solutions</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-deep-blue">Modular water systems for <span className="text-gradient">every scale</span></h2>
          <p className="mt-4 text-deep-blue/70 text-lg">From a single tap to entire facilities — Ternion adapts to where clean water is needed most.</p>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((s, i) => (
            <div key={s.title} className="group glass rounded-3xl p-6 hover:-translate-y-2 hover:shadow-glow transition-all duration-500" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-14 w-14 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon}/></svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-deep-blue">{s.title}</h3>
              <p className="mt-2 text-sm text-deep-blue/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Technology() {
  return (
    <section id="technology" className="relative py-32 overflow-hidden bg-gradient-hero">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-aqua/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">Technology</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-deep-blue">Five stages of <span className="text-gradient">intelligent purification</span></h2>
          <p className="mt-4 text-deep-blue/70">Every drop passes through layered defense — engineered to perfection.</p>
        </div>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender to-transparent" />
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {tech.map((t) => (
              <div key={t.step} className="relative">
                <div className="mx-auto mb-5 relative h-24 w-24 rounded-full glass shadow-glow flex items-center justify-center">
                  <span className="font-display font-bold text-2xl text-gradient">{t.step}</span>
                  <div className="absolute inset-0 rounded-full border border-lavender/40 animate-spin-slow" />
                </div>
                <div className="glass rounded-2xl p-5 text-center">
                  <h3 className="font-display font-semibold text-deep-blue">{t.title}</h3>
                  <p className="mt-2 text-xs text-deep-blue/70 leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ROSystems() {
  return (
    <section id="ro" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[2.5rem] bg-gradient-deep p-10 shadow-elegant relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-lavender/40 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-aqua/40 blur-3xl" />
            </div>
            <div className="relative h-full flex flex-col justify-between text-white">
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-aqua">Flagship</div>
                <h3 className="mt-3 font-display text-4xl font-bold">TRN-Pure 7</h3>
                <p className="mt-3 text-white/70 max-w-sm">Our flagship smart RO system. App-controlled, voice-aware, self-cleaning.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[["Capacity","75 GPD"],["Recovery","98%"],["Stages","7"],["Connectivity","Wi-Fi · BLE"]].map(([k,v]) => (
                  <div key={k} className="glass-dark rounded-xl p-3">
                    <div className="text-[10px] uppercase tracking-wider text-white/50">{k}</div>
                    <div className="mt-1 font-display font-semibold">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">RO Systems</span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-deep-blue">Engineered for <span className="text-gradient">absolute purity</span></h2>
          <p className="mt-4 text-deep-blue/70 text-lg">Every Ternion RO unit is built around a precision-engineered membrane and an intelligent control core that learns your water — and adapts.</p>
          <ul className="mt-8 space-y-4">
            {[
              "Self-diagnosing membrane health",
              "Predictive filter replacement alerts",
              "Mineral re-balancing & pH optimization",
              "App-based usage analytics & remote control",
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 h-6 w-6 rounded-full bg-gradient-brand flex items-center justify-center shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
                </span>
                <span className="text-deep-blue/85">{f}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-deep-blue shadow-glow hover:-translate-y-0.5 transition-all">Request a demo</a>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  return (
    <section id="impact" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="bg-gradient-deep rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden shadow-elegant">
          <div aria-hidden className="absolute inset-0 opacity-40">
            <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-lavender/30 blur-3xl animate-glow" />
            <div className="absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-aqua/30 blur-3xl animate-glow" style={{ animationDelay: "2s" }} />
          </div>
          <div className="relative">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-[0.25em] text-aqua uppercase">Impact</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-white">Sustaining life, one drop at a time</h2>
              <p className="mt-4 text-white/70 text-lg">From villages to skyscrapers, our systems deliver measurable change — quantified, monitored, and continuously improved.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {impact.map((s) => (
                <div key={s.l} className="glass-dark rounded-2xl p-6">
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient">{s.v}</div>
                  <div className="mt-2 text-sm text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
