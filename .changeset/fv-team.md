---
"@footyviz/kitroom": minor
"@footyviz/styles": minor
---

Add `<fv-team>` primitive — crest + team-name composite with home/away mirroring.

A light-DOM layout shell that pairs an `<fv-crest>` with an element marked `data-role="team-name"` (typically `<fv-text>`). `data-side="home" | "away"` drives layout direction via CSS `flex-direction` (away mirrors visually so authors keep the same child order). `data-density="compact"` tightens the gap from `--space-3` to `--space-2`. The component does not auto-size the inner crest — consumers pick `data-size` on the `<fv-crest>` directly.

Host carries `role="group"` with an `aria-label` synthesised from the team-name's text content. A single `MutationObserver` keeps the label in sync across innerHTML / htmx / store-driven swaps; it disconnects in `disconnectedCallback`.

- New `packages/kitroom/src/fv-team.ts` (registers `<fv-team>`).
- New `packages/styles/src/fv-team.css`.
- New Storybook entries under **Kitroom / Team** (Home, Away, HomeAndAwayPair, Compact, LongName, MonogramFallback, Playground) plus behaviour tests for the role/aria-label sync.
