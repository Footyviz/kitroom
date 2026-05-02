# @footyviz/kitroom

## 1.1.1

### Patch Changes

- 577462d: Fix `<fv-*>` elements staying invisible in production builds.

  The `sideEffects` field added in v1.1.0 listed only `**/*.css`, which told
  bundlers that none of the package's JS modules carry side effects. Every
  component file self-registers its tag at module top level
  (`customElements.define('fv-button', FvButton)` etc.) — exactly the kind
  of side effect that allow-list excluded. As a result, production bundles
  that imported the package only for its side effects (`import
'@footyviz/kitroom'`) tree-shook the registrations away, leaving the tags
  undefined and the global `:not(:defined) { visibility: hidden }` FOUC
  guard hiding them forever.

  `sideEffects` now also covers `**/*.js` and `**/*.ts` so component
  modules survive tree-shaking. Symptom on GitHub Pages: every kitroom
  component (button, icon, chip, etc.) was invisible while locker-room
  components rendered normally — fixed.

## 1.1.0

### Minor Changes

- 0afc34d: Bundle the global stylesheet into `@footyviz/kitroom` and remove the
  internal `@footyviz/styles` package.

  The previously separate `@footyviz/styles` workspace was `private: true`
  and never reached consumers. Component CSS now ships from the same
  package as the JS, so a single dependency gives you working `<fv-*>`
  elements end to end.

  **New imports:**

  ```ts
  import "@footyviz/tokens/tokens.css";
  import "@footyviz/kitroom/styles.css"; // aggregate, equivalent to former
  // @footyviz/styles/components.css
  import "@footyviz/kitroom";
  ```

  Per-component CSS is also exported à la carte:

  ```ts
  import "@footyviz/kitroom/styles/fv-button.css";
  import "@footyviz/kitroom/styles/base.css"; // FOUC guard
  ```

  **Migration from `@footyviz/styles`:**

  - `@footyviz/styles/base.css` → `@footyviz/kitroom/styles/base.css`
  - `@footyviz/styles/components.css` → `@footyviz/kitroom/styles/components.css` (or `@footyviz/kitroom/styles.css`)
  - `@footyviz/styles/fv-*.css` → `@footyviz/kitroom/styles/fv-*.css`

  Drop `@footyviz/styles` from `dependencies`. The package no longer
  exists.

  Internal: `packages/styles/` was deleted. CSS files moved into
  `packages/kitroom/styles/` (history preserved via `git mv`). Storybook's
  preview imports updated. `@footyviz/kitroom` gains
  `"sideEffects": ["**/*.css"]` so bundlers don't tree-shake bare CSS
  imports, and ships the new `styles/` directory in `files`.

## 1.0.0

### Major Changes

- 6391d5d: Rewrite `<fv-button>` (light DOM, token-driven, composable) and add `<fv-split-button>` and `<fv-button-badge>`.

  **Breaking changes for `<fv-button>`:**

  - The variant attribute moved from `variant="primary"` to `data-variant="primary"`. The default is now `secondary` (white card on light) instead of an unstyled placeholder.
  - The component is no longer shadow-DOM. Consumers must import `@footyviz/styles/components.css` to get the styles, same as every other `<fv-*>` component.
  - The previous primary blue (`#2563eb`) is gone. Primary is now ink black (`var(--neutral-1000)`) per the design spec.

  **New API surface:**

  - `data-variant="primary | cream | secondary | outline | ghost | destructive"`
  - `data-size="xs | sm | lg"` (default = medium)
  - `data-loading` and `aria-disabled="true"` both block click + keyboard activation and pin `tabindex` to `-1`.
  - Composition: any `<fv-icon>` and trailing `<fv-button-badge>` are placed as children. CSS uses `:has()` to detect icon-only buttons and collapse them into a square.

  **New components:**

  - `<fv-split-button>` — visual wrapper that fuses two adjacent `<fv-button>` children into a split-action control with a shared border and hairline divider. `data-variant` on the wrapper cascades to the inner buttons. Zero JS.
  - `<fv-button-badge>` — small inline pill, sized in `em` so it scales with the parent button's font-size. Designed for the trailing-count pattern (`Follow 12.4k`). Zero JS.

  `@footyviz/styles` adds three new imports: `fv-button.css`, `fv-split-button.css`, `fv-button-badge.css`.

### Minor Changes

