---
"@footyviz/components": minor
"@footyviz/styles": minor
---

Add `<fv-input>` — a light-DOM wrapper that styles a real `<input>` child as a FootyViz form field.

The host adds the field chrome (border, padding, focus ring via `:focus-within`) and one tiny convenience: clicking anywhere on the padded surface focuses the inner input. Form integration, autofill, IME, and keyboard handling come for free because the inner element is a real `<input>`.

```html
<fv-input data-variant="search">
  <fv-icon name="search"></fv-icon>
  <input type="text" placeholder="Search matches, teams, players" />
  <kbd>⌘K</kbd>
</fv-input>
```

Attributes on the host: `data-variant="search"` (adds the elevated shadow stack used for the global search field), `data-size="sm"`, `aria-disabled="true"`. The optional trailing `<kbd>` accepts `data-variant="inverse"` for the focused-Enter-hint styling.

`@footyviz/styles` adds one new import: `fv-input.css`.
