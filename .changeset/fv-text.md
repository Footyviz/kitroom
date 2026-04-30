---
"@footyviz/kitroom": minor
"@footyviz/styles": minor
---

Add `<fv-text>` — a light-DOM typography primitive that maps `data-variant` to the type-style ramp in `@footyviz/tokens` (body, body-sm, caption, label, h1-h3, display, display-serif, stat-xl/-lg/-md/-sm, mono, editorial). `data-tone` overrides the variant's foreground colour (default / muted / subtle / inverse / accent). `data-max-width` is the only attribute that needs JS — its value is reflected to inline `style.max-width` and the component's CSS turns on single-line ellipsis truncation when the attribute is present.

The component is intentionally semantic-free: `data-variant="h1"` styles like an H1 but does not set `role="heading"`. Wrap with a semantic element when meaning matters.

- New `@footyviz/kitroom/src/fv-text.ts` (registers `<fv-text>`).
- New `@footyviz/styles/fv-text.css` mirroring the `.fv-*` utility-class blocks in `tokens.css`.
- New Storybook entries under **Components / Text** (Playground, TypeRamp, Tones, Truncation, Stats) plus behaviour tests for the `data-max-width` reflection and survival across innerHTML swaps.
