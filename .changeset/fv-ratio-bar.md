---
"@footyviz/kitroom": minor
---

Add `<fv-ratio-bar>` primitive — single proportion bar with mirror direction and accent tone variants. Refactor `<fv-stat-row>` to use `<fv-ratio-bar>` children instead of `::before` / `::after` pseudo-elements. This is a breaking change to fv-stat-row's DOM contract: the host's `--home-pct` / `--away-pct` are gone; consumers now author `<fv-ratio-bar>` children with their own `--pct`.
