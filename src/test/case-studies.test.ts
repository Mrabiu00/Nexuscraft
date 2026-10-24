import { describe, it, expect } from "vitest";
import { CASE_STUDIES, ESTIMATOR_ANCHOR } from "@/lib/case-studies";

describe("case studies", () => {
  it("shows the three flagship projects with their metrics", () => {
    expect(CASE_STUDIES.map((c) => c.name)).toEqual(["AgroPulse AI", "MedCore HMS", "DevForge Studio"]);
    expect(CASE_STUDIES.map((c) => c.metric)).toEqual([
      "+65% Yield Accuracy",
      "3x Faster Patient Flow",
      "0.4s Load Speed",
    ]);
  });
  it("gives every case study the full modal content", () => {
    for (const c of CASE_STUDIES) {
      expect(c.challenge.length).toBeGreaterThan(40);
      expect(c.architecture.length).toBeGreaterThan(40);
      expect(c.stack.length).toBeGreaterThanOrEqual(4);
      expect(c.results.length).toBeGreaterThanOrEqual(3);
    }
  });
  it("sends the 'Build Something Similar' button to the estimator", () => {
    expect(ESTIMATOR_ANCHOR).toBe("estimator");
  });
});
