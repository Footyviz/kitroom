---
"@footyviz/locker-room": minor
"@footyviz/kitroom": minor
---

Add `<fv-bracket>` — knockout-stage tournament formation.

A new locker-room formation that wraps `<fv-table>`-based match cards
into round columns and lays them out as a horizontal bracket tree on
desktop, collapsing to vertically stacked rounds on tablet (with a
2-col grid of matches per round) and a single column on mobile.

Each match card is an `<fv-table>` with two team rows (`fv-crest`,
team name, abbreviation, score). The winning row uses
`data-result="win"` to pick up the existing accent rail from
`fv-table.css`, so no new visual primitives are introduced.

The desktop bracket tree is achieved with `display: grid` + flex
`justify-content: space-around` on each round's matches container —
QF cards naturally land at the centroids of their RO16 feeders, SFs
at the centroid of their two QF feeders, etc. No JS positioning,
no per-round CSS.

Light-DOM, no shadow root, all spacing/colour from `--space-*` /
`--bg-*` / `--fg-*` / `--border-*` / `--accent*` tokens. Compiled
CSS ships from `@footyviz/kitroom/styles/fv-bracket.css` (also
bundled in the `@footyviz/kitroom/styles.css` aggregate); the
component class ships from `@footyviz/locker-room`.
