import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-ri9QLorm.js";import{a as r,o as i,s as a}from"./blocks-DCD1AnX_.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Default as s,Disabled as c,OnDark as l,Playground as u,n as d,t as f}from"./fv-toggle.stories-BY3Els55.js";function p(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r,{of:f}),`
`,(0,h.jsx)(n.h1,{id:`fv-toggle`,children:`fv-toggle`}),`
`,(0,h.jsxs)(n.p,{children:[`A binary on/off control. Light-DOM, server-renderable, enhanced in
`,(0,h.jsx)(n.code,{children:`connectedCallback`}),`. Use for user-valued switches (notifications,
favorites, opt-ins) by default; use the `,(0,h.jsx)(n.code,{children:`ink`}),` variant for system or
mode toggles (theme, audio).`]}),`
`,(0,h.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,h.jsx)(n.pre,{children:(0,h.jsx)(n.code,{className:`language-html`,children:`<fv-toggle aria-checked="false" data-variant="accent">
  <span data-role="knob"></span>
</fv-toggle>
`})}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`<span data-role="knob">`}),` child must be present in the server
output — the component does not generate it. The component sets
`,(0,h.jsx)(n.code,{children:`role="switch"`}),` and `,(0,h.jsx)(n.code,{children:`tabindex`}),` on first connection if the server
omitted them.`]}),`
`,(0,h.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Attribute`}),(0,h.jsx)(n.th,{children:`Required`}),(0,h.jsx)(n.th,{children:`Values`}),(0,h.jsx)(n.th,{children:`Effect`})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`aria-checked`})}),(0,h.jsx)(n.td,{children:`yes`}),(0,h.jsxs)(n.td,{children:[(0,h.jsx)(n.code,{children:`true`}),` `,(0,h.jsx)(n.code,{children:`false`})]}),(0,h.jsx)(n.td,{children:`reflects on/off; toggled on user input`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`data-variant`})}),(0,h.jsx)(n.td,{children:`no`}),(0,h.jsxs)(n.td,{children:[(0,h.jsx)(n.code,{children:`accent`}),` (default) `,(0,h.jsx)(n.code,{children:`ink`})]}),(0,h.jsx)(n.td,{children:`chooses on-state hue`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`data-size`})}),(0,h.jsx)(n.td,{children:`no`}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`lg`})}),(0,h.jsx)(n.td,{children:`swaps to 48×28 track / 24×24 knob`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`aria-disabled`})}),(0,h.jsx)(n.td,{children:`no`}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`true`})}),(0,h.jsx)(n.td,{children:`dims and ignores click / keyboard`})]})]})]}),`
`,(0,h.jsxs)(n.p,{children:[`The component initializes `,(0,h.jsx)(n.code,{children:`aria-checked="false"`}),`, `,(0,h.jsx)(n.code,{children:`role="switch"`}),`,
and `,(0,h.jsx)(n.code,{children:`tabindex="0"`}),` (or `,(0,h.jsx)(n.code,{children:`-1`}),` when disabled) if any are missing.`]}),`
`,(0,h.jsx)(n.h2,{id:`css-custom-properties`,children:`CSS custom properties`}),`
`,(0,h.jsxs)(n.p,{children:[`None today. Hue is selected via `,(0,h.jsx)(n.code,{children:`data-variant`}),`, not via custom
properties; per-instance dynamic colors aren't supported.`]}),`
`,(0,h.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Token`}),(0,h.jsx)(n.th,{children:`Where`})]})}),(0,h.jsxs)(n.tbody,{children:[(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--neutral-300`})}),(0,h.jsx)(n.td,{children:`off-state track background`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--toggle-on`})}),(0,h.jsx)(n.td,{children:`on-state, accent variant (signal lime)`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--neutral-1000`})}),(0,h.jsx)(n.td,{children:`on-state, ink variant`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--radius-full`})}),(0,h.jsx)(n.td,{children:`track + knob radius`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--dur-fast`})}),(0,h.jsx)(n.td,{children:`transition duration`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--ease`})}),(0,h.jsx)(n.td,{children:`transition timing function`})]}),(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`--accent`})}),(0,h.jsxs)(n.td,{children:[(0,h.jsx)(n.code,{children:`:focus-visible`}),` outline`]})]})]})]}),`
`,(0,h.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,h.jsxs)(n.table,{children:[(0,h.jsx)(n.thead,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.th,{children:`Event`}),(0,h.jsx)(n.th,{children:`When`}),(0,h.jsx)(n.th,{children:`Detail`})]})}),(0,h.jsx)(n.tbody,{children:(0,h.jsxs)(n.tr,{children:[(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`change`})}),(0,h.jsx)(n.td,{children:`After a user click / Space / Enter`}),(0,h.jsx)(n.td,{children:(0,h.jsx)(n.code,{children:`{ checked: boolean }`})})]})})]}),`
`,(0,h.jsxs)(n.p,{children:[`The `,(0,h.jsx)(n.code,{children:`change`}),` event bubbles. It does `,(0,h.jsx)(n.strong,{children:`not`}),` fire when state is set
programmatically by the server or another component.`]}),`
`,(0,h.jsx)(n.h2,{id:`store-interaction`,children:`Store interaction`}),`
`,(0,h.jsx)(n.p,{children:`None.`}),`
`,(0,h.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,h.jsx)(i,{of:s}),`
`,(0,h.jsx)(i,{of:c}),`
`,(0,h.jsx)(i,{of:l}),`
`,(0,h.jsx)(i,{of:u})]})}function m(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,h.jsx)(n,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;e((()=>{h=n(),o(),a(),d()}))();export{m as default};