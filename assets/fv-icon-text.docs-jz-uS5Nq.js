import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Default as s,Horizontal as c,Playground as l,n as u,t as d}from"./fv-icon-text.stories-Cc4haxub.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`fv-icon-text`,children:`fv-icon-text`}),`
`,(0,m.jsxs)(n.p,{children:[`A light-DOM layout primitive that composes an icon with a text label.
Used as a building block for higher-level controls (tab bar, chips with
icons, future composites). Pure CSS-driven layout — the component
registers a class only so the global `,(0,m.jsx)(n.code,{children:`:not(:defined)`}),` FOUC rule applies.`]}),`
`,(0,m.jsxs)(n.p,{children:[`The component `,(0,m.jsx)(n.strong,{children:`does not`}),` generate icons or labels. Both children are
expected to be present in the server-rendered HTML.`]}),`
`,(0,m.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-html`,children:`<fv-icon-text data-direction="column">
  <svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true">…</svg>
  <span data-role="label">Live</span>
</fv-icon-text>
`})}),`
`,(0,m.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Attribute`}),(0,m.jsx)(n.th,{children:`Required`}),(0,m.jsx)(n.th,{children:`Values`}),(0,m.jsx)(n.th,{children:`Effect`})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-direction`})}),(0,m.jsx)(n.td,{children:`no`}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`column`}),` (default) `,(0,m.jsx)(n.code,{children:`row`})]}),(0,m.jsx)(n.td,{children:`flex direction`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-align`})}),(0,m.jsx)(n.td,{children:`no`}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`center`}),` (default) `,(0,m.jsx)(n.code,{children:`start`}),` `,(0,m.jsx)(n.code,{children:`end`})]}),(0,m.jsx)(n.td,{children:`cross-axis alignment`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-gap`})}),(0,m.jsx)(n.td,{children:`no`}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`xs`}),` `,(0,m.jsx)(n.code,{children:`sm`}),` `,(0,m.jsx)(n.code,{children:`md`}),` `,(0,m.jsx)(n.code,{children:`lg`}),` (or unset)`]}),(0,m.jsx)(n.td,{children:`gap between icon and label`})]})]})]}),`
`,(0,m.jsx)(n.h2,{id:`roles-for-child-elements`,children:`Roles for child elements`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Selector`}),(0,m.jsx)(n.th,{children:`Used by`})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`[data-role="icon"]`})}),(0,m.jsx)(n.td,{children:`the icon element (any tag)`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`[data-role="label"]`})}),(0,m.jsx)(n.td,{children:`the label element (any tag)`})]})]})]}),`
`,(0,m.jsx)(n.p,{children:`Both children are optional structurally — if either is missing, the
component does nothing (no errors). Stylesheet rules just have nothing
to target.`}),`
`,(0,m.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Token`}),(0,m.jsx)(n.th,{children:`Where`})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--font-sans`})}),(0,m.jsx)(n.td,{children:`label font family`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--fw-medium`})}),(0,m.jsx)(n.td,{children:`label font weight`})]})]})]}),`
`,(0,m.jsxs)(n.p,{children:[`Other geometry uses literal pixel values tuned for the tabbar use case;
adjust per consumer with `,(0,m.jsx)(n.code,{children:`data-gap`}),` or per-instance CSS.`]}),`
`,(0,m.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,m.jsx)(n.p,{children:`None.`}),`
`,(0,m.jsx)(n.h2,{id:`composition-example`,children:`Composition example`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-html`,children:`<a href="/live" role="tab" data-value="live" aria-current="page">
  <fv-icon-text data-direction="column">
    <svg data-role="icon" …></svg>
    <span data-role="label">Live</span>
  </fv-icon-text>
  <span data-role="indicator"></span>
</a>
`})}),`
`,(0,m.jsxs)(n.p,{children:[(0,m.jsx)(n.code,{children:`fv-icon-text`}),` and the parent `,(0,m.jsx)(n.code,{children:`<a role="tab">`}),` know nothing about each
other. They upgrade independently.`]}),`
`,(0,m.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,m.jsx)(i,{of:s}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(i,{of:l})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),o(),a(),u()}))();export{p as default};