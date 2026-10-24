import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, AlertTriangle, Sparkles, Search, Star } from "lucide-react";
import { SectionHead, SpotCard, BrandButton } from "./ui";
import { CASE_STUDIES, ESTIMATOR_ANCHOR, type CaseStudy } from "@/lib/case-studies";
import { PROJECT_IMAGES } from "@/lib/project-images";

function AgroDemo() {
  const [alert, setAlert] = useState(false);
  const moisture = alert ? 34 : 72;
  return (
    <div className="rounded-2xl bg-background/70 p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">Live system sandbox</p>
      <div className="mt-3 flex items-baseline justify-between font-mono text-xs"><span className="text-muted-foreground">Soil moisture · Plot 7</span><span className={alert ? "text-danger" : "text-success"}>{moisture}%</span></div>
      <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted"><motion.div animate={{ width: `${moisture}%` }} transition={{ type: "spring", stiffness: 60 }} className={`h-full rounded-full ${alert ? "bg-danger" : "bg-brand"}`} /></div>
      <AnimatePresence>
        {alert && (
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-3 space-y-2">
            <div className="flex items-center gap-2 rounded-xl border border-danger/50 bg-danger/10 px-3 py-2 text-sm"><AlertTriangle className="h-4 w-4 animate-pulse text-danger" />Drought risk detected on Plot 7</div>
            <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px]"><Sparkles className="h-3 w-3 text-cyan" />AI: irrigate within 6h · 92% confidence</span>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setAlert(!alert)} className="mt-4 w-full rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground active:scale-95">{alert ? "Reset sensors" : "Simulate Drought Sensor Alert"}</button>
    </div>
  );
}

const WARDS = { All: { used: 86, total: 120 }, Emergency: { used: 22, total: 24 }, Outpatient: { used: 41, total: 60 }, Maternity: { used: 23, total: 36 } };
function MedDemo() {
  const [f, setF] = useState<keyof typeof WARDS>("All");
  const [q, setQ] = useState("");
  const w = WARDS[f];
  const patients = ["Amina Bello", "Nura Ahmad", "Soulaym A", "Musa Ibrahim", "Ada Sanusi"].filter((p) => p.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="rounded-2xl bg-background/70 p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">Patient queue simulator</p>
      <div className="mt-3 flex flex-wrap gap-2">{(Object.keys(WARDS) as (keyof typeof WARDS)[]).map((k) => <button key={k} onClick={() => setF(k)} className={`rounded-full px-3 py-1 font-mono text-[11px] ${f === k ? "bg-brand text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{k}</button>)}</div>
      <div className="mt-3 flex items-end justify-between"><span className="font-mono text-xs text-muted-foreground">Bed occupancy</span><motion.span key={f} initial={{ scale: 1.3, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-gradient text-3xl font-extrabold">{w.used}/{w.total}</motion.span></div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted"><motion.div animate={{ width: `${(w.used / w.total) * 100}%` }} className="h-full bg-brand" /></div>
      <label className="glass mt-3 flex items-center gap-2 rounded-xl px-3 py-2"><Search className="h-4 w-4 text-muted-foreground" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search patients…" className="w-full bg-transparent text-sm outline-none" /></label>
      <ul className="mt-2 space-y-1 font-mono text-xs">{patients.map((p) => <li key={p} className="flex justify-between rounded-lg bg-accent px-3 py-1.5"><span>{p}</span><span className="text-cyan">{f}</span></li>)}{!patients.length && <li className="text-muted-foreground">No match</li>}</ul>
    </div>
  );
}

const STACKS = ["React", "Python", "Rust", "Go"];
function DevDemo() {
  const [u, setU] = useState("");
  const [s, setS] = useState("React");
  const [card, setCard] = useState<{ u: string; s: string } | null>(null);
  return (
    <div className="rounded-2xl bg-background/70 p-4">
      <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">Instant portfolio builder</p>
      <input value={u} onChange={(e) => setU(e.target.value.replace(/\s/g, ""))} placeholder="github username" className="glass mt-3 w-full rounded-xl px-3 py-2 font-mono text-sm outline-none" />
      <div className="mt-2 flex flex-wrap gap-2">{STACKS.map((k) => <button key={k} onClick={() => setS(k)} className={`rounded-full px-3 py-1 font-mono text-[11px] ${s === k ? "bg-brand text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{k}</button>)}</div>
      <button disabled={!u} onClick={() => setCard({ u, s })} className="mt-3 w-full rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-primary-foreground disabled:opacity-40">Compile Preview</button>
      <AnimatePresence mode="wait">
        {card && (
          <motion.div key={card.u + card.s} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="glass glow mt-3 rounded-2xl p-4">
            <div className="flex items-center gap-3"><div className="bg-brand grid h-10 w-10 place-items-center rounded-full font-bold text-primary-foreground">{card.u[0]?.toUpperCase()}</div><div><p className="font-bold">@{card.u}</p><p className="font-mono text-[10px] text-muted-foreground">{card.s} engineer · devforge.site/{card.u}</p></div></div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center font-mono text-[10px]">{[["42", "repos"], ["1.2k", "stars"], ["0.4s", "load"]].map(([a, b]) => <div key={b} className="rounded-lg bg-accent py-2"><div className="text-sm font-bold text-cyan">{a}</div>{b}</div>)}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const DEMOS: Record<string, () => React.JSX.Element> = { "agropulse-ai": AgroDemo, "medcore-hms": MedDemo, "devforge-studio": DevDemo };

function Modal({ c, close }: { c: CaseStudy; close: () => void }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", k);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; };
  }, [close]);
  const Demo = DEMOS[c.slug];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} className="fixed inset-0 z-[60] grid place-items-center bg-background/80 p-4 backdrop-blur-md">
      <motion.div role="dialog" aria-modal="true" aria-label={c.name} initial={{ y: 30, scale: 0.96 }} animate={{ y: 0, scale: 1 }} exit={{ y: 30, opacity: 0 }} onClick={(e) => e.stopPropagation()} className="glass relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl p-6 sm:p-8">
        <button aria-label="Close" onClick={close} className="glass absolute top-4 right-4 rounded-full p-2"><X className="h-4 w-4" /></button>
        {PROJECT_IMAGES[c.slug] && <img src={PROJECT_IMAGES[c.slug]} alt={`${c.name} project screenshot`} className="mb-5 h-48 w-full rounded-2xl object-cover sm:h-60" />}
        <p className="font-mono text-[10px] uppercase tracking-widest text-cyan">{c.category}</p>
        <h3 className="mt-2 text-3xl font-extrabold">{c.name} <span className="text-gradient">· {c.metric}</span></h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-5 text-sm">
            <div><h4 className="font-mono text-xs uppercase tracking-widest text-violet">The Challenge</h4><p className="mt-2 text-muted-foreground">{c.challenge}</p></div>
            <div><h4 className="font-mono text-xs uppercase tracking-widest text-blue">The Architecture</h4><p className="mt-2 text-muted-foreground">{c.architecture}</p></div>
            <div className="flex flex-wrap gap-1.5">{c.stack.map((s) => <span key={s} className="rounded-full bg-accent px-2.5 py-1 font-mono text-[10px]">{s}</span>)}</div>
            <ul className="space-y-1">{c.results.map((r) => <li key={r} className="flex gap-2"><span className="text-success">✓</span>{r}</li>)}</ul>
          </div>
          <div>{Demo && <Demo />}</div>
        </div>
        <div className="mt-6"><BrandButton href={`#${ESTIMATOR_ANCHOR}`} onClick={close}>Build Something Similar <ArrowRight className="h-4 w-4" /></BrandButton></div>
      </motion.div>
    </motion.div>
  );
}

const QUOTES = [
  { q: "NexusCraft rebuilt our platform in weeks. Our sales doubled in the first quarter.", a: "Founder, retail brand" },
  { q: "The branding work was beyond what we imagined. Every detail was considered.", a: "CEO, creative agency" },
];

export function Work() {
  const [open, setOpen] = useState<CaseStudy | null>(null);
  return (
    <section id="work" className="mx-auto max-w-7xl px-5 py-24">
      <SectionHead kicker="Selected work" title={<>Results that <span className="text-gradient">speak.</span></>} sub="Tap a project to open the case study and try its live demo." />
      <div className="grid gap-5 md:grid-cols-3">
        {CASE_STUDIES.map((c, i) => (
          <SpotCard key={c.slug} className="group cursor-pointer overflow-hidden p-0 hover:-translate-y-1" onClick={() => setOpen(c)}>
            <div className="dot-grid relative h-44 overflow-hidden rounded-t-3xl">
              {PROJECT_IMAGES[c.slug] ? (
                <img src={PROJECT_IMAGES[c.slug]} alt={`${c.name} project screenshot`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <>
                  <div className="bg-brand absolute inset-0 opacity-20 transition-opacity group-hover:opacity-40" style={{ filter: `hue-rotate(${i * 40}deg)` }} />
                  <div className="absolute inset-0 grid place-items-center text-2xl font-extrabold">{c.name}</div>
                </>
              )}
            </div>
            <div className="p-6">
              <p className="font-mono text-[11px] text-muted-foreground">{c.category}</p>
              <p className="mt-1 text-lg font-bold text-gradient">{c.metric}</p>
              <p className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-cyan">Open case study <ArrowRight className="h-3 w-3" /></p>
            </div>
          </SpotCard>
        ))}
      </div>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {QUOTES.map((q) => (
          <SpotCard key={q.a}>
            <div className="flex gap-0.5 text-cyan">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
            <p className="mt-3 text-lg">"{q.q}"</p>
            <p className="mt-3 font-mono text-xs text-muted-foreground">— {q.a}</p>
          </SpotCard>
        ))}
      </div>
      <AnimatePresence>{open && <Modal c={open} close={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
