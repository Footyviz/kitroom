---
"@footyviz/kitroom": minor
"@footyviz/styles": minor
---

Add six light-DOM controls following the new architecture pattern:

- `<fv-checkbox>` — binary checkbox; ink default, accent variant for user-valued filters
- `<fv-radio>` — single radio with `data-group` for ad-hoc single-select groups (no wrapper required)
- `<fv-segmented>` — pill-style single-select group with arrow-key navigation
- `<fv-chip>` — label / badge / token; 11 variants including the live pulsing chip and closable filter chips
- `<fv-slider>` — single-thumb horizontal slider with pointer drag, click-to-jump, and keyboard control (Arrow / Home / End / PageUp / PageDown)
- `<fv-tabbar>` — bottom-of-screen navigation; tabs are `<a>` or `<button>` with `role="tab"`; `aria-current="page"` marks the active tab

All six follow the ARCHITECTURE.md contract: server renders the markup, the component enhances it in `connectedCallback`, listeners are removed in `disconnectedCallback`. Each ships eight stories — visual variants plus an interaction test and a `SurvivesHtmxSwap` test that verifies the auto-upgrade path.
