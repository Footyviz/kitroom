import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Compact as s,Default as c,Featured as l,FormLayout as u,MultiRow as d,n as f,t as p}from"./fv-stat-row.stories-FG36qe99.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`fv-stat-row`,children:`fv-stat-row`}),`
`,(0,g.jsxs)(n.p,{children:[`A single-stat comparison row: a 5-column grid (value, bar, label, bar,
value). Used inside `,(0,g.jsx)(n.code,{children:`<fv-match-card>`}),` and standalone in stat-list pages.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The component `,(0,g.jsx)(n.strong,{children:`does not`}),` generate values, labels, bars, or series.
All content is supplied as children with `,(0,g.jsx)(n.code,{children:`data-role`}),` markers; the row's
job is to place them in its grid and to synthesise an `,(0,g.jsx)(n.code,{children:`aria-label`}),` from
their text. Bars are authored as `,(0,g.jsx)(n.code,{children:`<fv-ratio-bar>`}),` children carrying
their own `,(0,g.jsx)(n.code,{children:`--pct`}),` — they're optional, so a row without bars renders a
plain value/label/value comparison.`]}),`
`,(0,g.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-html`,children:`<fv-stat-row>
  <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 67%"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">xG</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
</fv-stat-row>
`})}),`
`,(0,g.jsxs)(n.p,{children:[`For the featured (hero metric) row, add `,(0,g.jsx)(n.code,{children:`data-featured`}),` on the host and
`,(0,g.jsx)(n.code,{children:`data-tone="accent"`}),` on the home-bar child:`]}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-html`,children:`<fv-stat-row data-featured>
  <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">xG</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
</fv-stat-row>
`})}),`
`,(0,g.jsx)(n.h2,{id:`host-attributes`,children:`Host attributes`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Attribute`}),(0,g.jsx)(n.th,{children:`Required`}),(0,g.jsx)(n.th,{children:`Values`}),(0,g.jsx)(n.th,{children:`Effect`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-featured`})}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsx)(n.td,{children:`(boolean — presence)`}),(0,g.jsxs)(n.td,{children:[`Hero metric. Tinted surface; pair with `,(0,g.jsx)(n.code,{children:`data-tone="accent"`}),` on the home bar.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-density`})}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`default`}),` (default) `,(0,g.jsx)(n.code,{children:`compact`})]}),(0,g.jsx)(n.td,{children:`Compact tightens padding and column gap.`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-layout`})}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[`(default) `,(0,g.jsx)(n.code,{children:`form`})]}),(0,g.jsxs)(n.td,{children:[`Lets `,(0,g.jsx)(n.code,{children:`<fv-series>`}),` children fill the bar columns.`]})]})]})]}),`
`,(0,g.jsx)(n.h2,{id:`roles-for-child-elements`,children:`Roles for child elements`}),`
`,(0,g.jsx)(n.p,{children:`Default layout:`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Selector`}),(0,g.jsx)(n.th,{children:`Cell`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`[data-role="home-value"]`})}),(0,g.jsx)(n.td,{children:`left value`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`[data-role="home-bar"]`})}),(0,g.jsxs)(n.td,{children:[`left proportion bar (optional `,(0,g.jsx)(n.code,{children:`<fv-ratio-bar>`}),`)`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`[data-role="label"]`})}),(0,g.jsx)(n.td,{children:`center label`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`[data-role="away-bar"]`})}),(0,g.jsxs)(n.td,{children:[`right proportion bar (optional `,(0,g.jsx)(n.code,{children:`<fv-ratio-bar data-direction="rtl">`}),`)`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`[data-role="away-value"]`})}),(0,g.jsx)(n.td,{children:`right value`})]})]})]}),`
`,(0,g.jsxs)(n.p,{children:[`Form layout (`,(0,g.jsx)(n.code,{children:`data-layout="form"`}),`):`]}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Selector`}),(0,g.jsx)(n.th,{children:`Cell`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`[data-role="home-form"]`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`<fv-series>`}),` filling the bar column`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`[data-role="label"]`})}),(0,g.jsx)(n.td,{children:`center label`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`[data-role="away-form"]`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`<fv-series>`}),` filling the bar column`]})]})]})]}),`
`,(0,g.jsx)(n.p,{children:`The component reads existing children — it does not synthesize them.
Per ARCHITECTURE.md, anything beyond variant/size/density attributes
arrives as DOM, not props.`}),`
`,(0,g.jsx)(n.h2,{id:`composition-rule`,children:`Composition rule`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`fv-stat-row`}),` does not import `,(0,g.jsx)(n.code,{children:`fv-text`}),`, `,(0,g.jsx)(n.code,{children:`fv-ratio-bar`}),`, or `,(0,g.jsx)(n.code,{children:`fv-series`}),`.
The consumer includes whichever primitives they want as children; CSS
targets the `,(0,g.jsx)(n.code,{children:`data-role`}),` selector regardless of tag name. The examples
use `,(0,g.jsx)(n.code,{children:`<fv-text>`}),` for typographic ramp and `,(0,g.jsx)(n.code,{children:`<fv-ratio-bar>`}),` for the
proportion bars, but a plain `,(0,g.jsx)(n.code,{children:`<span data-role="home-value">`}),` would
render too — just without the mono numerics. Bars themselves are
optional: a row without `,(0,g.jsx)(n.code,{children:`home-bar`}),` / `,(0,g.jsx)(n.code,{children:`away-bar`}),` children renders as a
plain three-column value/label/value comparison.`]}),`
`,(0,g.jsx)(n.h2,{id:`a11y-behavior`,children:`a11y behavior`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`The host gets `,(0,g.jsx)(n.code,{children:`role="row"`}),` (set on connect if not already present).`]}),`
`,(0,g.jsxs)(n.li,{children:[`Each child with a known value/label `,(0,g.jsx)(n.code,{children:`data-role`}),` gets `,(0,g.jsx)(n.code,{children:`role="cell"`}),`.`]}),`
`,(0,g.jsxs)(n.li,{children:[`Each child with a `,(0,g.jsx)(n.code,{children:`home-bar`}),` / `,(0,g.jsx)(n.code,{children:`away-bar`}),` data-role gets
`,(0,g.jsx)(n.code,{children:`role="presentation"`}),` (the `,(0,g.jsx)(n.code,{children:`<fv-ratio-bar>`}),` primitive also marks
itself `,(0,g.jsx)(n.code,{children:`aria-hidden="true"`}),`).`]}),`
`,(0,g.jsxs)(n.li,{children:[`The component builds `,(0,g.jsx)(n.code,{children:`aria-label`}),` from child text content
(`,(0,g.jsx)(n.code,{children:`"<label>: <home> vs <away>"`}),`) and re-syncs via a `,(0,g.jsx)(n.code,{children:`MutationObserver`}),`
on subtree text changes. The observer is disconnected on
`,(0,g.jsx)(n.code,{children:`disconnectedCallback`}),`.`]}),`
`,(0,g.jsx)(n.li,{children:`Bars are presentational — they convey the same comparison the values
already state. No bar text is read aloud.`}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,g.jsxs)(n.p,{children:[`The row itself uses tokens for its surface and layout only — bar fills
live on `,(0,g.jsx)(n.code,{children:`<fv-ratio-bar>`}),`.`]}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Token`}),(0,g.jsx)(n.th,{children:`Where`})]})}),(0,g.jsx)(n.tbody,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--neutral-50`})}),(0,g.jsx)(n.td,{children:`Featured row surface tint`})]})})]}),`
`,(0,g.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,g.jsx)(n.p,{children:`None. The component is read-only: it observes content changes for
aria-label updates but never mutates structure or emits events.`}),`
`,(0,g.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(i,{of:d})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),o(),a(),f()}))();export{h as default};