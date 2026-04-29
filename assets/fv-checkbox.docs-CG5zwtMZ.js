import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-ri9QLorm.js";import{a as r,o as i,s as a}from"./blocks-DCD1AnX_.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Default as s,Disabled as c,Group as l,Playground as u,n as d,t as f}from"./fv-checkbox.stories-wvKhcAsG.js";function p(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(n.h1,{id:`fv-checkbox`,children:`fv-checkbox`}),`
`,(0,h.jsxs)(n.p,{children:[`A binary checkbox. Light-DOM, server-renderable. Default fill is ink
black; `,(0,h.jsx)(n.code,{children:`data-variant="accent"`}),` switches to the signal-lime accent for
"user-valued" filters (favorites, big-chance highlights).`]}),`
`,(0,h.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-html`,children:`<fv-checkbox aria-checked="false" data-variant="accent">
  <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
       stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 8 7 12 13 4" />
  </svg>
</fv-checkbox>
`})}),`
`,(0,h.jsxs)(n.p,{children:[`The checkmark `,(0,h.jsx)(n.code,{children:`<svg data-role="check">`}),` must be present in the server
output. CSS hides it when `,(0,h.jsx)(n.code,{children:`aria-checked="false"`}),`.`]}),`
`,(0,h.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Attribute`}),(0,h.jsx)(n.th,{children:`Required`}),(0,h.jsx)(n.th,{children:`Values`}),(0,h.jsx)(n.th,{children:`Effect`})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`aria-checked`})}),(0,h.jsx)(n.td,{children:`yes`}),(0,h.jsxs)(n.td,{children:[(0,h.jsx)(n.code,{children:`true`}),` `,(0,h.jsx)(n.code,{children:`false`})]}),(0,h.jsx)(n.td,{children:`reflects state; toggled on user input`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`data-variant`})}),(0,h.jsx)(n.td,{children:`no`}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`accent`})}),(0,h.jsx)(n.td,{children:`switches checked fill to lime`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`aria-disabled`})}),(0,h.jsx)(n.td,{children:`no`}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`true`})}),(0,h.jsx)(n.td,{children:`dims and ignores click / keyboard`})]})]})]}),`
`,(0,h.jsxs)(n.p,{children:[`The component sets `,(0,h.jsx)(n.code,{children:`role="checkbox"`}),` and `,(0,h.jsx)(n.code,{children:`tabindex`}),` on first connection.`]}),`
`,(0,h.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Token`}),(0,h.jsx)(n.th,{children:`Where`})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--neutral-300`})}),(0,h.jsx)(n.td,{children:`unchecked border`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--neutral-1000`})}),(0,h.jsx)(n.td,{children:`default checked fill`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--toggle-on`})}),(0,h.jsx)(n.td,{children:`accent variant checked fill`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--radius-md`})}),(0,h.jsx)(n.td,{children:`corner radius`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--accent`})}),(0,h.jsxs)(n.td,{children:[(0,h.jsx)(n.code,{children:`:focus-visible`}),` outline`]})]})]})]}),`
`,(0,h.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Event`}),(0,h.jsx)(n.th,{children:`When`}),(0,h.jsx)(n.th,{children:`Detail`})]})}),(0,h.jsx)(n.tbody,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`change`})}),(0,h.jsx)(n.td,{children:`After user click / Space`}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`{ checked: boolean }`})})]})})]}),`
`,(0,h.jsx)(n.h2,{id:`store-interaction`,children:`Store interaction`}),`
`,(0,h.jsx)(n.p,{children:`None.`}),`
`,(0,h.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,h.jsx)(i,{of:s}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(i,{of:u})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=n(),o(),a(),d()}))();export{m as default};