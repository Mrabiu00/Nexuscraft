import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Plus, Rocket, Layers, Handshake, ArrowRight } from "lucide-react";
import { SectionHead, SpotCard, BrandButton } from "./ui";

const ROWS = [
  ["Timeline", "Months of silence, missed deadlines", "Weekly live demos you can click"],
  ["Code", "Bloated templates & page builders", "Custom, hand-written code"],
  ["Speed", "4s+ load times", "0.4s average load"],
  ["Reliability", "Breaks after launch", "99.99% uptime monitoring"],
  ["Communication", "Ghosting after the deposit", "Direct WhatsApp line to your team"],
];

export function Why() {
  return (
    <section id="why" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHead kicker="Why NexusCraft" title={<>Not another agency. <span className="text-gradient">A new standard.</span></>} />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-muted/40 p-6 opacity-80">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Traditional agencies / freelancers</p>
          <ul className="mt-5 space-y-4">{ROWS.map(([k, a]) => <li key={k} className="flex gap-3"><X className="mt-0.5 h-5 w-5 shrink-0 text-danger" /><div><p className="font-mono text-[10px] uppercase text-muted-foreground">{k}</p><p className="text-muted-foreground line-through decoration-danger/50">{a}</p></div></li>)}</ul>
        </div>
        <SpotCard className="glow">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">The NexusCraft standard</p>
          <ul className="mt-5 space-y-4">{ROWS.map(([k, , b], i) => <motion.li key={k} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-success" /><div><p className="font-mono text-[10px] uppercase text-muted-foreground">{k}</p><p className="font-semibold">{b}</p></div></motion.li>)}</ul>
        </SpotCard>
      </div>
    </section>
  );
}

const MODELS = [
  { icon: Rocket, t: "MVP & Product Sprint", d: "Validate fast. A launch-ready product in weeks, not months.", f: ["Scope & UX in week one", "Weekly live demos", "Launch-ready in 3–6 weeks", "Analytics from day one"], tag: "" },
  { icon: Layers, t: "Full Brand & Digital Overhaul", d: "New identity, new site, new systems — one coherent rebuild.", f: ["Brand identity & guidelines", "Website or app redesign", "Migration of your data", "Growth tuning after launch"], tag: "Most popular" },
  { icon: Handshake, t: "Dedicated Tech Partner", d: "Your on-call product team for ongoing builds and scaling.", f: ["Monthly roadmap & retainer", "Priority support line", "Cloud, security & uptime", "New features every sprint"], tag: "" },
];

export function Engagement() {
  return (
    <section id="engage" className="mx-auto max-w-7xl px-5 py-24">
      <SectionHead kicker="Engagement models" title={<>Work with us <span className="text-gradient">your way.</span></>} sub="Clear scope, milestone payments, no surprises." />
      <div className="grid gap-5 md:grid-cols-3">
        {MODELS.map((m) => (
          <SpotCard key={m.t} className={`relative flex h-full flex-col ${m.tag ? "glow" : ""}`}>
            {m.tag && <span className="bg-brand absolute top-5 right-5 rounded-full px-3 py-1 font-mono text-[10px] text-primary-foreground">{m.tag}</span>}
            <m.icon className="h-7 w-7 text-cyan" />
            <h3 className="mt-4 text-xl font-bold">{m.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
            <ul className="mt-5 flex-1 space-y-2 text-sm">{m.f.map((x) => <li key={x} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-success" />{x}</li>)}</ul>
            <div className="mt-6"><BrandButton href="#estimator" variant={m.tag ? "primary" : "glass"}>Get an estimate <ArrowRight className="h-4 w-4" /></BrandButton></div>
          </SpotCard>
        ))}
      </div>
    </section>
  );
}

const FAQS = [
  ["How long does a typical project take?", "Most MVPs launch in 3–6 weeks and brand identities in 2–4. Use the estimator below for a timeline tailored to your project."],
  ["Do I own the code and design files?", "Yes — 100%. On final payment you get the full source code, design files and every account handed over in your name."],
  ["How do payments work?", "Milestone payments: a deposit to start, then payments tied to approved deliverables. You never pay for work you haven't seen."],
  ["What happens after launch?", "Every project includes a support window for fixes. After that, choose a maintenance plan or our Dedicated Tech Partner model."],
  ["How do we get started?", "Run the 10-second estimator and send your plan on WhatsApp. We reply within 24 hours to book a free discovery call."],
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-24">
      <SectionHead kicker="FAQ" title={<>Questions founders <span className="text-gradient">ask us.</span></>} />
      <div className="space-y-3">
        {FAQS.map(([q, a], i) => (
          <div key={q} className="glass overflow-hidden rounded-2xl">
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              {q}<Plus className={`h-5 w-5 shrink-0 text-cyan transition-transform ${open === i ? "rotate-45" : ""}`} />
            </button>
            <AnimatePresence initial={false}>
              {open === i && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-5 text-sm text-muted-foreground"><span className="block pb-5">{a}</span></motion.p>}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
