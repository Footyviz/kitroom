import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Accent as s,Default as c,LeftLeaning as l,Mirrored as u,MirroredAccent as d,Pair as f,RightLeaning as p,n as m,t as h}from"./fv-ratio-bar.stories-DbiZEzj4.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(r,{of:h}),`
`,(0,v.jsx)(n.h1,{id:`fv-ratio-bar`,children:`fv-ratio-bar`}),`
`,(0,v.jsxs)(n.p,{children:[`A pure visual primitive: a single horizontal bar with a hard-stop
gradient fill. Used inside `,(0,v.jsx)(n.code,{children:`<fv-stat-row>`}),` as a mirrored pair, and
suitable for any mini progress indicator or ratio display.`]}),`
`,(0,v.jsxs)(n.p,{children:[`The bar is decorative — it conveys the same proportion the surrounding
values already state. Its parent component carries the `,(0,v.jsx)(n.code,{children:`aria-label`}),`;
the bar itself is `,(0,v.jsx)(n.code,{children:`aria-hidden`}),`.`]}),`
`,(0,v.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-html`,children:`<!-- Default: dark fill from left, 67% -->
<fv-ratio-bar style="--pct: 67%"></fv-ratio-bar>

<!-- Mirrored: dark fill from right -->
<fv-ratio-bar style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>

<!-- Featured tone: straw accent fill -->
<fv-ratio-bar style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
`})}),`
`,(0,v.jsx)(n.h2,{id:`inline-custom-property`,children:`Inline custom property`}),`
`,(0,v.jsxs)(n.table,{children:[(0,v.jsx)(n.thead,{children:(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.th,{children:`Property`}),(0,v.jsx)(n.th,{children:`Default`}),(0,v.jsx)(n.th,{children:`Effect`})]})}),(0,v.jsx)(n.tbody,{children:(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`--pct`})}),(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`50%`})}),(0,v.jsx)(n.td,{children:`Fill stop position from the anchor edge`})]})})]}),`
`,(0,v.jsxs)(n.p,{children:[`The percentage is `,(0,v.jsx)(n.strong,{children:`only`}),` read from `,(0,v.jsx)(n.code,{children:`--pct`}),` set inline on the host.
There is no `,(0,v.jsx)(n.code,{children:`data-pct`}),` attribute — the bar is pure CSS, no JS for
layout.`]}),`
`,(0,v.jsx)(n.h2,{id:`host-attributes`,children:`Host attributes`}),`
`,(0,v.jsxs)(n.table,{children:[(0,v.jsx)(n.thead,{children:(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.th,{children:`Attribute`}),(0,v.jsx)(n.th,{children:`Required`}),(0,v.jsx)(n.th,{children:`Values`}),(0,v.jsx)(n.th,{children:`Effect`})]})}),(0,v.jsxs)(n.tbody,{children:[(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`data-direction`})}),(0,v.jsx)(n.td,{children:`no`}),(0,v.jsxs)(n.td,{children:[(0,v.jsx)(n.code,{children:`ltr`}),` (default) `,(0,v.jsx)(n.code,{children:`rtl`})]}),(0,v.jsx)(n.td,{children:`Which side the fill anchors to`})]}),(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`data-tone`})}),(0,v.jsx)(n.td,{children:`no`}),(0,v.jsxs)(n.td,{children:[(0,v.jsx)(n.code,{children:`default`}),` `,(0,v.jsx)(n.code,{children:`accent`})]}),(0,v.jsx)(n.td,{children:`Fill color (default neutral, accent straw gold)`})]})]})]}),`
`,(0,v.jsx)(n.h2,{id:`composition`,children:`Composition`}),`
`,(0,v.jsxs)(n.p,{children:[(0,v.jsx)(n.code,{children:`fv-ratio-bar`}),` is a leaf primitive — it has no children and produces
no content. Its width comes from its container. Inside `,(0,v.jsx)(n.code,{children:`<fv-stat-row>`}),`
it sits in the bar columns of a CSS grid; standalone it should be
wrapped in a sized container.`]}),`
`,(0,v.jsx)(n.h2,{id:`a11y-behavior`,children:`a11y behavior`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[`The host gets `,(0,v.jsx)(n.code,{children:`aria-hidden="true"`}),` (set on connect if not already
present). The bar conveys the same comparison the surrounding values
already state, so screen readers should skip it.`]}),`
`,(0,v.jsxs)(n.li,{children:[`The host gets `,(0,v.jsx)(n.code,{children:`role="presentation"`}),` (set on connect if not already
present), reinforcing that the element is decorative.`]}),`
`,(0,v.jsxs)(n.li,{children:[`Parents are responsible for the meaningful label — for example,
`,(0,v.jsx)(n.code,{children:`<fv-stat-row>`}),` synthesises `,(0,v.jsx)(n.code,{children:`"xG: 1.84 vs 0.92"`}),` from its child
text and stamps that on its host.`]}),`
`]}),`
`,(0,v.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,v.jsxs)(n.table,{children:[(0,v.jsx)(n.thead,{children:(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.th,{children:`Token`}),(0,v.jsx)(n.th,{children:`Where`})]})}),(0,v.jsxs)(n.tbody,{children:[(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`--neutral-1000`})}),(0,v.jsx)(n.td,{children:`Default fill`})]}),(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`--neutral-300`})}),(0,v.jsxs)(n.td,{children:[`Track (remainder of the bar past `,(0,v.jsx)(n.code,{children:`--pct`}),`)`]})]}),(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`--accent-dim`})}),(0,v.jsxs)(n.td,{children:[`Fill when `,(0,v.jsx)(n.code,{children:`data-tone="accent"`})]})]}),(0,v.jsxs)(n.tr,{children:[(0,v.jsx)(n.td,{children:(0,v.jsx)(n.code,{children:`--radius-full`})}),(0,v.jsx)(n.td,{children:`End caps`})]})]})]}),`
`,(0,v.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,v.jsx)(n.p,{children:`None.`}),`
`,(0,v.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,v.jsx)(i,{of:c}),`
`,(0,v.jsx)(i,{of:l}),`
`,(0,v.jsx)(i,{of:p}),`
`,(0,v.jsx)(i,{of:u}),`
`,(0,v.jsx)(i,{of:s}),`
`,(0,v.jsx)(i,{of:d}),`
`,(0,v.jsx)(i,{of:f})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;e((()=>{v=n(),o(),a(),m()}))();export{_ as default};