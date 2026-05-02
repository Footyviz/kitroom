# FootyViz component library — context for Claude

Repo: [Footyviz/kitroom](https://github.com/Footyviz/kitroom). npm workspaces monorepo housing the FootyViz design system and web components.

## Hard constraints

- **Vanilla web components only.** Custom elements, **light DOM**. **No JSX, no React, no Lit, no Preact, no template engine.** Stories and any rendering glue build DOM with `document.createElement` and return `HTMLElement`. Full rules in [`ARCHITECTURE.md`](./ARCHITECTURE.md) — read it before authoring a component.
- **Light DOM only (today).** No `attachShadow`, no declarative shadow DOM. Components enhance existing children in `connectedCallback` (find children, add listeners) — they do not generate primary content. CSS lives in the global stylesheet and targets tag name + `data-*` attributes. Per-instance dynamic values use CSS custom properties via inline style. Shadow DOM is a planned future direction — not yet introduced; do not pre-empt it.
- **TypeScript strict, ESM-only.** No CommonJS. `verbatimModuleSyntax: true` — use `import type { ... }` for type-only imports.
- **No emoji in code, comments, or commit messages** unless the user explicitly asks.
- **Tokens are the design contract.** New components consume `var(--*)` from `@footyviz/tokens`; never hardcode colors or sizes from the handoff. The few literal hex values that remain in component CSS (cream, destructive, info, warn, neg, pos chip variants) are spec values for which no token group exists yet — flag with a `/* spec */` comment and lift to tokens when the design system grows the relevant scale.
- **Composition over prop-naming.** Component attributes are limited to behavior (aria-disabled, data-loading), variant, and size. Anything else — icons, labels, badges — is supplied as child elements. CSS reacts to composition via descendant selectors and `:has()`. See [ARCHITECTURE.md](ARCHITECTURE.md) for the rule and rationale.

## Workspaces

| Package | Purpose | Build |
|---|---|---|
| `@footyviz/kitroom` | Published web components (`<fv-button>`, `<fv-checkbox>`, `<fv-chip>`, `<fv-icon>`, `<fv-icon-text>`, `<fv-radio>`, `<fv-radio-group>`, `<fv-segmented>`, `<fv-slider>`, `<fv-split-button>`, `<fv-button-badge>`, `<fv-tabbar>`, `<fv-toggle>`) **plus the global stylesheet** (`./styles.css` aggregate, per-component `./styles/fv-*.css`) | `tsc` → `dist/`; CSS shipped from `styles/` |
| `@footyviz/locker-room` | Composed formations built on the kitroom primitives (`<fv-table>`) | `tsc` → `dist/` |
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
npx changeset                # record a pending change (markdown in .changeset/)
npm run version-packages     # consume changesets → bump versions + update CHANGELOGs
```

Storybook resolves `@footyviz/kitroom` and `@footyviz/locker-room` directly to their `src/*.ts` via Vite aliases in `packages/storybook/.storybook/main.ts`. No `dist/` is required to run dev, build Storybook, or run tests — the same source files are used everywhere. Edits to component source re-bundle on reload. The `dist/` directories are still produced when those packages are built explicitly (`npm run build -w @footyviz/kitroom`) — needed for npm publishing once that's wired up — but Storybook never reads from them.

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

- `"sideEffects"` on `@footyviz/tokens` and `@footyviz/kitroom` — required so bundlers don't tree-shake bare `import '...css'` statements. `@footyviz/tokens` ships only CSS, so `["**/*.css"]` is enough. `@footyviz/kitroom` also ships JS modules that self-register their tag at module top level (`customElements.define('fv-button', FvButton)` etc.), so it must list `["**/*.css", "**/*.js", "**/*.ts"]` — otherwise consumers that side-effect-import the package (`import '@footyviz/kitroom'`) tree-shake the registrations away and the global `:not(:defined)` FOUC rule keeps every `<fv-*>` invisible. `@footyviz/locker-room` has no `sideEffects` field today (defaults to "everything has side effects"), which is why its components survived even when kitroom's didn't.
- `"files": [...]` on every package — npm only publishes paths listed there. We use this to keep dev assets (fonts, `fonts.css`) in the repo without shipping them. `@footyviz/kitroom` ships both `dist` (JS) and `styles` (CSS).
- `"private": false` on `@footyviz/kitroom`, `@footyviz/locker-room`, and `@footyviz/tokens` — these publish to GitHub Packages. `@footyviz/storybook` stays `private: true` (internal showcase).

## Releasing & deploying

**Changesets → GitHub Packages.**

- Each meaningful change adds a markdown file under `.changeset/` via `npx changeset`. Commit the file with the change. Includes `@footyviz/kitroom`, `@footyviz/locker-room`, and `@footyviz/tokens`; `@footyviz/storybook` stays private and is not released.
- `.github/workflows/release.yml` runs on every push to `main`. When pending changesets exist, the workflow opens (or updates) a "chore: version packages" PR that bumps `package.json` versions and writes `CHANGELOG.md`. Merging that PR triggers the next run, which has no pending changesets and instead runs `changeset publish` — pushing every workspace whose disk version is newer than what's on the registry to `https://npm.pkg.github.com`.
- Auth model: CI uses the auto-injected `secrets.GITHUB_TOKEN` (the workflow grants `packages: write`). Local devs and consumer apps export a PAT with `read:packages` (or `write:packages` for manual publish) — see the consume flow in [README.md](README.md).
- One-time org setup: GitHub org → Settings → Actions → Workflow permissions must be "Read and write" for `release.yml` to call `npm publish`.

**Storybook → GitHub Pages.**

- `.github/workflows/deploy-storybook.yml` runs on every push to `main` (and `workflow_dispatch`). It builds Storybook with `STORYBOOK_BASE_PATH=/kitroom/` and force-pushes the static site to the `home-ground` branch as a single orphan commit (`force_orphan: true`, so the branch never accumulates history). The base path is the repo name (`kitroom`), not the source branch — Pages always serves project sites at `https://<owner>.github.io/<repo>/`.
- Pages is configured in repo Settings → Pages to serve from `home-ground` / `(root)`. Deployed URL: <https://footyviz.github.io/kitroom/>.
- Subpath base path is wired through `viteFinal` in `packages/storybook/.storybook/main.ts` — only set when the `STORYBOOK_BASE_PATH` env var is present, so local `npm run storybook` is unaffected. To deploy under a different subpath (e.g. repo rename), change one env var in the workflow.

## What's been done (PR history)

- [#1](https://github.com/Footyviz/kitroom/pull/1) — Initial monorepo scaffold + Storybook 10 + `<fv-button>` example.
- [#2](https://github.com/Footyviz/kitroom/pull/2) — `@footyviz/tokens` package: tokens, fonts, brand SVGs, Foundations / Tokens story in Storybook.
- [#3](https://github.com/Footyviz/kitroom/pull/3) — `CLAUDE.md` context doc.

## Known follow-ups (not yet done)

- **Port the handoff's reference mocks to vanilla web components.** `design_handoff_footyviz/ui_kits/` has `.jsx` reference mocks for `MatchHeader`, `StatBar`, `EventTimeline`, `TabBar`, `PitchViz`. Read them as visual reference only — do not import or compile JSX into this repo.
- **Brand PNGs.** Three large PNGs in the handoff (`FootyVizIcon.png`, `FootyVizLogo.png`, `FootyVizTall.png`, ~4 MB total) are intentionally not in the package. Re-evaluate if a consumer needs raster logos.

## Worktree note

Active dev usually happens in a git worktree under `.claude/worktrees/`. The primary checkout (and `main`) lives at `/Users/akshay/UndergroundSecretLabaratory/FootyViz/component-library/`. To pull `main` into a worktree branch, use `git fetch origin && git merge origin/main` — you can't `git checkout main` from a worktree because main is held by the primary checkout.

### Worktree gotcha: always run `npm install` once in a fresh worktree

A new worktree starts with no `node_modules/` of its own. Node module resolution then walks up the directory tree and finds the primary checkout's `node_modules/`, where `@footyviz/kitroom` is symlinked to the **primary's** `packages/kitroom` — i.e. whatever's on `main`, not your worktree's edits.

What this looks like in practice: you change `packages/kitroom/src/fv-button.ts` in the worktree, run `npm run storybook`, open the story, and the page renders the **old** behavior. Worse: every component file does a `if (!customElements.get('fv-foo')) customElements.define(...)` registration guard, so once the primary's old class wins the registration race, your new class silently never registers — no error, just stale behavior. Symptoms: controls don't drive the rendered component, event handlers absent, `connectedCallback` apparently not running, attribute changes ignored.

Fix: run `npm install` once inside the worktree. That creates a worktree-local `node_modules/` whose `@footyviz/*` symlinks point at the worktree's own `packages/`. After that, the worktree is self-contained — Vite aliases resolve to the worktree's `src/`, no rebuild step needed.

Bake this into the spawn ritual for any new worktree.
