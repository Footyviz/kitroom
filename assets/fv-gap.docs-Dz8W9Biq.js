import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{InToolbar as s,Playground as c,Scale as l,n as u,t as d}from"./fv-gap.stories-CxJo2NPB.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`fv-gap`,children:`fv-gap`}),`
`,(0,m.jsxs)(n.p,{children:[`Ad-hoc horizontal whitespace between two siblings, sized from the
9-step spacing scale (see `,(0,m.jsx)(n.code,{children:`Design Specs / Spacing / Scale`}),`). Inline-block
with `,(0,m.jsx)(n.code,{children:`flex-shrink: 0`}),`, so it survives row-flex parents. `,(0,m.jsx)(n.code,{children:`height: 0`}),` —
never adds vertical space. Zero JS.`]}),`
`,(0,m.jsxs)(n.p,{children:[`Reach for it when flex `,(0,m.jsx)(n.code,{children:`gap`}),` doesn't fit, e.g. when two clusters of
buttons in the same row need a wider gap between groups than within
each group.`]}),`
`,(0,m.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-html`,children:`<fv-button data-variant="secondary">Filter</fv-button>
<fv-gap data-size="2"></fv-gap>
<fv-button data-variant="secondary">Compare</fv-button>

<fv-gap data-size="6"></fv-gap>

<fv-button data-variant="primary">Open match</fv-button>
`})}),`
`,(0,m.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Attribute`}),(0,m.jsx)(n.th,{children:`Values`}),(0,m.jsx)(n.th,{children:`Resolves to`})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`1`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-1)`}),` — 4px`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`2`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-2)`}),` — 8px`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`3`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-3)`}),` — 12px`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`4`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-4)`}),` — 16px`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`6`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-6)`}),` — 24px`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`8`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-8)`}),` — 32px`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`12`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-12)`}),` — 48px`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`16`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-16)`}),` — 64px`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-size`})}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`24`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`var(--space-24)`}),` — 96px`]})]})]})]}),`
`,(0,m.jsxs)(n.p,{children:[`Omitting `,(0,m.jsx)(n.code,{children:`data-size`}),` collapses to width 0. Off-scale tokens (5, 10, 20)
are deliberately not exposed — the spec page only documents the 9 steps
above.`]}),`
`,(0,m.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,m.jsx)(n.p,{children:`None.`}),`
`,(0,m.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Token`}),(0,m.jsx)(n.th,{children:`Where`})]})}),(0,m.jsx)(n.tbody,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--space-{1..24}`})}),(0,m.jsxs)(n.td,{children:[`width per `,(0,m.jsx)(n.code,{children:`data-size`})]})]})})]}),`
`,(0,m.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(i,{of:s})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),o(),a(),u()}))();export{p as default};