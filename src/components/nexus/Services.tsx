import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Palette, BarChart3, Cloud, Plus } from "lucide-react";
import { SpotCard, SectionHead } from "./ui";

const CODE = `const app = await nexus.build({\n  stack: "react + edge",\n  perf: "blazing",\n});\napp.launch(); // 🚀`;

function CodePreview() {
  const [n, setN] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setN((v) => (v >= CODE.length + 30 ? 0 : v + 1)), 45);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <pre className="min-h-32 rounded-xl bg-background/70 p-4 font-mono text-[11px] leading-relaxed text-cyan whitespace-pre-wrap">{CODE.slice(0, n)}<span className="animate-pulse">▍</span></pre>
      <div className="rounded-xl bg-background/70 p-4">
        <div className="mb-3 flex gap-1.5">{[0, 1, 2].map((i) => <span key={i} className="h-2 w-2 rounded-full bg-muted" />)}</div>
        <div className="h-3 w-2/3 rounded bg-brand" style={{ opacity: n > 20 ? 1 : 0.2 }} />
        <div className="mt-2 h-2 w-full rounded bg-muted" />
        <div className="mt-1.5 h-2 w-4/5 rounded bg-muted" />
        <div className="mt-4 h-7 w-24 rounded-full bg-brand transition-opacity" style={{ opacity: n > 60 ? 1 : 0.15 }} />
      </div>
    </div>
  );
}

const PALETTES = [
  { name: "Nexus", c: ["var(--violet)", "var(--blue)", "var(--cyan)"], f: "font-sans" },
  { name: "Ember", c: ["oklch(0.65 0.2 35)", "oklch(0.78 0.16 70)", "oklch(0.3 0.05 40)"], f: "font-serif" },
  { name: "Mono", c: ["oklch(0.95 0 0)", "oklch(0.6 0 0)", "oklch(0.3 0 0)"], f: "font-mono" },
];
function BrandPreview() {
  const [i, setI] = useState(0);
  const p = PALETTES[i] ?? PALETTES[0]!;
  return (
    <div className="rounded-xl bg-background/70 p-4">
      <div className={`text-3xl font-bold ${p.f}`} style={{ color: p.c[0] }}>Aa</div>
      <div className="mt-3 flex gap-2">{p.c.map((c, k) => <motion.span key={c + k} layout className="h-8 flex-1 rounded-lg" style={{ background: c }} />)}</div>
      <div className="mt-3 flex gap-2">
        {PALETTES.map((x, k) => (
          <button key={x.name} onClick={(e) => { e.stopPropagation(); setI(k); }} className={`rounded-full px-3 py-1 font-mono text-[10px] ${k === i ? "bg-brand text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{x.name}</button>
        ))}
      </div>
    </div>
  );
}

function ChartPreview() {
  const [bars, setBars] = useState([30, 45, 40, 60, 55, 75, 90]);
  useEffect(() => {
    const t = setInterval(() => setBars((b) => b.map((v, i) => Math.min(100, Math.max(20, v + (Math.random() - 0.4) * 15 + i)))), 1500);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-xl bg-background/70 p-4">
      <div className="flex items-baseline justify-between font-mono text-xs"><span className="text-muted-foreground">Revenue</span><span className="text-success">+142%</span></div>
      <div className="mt-3 flex h-24 items-end gap-1.5">
        {bars.map((h, i) => <motion.div key={i} animate={{ height: `${h}%` }} transition={{ type: "spring", stiffness: 80 }} className="flex-1 rounded-t bg-brand" />)}
      </div>
    </div>
  );
}

function UptimePreview() {
  const [ms, setMs] = useState(24);
  useEffect(() => {
    const t = setInterval(() => setMs(18 + Math.round(Math.random() * 14)), 1200);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="rounded-xl bg-background/70 p-4 font-mono text-xs">
      <div className="flex items-center gap-2"><span className="relative flex h-2.5 w-2.5"><span className="absolute h-full w-full animate-ping rounded-full bg-success opacity-75" /><span className="relative h-2.5 w-2.5 rounded-full bg-success" /></span>All systems operational</div>
      <div className="mt-3 flex gap-0.5">{Array.from({ length: 30 }).map((_, i) => <span key={i} className={`h-6 flex-1 rounded-sm ${i === 17 ? "bg-cyan/50" : "bg-success/70"}`} />)}</div>
      <div className="mt-3 flex justify-between text-muted-foreground"><span>Uptime 99.99%</span><span>{ms}ms</span></div>
    </div>
  );
}

const SERVICES = [
  { icon: Code2, title: "Web Development & Digital", desc: "Lightning-fast web apps, SaaS platforms and sites built to convert.", more: ["React / Next.js apps", "E-commerce & dashboards", "AI integrations", "SEO & performance"], P: CodePreview, span: "lg:col-span-2" },
  { icon: Palette, title: "Graphic Design & Branding", desc: "Bold identities that make your brand impossible to ignore.", more: ["Logo & identity", "Brand guidelines", "Social media kits", "UI/UX design"], P: BrandPreview, span: "" },
  { icon: BarChart3, title: "Business Solutions & Custom Software", desc: "Systems that automate operations and grow revenue.", more: ["CRM & ERP tools", "Workflow automation", "Payments & invoicing", "Analytics"], P: ChartPreview, span: "" },
  { icon: Cloud, title: "Tech Support, Cloud & Scaling", desc: "Infrastructure that stays fast and online as you grow.", more: ["Cloud architecture", "24/7 monitoring", "Security hardening", "Maintenance plans"], P: UptimePreview, span: "lg:col-span-2" },
];

export function Services() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24">
      <SectionHead kicker="Our services" title={<>Four pillars. <span className="text-gradient">One studio.</span></>} sub="Everything you need to go from idea to a product people love." />
      <div className="grid gap-5 lg:grid-cols-3">
        {SERVICES.map((s, i) => (
          <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={s.span}>
            <SpotCard className="h-full cursor-pointer hover:-translate-y-1" onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <s.icon className="h-7 w-7 text-cyan" />
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <button type="button" aria-label={open === i ? "Hide details" : "Show details"} aria-expanded={open === i} onClick={(e) => { e.stopPropagation(); setOpen(open === i ? null : i); }} className="glass grid h-9 w-9 shrink-0 place-items-center rounded-full"><Plus className={`h-5 w-5 text-cyan transition-transform ${open === i ? "rotate-45" : ""}`} /></button>
              </div>
              <div className="mt-5"><s.P /></div>
              <AnimatePresence>
                {open === i && (
                  <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 grid grid-cols-2 gap-2 overflow-hidden">
                    {s.more.map((m) => <li key={m} className="rounded-lg bg-accent px-3 py-2 font-mono text-xs">{m}</li>)}
                  </motion.ul>
                )}
              </AnimatePresence>
            </SpotCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
