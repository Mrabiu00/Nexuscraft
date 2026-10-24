/**
 * Project pictures for the "Results that speak" cards.
 *
 * Drop your own screenshots into src/assets/projects/ and name each file after
 * the project slug, e.g.:
 *
 *   agropulse-ai.jpg
 *   medcore-hms.png
 *   devforge-studio.webp
 *
 * Any image found there replaces the gradient cover on that card and appears at
 * the top of its case-study pop-up. JPG, JPEG, PNG, WEBP and AVIF all work.
 * No code changes needed — the folder is scanned at build time.
 */
const files = import.meta.glob("../assets/projects/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export const PROJECT_IMAGES: Record<string, string> = Object.fromEntries(
  Object.entries(files).map(([path, url]) => {
    const slug = (path.split("/").pop() ?? "").replace(/\.[^.]+$/, "");
    return [slug, url];
  }),
);
