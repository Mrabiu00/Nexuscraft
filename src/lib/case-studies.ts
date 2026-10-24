/** Case study content for the Selected Work section. */

/** Anchor id the "Build Something Similar" button scrolls to. */
export const ESTIMATOR_ANCHOR = "estimator";

export type CaseStudy = {
  slug: string;
  name: string;
  category: string;
  metric: string;
  tagline: string;
  challenge: string;
  architecture: string;
  stack: string[];
  results: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "agropulse-ai",
    name: "AgroPulse AI",
    category: "Smart Farm Monitoring · Yield Analytics · AI Pest Prediction",
    metric: "+65% Yield Accuracy",
    tagline: "Field sensors, yield analytics and pest prediction that warns a farm before the damage spreads.",
    challenge:
      "A cooperative of smallholder farms tracked crop health by hand. Scout reports arrived days late, pest damage was only spotted after it spread across plots, and every season's yield forecast was guesswork.",
    architecture:
      "Field sensors and drone captures feed an ingestion pipeline that normalises readings and stores the history. A prediction service scores every plot nightly, and the dashboard surfaces the riskiest fields first — with alerts pushed straight to each farmer's WhatsApp.",
    stack: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "ML Pipeline", "Tailwind"],
    results: [
      "+65% accuracy on season yield forecasts",
      "Pest risk flagged days earlier than manual scouting",
      "40+ farms reporting into one dashboard",
      "Field data entry time cut by roughly 70%",
    ],
  },
  {
    slug: "medcore-hms",
    name: "MedCore HMS",
    category: "Full-Stack Hospital Management & Patient Portal",
    metric: "3x Faster Patient Flow",
    tagline: "One system for intake, records, billing and pharmacy — with a portal patients can actually use.",
    challenge:
      "A growing hospital ran on paper files and three disconnected spreadsheets. Front-desk staff re-keyed the same patient up to three times, appointment slots clashed daily, and billing disputes had no audit trail.",
    architecture:
      "A single Postgres-backed core holds patients, appointments, billing and pharmacy, with row-level security so each role only sees its own patients. Clinicians work from one timeline; patients book, pay and view records through the portal, and every action is logged.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "RLS Policies", "Docker"],
    results: [
      "3x faster patient flow through intake",
      "Double-booked appointments eliminated",
      "Billing errors reduced by around 80%",
      "Patient portal live in nine weeks",
    ],
  },
  {
    slug: "devforge-studio",
    name: "DevForge Studio",
    category: "Automated GitHub Portfolio & Brand Generator",
    metric: "0.4s Load Speed",
    tagline: "Connect GitHub once, get a fast personal brand site that keeps itself updated.",
    challenge:
      "Developers wanted a personal brand site but had no design time. Every template they tried was slow, generic, and needed constant manual upkeep the moment a new project shipped.",
    architecture:
      "On connect, the system reads repos, languages and contribution history, then composes a typed portfolio with a generated colour and type system. Output builds statically and ships to a global edge network, so a refresh is a rebuild — not a redesign.",
    stack: ["Next.js", "TypeScript", "GitHub API", "Edge Functions", "Tailwind"],
    results: [
      "0.4s average load speed on first visit",
      "A live portfolio in under three minutes",
      "99 Lighthouse performance score",
      "Zero manual upkeep after connect",
    ],
  },
];
