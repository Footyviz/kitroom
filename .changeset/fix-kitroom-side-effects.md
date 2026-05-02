---
"@footyviz/kitroom": patch
---

Fix `<fv-*>` elements staying invisible in production builds.

The `sideEffects` field added in v1.1.0 listed only `**/*.css`, which told
bundlers that none of the package's JS modules carry side effects. Every
component file self-registers its tag at module top level
(`customElements.define('fv-button', FvButton)` etc.) — exactly the kind
of side effect that allow-list excluded. As a result, production bundles
that imported the package only for its side effects (`import
'@footyviz/kitroom'`) tree-shook the registrations away, leaving the tags
undefined and the global `:not(:defined) { visibility: hidden }` FOUC
guard hiding them forever.

`sideEffects` now also covers `**/*.js` and `**/*.ts` so component
modules survive tree-shaking. Symptom on GitHub Pages: every kitroom
component (button, icon, chip, etc.) was invisible while locker-room
components rendered normally — fixed.
