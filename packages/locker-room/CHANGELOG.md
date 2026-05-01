# @footyviz/locker-room

## 0.1.0

### Minor Changes

- 58e3cee: Add `<fv-match-card>` formation — composes `<fv-team>`, `<fv-stat-row>`, `<fv-chip>`, and other primitives into a match summary card. Supports CSS subgrid alignment via `.fv-match-card-grid` wrapper.
- 1266100: Introduce `@footyviz/locker-room`, the new home for composed arrangements of components — named after football's tactical shapes (4-3-3, 4-4-2: arrangements of players that become greater than their parts). Built on top of the primitives in `@footyviz/kitroom`. The first formation is `<fv-table>`.

  `<fv-table>` is a CSS-grid tabular-data primitive — not a native `<table>`. The host carries `role="table"` and broadcasts the column template via the `--fv-table-cols` custom property; every descendant `[role="row"]` is itself a CSS grid container that consumes that property, so the whole table aligns without subgrid. Composition follows the project's host-attributes-only rule: `data-density`, `data-zebra`, `data-outline`, `data-sticky-head`, and `data-columns` on the host; everything else (zone accent, highlight, selected, expanded, sort state, sign coloring) is expressed via `data-*` attributes on rows and cells.

  Sortable column headers carry `data-sort="none|asc|desc"`; the host toggles the state on click or Space/Enter activation, keeps `aria-sort` in sync, and emits a bubbling `sort` CustomEvent with `{ key, direction }`. The component does not own row data — consumers re-render rows in response.

  Accessibility is first-class: ARIA roles are explicit on every structural element, sortable headers respect keyboard activation, color is never the only signal (zone is paired with table position; sign with `+/-`; form pips with `aria-label`).

  Inline `data-role="crest|series|trend"` placeholders are styled by the table's stylesheet pending the introduction of `<fv-crest>`, `<fv-series>`, and `<fv-trend>` primitives in a follow-up.

  - New `@footyviz/locker-room/src/fv-table.ts`.
  - New `@footyviz/styles/fv-table.css`, imported from `components.css`.
  - New Storybook entries under **Formations / Table** (Standings, Compact, Comfortable, Zones, Selected) plus behaviour tests for the `sort` event and the column-template broadcast.

### Patch Changes

- e3bcd23: Add `<fv-crest>`, `<fv-series>`, and `<fv-trend>` — three small light-DOM primitives that promote the inline stand-ins previously used by `<fv-table>` into proper components.

  - `<fv-crest>` renders a 2-4 letter monospace monogram in a bordered 24px (default) box, or an inline image when `data-src` is supplied (with automatic fallback to the monogram when the image fails to load). Sizes via `data-size="sm|lg"`. The host carries `role="img"` and a derived `aria-label` from `data-alt` (preferred) or `data-code`.
  - `<fv-series>` is a horizontal row of `<span data-pip="pos|warn|neg">` form pips. The host carries `role="img"` and requires a consumer-supplied `aria-label` describing the sequence — color is never the only signal. `data-max-visible="N"` (1-10) hides all but the last N children declaratively via CSS `:nth-last-child`.
  - `<fv-trend>` renders an arrow + signed delta (e.g. `▲+2`, `▼-1`, `·`). `data-direction="up|down|flat"` drives the glyph and the color (`--positive`, `--negative`, `--fg-muted`); `data-delta` supplies the magnitude. The host carries `role="img"` and an auto-generated `aria-label` ("up 2 positions" / "down 1 position" / "no change") that consumers can override.

  `<fv-table>` now uses these elements directly; the stylesheet keeps fallback selectors for the bare `data-role="crest|series|trend"` markup so a server-rendered table without the custom elements still styles reasonably, but the canonical markup is the real elements. The visual contract is unchanged — the swap is invisible.
