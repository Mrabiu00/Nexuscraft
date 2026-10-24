import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import icon from "@/assets/nexus-icon.png";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <img src={icon} alt="" className="h-8 w-8 shrink-0 rounded-md" />
      <span className="text-lg font-extrabold tracking-tight">
        Nexus<span className="text-gradient">Craft</span>
      </span>
    </span>
  );
}

export function SpotCard({ children, className, onClick }: { children: ReactNode; className?: string; onClick?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent) => {
    const element = ref.current;
    if (!element) return;
    const r = element.getBoundingClientRect();
    element.style.setProperty("--mx", `${e.clientX - r.left}px`);
    element.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={move} onClick={onClick} className={cn("glass spotlight rounded-3xl p-6 transition-transform", className)}>
      {children}
    </div>
  );
}

export function SectionHead({ kicker, title, sub }: { kicker: string; title: ReactNode; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan">{kicker}</p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

export function BrandButton({ children, href, variant = "primary", onClick, className, label, target }: { children: ReactNode; href?: string; variant?: "primary" | "glass"; onClick?: () => void; className?: string; label?: string; target?: string }) {
  const cls =
    variant === "primary"
      ? "bg-brand glow text-primary-foreground hover:brightness-110"
      : "glass text-foreground hover:bg-accent";
  const C = href ? "a" : "button";
  return (
    <C href={href} onClick={onClick} aria-label={label} title={label} target={target} rel={target === "_blank" ? "noreferrer" : undefined} className={cn("inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all active:scale-95", cls, className)}>
      {children}
    </C>
  );
}

export function Twitter({ className }: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden><path d="M18.9 2H22l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.3 22H2.2l7.7-8.8L2 2h6.8l4.7 6.2L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" /></svg>);
}
export function WhatsApp({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4.1Z" /><path d="M8.3 7.3c-.4 0-1.2.7-1.2 1.7 0 2.7 4.2 6.8 7 6.8 1 0 1.8-.8 1.8-1.2l-2.4-1.3-.9 1c-1.6-.6-2.8-1.8-3.5-3.3l1-1-1.1-2.7Z" /></svg>;
}
export function Instagram({ className }: { className?: string }) {
  return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>);
}
