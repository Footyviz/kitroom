---
"@footyviz/kitroom": minor
"@footyviz/styles": minor
---

Add `<fv-gap>` — ad-hoc horizontal spacer for two siblings, sized from the
9-step design system spacing scale (`data-size` ∈ `1, 2, 3, 4, 6, 8, 12, 16,
24`, mapping to `var(--space-N)`). Inline-block with `flex-shrink: 0` so it
survives row-flex parents; `height: 0` so it never adds vertical space.
Zero JS. Reach for it when flex `gap` doesn't fit — e.g. two clusters of
buttons in one row that need a wider gap between groups than within each.
