export function WaterBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-lavender/40 blur-3xl animate-glow" />
      <div className="absolute top-1/3 -right-32 h-[480px] w-[480px] rounded-full bg-aqua/30 blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-lavender-soft/60 blur-3xl animate-glow" style={{ animationDelay: "3s" }} />

      {/* IoT circuit grid */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 40 H30 M50 40 H80 M40 0 V30 M40 50 V80" stroke="currentColor" strokeWidth="0.6" fill="none" />
            <circle cx="40" cy="40" r="2.5" fill="currentColor" />
            <circle cx="0" cy="40" r="1.2" fill="currentColor" />
            <circle cx="80" cy="40" r="1.2" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" className="text-deep-blue" />
      </svg>

      {/* Bubbles */}
      {Array.from({ length: 14 }).map((_, i) => {
        const size = 8 + Math.random() * 28;
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 10 + Math.random() * 10;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-white/80 to-aqua/30 backdrop-blur-sm border border-white/50"
            style={{
              width: size, height: size, left: `${left}%`, bottom: `-${size}px`,
              animation: `bubble ${duration}s linear ${delay}s infinite`,
            }}
          />
        );
      })}

      {/* Animated wave bottom */}
      <svg className="absolute bottom-0 left-0 w-[200%] h-40 animate-wave" viewBox="0 0 1440 200" preserveAspectRatio="none">
        <path d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z" fill="url(#wg1)" opacity="0.35" />
        <defs>
          <linearGradient id="wg1" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.12 295)" />
            <stop offset="100%" stopColor="oklch(0.82 0.16 185)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
