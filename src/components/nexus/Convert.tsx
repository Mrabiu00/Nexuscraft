import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Mail, Check, ArrowRight, Zap } from "lucide-react";
import { SectionHead, SpotCard, Logo, BrandButton, Twitter, Instagram, WhatsApp } from "./ui";
import { NAV } from "./Top";
import { NEEDS, STAGES, TIMELINES, estimateWeeks, roadmap, buildMessage, contactLinks, CONTACT, type Need, type Stage, type Timeline } from "@/lib/estimator";

function Pills<T extends string>({ opts, val, set }: { opts: readonly T[]; val: T | null; set: (v: T) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {opts.map((o) => (
        <button key={o} onClick={() => set(o)} className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all active:scale-95 ${val === o ? "bg-brand glow text-primary-foreground" : "glass hover:bg-accent"}`}>
          {val === o && <Check className="mr-1 inline h-4 w-4" />}{o}
        </button>
      ))}
    </div>
  );
}

export function Estimator() {
  const [n, setN] = useState<Need | null>(null);
  const [s, setS] = useState<Stage | null>(null);
  const [t, setT] = useState<Timeline | null>(null);
  const done = n && s && t;
  const step = !n ? 0 : !s ? 1 : !t ? 2 : 3;
  const links = done ? contactLinks(buildMessage(n, s, t)) : null;
  const est = done ? estimateWeeks(n, s, t) : null;
  return (
    <section id="estimator" className="mx-auto max-w-5xl px-5 py-24">
      <SectionHead kicker="Instant estimator" title={<>Scope your project in <span className="text-gradient">10 seconds</span></>} sub="Pick three options and get a roadmap — then send it to us in one tap." />
      <SpotCard className="p-6 sm:p-10">
        <div className="mb-8 flex gap-2">{[0, 1, 2].map((i) => <div key={i} className={`h-1.5 flex-1 rounded-full transition-all ${step > i ? "bg-brand" : "bg-muted"}`} />)}</div>
        <div className="space-y-8">
          <div><p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">01 · What do you need?</p><Pills opts={NEEDS} val={n} set={setN} /></div>
          <div className={!n ? "pointer-events-none opacity-40" : ""}><p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">02 · Project stage</p><Pills opts={STAGES} val={s} set={setS} /></div>
          <div className={!s ? "pointer-events-none opacity-40" : ""}><p className="mb-3 font-mono text-xs uppercase tracking-widest text-cyan">03 · Timeline preference</p><Pills opts={TIMELINES} val={t} set={setT} /></div>
        </div>
        <AnimatePresence>
          {done && est && links && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-10 rounded-2xl border bg-background/60 p-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div><p className="font-mono text-xs text-muted-foreground">Estimated timeline</p><p className="text-gradient text-4xl font-extrabold">{est.min}–{est.max} weeks</p></div>
                <span className="glass inline-flex items-center gap-1 rounded-full px-3 py-1 font-mono text-xs"><Zap className="h-3 w-3 text-cyan" />{t}</span>
              </div>
              <div className="mt-6">
                <div className="flex h-2 overflow-hidden rounded-full bg-muted">{[0, 1, 2].map((k) => <motion.div key={k} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: k * 0.25, duration: 0.5 }} style={{ originX: 0 }} className="bg-brand mr-0.5 h-full flex-1 last:mr-0" />)}</div>
                <div className="mt-2 flex justify-between font-mono text-[11px] uppercase tracking-widest"><span className="text-violet">Discover</span><span className="text-blue">➔ Design</span><span className="text-cyan">➔ Deploy</span></div>
              </div>
              <ol className="mt-6 grid gap-2 sm:grid-cols-5">
                {roadmap(n).map((r, i) => (
                  <motion.li key={r} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="rounded-xl bg-accent p-3 text-sm"><span className="block font-mono text-[10px] text-cyan">Step {i + 1}</span>{r}</motion.li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-muted-foreground">Send this plan to us — your choices are already filled in:</p>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                <BrandButton href={links.whatsapp}><MessageCircle className="h-4 w-4" />Send on WhatsApp</BrandButton>
                <BrandButton href={links.email} variant="glass"><Mail className="h-4 w-4" />Email</BrandButton>
                <BrandButton href={links.x} variant="glass"><Twitter className="h-4 w-4" /></BrandButton>
                <BrandButton href={links.instagram} variant="glass"><Instagram className="h-4 w-4" />Instagram</BrandButton>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </SpotCard>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 text-center">
      <div className="glass glow relative overflow-hidden rounded-[2rem] px-6 py-16">
        <div className="bg-brand absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full opacity-30 blur-3xl" />
        <h2 className="relative text-3xl font-extrabold sm:text-5xl">Your idea deserves to be <span className="text-gradient shimmer">built right.</span></h2>
        <p className="relative mx-auto mt-4 max-w-lg text-muted-foreground">Limited Q4 slots available. Let's talk this week.</p>
        <div className="relative mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <BrandButton href="#estimator">Start a Project <ArrowRight className="h-4 w-4" /></BrandButton>
          <BrandButton href={`https://wa.me/${CONTACT.whatsapp}`} variant="glass"><MessageCircle className="h-4 w-4" />Chat on WhatsApp</BrandButton>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t px-5 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Logo />
        <p className="font-mono text-xs text-muted-foreground">IDEAS ➔ DESIGNS ➔ DIGITAL SOLUTIONS · © {new Date().getFullYear()} NexusCraft</p>
        <div className="flex gap-3 text-muted-foreground">
          <a href={`https://x.com/${CONTACT.x}`} aria-label="X" className="hover:text-foreground"><Twitter className="h-5 w-5" /></a>
          <a href={`https://instagram.com/${CONTACT.instagram}`} aria-label="Instagram" className="hover:text-foreground"><Instagram className="h-5 w-5" /></a>
          <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="hover:text-foreground"><Mail className="h-5 w-5" /></a>
        </div>
      </div>
    </footer>
  );
}

export function Dock() {
  const msg = "Hi NexusCraft! I have a project idea and would love to chat.";
  const l = contactLinks(msg);
  return (
    <nav aria-label="Contact NexusCraft" className="bubble-dock glass fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full p-2 sm:right-6 sm:bottom-6">
      <BrandButton href={l.whatsapp} target="_blank" variant="glass" label="WhatsApp" className="dock-bubble dock-whatsapp group relative h-12 w-12 p-0"><span className="dock-wave absolute inset-1 rounded-full" aria-hidden="true" /><WhatsApp className="relative h-6 w-6 transition-transform group-hover:rotate-12" /></BrandButton>
      <BrandButton href={l.email} variant="glass" label="Email" className="dock-bubble dock-mail group h-12 w-12 p-0"><Mail className="h-5 w-5 transition-transform group-hover:-rotate-12" /></BrandButton>
    </nav>
  );
}

export function Extras() {
  const [palette, setPalette] = useState(false);
  const [burst, setBurst] = useState(false);
  useEffect(() => {
    let buf = "";
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPalette((p) => !p); return; }
      if (e.key === "Escape") setPalette(false);
      if (e.key.length === 1) {
        buf = (buf + e.key.toLowerCase()).slice(-5);
        if (buf === "nexus") { setBurst(true); setTimeout(() => setBurst(false), 1600); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <>
      <AnimatePresence>
        {palette && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setPalette(false)} className="fixed inset-0 z-[60] grid place-items-start bg-background/70 px-5 pt-32 backdrop-blur-sm">
            <motion.div initial={{ y: -10 }} animate={{ y: 0 }} onClick={(e) => e.stopPropagation()} className="glass mx-auto w-full max-w-md rounded-2xl p-2">
              <p className="px-3 py-2 font-mono text-xs text-muted-foreground">Jump to…</p>
              {NAV.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setPalette(false)} className="block rounded-xl px-3 py-2.5 hover:bg-accent">{n.label}</a>)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {burst && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pointer-events-none fixed inset-0 z-[70] grid place-items-center">
            <motion.div initial={{ scale: 0.2, rotate: -90 }} animate={{ scale: [0.2, 1.4, 1], rotate: 0 }} className="text-center">
              <Logo className="scale-150" />
              <p className="mt-4 font-mono text-xs text-cyan">You found the secret. Let's build something legendary.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-5 left-5 z-40 hidden font-mono text-[10px] text-muted-foreground lg:block"><kbd className="glass rounded px-1.5 py-0.5">⌘K</kbd> quick menu</div>
    </>
  );
}
