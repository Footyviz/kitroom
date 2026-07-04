---
"@footyviz/kitroom": minor
"@footyviz/locker-room": patch
---

Add a `data-fluid` variant to `<fv-match-card>` — opts out of the 360px spec max-width (320px compact) so the card fills its container. The rule lives in the kitroom global stylesheet; the locker-room component doc block, docs table, and stories cover the new attribute (with a Fluid story asserting the computed width).
