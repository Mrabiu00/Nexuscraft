import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { BrandButton } from "./ui";

export function Orbit() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  return (
    <motion.div
      className="nc-orbit relative mx-auto w-full max-w-[540px]"
      onHoverStart={() => setActive(true)}
      onHoverEnd={() => setActive(false)}
      onTouchStart={() => setActive((value) => !value)}
      aria-label="NexusCraft illuminated N orbital visual"
    >
      <div className="orbit-founder glass absolute z-20 flex items-center gap-3 rounded-lg px-3 py-2.5">
        <span className="relative flex shrink-0 items-center" aria-hidden="true"><span className="orbit-mini-badge grid h-7 w-7 place-items-center rounded-full font-mono text-[9px]">NC</span><span className="orbit-mini-badge -ml-2 grid h-7 w-7 place-items-center rounded-full text-cyan">✦</span></span>
        <p className="max-w-[174px] text-[11px] leading-relaxed">Designing the next <span className="block text-muted-foreground">for founders who think further</span></p>
      </div>
      <div className="absolute inset-0 grid place-items-center" aria-hidden="true">
        <svg viewBox="0 0 540 500" className="h-full w-full overflow-visible">
          <defs>
            <linearGradient id="nc-orbit-gradient"><stop stopColor="var(--violet)" /><stop offset="0.5" stopColor="var(--cyan)" /><stop offset="1" stopColor="var(--violet)" /></linearGradient>
          </defs>
          {[{ rotate: -54, duration: 26, ry: 91 }, { rotate: 32, duration: 32, ry: 84 }, { rotate: -12, duration: 38, ry: 119 }].map((ring, index) => (
            <g key={ring.rotate} transform={`rotate(${ring.rotate} 270 250)`}>
              <motion.ellipse cx="270" cy="250" rx="202" ry={ring.ry} fill="none" stroke="url(#nc-orbit-gradient)" strokeWidth={active ? 1.8 : 1.1} className="orbit-path" animate={reduce ? { opacity: 1 } : { opacity: [0.55, 1, 0.55] }} transition={{ duration: reduce ? 0 : 5 + index, repeat: reduce ? 0 : Infinity }} />
              <motion.ellipse cx="270" cy="250" rx="202" ry={ring.ry} fill="none" stroke={index === 1 ? "var(--cyan)" : "var(--violet)"} strokeWidth="3" strokeLinecap="round" pathLength="1" strokeDasharray="0.012 0.988" className="orbit-path" animate={reduce ? { strokeDashoffset: 0 } : { strokeDashoffset: [0, index === 1 ? 1 : -1] }} transition={{ duration: reduce ? 0 : active ? ring.duration / 2 : ring.duration, repeat: reduce ? 0 : Infinity, ease: "linear" }} />
            </g>
          ))}
        </svg>
        <motion.div className="orbit-core grid h-[112px] w-[112px] place-items-center rounded-full sm:h-[132px] sm:w-[132px]" animate={reduce ? { scale: 1 } : { scale: active ? 1.08 : [1, 1.04, 1] }} transition={{ duration: reduce ? 0 : active ? 0.4 : 5, repeat: reduce || active ? 0 : Infinity }}>
          <span className="orbit-letter text-6xl font-extrabold sm:text-7xl">N</span>
        </motion.div>
      </div>
      <div className="orbit-status glass absolute z-20 flex items-center gap-2 rounded-lg px-3 py-3 font-mono text-[9px] tracking-widest sm:text-[10px]">
        <span className="online-dot h-1.5 w-1.5 shrink-0 rounded-full bg-success" aria-hidden="true" />
        <span>SYSTEMS ONLINE <span className="mt-1 block text-cyan">99.98%</span></span>
      </div>
      <div className="orbit-momentum absolute z-20"><BrandButton href="#work" variant="glass"><span className="font-mono text-[10px] text-muted-foreground">01</span><span className="text-xs">Crafted for momentum.</span><ArrowRight className="h-4 w-4 text-cyan" /></BrandButton></div>
      <p className="orbit-watermark absolute text-right font-mono text-[8px] leading-5 tracking-widest text-muted-foreground"><span className="text-cyan">◇</span> 35°41'N 139°41'E<br />BUILD / 2026 — ∞</p>
    </motion.div>
  );
}