- 0c9f4f5: Add six light-DOM controls following the new architecture pattern:

  - `<fv-checkbox>` — binary checkbox; ink default, accent variant for user-valued filters
  - `<fv-radio>` — single radio with `data-group` for ad-hoc single-select groups (no wrapper required)
  - `<fv-segmented>` — pill-style single-select group with arrow-key navigation
  - `<fv-chip>` — label / badge / token; 11 variants including the live pulsing chip and closable filter chips
  - `<fv-slider>` — single-thumb horizontal slider with pointer drag, click-to-jump, and keyboard control (Arrow / Home / End / PageUp / PageDown)
  - `<fv-tabbar>` — bottom-of-screen navigation; tabs are `<a>` or `<button>` with `role="tab"`; `aria-current="page"` marks the active tab

  All six follow the ARCHITECTURE.md contract: server renders the markup, the component enhances it in `connectedCallback`, listeners are removed in `disconnectedCallback`. Each ships eight stories — visual variants plus an interaction test and a `SurvivesHtmxSwap` test that verifies the auto-upgrade path.

- e3bcd23: Add `<fv-crest>`, `<fv-series>`, and `<fv-trend>` — three small light-DOM primitives that promote the inline stand-ins previously used by `<fv-table>` into proper components.

  - `<fv-crest>` renders a 2-4 letter monospace monogram in a bordered 24px (default) box, or an inline image when `data-src` is supplied (with automatic fallback to the monogram when the image fails to load). Sizes via `data-size="sm|lg"`. The host carries `role="img"` and a derived `aria-label` from `data-alt` (preferred) or `data-code`.
  - `<fv-series>` is a horizontal row of `<span data-pip="pos|warn|neg">` form pips. The host carries `role="img"` and requires a consumer-supplied `aria-label` describing the sequence — color is never the only signal. `data-max-visible="N"` (1-10) hides all but the last N children declaratively via CSS `:nth-last-child`.
  - `<fv-trend>` renders an arrow + signed delta (e.g. `▲+2`, `▼-1`, `·`). `data-direction="up|down|flat"` drives the glyph and the color (`--positive`, `--negative`, `--fg-muted`); `data-delta` supplies the magnitude. The host carries `role="img"` and an auto-generated `aria-label` ("up 2 positions" / "down 1 position" / "no change") that consumers can override.

  `<fv-table>` now uses these elements directly; the stylesheet keeps fallback selectors for the bare `data-role="crest|series|trend"` markup so a server-rendered table without the custom elements still styles reasonably, but the canonical markup is the real elements. The visual contract is unchanged — the swap is invisible.

- fa57551: Revise `<fv-crest>` size scale: sm=20, md=28 (new default), lg=36 (was 32). Breaking change to default and lg sizes.

  Adds an explicit `data-size="md"` token (28px) which is now also the new default — so `<fv-crest data-code="HAR"></fv-crest>` and `<fv-crest data-code="HAR" data-size="md"></fv-crest>` resolve to the same 28px box. The `lg` size grows from 32px to 36px to match the match-card spec. The `sm` size (20px) is unchanged. Font sizes for the monogram fallback scale proportionally.

  No consumer migration is needed inside this repo since `<fv-crest>` is currently used only in stories.

- c9a97f9: Add `<fv-gap>` — ad-hoc horizontal spacer for two siblings, sized from the
  9-step design system spacing scale (`data-size` ∈ `1, 2, 3, 4, 6, 8, 12, 16,
24`, mapping to `var(--space-N)`). Inline-block with `flex-shrink: 0` so it
  survives row-flex parents; `height: 0` so it never adds vertical space.
  Zero JS. Reach for it when flex `gap` doesn't fit — e.g. two clusters of
  buttons in one row that need a wider gap between groups than within each.
- 924ec83: Add `<fv-icon>` — sprite-backed light-DOM icon component, plus the asset it needs:

  - New `@footyviz/tokens/icons.svg` — single-file sprite with 22 `<symbol id="icon-*">` blocks (12 brand glyphs: pitch, ball, goal, xg, heat-map, key-pass, formation, on-target, whistle, card, sub, live; 10 utility: search, calendar, clock, filter, compare, star, trophy, bell, settings, share). Paths lifted verbatim from `design_specs/preview/brand-icons.html`. Sprite uses `currentColor` so the host's color themes the glyph.
  - New `@footyviz/kitroom/icons.js` subpath export — the same sprite as a `iconSpriteHtml` string for inline injection, plus `iconNames` and the `IconName` type.
  - New `@footyviz/styles/fv-icon.css` — size (sm 16px / md 20px / lg 28px) and tone (default / accent / muted) variants on `data-*` attributes.

  `<fv-icon name="pitch" data-size="md">` renders `<svg><use href="#icon-pitch"/></svg>` in light DOM, referencing the `<symbol>` from the page-level sprite. The page is responsible for placing the sprite once near `<body>`. `aria-hidden="true"` is set automatically when no `aria-label` is provided. This is the one component in the library that uses `innerHTML` in `connectedCallback` — the trade-off is documented in the file's JSDoc and the docs MDX (`<svg><use>` is a styling hook, not primary content; the paths live in the sprite).

