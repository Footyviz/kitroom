# FootyViz

A web component library for [FootyViz](https://github.com/Footyviz),
the football analytics platform. Light-DOM custom elements that enhance
server-rendered HTML — built to compose with htmx, no virtual DOM, no
shadow boundaries.

## Storybook

The current set of components and their docs live at
**<https://footyviz.github.io/home-ground/>**. Every story is also a
test — `play` functions run as real Vitest cases in headless Chromium.

## Workspaces

| Package | Purpose |
|---|---|
| [`@footyviz/tokens`](packages/tokens) | Design tokens (CSS variables, type styles, fonts, brand SVGs) |
| [`@footyviz/styles`](packages/styles) | Global stylesheet for the components |
| [`@footyviz/kitroom`](packages/kitroom) | The `<fv-*>` web components |
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
