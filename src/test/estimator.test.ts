import { describe, it, expect } from "vitest";
import { estimateWeeks, buildMessage, contactLinks } from "@/lib/estimator";

describe("estimator", () => {
  it("standard web app MVP is 6–8 weeks", () => {
    expect(estimateWeeks("Web App", "New Idea / MVP", "Standard")).toEqual({ min: 6, max: 8 });
  });
  it("fast-track is shorter than flexible", () => {
    const f = estimateWeeks("Custom System", "Redesign", "Fast-Track").min;
    const s = estimateWeeks("Custom System", "Redesign", "Flexible").min;
    expect(f).toBeLessThan(s);
  });
  it("message includes selections and goes into WhatsApp link", () => {
    const msg = buildMessage("Brand Identity", "Redesign", "Standard");
    expect(msg).toContain("Need: Brand Identity");
    expect(contactLinks(msg).whatsapp).toContain(encodeURIComponent("Timeline: Standard"));
  });
});
