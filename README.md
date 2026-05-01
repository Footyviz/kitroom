# FootyViz

A web component library for [FootyViz](https://github.com/Footyviz),
the football analytics platform. Light-DOM custom elements that enhance
server-rendered HTML — built to compose with htmx, no virtual DOM, no
shadow boundaries.

## Storybook

The current set of components and their docs live at
**<https://footyviz.github.io/kitroom/>**. Every story is also a
test — `play` functions run as real Vitest cases in headless Chromium.

## Workspaces

| Package | Purpose |
|---|---|
| [`@footyviz/tokens`](packages/tokens) | Design tokens (CSS variables, type styles, fonts, brand SVGs) |
| [`@footyviz/kitroom`](packages/kitroom) | The `<fv-*>` web components — JS + accompanying global stylesheet |
| [`@footyviz/locker-room`](packages/locker-room) | Composed formations built on top of the components |
| [`@footyviz/storybook`](packages/storybook) | Internal showcase + Vitest test harness |

## Local development

```bash
npm install
npx playwright install chromium     # one-time, for Vitest browser tests
npm run storybook                   # http://localhost:6006
npm test                            # run all story-tests + unit tests
npm run build                       # build all workspaces
```

For more on the architecture (light DOM, composition rules, store, htmx
coordination), see [CLAUDE.md](CLAUDE.md) and [ARCHITECTURE.md](ARCHITECTURE.md).

## Using `@footyviz` packages

The `@footyviz/kitroom`, `@footyviz/locker-room`, and `@footyviz/tokens`
packages are published to **GitHub Packages**. GitHub Packages requires
authentication for both private and public reads, so consumers need a
`.npmrc` and a personal access token (PAT) with `read:packages` scope.

### 1. Create a token

Generate a classic or fine-grained PAT with the `read:packages` scope at
<https://github.com/settings/tokens>. Export it in your shell profile:

```bash
export GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
```

In CI inside the `Footyviz` org, the auto-injected `secrets.GITHUB_TOKEN`
already has the right scope — no extra setup.

### 2. Add a consumer `.npmrc`

In the consumer repo (or `~/.npmrc`):

```
@footyviz:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
always-auth=true
```

The `${GITHUB_TOKEN}` form lets npm resolve the env var at install time —
do not commit a literal token.

### 3. Install and import

```bash
npm install @footyviz/kitroom @footyviz/tokens
```

```ts
import '@footyviz/tokens/tokens.css';
import '@footyviz/kitroom/styles.css'; // global stylesheet for every <fv-*>
import '@footyviz/kitroom';            // side-effect import; registers all <fv-*> elements
```

Per-component CSS is also available à la carte — e.g.
`import '@footyviz/kitroom/styles/fv-button.css';` — if you need to load
only what you use.

For the composed formations:

```ts
import '@footyviz/kitroom';            // primitives must register first
import '@footyviz/locker-room';
```

### Troubleshooting auth

- **`npm ERR! 401 Unauthorized`** — `GITHUB_TOKEN` is unset or missing
  from the `.npmrc`. Verify `echo $GITHUB_TOKEN` resolves and the
  `_authToken=${GITHUB_TOKEN}` line is in scope (repo-root or `~/.npmrc`).
- **`npm ERR! 403 Forbidden`** — token is set but the scope is wrong.
  Classic PATs need `read:packages`; fine-grained PATs need
  `Packages: read` permission for the `Footyviz` org.
