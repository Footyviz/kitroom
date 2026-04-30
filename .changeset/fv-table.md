---
"@footyviz/locker-room": minor
"@footyviz/styles": minor
---

Introduce `@footyviz/locker-room`, the new home for composed arrangements of components — named after football's tactical shapes (4-3-3, 4-4-2: arrangements of players that become greater than their parts). Built on top of the primitives in `@footyviz/kitroom`. The first formation is `<fv-table>`.

`<fv-table>` is a CSS-grid tabular-data primitive — not a native `<table>`. The host carries `role="table"` and broadcasts the column template via the `--fv-table-cols` custom property; every descendant `[role="row"]` is itself a CSS grid container that consumes that property, so the whole table aligns without subgrid. Composition follows the project's host-attributes-only rule: `data-density`, `data-zebra`, `data-outline`, `data-sticky-head`, and `data-columns` on the host; everything else (zone accent, highlight, selected, expanded, sort state, sign coloring) is expressed via `data-*` attributes on rows and cells.

Sortable column headers carry `data-sort="none|asc|desc"`; the host toggles the state on click or Space/Enter activation, keeps `aria-sort` in sync, and emits a bubbling `sort` CustomEvent with `{ key, direction }`. The component does not own row data — consumers re-render rows in response.

Accessibility is first-class: ARIA roles are explicit on every structural element, sortable headers respect keyboard activation, color is never the only signal (zone is paired with table position; sign with `+/-`; form pips with `aria-label`).

Inline `data-role="crest|series|trend"` placeholders are styled by the table's stylesheet pending the introduction of `<fv-crest>`, `<fv-series>`, and `<fv-trend>` primitives in a follow-up.

- New `@footyviz/locker-room/src/fv-table.ts`.
- New `@footyviz/styles/fv-table.css`, imported from `components.css`.
- New Storybook entries under **Formations / Table** (Standings, Compact, Comfortable, Zones, Selected) plus behaviour tests for the `sort` event and the column-template broadcast.
