# @footyviz/tokens

## 0.1.0

### Minor Changes

- 924ec83: Add `<fv-icon>` — sprite-backed light-DOM icon component, plus the asset it needs:

  - New `@footyviz/tokens/icons.svg` — single-file sprite with 22 `<symbol id="icon-*">` blocks (12 brand glyphs: pitch, ball, goal, xg, heat-map, key-pass, formation, on-target, whistle, card, sub, live; 10 utility: search, calendar, clock, filter, compare, star, trophy, bell, settings, share). Paths lifted verbatim from `design_specs/preview/brand-icons.html`. Sprite uses `currentColor` so the host's color themes the glyph.
  - New `@footyviz/kitroom/icons.js` subpath export — the same sprite as a `iconSpriteHtml` string for inline injection, plus `iconNames` and the `IconName` type.
  - New `@footyviz/styles/fv-icon.css` — size (sm 16px / md 20px / lg 28px) and tone (default / accent / muted) variants on `data-*` attributes.

  `<fv-icon name="pitch" data-size="md">` renders `<svg><use href="#icon-pitch"/></svg>` in light DOM, referencing the `<symbol>` from the page-level sprite. The page is responsible for placing the sprite once near `<body>`. `aria-hidden="true"` is set automatically when no `aria-label` is provided. This is the one component in the library that uses `innerHTML` in `connectedCallback` — the trade-off is documented in the file's JSDoc and the docs MDX (`<svg><use>` is a styling hook, not primary content; the paths live in the sprite).

### Patch Changes

- 0c9f4f5: Add `<fv-toggle>` — light-DOM switch component, plus the substrate it needs:

  - New `@footyviz/styles` package: global stylesheet split into `base.css` (FOUC prevention via `:not(:defined) { visibility: hidden }`) and `components.css` (per-component styles, starting with `fv-toggle.css`).
  - New `--toggle-on` token in `@footyviz/tokens` (signal lime `#E8FF5A`) for user-valued switches; `data-variant="ink"` uses `--neutral-1000` for system/mode toggles.
  - Tiny `EventTarget`-based `store` exported from `@footyviz/kitroom` for client-only UI state shared between components.

  `<fv-toggle>` follows ARCHITECTURE.md — server renders the markup including the `<span data-role="knob">`, the component enhances it in `connectedCallback`, dispatches `change` on user toggle, cleans up listeners in `disconnectedCallback`. ARIA (`role="switch"`, `aria-checked`, `tabindex`) is applied on first connection if the server omitted it.
