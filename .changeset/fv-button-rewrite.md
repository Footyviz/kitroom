---
"@footyviz/components": major
"@footyviz/styles": minor
---

Rewrite `<fv-button>` (light DOM, token-driven, composable) and add `<fv-split-button>` and `<fv-button-badge>`.

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