- 58e3cee: Add `<fv-ratio-bar>` primitive — single proportion bar with mirror direction and accent tone variants. Refactor `<fv-stat-row>` to use `<fv-ratio-bar>` children instead of `::before` / `::after` pseudo-elements. This is a breaking change to fv-stat-row's DOM contract: the host's `--home-pct` / `--away-pct` are gone; consumers now author `<fv-ratio-bar>` children with their own `--pct`.
- 02888fb: Add `<fv-stat-row>` primitive — single-stat row with mirrored proportion bars; supports featured, compact, and form-pip layouts.
- a63874c: Add `<fv-team>` primitive — crest + team-name composite with home/away mirroring.

  A light-DOM layout shell that pairs an `<fv-crest>` with an element marked `data-role="team-name"` (typically `<fv-text>`). `data-side="home" | "away"` drives layout direction via CSS `flex-direction` (away mirrors visually so authors keep the same child order). `data-density="compact"` tightens the gap from `--space-3` to `--space-2`. The component does not auto-size the inner crest — consumers pick `data-size` on the `<fv-crest>` directly.

  Host carries `role="group"` with an `aria-label` synthesised from the team-name's text content. A single `MutationObserver` keeps the label in sync across innerHTML / htmx / store-driven swaps; it disconnects in `disconnectedCallback`.

  - New `packages/kitroom/src/fv-team.ts` (registers `<fv-team>`).
  - New `packages/styles/src/fv-team.css`.
  - New Storybook entries under **Kitroom / Team** (Home, Away, HomeAndAwayPair, Compact, LongName, MonogramFallback, Playground) plus behaviour tests for the role/aria-label sync.

- fae4449: Add `<fv-text>` — a light-DOM typography primitive that maps `data-variant` to the type-style ramp in `@footyviz/tokens` (body, body-sm, caption, label, h1-h3, display, display-serif, stat-xl/-lg/-md/-sm, mono, editorial). `data-tone` overrides the variant's foreground colour (default / muted / subtle / inverse / accent). `data-max-width` is the only attribute that needs JS — its value is reflected to inline `style.max-width` and the component's CSS turns on single-line ellipsis truncation when the attribute is present.

  The component is intentionally semantic-free: `data-variant="h1"` styles like an H1 but does not set `role="heading"`. Wrap with a semantic element when meaning matters.

  - New `@footyviz/kitroom/src/fv-text.ts` (registers `<fv-text>`).
  - New `@footyviz/styles/fv-text.css` mirroring the `.fv-*` utility-class blocks in `tokens.css`.
  - New Storybook entries under **Components / Text** (Playground, TypeRamp, Tones, Truncation, Stats) plus behaviour tests for the `data-max-width` reflection and survival across innerHTML swaps.

- 0c9f4f5: Add `<fv-toggle>` — light-DOM switch component, plus the substrate it needs:

  - New `@footyviz/styles` package: global stylesheet split into `base.css` (FOUC prevention via `:not(:defined) { visibility: hidden }`) and `components.css` (per-component styles, starting with `fv-toggle.css`).
  - New `--toggle-on` token in `@footyviz/tokens` (signal lime `#E8FF5A`) for user-valued switches; `data-variant="ink"` uses `--neutral-1000` for system/mode toggles.
  - Tiny `EventTarget`-based `store` exported from `@footyviz/kitroom` for client-only UI state shared between components.

  `<fv-toggle>` follows ARCHITECTURE.md — server renders the markup including the `<span data-role="knob">`, the component enhances it in `connectedCallback`, dispatches `change` on user toggle, cleans up listeners in `disconnectedCallback`. ARIA (`role="switch"`, `aria-checked`, `tabindex`) is applied on first connection if the server omitted it.

### Patch Changes

- ec6672f: Replace hardcoded pixel and rgba values in fv-button.css with --space-_, --radius-_, and --shadow-\* tokens. Drop the fv-button.ts grandfather exception in the architecture-check CI (the shadow-DOM port has already happened — fv-button is light DOM today).
- b36de52: Scale `<fv-crest>` border-radius with size: 20px crest now uses --radius-sm (4px), 28px and 36px crests use --radius-md (8px). Previously all three sizes used --radius-sm. No token additions; existing radius scale unchanged.
