import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-ri9QLorm.js";import{a as r,o as i,s as a}from"./blocks-DCD1AnX_.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Closable as s,Counts as c,Default as l,Playground as u,StatusVariants as d,Teams as f,n as p,t as m}from"./fv-chip.stories-BabjP4H5.js";function h(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(n.h1,{id:`fv-chip`,children:`fv-chip`}),`
`,(0,_.jsxs)(n.p,{children:[`A pill-shaped label / badge / token. Visual-only by default. Add a
`,(0,_.jsx)(n.code,{children:`<button data-action="close">`}),` child for closable filter chips — the
component dispatches a bubbling `,(0,_.jsx)(n.code,{children:`close`}),` event when the button is
clicked; the consumer decides whether to remove the chip from the DOM.`]}),`
`,(0,_.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-html`,children:`<fv-chip data-variant="info">VAR review</fv-chip>

<fv-chip data-closable data-variant="accent" data-value="premier">
  Premier League
  <button data-action="close" aria-label="Remove Premier League">
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4">
      <path d="M1 1l6 6M7 1L1 7" />
    </svg>
  </button>
</fv-chip>
`})}),`
`,(0,_.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Attribute`}),(0,_.jsx)(n.th,{children:`Required`}),(0,_.jsx)(n.th,{children:`Values`}),(0,_.jsx)(n.th,{children:`Effect`})]})}),(0,_.jsxs)(n.tbody,{children:[(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`data-variant`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`mono`}),` `,(0,_.jsx)(n.code,{children:`strong`}),` `,(0,_.jsx)(n.code,{children:`accent`}),` `,(0,_.jsx)(n.code,{children:`info`}),` `,(0,_.jsx)(n.code,{children:`warn`}),` `,(0,_.jsx)(n.code,{children:`neg`}),` `,(0,_.jsx)(n.code,{children:`pos`}),` `,(0,_.jsx)(n.code,{children:`outline`}),` `,(0,_.jsx)(n.code,{children:`live`}),` `,(0,_.jsx)(n.code,{children:`team`}),` `,(0,_.jsx)(n.code,{children:`count`})]}),(0,_.jsx)(n.td,{children:`hue / typography treatment`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`data-closable`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsx)(n.td,{children:`(presence)`}),(0,_.jsx)(n.td,{children:`reduces right padding for the X`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`data-value`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsx)(n.td,{children:`string`}),(0,_.jsxs)(n.td,{children:[`included in the `,(0,_.jsx)(n.code,{children:`close`}),` event`]})]})]})]}),`
`,(0,_.jsxs)(n.p,{children:[`The `,(0,_.jsx)(n.code,{children:`live`}),` variant runs a CSS pulse animation on the inner dot,
disabled under `,(0,_.jsx)(n.code,{children:`prefers-reduced-motion`}),`.`]}),`
`,(0,_.jsx)(n.h2,{id:`roles-for-child-elements`,children:`Roles for child elements`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Selector`}),(0,_.jsx)(n.th,{children:`Used by`})]})}),(0,_.jsxs)(n.tbody,{children:[(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`[data-role="dot"]`})}),(0,_.jsx)(n.td,{children:`colored status dot`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`[data-role="crest"]`})}),(0,_.jsx)(n.td,{children:`team crest disc (team variant)`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`[data-role="count"]`})}),(0,_.jsx)(n.td,{children:`bold count cell (count variant)`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`[data-action="close"]`})}),(0,_.jsx)(n.td,{children:`close button (closable chip)`})]})]})]}),`
`,(0,_.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Token`}),(0,_.jsx)(n.th,{children:`Where`})]})}),(0,_.jsxs)(n.tbody,{children:[(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--neutral-0`})}),(0,_.jsx)(n.td,{children:`default chip background`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--neutral-200`})}),(0,_.jsx)(n.td,{children:`default chip border`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--neutral-1000`})}),(0,_.jsx)(n.td,{children:`strong variant + count cell background`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--toggle-on`})}),(0,_.jsx)(n.td,{children:`accent + live variant background`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--radius-full`})}),(0,_.jsx)(n.td,{children:`pill shape`})]})]})]}),`
`,(0,_.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Event`}),(0,_.jsx)(n.th,{children:`When`}),(0,_.jsx)(n.th,{children:`Detail`})]})}),(0,_.jsx)(n.tbody,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`close`})}),(0,_.jsxs)(n.td,{children:[`After `,(0,_.jsx)(n.code,{children:`[data-action="close"]`}),` click`]}),(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`{ value: string }`})})]})})]}),`
`,(0,_.jsx)(n.h2,{id:`store-interaction`,children:`Store interaction`}),`
`,(0,_.jsx)(n.p,{children:`None.`}),`
`,(0,_.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(i,{of:c}),`
`,(0,_.jsx)(i,{of:u})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=n(),o(),a(),p()}))();export{g as default};