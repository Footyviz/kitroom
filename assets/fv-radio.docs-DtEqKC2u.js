import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-ri9QLorm.js";import{a as r,o as i,s as a}from"./blocks-DCD1AnX_.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Default as s,Disabled as c,Group as l,Playground as u,n as d,t as f}from"./fv-radio.stories-CeRfst9H.js";function p(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(n.h1,{id:`fv-radio`,children:`fv-radio`}),`
`,(0,h.jsxs)(n.p,{children:[`A single radio control. Multiple radios sharing a `,(0,h.jsx)(n.code,{children:`data-group`}),` form a
single-select group: clicking one deselects all others with the same
`,(0,h.jsx)(n.code,{children:`data-group`}),` in the same root, then selects self. No wrapping
component is required.`]}),`
`,(0,h.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-html`,children:`<div role="radiogroup" aria-label="Competition filter">
  <fv-radio aria-checked="true" data-group="comps" data-value="all">
    <span data-role="dot"></span>
  </fv-radio>
  <fv-radio data-group="comps" data-value="followed">
    <span data-role="dot"></span>
  </fv-radio>
</div>
`})}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`<span data-role="dot">`}),` child must be present in the server output
— the component does not generate it.`]}),`
`,(0,h.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Attribute`}),(0,h.jsx)(n.th,{children:`Required`}),(0,h.jsx)(n.th,{children:`Values`}),(0,h.jsx)(n.th,{children:`Effect`})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`aria-checked`})}),(0,h.jsx)(n.td,{children:`yes`}),(0,h.jsxs)(n.td,{children:[(0,h.jsx)(n.code,{children:`true`}),` `,(0,h.jsx)(n.code,{children:`false`})]}),(0,h.jsx)(n.td,{children:`reflects state`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`data-group`})}),(0,h.jsx)(n.td,{children:`yes`}),(0,h.jsx)(n.td,{children:`string`}),(0,h.jsx)(n.td,{children:`identifies the single-select group`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`data-value`})}),(0,h.jsx)(n.td,{children:`no`}),(0,h.jsx)(n.td,{children:`string`}),(0,h.jsxs)(n.td,{children:[`included in the dispatched `,(0,h.jsx)(n.code,{children:`change`}),` event`]})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`aria-disabled`})}),(0,h.jsx)(n.td,{children:`no`}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`true`})}),(0,h.jsx)(n.td,{children:`dims and ignores click / keyboard`})]})]})]}),`
`,(0,h.jsxs)(n.p,{children:[`The component sets `,(0,h.jsx)(n.code,{children:`role="radio"`}),` and `,(0,h.jsx)(n.code,{children:`tabindex`}),` on first connection.`]}),`
`,(0,h.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Token`}),(0,h.jsx)(n.th,{children:`Where`})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--neutral-300`})}),(0,h.jsx)(n.td,{children:`unchecked border`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--neutral-1000`})}),(0,h.jsx)(n.td,{children:`dot fill`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--radius-full`})}),(0,h.jsx)(n.td,{children:`circle radius`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--accent`})}),(0,h.jsxs)(n.td,{children:[(0,h.jsx)(n.code,{children:`:focus-visible`}),` outline`]})]})]})]}),`
`,(0,h.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Event`}),(0,h.jsx)(n.th,{children:`When`}),(0,h.jsx)(n.th,{children:`Detail`})]})}),(0,h.jsx)(n.tbody,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`change`})}),(0,h.jsx)(n.td,{children:`After this radio is selected`}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`{ value: string }`})})]})})]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`change`}),` event bubbles, so a parent group container can listen at
one level. Sibling deselection does not fire `,(0,h.jsx)(n.code,{children:`change`}),` events.`]}),`
`,(0,h.jsx)(n.h2,{id:`store-interaction`,children:`Store interaction`}),`
`,(0,h.jsx)(n.p,{children:`None.`}),`
`,(0,h.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,h.jsx)(i,{of:s}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(i,{of:u})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=n(),o(),a(),d()}))();export{m as default};