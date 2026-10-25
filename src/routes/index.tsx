import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Header, Hero } from "@/components/nexus/Top";
import { Services } from "@/components/nexus/Services";
import { BeforeAfter, Process } from "@/components/nexus/Lab";
import { Work } from "@/components/nexus/CaseStudies";
import { Why, Engagement, Faq } from "@/components/nexus/Trust";
import { Estimator, FinalCta, Footer, Dock, Extras } from "@/components/nexus/Convert";

const TITLE = "Nexuscraft | Web Development, Software & Branding";
const DESC = "NexusCraft builds high-performance web apps, bold brand identities and custom software for businesses and founders.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@NexusCraft_tech" },
      { tagName: "link", rel: "canonical", href: "https://thenexuscraft.vercel.app/" },
      { property: "og:url", content: "https://thenexuscraft.vercel.app/" },
      { property: "og:image", content: "https://thenexuscraft.vercel.app/nexuscraft-preview.png" },
      { name: "twitter:image", content: "https://thenexuscraft.vercel.app/nexuscraft-preview.pgn" },
    ],
  }),
  component: Index,
});

function Index() {
  const glow = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const f = (e: PointerEvent) => {
      glow.current?.style.setProperty("transform", `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`);
    };
    window.addEventListener("pointermove", f);
    return () => window.removeEventListener("pointermove", f);
  }, []);
  return (
    <div className="relative min-h-screen">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="dot-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top,#000,transparent_70%)]" />
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-violet opacity-25 blur-[120px]" />
        <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-blue opacity-20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan opacity-10 blur-[120px]" />
        <div ref={glow} className="absolute top-0 left-0 hidden h-[600px] w-[600px] rounded-full bg-violet opacity-10 blur-[100px] md:block" />
      </div>
      <Header />
      <main>
        <Hero />
        <Services />
        <BeforeAfter />
        <Process />
        <Work />
        <Why />
        <Engagement />
        <Estimator />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <Dock />
      <Extras />
    </div>
  );
}
