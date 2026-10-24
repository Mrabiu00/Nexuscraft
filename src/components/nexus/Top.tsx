import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { Logo, BrandButton } from "./ui";
import { Orbit } from "./Orbit";

export const NAV = [
  { id: "services", label: "Services" },
  { id: "lab", label: "Interactive Lab" },
  { id: "process", label: "Process" },
  { id: "work", label: "Work" },
  { id: "estimator", label: "Estimator" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? "glass border-x-0 border-t-0" : ""}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5">
        <a href="#top" className="min-w-0"><Logo /></a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-xs text-muted-foreground xl:flex">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" /><span className="relative h-2 w-2 rounded-full bg-success" /></span>
            Available for New Projects
          </span>
          <span className="hidden sm:block"><BrandButton href="#estimator">Let's Build <ArrowRight className="h-4 w-4" /></BrandButton></span>
          <button aria-label="Menu" onClick={() => setOpen(!open)} className="glass rounded-full p-2.5 lg:hidden">{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="glass overflow-hidden border-x-0 lg:hidden">
            <div className="flex flex-col gap-1 p-5">
              {NAV.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-base font-medium hover:bg-accent">{n.label}</a>
              ))}
              <div className="mt-3 flex items-center gap-2 px-3 font-mono text-xs text-muted-foreground"><span className="h-2 w-2 rounded-full bg-success" />Available for Q4 Projects</div>
              <div className="mt-3"><BrandButton href="#estimator" onClick={() => setOpen(false)}>Let's Build <ArrowRight className="h-4 w-4" /></BrandButton></div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

const STACK = ["REACT", "NEXT.JS", "TYPESCRIPT", "PYTHON", "NODE.JS", "TAILWIND", "FIGMA", "AI SYSTEMS"];

export function Hero() {
  const words = "Turning Your Digital Vision Into".split(" ");
  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-12 sm:pt-32 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div className="min-w-0 text-center lg:text-left">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="glass glow inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[9px] tracking-widest sm:text-[10px]">
          <Sparkles className="h-3.5 w-3.5 text-cyan" /> IDEAS <span className="text-violet">➔</span> DESIGNS <span className="text-blue">➔</span> DIGITAL SOLUTIONS
        </motion.div>
        <h1 className="hero-headline mt-7 text-4xl leading-[1.12] font-extrabold sm:text-5xl xl:text-6xl">
          {words.map((w, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 30, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.1 + i * 0.07 }} className="inline-block mr-[0.25em]">{w}</motion.span>
          ))}
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="text-gradient shimmer inline-block">High-Performance</motion.span>{" "}
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="inline-block">Reality</motion.span>
        </h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
          Helping businesses and founders build scalable web applications, bold brand identities, and intelligent digital systems through modern software engineering.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <BrandButton href="#estimator">Start a Project <ArrowRight className="h-4 w-4" /></BrandButton>
          <BrandButton href="#lab" variant="glass">Explore Interactive Demo</BrandButton>
        </motion.div>
        <div className="mx-auto mt-9 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-5 font-mono lg:mx-0">
          {[["50+", "Projects shipped"], ["0.4s", "Avg. load time"], ["98%", "Client retention"]].map(([a, b]) => (
            <div key={b}><div className="text-gradient text-2xl font-bold sm:text-3xl">{a}</div><div className="text-[10px] uppercase tracking-wider text-muted-foreground sm:text-xs">{b}</div></div>
          ))}
        </div>
        </div>
        <Orbit />
      </div>
      <div className="tech-strip relative mt-10 w-full overflow-hidden border-y border-border py-4" aria-label={STACK.join(" · ")}>
        <div className="tech-marquee flex w-max" aria-hidden="true">
          {[0, 1].map((copy) => <div key={copy} className="flex shrink-0 items-center">{STACK.map((s) => <span key={s} className="flex shrink-0 items-center gap-6 pr-6 font-mono text-xs tracking-widest text-muted-foreground sm:text-sm"><span>{s}</span><span className="text-cyan">✦</span></span>)}</div>)}
        </div>
      </div>
    </section>
  );
}
