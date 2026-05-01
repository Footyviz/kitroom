---
"@footyviz/kitroom": minor
---

Bundle the global stylesheet into `@footyviz/kitroom` and remove the
internal `@footyviz/styles` package.

The previously separate `@footyviz/styles` workspace was `private: true`
and never reached consumers. Component CSS now ships from the same
package as the JS, so a single dependency gives you working `<fv-*>`
elements end to end.

**New imports:**

```ts
import '@footyviz/tokens/tokens.css';
import '@footyviz/kitroom/styles.css'; // aggregate, equivalent to former
                                       // @footyviz/styles/components.css
import '@footyviz/kitroom';
```

Per-component CSS is also exported à la carte:

```ts
import '@footyviz/kitroom/styles/fv-button.css';
import '@footyviz/kitroom/styles/base.css';   // FOUC guard
```

**Migration from `@footyviz/styles`:**

- `@footyviz/styles/base.css` → `@footyviz/kitroom/styles/base.css`
- `@footyviz/styles/components.css` → `@footyviz/kitroom/styles/components.css` (or `@footyviz/kitroom/styles.css`)
- `@footyviz/styles/fv-*.css` → `@footyviz/kitroom/styles/fv-*.css`

Drop `@footyviz/styles` from `dependencies`. The package no longer
exists.

Internal: `packages/styles/` was deleted. CSS files moved into
`packages/kitroom/styles/` (history preserved via `git mv`). Storybook's
preview imports updated. `@footyviz/kitroom` gains
`"sideEffects": ["**/*.css"]` so bundlers don't tree-shake bare CSS
imports, and ships the new `styles/` directory in `files`.
