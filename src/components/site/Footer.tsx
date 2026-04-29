import logo from "@/assets/ternion-logo.png";

export function Footer() {
  return (
    <footer id="contact" className="relative mt-20 bg-gradient-deep text-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-lavender/40 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-aqua/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 pt-20 pb-10">
        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Ternion" width={48} height={48} className="h-10 w-10 object-contain" loading="lazy" />
              <span className="font-display text-xl font-semibold">Ternion</span>
            </div>
            <p className="mt-4 text-white/70 text-sm leading-relaxed">Innovating Water. Sustaining Life.</p>
            <div className="mt-6 flex gap-3">
              {["M22 5.8c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.4 1.8-2.4-.8.5-1.7.8-2.7 1A4.2 4.2 0 0011.5 9c0 .3 0 .7.1 1A12 12 0 013 4.8a4.2 4.2 0 001.3 5.6c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.5 3.7 3.4 4.1-.4.1-.8.2-1.2.2l-.9-.1a4.2 4.2 0 003.9 2.9 8.4 8.4 0 01-6.2 1.7A12 12 0 008 21c8 0 12.4-6.7 12.4-12.4v-.6c.9-.6 1.6-1.4 2.2-2.2z", "M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.6-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5C19.1 20.2 22 16.4 22 12c0-5.5-4.5-10-10-10z"].map((d, i) => (
                <a key={i} href="#" aria-label="social" className="h-10 w-10 rounded-full glass-dark flex items-center justify-center hover:bg-aqua/20 transition">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d={d}/></svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-aqua text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {["Solutions", "Technology", "RO Systems", "Impact"].map((l) => (
                <li key={l}><a href={`#${l.toLowerCase().replace(" ","")}`} className="hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-aqua text-sm tracking-wider uppercase">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>hello@ternion.water</li>
              <li>+1 (555) 010-2026</li>
              <li>HQ · Singapore · Bengaluru</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-aqua text-sm tracking-wider uppercase">Stay informed</h4>
            <p className="mt-5 text-sm text-white/70">Get product news & sustainability reports.</p>
            <form className="mt-4 flex gap-2 glass-dark rounded-full p-1.5" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="you@email.com" className="flex-1 bg-transparent px-4 py-2 text-sm placeholder:text-white/40 focus:outline-none text-white" />
              <button className="rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-deep-blue">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 Ternion Water Tech. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
