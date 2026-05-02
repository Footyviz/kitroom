import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Away as s,Compact as c,Home as l,HomeAndAwayPair as u,LongName as d,MonogramFallback as f,Playground as p,n as m,t as h}from"./fv-team.stories-D_nVxisy.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{of:h}),`
`,(0,v.jsx)(n.h1,{id:`fv-team`,children:`fv-team`}),`
`,(0,v.jsx)(n.p,{children:`A composite primitive that pairs a team crest with a team-name label.
Used wherever a team identity needs to be rendered as a single inline
unit — match cards, list rows, table cells, header bars.`}),`
`,(0,v.jsxs)(n.p,{children:[`The component is a thin layout shell: it does `,(0,v.jsx)(n.strong,{children:`not`}),` generate the
crest or the name. Per the composition rule in `,(0,v.jsx)(n.code,{children:`ARCHITECTURE.md`}),`,
authors drop in real `,(0,v.jsx)(n.code,{children:`<fv-crest>`}),` and `,(0,v.jsx)(n.code,{children:`<fv-text data-role="team-name">`}),`
children. The shell only handles direction (home/away mirroring), the
gap between crest and name, and ellipsis truncation when the name
overflows.`]}),`
`,(0,v.jsxs)(n.p,{children:[`The host carries `,(0,v.jsx)(n.code,{children:`role="group"`}),` with an `,(0,v.jsx)(n.code,{children:`aria-label`}),` synthesised from
the team-name's text content, so the pair announces as one team
identity to assistive tech. A `,(0,v.jsx)(n.code,{children:`MutationObserver`}),` keeps the label in
sync if the name text changes (htmx swap, store re-render, etc.).`]}),`
`,(0,v.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-html`,children:`<fv-team data-side="home">
  <fv-crest data-code="ARS" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>

<fv-team data-side="away">
  <fv-crest data-code="CHE" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
</fv-team>
`})}),`
`,(0,v.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,v.jsxs)(n.table,{children:[(0,v.jsx)(n.thead,{children:(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.th,{children:`Attribute`}),(0,v.jsx)(n.th,{children:`On`}),(0,v.jsx)(n.th,{children:`Required`}),(0,v.jsx)(n.th,{children:`Effect`})]})}),(0,v.jsxs)(n.tbody,{children:[(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`data-side`})}),(0,v.jsx)(n.td,{children:`host`}),(0,v.jsx)(n.td,{children:`yes`}),(0,v.jsxs)(n.td,{children:[(0,v.jsx)(n.code,{children:`home`}),` lays the children out left-to-right (crest then name). `,(0,v.jsx)(n.code,{children:`away`}),` mirrors the order via `,(0,v.jsx)(n.code,{children:`flex-direction: row-reverse`}),` — author markup unchanged.`]})]}),(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`data-density`})}),(0,v.jsx)(n.td,{children:`host`}),(0,v.jsx)(n.td,{children:`no`}),(0,v.jsxs)(n.td,{children:[(0,v.jsx)(n.code,{children:`compact`}),` tightens the gap between crest and name from `,(0,v.jsx)(n.code,{children:`--space-3`}),` (12px) to `,(0,v.jsx)(n.code,{children:`--space-2`}),` (8px). Does `,(0,v.jsx)(n.strong,{children:`not`}),` auto-resize the crest.`]})]})]})]}),`
`,(0,v.jsxs)(n.p,{children:[`The component does `,(0,v.jsx)(n.strong,{children:`not`}),` auto-size the inner crest. Consumers pick
`,(0,v.jsx)(n.code,{children:`data-size`}),` on the `,(0,v.jsx)(n.code,{children:`<fv-crest>`}),` directly — typically `,(0,v.jsx)(n.code,{children:`sm`}),`/`,(0,v.jsx)(n.code,{children:`md`}),` in lists
and `,(0,v.jsx)(n.code,{children:`lg`}),` in match-card headers.`]}),`
`,(0,v.jsx)(n.h2,{id:`composition`,children:`Composition`}),`
`,(0,v.jsx)(n.p,{children:`The component reads two children:`}),`
`,(0,v.jsxs)(n.table,{children:[(0,v.jsx)(n.thead,{children:(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.th,{children:`Selector`}),(0,v.jsx)(n.th,{children:`Purpose`})]})}),(0,v.jsxs)(n.tbody,{children:[(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`<fv-crest>`})}),(0,v.jsxs)(n.td,{children:[`Team badge. Any `,(0,v.jsx)(n.code,{children:`data-size`}),` works; the team shell does not constrain it.`]})]}),(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`[data-role="team-name"]`})}),(0,v.jsxs)(n.td,{children:[`Team-name text. Typically `,(0,v.jsx)(n.code,{children:`<fv-text data-variant="body">`}),`, but any element bearing the data-role works (e.g. `,(0,v.jsx)(n.code,{children:`<span>`}),`).`]})]})]})]}),`
`,(0,v.jsxs)(n.p,{children:[`If the team-name child is missing the host simply omits the
`,(0,v.jsx)(n.code,{children:`aria-label`}),`; nothing crashes.`]}),`
`,(0,v.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,v.jsxs)(n.table,{children:[(0,v.jsx)(n.thead,{children:(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.th,{children:`Token`}),(0,v.jsx)(n.th,{children:`Where`})]})}),(0,v.jsxs)(n.tbody,{children:[(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`--space-3`})}),(0,v.jsx)(n.td,{children:`default gap between crest and name`})]}),(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`--space-2`})}),(0,v.jsxs)(n.td,{children:[`gap when `,(0,v.jsx)(n.code,{children:`data-density="compact"`})]})]})]})]}),`
`,(0,v.jsxs)(n.p,{children:[`All visual chrome (font, colour, crest geometry) comes from the inner
components and their own tokens — `,(0,v.jsx)(n.code,{children:`<fv-team>`}),` adds none of its own.`]}),`
`,(0,v.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[`Host gets `,(0,v.jsx)(n.code,{children:`role="group"`}),` so the pair announces as a single unit.`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`aria-label`}),` is synthesised from the team-name's text content. If
the text changes after first render, a single `,(0,v.jsx)(n.code,{children:`MutationObserver`}),`
picks up the change and updates the label.`]}),`
`,(0,v.jsxs)(n.li,{children:[`The observer is disconnected in `,(0,v.jsx)(n.code,{children:`disconnectedCallback`}),` so detached
elements don't leak listeners.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,v.jsx)(n.p,{children:`None.`}),`
`,(0,v.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(i,{of:s}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(i,{of:c}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(i,{of:f}),`
`,(0,v.jsx)(i,{of:p})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=n(),o(),a(),m()}))();export{_ as default};