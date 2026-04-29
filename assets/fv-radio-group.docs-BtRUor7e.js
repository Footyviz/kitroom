import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-ri9QLorm.js";import{a as r,o as i,s as a}from"./blocks-DCD1AnX_.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Default as s,Playground as c,n as l,t as u}from"./fv-radio-group.stories-CMu5bDC3.js";function d(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r,{of:u}),`
`,(0,p.jsx)(n.h1,{id:`fv-radio-group`,children:`fv-radio-group`}),`
`,(0,p.jsxs)(n.p,{children:[`A thin coordinator over `,(0,p.jsx)(n.code,{children:`<fv-radio>`}),` children. Owns
`,(0,p.jsx)(n.code,{children:`data-selected-value`}),`; keeps each child's `,(0,p.jsx)(n.code,{children:`aria-checked`}),` in sync.
Emits a bubbling `,(0,p.jsx)(n.code,{children:`change`}),` event when the selection moves
(programmatic changes only — child clicks already produce a bubbling
`,(0,p.jsx)(n.code,{children:`change`}),` from the radio itself).`]}),`
`,(0,p.jsxs)(n.p,{children:[`The group does `,(0,p.jsx)(n.strong,{children:`not`}),` import `,(0,p.jsx)(n.code,{children:`<fv-radio>`}),`. It identifies its children
by querying `,(0,p.jsx)(n.code,{children:`:scope > [data-value]`}),`, so the same coordinator works for
any future child variant.`]}),`
`,(0,p.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,p.jsx)(n.pre,{children:(0,p.jsx)(n.code,{className:`language-html`,children:`<fv-radio-group data-selected-value="all" aria-label="Competition filter">
  <label>
    <fv-radio data-value="all" aria-checked="true">
      <span data-role="dot"></span>
    </fv-radio>
    All comps
  </label>
  <label>
    <fv-radio data-value="followed" aria-checked="false">
      <span data-role="dot"></span>
    </fv-radio>
    Followed only
  </label>
</fv-radio-group>
`})}),`
`,(0,p.jsxs)(n.p,{children:[`The server should render `,(0,p.jsx)(n.code,{children:`aria-checked`}),` correctly on each radio (the
group will reconcile on connect anyway, but matching reduces the FOUC
window between parse and upgrade).`]}),`
`,(0,p.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Attribute`}),(0,p.jsx)(n.th,{children:`On`}),(0,p.jsx)(n.th,{children:`Required`}),(0,p.jsx)(n.th,{children:`Effect`})]})}),(0,p.jsxs)(n.tbody,{children:[(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`data-selected-value`})}),(0,p.jsx)(n.td,{children:`host`}),(0,p.jsx)(n.td,{children:`yes`}),(0,p.jsx)(n.td,{children:`identifies the currently-checked child`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`aria-label`})}),(0,p.jsx)(n.td,{children:`host`}),(0,p.jsx)(n.td,{children:`yes`}),(0,p.jsx)(n.td,{children:`accessible name for the radiogroup`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`data-direction`})}),(0,p.jsx)(n.td,{children:`host`}),(0,p.jsx)(n.td,{children:`no`}),(0,p.jsxs)(n.td,{children:[(0,p.jsx)(n.code,{children:`row`}),` lays children horizontally`]})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`data-value`})}),(0,p.jsx)(n.td,{children:`child`}),(0,p.jsx)(n.td,{children:`yes`}),(0,p.jsx)(n.td,{children:`identifies each option`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`aria-checked`})}),(0,p.jsx)(n.td,{children:`child`}),(0,p.jsx)(n.td,{children:`optional`}),(0,p.jsx)(n.td,{children:`server-set initial state; group reconciles`})]})]})]}),`
`,(0,p.jsx)(n.h2,{id:`coordination`,children:`Coordination`}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Direction`}),(0,p.jsx)(n.th,{children:`Mechanism`})]})}),(0,p.jsxs)(n.tbody,{children:[(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:`Parent → children (state push)`}),(0,p.jsxs)(n.td,{children:[`Setting `,(0,p.jsx)(n.code,{children:`data-selected-value`}),` triggers `,(0,p.jsx)(n.code,{children:`attributeChangedCallback`}),`, which broadcasts `,(0,p.jsx)(n.code,{children:`aria-checked`}),` onto each direct-descendant `,(0,p.jsx)(n.code,{children:`[data-value]`}),` child.`]})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:`Children → parent (user click)`}),(0,p.jsxs)(n.td,{children:[(0,p.jsx)(n.code,{children:`fv-radio`}),` dispatches a bubbling `,(0,p.jsx)(n.code,{children:`change`}),` event with `,(0,p.jsx)(n.code,{children:`{ value }`}),`. The group listens, updates its own `,(0,p.jsx)(n.code,{children:`data-selected-value`}),` (which re-runs the broadcast), and suppresses its own self-emit so consumers see exactly one `,(0,p.jsx)(n.code,{children:`change`}),` per click.`]})]})]})]}),`
`,(0,p.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Event`}),(0,p.jsx)(n.th,{children:`When`}),(0,p.jsx)(n.th,{children:`Detail`})]})}),(0,p.jsx)(n.tbody,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`change`})}),(0,p.jsxs)(n.td,{children:[`After PROGRAMMATIC `,(0,p.jsx)(n.code,{children:`data-selected-value`}),` set`]}),(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`{ value: string }`})})]})})]}),`
`,(0,p.jsxs)(n.p,{children:[`For user clicks, listen to the bubbling `,(0,p.jsx)(n.code,{children:`change`}),` from the inner
`,(0,p.jsx)(n.code,{children:`<fv-radio>`}),` instead — it fires exactly once and carries the same
`,(0,p.jsx)(n.code,{children:`{ value }`}),` payload.`]}),`
`,(0,p.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,p.jsxs)(n.table,{children:[(0,p.jsx)(n.thead,{children:(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.th,{children:`Token`}),(0,p.jsx)(n.th,{children:`Where`})]})}),(0,p.jsxs)(n.tbody,{children:[(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`--font-sans`})}),(0,p.jsx)(n.td,{children:`label font family`})]}),(0,p.jsxs)(n.tr,{children:[(0,p.jsx)(n.td,{children:(0,p.jsx)(n.code,{children:`--fg`})}),(0,p.jsx)(n.td,{children:`label color`})]})]})]}),`
`,(0,p.jsx)(n.h2,{id:`composition`,children:`Composition`}),`
`,(0,p.jsxs)(n.p,{children:[(0,p.jsx)(n.code,{children:`fv-radio-group`}),` and `,(0,p.jsx)(n.code,{children:`fv-radio`}),` are independent custom elements
registered at app startup. Neither imports the other. They communicate
via the public DOM contract only — `,(0,p.jsx)(n.code,{children:`data-value`}),` on children,
`,(0,p.jsx)(n.code,{children:`aria-checked`}),` written by the group, and the `,(0,p.jsx)(n.code,{children:`change`}),` event bubbling
up.`]}),`
`,(0,p.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,p.jsx)(i,{of:s}),`
`,(0,p.jsx)(i,{of:c})]})}function f(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,p.jsx)(n,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;e((()=>{p=n(),o(),a(),l()}))();export{f as default};