import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket, GripVertical } from "lucide-react";
import { SectionHead, SpotCard } from "./ui";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const update = (x: number) => {
    const r = ref.current!.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((x - r.left) / r.width) * 100)));
  };
  return (
    <section id="lab" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead kicker="Interactive lab" title={<>Drag to see the <span className="text-gradient">transformation</span></>} sub="From slow and cluttered to fast and focused." />
      <div
        ref={ref}
        onPointerDown={(e) => { (e.target as HTMLElement).setPointerCapture(e.pointerId); update(e.clientX); }}
        onPointerMove={(e) => e.buttons && update(e.clientX)}
        className="glass relative aspect-[4/5] touch-none select-none overflow-hidden rounded-3xl sm:aspect-[16/9]"
      >
        {/* After */}
        <div className="dot-grid absolute inset-0 bg-background p-6 sm:p-10">
          <div className="flex items-center justify-between"><span className="font-bold">Acme<span className="text-gradient">.</span></span><span className="bg-brand rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground">Get started</span></div>
          <div className="mt-10 max-w-md sm:mt-16 sm:ml-auto sm:text-right">
            <div className="text-3xl font-extrabold sm:text-5xl">Built for <span className="text-gradient">speed.</span></div>
            <p className="mt-3 text-sm text-muted-foreground">Clean, focused, converting.</p>
          </div>
          <div className="absolute right-6 bottom-6 grid gap-2 font-mono text-xs sm:right-10 sm:bottom-10">
            <span className="glass rounded-lg px-3 py-2">Load Time: <span className="text-success">0.4s</span></span>
            <span className="glass rounded-lg px-3 py-2">Conversion: <span className="text-success">+240%</span></span>
            <span className="glass rounded-lg px-3 py-2">Lighthouse: <span className="text-success">100</span></span>
          </div>
        </div>
        {/* Before */}
        <div className="absolute inset-0 bg-muted p-6 sm:p-10" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <div className="flex flex-wrap gap-1 font-serif text-xs text-muted-foreground">{["HOME", "ABOUT US", "SERVICES", "PRODUCTS", "NEWS", "GALLERY", "CONTACT", "FAQ"].map((n) => <span key={n} className="border border-muted-foreground/40 px-1.5 py-0.5 underline">{n}</span>)}</div>
          <div className="mt-6 font-serif text-2xl text-danger sm:text-4xl">WELCOME TO OUR WEBSITE!!!</div>
          <div className="mt-3 grid max-w-sm grid-cols-3 gap-1">{Array.from({ length: 9 }).map((_, i) => <div key={i} className="h-10 animate-pulse bg-muted-foreground/30" />)}</div>
          <p className="mt-3 max-w-xs font-serif text-[10px] text-muted-foreground">Lorem ipsum dolor sit amet click here click here for more info about our many many services...</p>
          <div className="absolute bottom-6 left-6 grid gap-2 font-mono text-xs sm:bottom-10 sm:left-10">
            <span className="rounded-lg bg-background/60 px-3 py-2">Load Time: <span className="text-danger">4.8s</span></span>
            <span className="rounded-lg bg-background/60 px-3 py-2">Bounce: <span className="text-danger">78%</span></span>
          </div>
        </div>
        <div className="absolute inset-y-0 w-0.5 bg-brand" style={{ left: `${pos}%` }}>
          <div className="bg-brand glow absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-primary-foreground"><GripVertical className="h-5 w-5" /></div>
        </div>
        <span className="absolute top-3 left-3 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px]">BEFORE</span>
        <span className="absolute top-3 right-3 rounded-full bg-background/70 px-3 py-1 font-mono text-[10px]">NEXUSCRAFT</span>
      </div>
    </section>
  );
}

const STEPS = [
  { icon: Lightbulb, t: "Ideas", d: "Discovery call, goals, audience and scope — we turn your vision into a clear plan." },
  { icon: PenTool, t: "Designs", d: "Wireframes, brand systems and pixel-perfect interfaces you approve before we build." },
  { icon: Code2, t: "Build", d: "Full-stack engineering with weekly demos, so you see progress every step." },
  { icon: Rocket, t: "Digital Solutions", d: "Launch, monitoring and scaling — we stay with you as you grow." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const h = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section id="process" className="mx-auto max-w-4xl px-5 py-24">
      <SectionHead kicker="How we work" title={<>Ideas <span className="text-violet">➔</span> Designs <span className="text-blue">➔</span> <span className="text-gradient">Solutions</span></>} />
      <div ref={ref} className="relative pl-14">
        <div className="absolute top-0 bottom-0 left-5 w-0.5 bg-muted" />
        <motion.div style={{ height: h }} className="bg-brand glow absolute top-0 left-5 w-0.5" />
        {STEPS.map((s, i) => (
          <motion.div key={s.t} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative mb-10 last:mb-0">
            <div className="bg-brand glow absolute top-4 -left-[3.25rem] grid h-10 w-10 place-items-center rounded-full text-primary-foreground"><s.icon className="h-5 w-5" /></div>
            <SpotCard>
              <span className="font-mono text-xs text-cyan">0{i + 1}</span>
              <h3 className="mt-1 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </SpotCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

