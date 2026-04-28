---
"@footyviz/components": minor
"@footyviz/styles": minor
"@footyviz/tokens": patch
---

Add `<fv-toggle>` — light-DOM switch component, plus the substrate it needs:

- New `@footyviz/styles` package: global stylesheet split into `base.css` (FOUC prevention via `:not(:defined) { visibility: hidden }`) and `components.css` (per-component styles, starting with `fv-toggle.css`).
- New `--toggle-on` token in `@footyviz/tokens` (signal lime `#E8FF5A`) for user-valued switches; `data-variant="ink"` uses `--neutral-1000` for system/mode toggles.
- Tiny `EventTarget`-based `store` exported from `@footyviz/components` for client-only UI state shared between components.

`<fv-toggle>` follows ARCHITECTURE.md — server renders the markup including the `<span data-role="knob">`, the component enhances it in `connectedCallback`, dispatches `change` on user toggle, cleans up listeners in `disconnectedCallback`. ARIA (`role="switch"`, `aria-checked`, `tabindex`) is applied on first connection if the server omitted it.
