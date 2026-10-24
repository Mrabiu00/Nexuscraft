<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the hero orbital graphic in a browser-safe standalone component; SVG paths and Framer Motion provide interactive motion without a canvas or server dependency.
- Reuse BrandButton for hero navigation and the two-action contact dock; contact destinations remain sourced from the shared contact-link builder.
- Bundle the logo as a local image so source exports do not depend on preview-only asset URLs.
- Resolve project covers from slug-named images in the project assets folder so the same image appears on the card and in its case study.
