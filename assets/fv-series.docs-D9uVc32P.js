import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{FormVariants as s,MaxVisible as c,Playground as l,n as u,t as d}from"./fv-series.stories-CGITkKyU.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`fv-series`,children:`fv-series`}),`
`,(0,m.jsxs)(n.p,{children:[`A horizontal row of small dots representing a sequence of recent
results — typically wins (`,(0,m.jsx)(n.code,{children:`pos`}),`), draws (`,(0,m.jsx)(n.code,{children:`warn`}),`), and losses (`,(0,m.jsx)(n.code,{children:`neg`}),`).
The host is `,(0,m.jsx)(n.code,{children:`role="img"`}),` with a consumer-supplied `,(0,m.jsx)(n.code,{children:`aria-label`}),`
describing the sequence in words, because color is never the only
signal: a screen reader has to be able to read the sequence even when
the dots cannot be perceived.`]}),`
`,(0,m.jsxs)(n.p,{children:[`Children are bare `,(0,m.jsx)(n.code,{children:`<span data-pip="...">`}),` elements. The component does
not generate them — consumers compose the row, which keeps the data
shape ("five recent results") server-renderable as plain HTML.`]}),`
`,(0,m.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-html`,children:`<fv-series aria-label="Last 5: W W D W W">
  <span data-pip="pos"></span>
  <span data-pip="pos"></span>
  <span data-pip="warn"></span>
  <span data-pip="pos"></span>
  <span data-pip="pos"></span>
</fv-series>
`})}),`
`,(0,m.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Attribute`}),(0,m.jsx)(n.th,{children:`On`}),(0,m.jsx)(n.th,{children:`Required`}),(0,m.jsx)(n.th,{children:`Effect`})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`aria-label`})}),(0,m.jsx)(n.td,{children:`host`}),(0,m.jsx)(n.td,{children:`yes`}),(0,m.jsx)(n.td,{children:`Plain-text description of the sequence. Required for accessibility.`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-max-visible`})}),(0,m.jsx)(n.td,{children:`host`}),(0,m.jsx)(n.td,{children:`no`}),(0,m.jsxs)(n.td,{children:[`Integer 1-10. When set, only the last N children are visible — earlier children are hidden by CSS (`,(0,m.jsx)(n.code,{children:`:nth-last-child`}),`), keeping the order semantic for assistive tech.`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-pip`})}),(0,m.jsx)(n.td,{children:`child`}),(0,m.jsx)(n.td,{children:`yes (per child)`}),(0,m.jsxs)(n.td,{children:[`Pip color: `,(0,m.jsx)(n.code,{children:`pos`}),` (positive / win), `,(0,m.jsx)(n.code,{children:`warn`}),` (caution / draw), `,(0,m.jsx)(n.code,{children:`neg`}),` (negative / loss). Other values render as the neutral default.`]})]})]})]}),`
`,(0,m.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Token`}),(0,m.jsx)(n.th,{children:`Where`})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--positive`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`data-pip="pos"`}),` background`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--warning`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`data-pip="warn"`}),` background`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--negative`})}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`data-pip="neg"`}),` background`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--neutral-300`})}),(0,m.jsx)(n.td,{children:`unknown / default pip`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--radius-full`})}),(0,m.jsx)(n.td,{children:`dot shape`})]})]})]}),`
`,(0,m.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,m.jsx)(n.p,{children:`None.`}),`
`,(0,m.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,m.jsx)(i,{of:l}),`
`,(0,m.jsx)(i,{of:s}),`
`,(0,m.jsx)(i,{of:c})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),o(),a(),u()}))();export{p as default};