# `@footyviz/tokens`

Design tokens, type styles, and brand assets for FootyViz.

## What's in here

- `tokens.css` — every CSS variable (colors, spacing, radii, motion, type) and `.fv-*` type style, in light + dark mode.
- `assets/` — logo SVGs (`logo-mark`, `logo-wordmark`, `logo-lockup`, `logo-glyph-mono`), `pitch-grid.svg`, and football icon SVGs (`crest-placeholder`, `football`, `pitch`).

## Usage

```ts
import '@footyviz/tokens/tokens.css';
```

That gets you the design contract. Everything in `tokens.css` references `'Geist'` / `'Geist Mono'` by family name — you load the fonts yourself.

### Loading Geist + Geist Mono

**Recommended (any consumer):** Google Fonts.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap">
```

**In-monorepo consumers only** (e.g. `@footyviz/storybook`): also import `fonts.css`, which loads the variable TTFs shipped at `packages/tokens/fonts/`:

```ts
import '@footyviz/tokens/tokens.css';
import '@footyviz/tokens/fonts.css';
```

This file and the TTFs are deliberately excluded from the published package — font hosting belongs to the consuming app.

## Theming

Default mode is light. To force dark, set `data-theme="dark"` on `<html>`. To follow OS preference, set `data-theme="auto"`.

## Assets

```ts
import logoUrl from '@footyviz/tokens/assets/logo-lockup.svg';
```

Logos are not recolorable — they're fixed brand artifacts.
