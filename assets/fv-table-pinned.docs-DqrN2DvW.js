import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-BON2cNiH.js";import{a as r,o as i,s as a}from"./blocks-CdGnqTQO.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{NarrowViewport as s,n as c,t as l}from"./fv-table-pinned.stories-D8YlOok7.js";function u(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(r,{of:l}),`
`,(0,f.jsx)(n.h1,{id:`fv-table-pinned`,children:`fv-table-pinned`}),`
`,(0,f.jsxs)(n.p,{children:[`A horizontal-scroll formation for `,(0,f.jsx)(n.code,{children:`<fv-table>`}),` on narrow viewports.`]}),`
`,(0,f.jsxs)(n.p,{children:[`A grid table squeezed below its natural width compresses its column
tracks until content overlaps — team names bleeding into the stat
columns. Wrapped in `,(0,f.jsx)(n.code,{children:`<fv-table-pinned>`}),`, the inner table keeps a
minimum width and the wrapper scrolls horizontally instead, while the
first `,(0,f.jsx)(n.code,{children:`data-pin`}),` columns (default 2 — typically rank + team) stick to
the left edge and ride over the columns scrolling beneath them.`]}),`
`,(0,f.jsx)(i,{of:s}),`
`,(0,f.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,f.jsxs)(n.p,{children:[`Wrap an ordinary `,(0,f.jsx)(n.code,{children:`<fv-table>`}),` — its markup contract is unchanged:`]}),`
`,(0,f.jsx)(n.pre,{children:(0,f.jsx)(n.code,{className:`language-html`,children:`<fv-table-pinned data-pin="2" data-min-width="640px">
  <fv-table data-columns="36px minmax(140px,1.4fr) 44px ..." aria-label="League table">
    ...
  </fv-table>
</fv-table-pinned>
`})}),`
`,(0,f.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,f.jsxs)(n.table,{children:[(0,f.jsx)(n.thead,{children:(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.th,{children:`Attribute`}),(0,f.jsx)(n.th,{children:`Values`}),(0,f.jsx)(n.th,{children:`Meaning`})]})}),(0,f.jsxs)(n.tbody,{children:[(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`data-pin`})}),(0,f.jsxs)(n.td,{children:[(0,f.jsx)(n.code,{children:`1`}),` | `,(0,f.jsx)(n.code,{children:`2`}),` | `,(0,f.jsx)(n.code,{children:`3`})]}),(0,f.jsxs)(n.td,{children:[`How many lead columns stick. Defaults to `,(0,f.jsx)(n.code,{children:`2`}),`; the component stamps the default onto the host so CSS can key off it.`]})]}),(0,f.jsxs)(n.tr,{children:[(0,f.jsx)(n.td,{children:(0,f.jsx)(n.code,{children:`data-min-width`})}),(0,f.jsx)(n.td,{children:`any CSS length`}),(0,f.jsx)(n.td,{children:`The inner table never gets narrower than this — below it, the wrapper scrolls.`})]})]})]}),`
`,(0,f.jsx)(n.h2,{id:`behavior-notes`,children:`Behavior notes`}),`
`,(0,f.jsxs)(n.ul,{children:[`
`,(0,f.jsxs)(n.li,{children:[`Enhancement-only: the component measures the pinned columns on the
first row and publishes their left offsets as
`,(0,f.jsx)(n.code,{children:`--fv-table-pinned-left-N`}),`; a `,(0,f.jsx)(n.code,{children:`ResizeObserver`}),` keeps the offsets true
through font loading and resizes. No content is generated.`]}),`
`,(0,f.jsx)(n.li,{children:`Stuck cells inherit their row's background, so hover, zebra and
selection tints follow them.`}),`
`,(0,f.jsxs)(n.li,{children:[(0,f.jsx)(n.code,{children:`data-zone`}),` accent rails are re-painted on the stuck first cell so
they stay visible while scrolled.`]}),`
`,(0,f.jsxs)(n.li,{children:[`Give the team column a `,(0,f.jsx)(n.code,{children:`minmax()`}),` with a real floor (e.g.
`,(0,f.jsx)(n.code,{children:`minmax(140px,1.4fr)`}),`) — that floor plus the fixed tracks is what
`,(0,f.jsx)(n.code,{children:`data-min-width`}),` should roughly add up to.`]}),`
`,(0,f.jsxs)(n.li,{children:[`When the container is wide enough no scrollbar appears and the
formation is visually identical to a bare `,(0,f.jsx)(n.code,{children:`<fv-table>`}),`.`]}),`
`]})]})}function d(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,f.jsx)(n,{...e,children:(0,f.jsx)(u,{...e})}):u(e)}var f;e((()=>{f=n(),o(),a(),c()}))();export{d as default};