---
"@footyviz/kitroom": minor
"@footyviz/styles": minor
"@footyviz/locker-room": patch
---

Add `<fv-crest>`, `<fv-series>`, and `<fv-trend>` — three small light-DOM primitives that promote the inline stand-ins previously used by `<fv-table>` into proper components.

- `<fv-crest>` renders a 2-4 letter monospace monogram in a bordered 24px (default) box, or an inline image when `data-src` is supplied (with automatic fallback to the monogram when the image fails to load). Sizes via `data-size="sm|lg"`. The host carries `role="img"` and a derived `aria-label` from `data-alt` (preferred) or `data-code`.
- `<fv-series>` is a horizontal row of `<span data-pip="pos|warn|neg">` form pips. The host carries `role="img"` and requires a consumer-supplied `aria-label` describing the sequence — color is never the only signal. `data-max-visible="N"` (1-10) hides all but the last N children declaratively via CSS `:nth-last-child`.
- `<fv-trend>` renders an arrow + signed delta (e.g. `▲+2`, `▼-1`, `·`). `data-direction="up|down|flat"` drives the glyph and the color (`--positive`, `--negative`, `--fg-muted`); `data-delta` supplies the magnitude. The host carries `role="img"` and an auto-generated `aria-label` ("up 2 positions" / "down 1 position" / "no change") that consumers can override.

`<fv-table>` now uses these elements directly; the stylesheet keeps fallback selectors for the bare `data-role="crest|series|trend"` markup so a server-rendered table without the custom elements still styles reasonably, but the canonical markup is the real elements. The visual contract is unchanged — the swap is invisible.
