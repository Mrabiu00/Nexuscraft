export const NEEDS = ["Web App", "Brand Identity", "Full Digital Overhaul", "Custom System"] as const;
export const STAGES = ["New Idea / MVP", "Redesign", "Scaling Existing Business"] as const;
export const TIMELINES = ["Fast-Track", "Standard", "Flexible"] as const;

export type Need = (typeof NEEDS)[number];
export type Stage = (typeof STAGES)[number];
export type Timeline = (typeof TIMELINES)[number];

// Placeholder contact details — replace with real ones.
export const CONTACT = {
  whatsapp: "2349113133297",
  email: "nexuscraft00@gmail.com",
  x: "NexusCraft_tech",
  instagram: "nexuscraft_",
};

const BASE_WEEKS: Record<Need, number> = {
  "Web App": 6,
  "Brand Identity": 3,
  "Full Digital Overhaul": 10,
  "Custom System": 8,
};
const STAGE_FACTOR: Record<Stage, number> = {
  "New Idea / MVP": 1,
  Redesign: 0.8,
  "Scaling Existing Business": 1.2,
};
const TIMELINE_FACTOR: Record<Timeline, number> = { "Fast-Track": 0.7, Standard: 1, Flexible: 1.3 };

export function estimateWeeks(n: Need, s: Stage, t: Timeline) {
  const w = BASE_WEEKS[n] * STAGE_FACTOR[s] * TIMELINE_FACTOR[t];
  const min = Math.max(1, Math.round(w));
  return { min, max: min + Math.max(1, Math.round(min * 0.4)) };
}

export function roadmap(n: Need): string[] {
  const map: Record<Need, string[]> = {
    "Web App": ["Discovery & scope", "UX wireframes", "UI design system", "Full-stack build", "Launch & monitor"],
    "Brand Identity": ["Brand discovery", "Moodboards", "Logo & identity", "Brand guidelines"],
    "Full Digital Overhaul": ["Audit", "Brand refresh", "UX/UI redesign", "Rebuild & migrate", "Growth tuning"],
    "Custom System": ["Process mapping", "Architecture", "Core modules", "Integrations", "Training & handover"],
  };
  return map[n];
}

export function buildMessage(n: Need, s: Stage, t: Timeline) {
  const { min, max } = estimateWeeks(n, s, t);
  return `Hi NexusCraft! I'd like to start a project.\n• Need: ${n}\n• Stage: ${s}\n• Timeline: ${t}\n• Estimate: ${min}–${max} weeks\nCan we book a discovery call?`;
}

export function contactLinks(msg: string) {
  const m = encodeURIComponent(msg);
  return {
    whatsapp: `https://wa.me/${CONTACT.whatsapp}?text=${m}`,
    email: `mailto:${CONTACT.email}?subject=${encodeURIComponent("New project inquiry")}&body=${m}`,
    x: `https://x.com/messages/compose?text=${m}`,
    instagram: `https://ig.me/m/${CONTACT.instagram}`,
  };
}
