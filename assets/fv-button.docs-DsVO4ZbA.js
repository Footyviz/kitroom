import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-ri9QLorm.js";import{a as r,o as i,s as a}from"./blocks-DCD1AnX_.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Hierarchy as s,OnDark as c,Playground as l,Sizes as u,States as d,WithIcon as f,n as p,t as m}from"./fv-button.stories-CvK1hXX8.js";function h(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(n.h1,{id:`fv-button`,children:`fv-button`}),`
`,(0,_.jsxs)(n.p,{children:[`Light-DOM button. The host `,(0,_.jsx)(n.strong,{children:`is`}),` the interactive element — `,(0,_.jsx)(n.code,{children:`role="button"`}),`,
`,(0,_.jsx)(n.code,{children:`tabindex="0"`}),` — there is no inner `,(0,_.jsx)(n.code,{children:`<button>`}),` and no shadow root. Composition
is the API: any leading `,(0,_.jsx)(n.code,{children:`<fv-icon>`}),`, label text, and trailing
`,(0,_.jsx)(n.code,{children:`<fv-button-badge>`}),` are placed as children. CSS uses `,(0,_.jsx)(n.code,{children:`:has()`}),` to react
(e.g. icon-only sizing collapses the button into a square automatically).`]}),`
`,(0,_.jsxs)(n.p,{children:[`Default variant is `,(0,_.jsx)(n.strong,{children:`secondary`}),` (white card on light); default size is
`,(0,_.jsx)(n.strong,{children:`medium`}),` (no `,(0,_.jsx)(n.code,{children:`data-size`}),` attribute).`]}),`
`,(0,_.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-html`,children:`<fv-button data-variant="primary">Open match</fv-button>

<fv-button data-variant="cream">
  <fv-icon name="live"></fv-icon>
  Watch live
</fv-button>

<fv-button data-variant="secondary" aria-label="Share">
  <fv-icon name="share"></fv-icon>
</fv-button>

<fv-button data-variant="primary" data-loading>Loading</fv-button>
<fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>
`})}),`
`,(0,_.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Attribute`}),(0,_.jsx)(n.th,{children:`Required`}),(0,_.jsx)(n.th,{children:`Values`}),(0,_.jsx)(n.th,{children:`Effect`})]})}),(0,_.jsxs)(n.tbody,{children:[(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`data-variant`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`primary`}),` `,(0,_.jsx)(n.code,{children:`cream`}),` `,(0,_.jsx)(n.code,{children:`secondary`}),` `,(0,_.jsx)(n.code,{children:`outline`}),` `,(0,_.jsx)(n.code,{children:`ghost`}),` `,(0,_.jsx)(n.code,{children:`destructive`})]}),(0,_.jsxs)(n.td,{children:[`visual treatment; default = `,(0,_.jsx)(n.code,{children:`secondary`})]})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`data-size`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`xs`}),` `,(0,_.jsx)(n.code,{children:`sm`}),` `,(0,_.jsx)(n.code,{children:`lg`})]}),(0,_.jsx)(n.td,{children:`size ladder; default = medium (no attribute)`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`data-loading`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsx)(n.td,{children:`(presence)`}),(0,_.jsxs)(n.td,{children:[`renders a spinner, blocks click + keyboard, sets `,(0,_.jsx)(n.code,{children:`tabindex="-1"`})]})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`aria-disabled`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`"true"`})}),(0,_.jsxs)(n.td,{children:[`dims, blocks click + keyboard, sets `,(0,_.jsx)(n.code,{children:`tabindex="-1"`})]})]})]})]}),`
`,(0,_.jsx)(n.h2,{id:`composition`,children:`Composition`}),`
`,(0,_.jsx)(n.p,{children:`Content is supplied as children. CSS keys off composition:`}),`
`,(0,_.jsxs)(n.ul,{children:[`
`,(0,_.jsxs)(n.li,{children:[`A single `,(0,_.jsx)(n.code,{children:`<fv-icon>`}),` child (and nothing else) → button collapses into a
square icon button. Provide `,(0,_.jsx)(n.code,{children:`aria-label`}),` for accessibility.`]}),`
`,(0,_.jsxs)(n.li,{children:[`A leading `,(0,_.jsx)(n.code,{children:`<fv-icon>`}),` followed by text → renders the icon-with-label
pattern with an 8px gap.`]}),`
`,(0,_.jsxs)(n.li,{children:[`A trailing `,(0,_.jsx)(n.code,{children:`<fv-button-badge>`}),` child → renders the count-badge pattern.`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Event`}),(0,_.jsx)(n.th,{children:`When`}),(0,_.jsx)(n.th,{children:`Detail`})]})}),(0,_.jsx)(n.tbody,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`click`})}),(0,_.jsx)(n.td,{children:`Mouse click, or Space/Enter while focused`}),(0,_.jsx)(n.td,{children:`(native)`})]})})]}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`aria-disabled="true"`}),` and `,(0,_.jsx)(n.code,{children:`data-loading`}),` both block the click. The
component does not dispatch any custom events of its own.`]}),`
`,(0,_.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Token`}),(0,_.jsx)(n.th,{children:`Where`})]})}),(0,_.jsxs)(n.tbody,{children:[(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--neutral-1000`})}),(0,_.jsx)(n.td,{children:`primary background`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--neutral-700`})}),(0,_.jsx)(n.td,{children:`primary hover`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--bg-elev`}),`, `,(0,_.jsx)(n.code,{children:`--fg`}),`, `,(0,_.jsx)(n.code,{children:`--border`})]}),(0,_.jsx)(n.td,{children:`secondary surface, text, border`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--border-strong`})}),(0,_.jsx)(n.td,{children:`outline variant border`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--neutral-100`})}),(0,_.jsx)(n.td,{children:`secondary / ghost hover`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--font-sans`}),`, `,(0,_.jsx)(n.code,{children:`--fw-medium`})]}),(0,_.jsx)(n.td,{children:`type`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--dur-fast`}),`, `,(0,_.jsx)(n.code,{children:`--ease`}),`, `,(0,_.jsx)(n.code,{children:`--dur-instant`})]}),(0,_.jsx)(n.td,{children:`transitions`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--space-2`})}),(0,_.jsx)(n.td,{children:`icon-text gap`})]})]})]}),`
`,(0,_.jsx)(n.p,{children:`Cream and destructive variants use literal hex values from the design
spec; no token group exists for them yet.`}),`
`,(0,_.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsx)(i,{of:u}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(i,{of:c})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=n(),o(),a(),p()}))();export{g as default};