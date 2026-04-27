# FootyViz component library — context for Claude

Repo: [Footyviz/kitroom](https://github.com/Footyviz/kitroom). npm workspaces monorepo housing the FootyViz design system and web components.

## Hard constraints

- **Vanilla web components only.** Custom elements + shadow DOM. **No JSX, no React, no Lit, no Preact, no template engine.** Stories and any rendering glue build DOM with `document.createElement` and return `HTMLElement`.
- **TypeScript strict, ESM-only.** No CommonJS. `verbatimModuleSyntax: true` — use `import type { ... }` for type-only imports.
- **No emoji in code, comments, or commit messages** unless the user explicitly asks.
- **Tokens are the design contract.** New components consume `var(--*)` from `@footyviz/tokens`; never hardcode colors or sizes from the handoff. The one exception currently is `fv-button`, which predates the tokens package and still has hardcoded values — refactoring it is a known TODO.

## Workspaces

| Package | Purpose | Build |
|---|---|---|
| `@footyviz/components` | Published web components (currently just `<fv-button>`) | `tsc` → `dist/` |
| `@footyviz/tokens` | CSS tokens, type styles, brand SVGs, Geist fonts | None (CSS + static assets) |
| `@footyviz/storybook` | Internal showcase. `private: true`. | `storybook build` |

`packages/*` glob in the root `package.json` picks up new packages automatically.

## Commands (always run from repo root)

```bash
npm install                  # links workspaces
npm run storybook            # dev server, port 6006
npm run build:storybook      # static build → packages/storybook/storybook-static/
npm run build                # fans out to all workspaces (--if-present)
npm pack -w <pkg> --dry-run  # check publish boundary
```

`predev` / `prebuild` hooks in `@footyviz/storybook` build `@footyviz/components` first so its `dist/` exists when Storybook resolves the workspace dep. If you change components and want the new code in Storybook, restart `npm run storybook` (no HMR across the boundary yet).

## Design system

Authoritative source: `/Users/akshay/UndergroundSecretLabaratory/FootyViz/design_handoff_footyviz/` (outside this repo). Read its `README.md` before making visual decisions — it's load-bearing for tone, color, type, motion, copy.

Brand essentials:
- Monochrome-dominant. Single accent: straw yellow `#E8BE56`. Used only for live / selected / primary chart series / CTA. Never decorative.
- Geist (UI + headings) and Geist Mono (all numerics, tabular). Sans-serif only.
- Dark + light, equal priority. Toggle via `<html data-theme="dark">` or `data-theme="auto"`.
- Borders over shadows. Subtle motion (160–240 ms ease-out). No bounces.
- Lucide icons at 1.5 stroke weight. No emoji in product chrome.

When porting `tokens.css` from the handoff: strip the two `@font-face` blocks (we host fonts separately) and any SCSS-style `@extend` rules (the handoff has a couple — they error in plain CSS).

## `@footyviz/tokens` font split (important)

`tokens.css` does **not** declare `@font-face`. Instead:

- `packages/tokens/src/tokens.css` — variables + type styles only. **Publishes.**
- `packages/tokens/src/fonts.css` — `@font-face` with `url('../fonts/...')`. **Does not publish** (excluded from `files`).
- `packages/tokens/fonts/*.ttf` — Geist + Geist Mono variable TTFs. **Do not publish.**

In-monorepo consumers (Storybook, future apps in this repo) import both:

```ts
import '@footyviz/tokens/tokens.css';
import '@footyviz/tokens/fonts.css';
```

External consumers (after publish) get only `tokens.css` and load Geist themselves — recommended path is Google Fonts, snippet in `packages/tokens/README.md`.

The font resolution chain inside the monorepo: npm workspaces creates one symlink at `node_modules/@footyviz/tokens` → `packages/tokens/`. Vite resolves `fonts.css` through the package's `exports`, then follows the relative `url('../fonts/...')` from the CSS file's location through that symlink to the real TTFs. No file-level symlinks.

## Package settings worth remembering

- `"sideEffects": ["**/*.css"]` on `@footyviz/tokens` — required so bundlers don't tree-shake bare `import '...css'` statements.
- `"files": [...]` on every package — npm only publishes paths listed there. We use this to keep dev assets (fonts, `fonts.css`) in the repo without shipping them.
- `"private": true` on `@footyviz/tokens` and `@footyviz/storybook` — neither is intended to publish to the registry today (tokens may flip to public later).

## What's been done (PR history)

- [#1](https://github.com/Footyviz/kitroom/pull/1) — Initial monorepo scaffold + Storybook 10 + `<fv-button>` example.
- [#2](https://github.com/Footyviz/kitroom/pull/2) — `@footyviz/tokens` package: tokens, fonts, brand SVGs, Foundations / Tokens story in Storybook.

## Known follow-ups (not yet done)

- **`fv-button` should consume tokens.** Currently hardcoded in shadow DOM. Custom properties cross the shadow boundary, so it's a real refactor but not a blocker.
- **Port the handoff's reference mocks to vanilla web components.** `design_handoff_footyviz/ui_kits/` has `.jsx` reference mocks for `MatchHeader`, `StatBar`, `EventTimeline`, `TabBar`, `PitchViz`. Read them as visual reference only — do not import or compile JSX into this repo.
- **HMR across components ↔ storybook.** Today components must be rebuilt to `dist/` before Storybook sees them. Options: run `tsc --watch` in parallel, or repoint `exports` at `src/*.ts` for dev. Out of scope until friction is felt.
- **Brand PNGs.** Three large PNGs in the handoff (`FootyVizIcon.png`, `FootyVizLogo.png`, `FootyVizTall.png`, ~4 MB total) are intentionally not in the package. Re-evaluate if a consumer needs raster logos.

## Worktree note

Active dev usually happens in a git worktree under `.claude/worktrees/`. The primary checkout (and `main`) lives at `/Users/akshay/UndergroundSecretLabaratory/FootyViz/component-library/`. To pull `main` into a worktree branch, use `git fetch origin && git merge origin/main` — you can't `git checkout main` from a worktree because main is held by the primary checkout.
