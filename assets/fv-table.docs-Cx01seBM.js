import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Comfortable as s,Compact as c,Standings as l,StickyHead as u,Zones as d,n as f,t as p}from"./fv-table.stories-Ci1-pJc1.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`fv-table`,children:`fv-table`}),`
`,(0,g.jsxs)(n.p,{children:[`A CSS-grid tabular-data formation. Renders rows of mixed identity, numeric,
and series cells with full ARIA `,(0,g.jsx)(n.code,{children:`role="table"`}),` semantics. Built for
ranked, scored, sequenced data — league standings, fixture lists, stat
grids — but generic over column shape.`]}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`<fv-table>`}),` does `,(0,g.jsx)(n.strong,{children:`not`}),` use the native `,(0,g.jsx)(n.code,{children:`<table>`}),` element. Each row is
its own CSS grid container; the host broadcasts the column template via
`,(0,g.jsx)(n.code,{children:`--fv-table-cols`}),`, which every descendant row inherits. This gives you
sticky headers, container queries, and arbitrary cell content (web
components, anchors, buttons) without giving up keyboard or screen-reader
semantics.`]}),`
`,(0,g.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-html`,children:`<fv-table
  data-density="default"
  data-columns="36px minmax(0,1fr) 56px 48px 48px 100px 48px"
  aria-label="League table"
>
  <header role="rowgroup">
    <div role="row" class="fv-table-head">
      <span role="columnheader">#</span>
      <span role="columnheader" data-primary>Team</span>
      <span role="columnheader" data-numeric>GD</span>
      <span role="columnheader" data-numeric>GF</span>
      <span role="columnheader" data-numeric>GA</span>
      <span role="columnheader">Form</span>
      <span role="columnheader" data-numeric data-primary
            data-sort="none" data-sort-key="pts" tabindex="0">Pts</span>
    </div>
  </header>
  <div role="rowgroup">
    <a role="row" href="/team/har" data-zone="champions" data-highlight>
      <span role="cell">
        <fv-trend data-direction="up" data-delta="2"></fv-trend>
        1
      </span>
      <span role="cell" data-primary>
        <fv-crest data-code="HAR"></fv-crest>
        <fv-text>Harringate Utd</fv-text>
      </span>
      <span role="cell" data-numeric data-sign="pos">+18</span>
      <span role="cell" data-numeric>32</span>
      <span role="cell" data-numeric>14</span>
      <span role="cell">
        <fv-series aria-label="Last 5: W W D W W">
          <span data-pip="pos"></span><span data-pip="pos"></span>
          <span data-pip="warn"></span><span data-pip="pos"></span>
          <span data-pip="pos"></span>
        </fv-series>
      </span>
      <span role="cell" data-numeric data-strong>42</span>
    </a>
    <!-- more rows -->
  </div>
</fv-table>
`})}),`
`,(0,g.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,g.jsx)(n.h3,{id:`host`,children:`Host`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Attribute`}),(0,g.jsx)(n.th,{children:`Required`}),(0,g.jsx)(n.th,{children:`Values`}),(0,g.jsx)(n.th,{children:`Effect`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-columns`})}),(0,g.jsx)(n.td,{children:`yes`}),(0,g.jsx)(n.td,{children:`any CSS grid-template-columns value`}),(0,g.jsxs)(n.td,{children:[`broadcast to `,(0,g.jsx)(n.code,{children:`--fv-table-cols`}),`; every row inherits`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`aria-label`})}),(0,g.jsx)(n.td,{children:`yes`}),(0,g.jsx)(n.td,{children:`string`}),(0,g.jsxs)(n.td,{children:[`accessible name (or use `,(0,g.jsx)(n.code,{children:`aria-labelledby`}),`)`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-density`})}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`compact`}),` | `,(0,g.jsx)(n.code,{children:`default`}),` | `,(0,g.jsx)(n.code,{children:`comfortable`})]}),(0,g.jsx)(n.td,{children:`row height + padding scale`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-zebra`})}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsx)(n.td,{children:`alternating row tint in body`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-outline`})}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsx)(n.td,{children:`upgrade body row separators from subtle to standard border`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-sticky-head`})}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsx)(n.td,{children:`header sticks to top of nearest scroll container`})]})]})]}),`
`,(0,g.jsxs)(n.h3,{id:`row-rolerow`,children:[`Row (`,(0,g.jsx)(n.code,{children:`[role="row"]`}),`)`]}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Attribute`}),(0,g.jsx)(n.th,{children:`Values`}),(0,g.jsx)(n.th,{children:`Effect`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-zone`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`champions`}),` | `,(0,g.jsx)(n.code,{children:`continental`}),` | `,(0,g.jsx)(n.code,{children:`conference`}),` | `,(0,g.jsx)(n.code,{children:`relegation`})]}),(0,g.jsx)(n.td,{children:`left-edge accent rail, semantic color`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-highlight`})}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsx)(n.td,{children:`faint accent gradient + bold name`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-selected`})}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsx)(n.td,{children:`selection tint + inset rail`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-disabled`})}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsxs)(n.td,{children:[`50% opacity, `,(0,g.jsx)(n.code,{children:`pointer-events: none`})]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-expanded`})}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsx)(n.td,{children:`highlight while detail panel is open`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-result`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`win`}),` | `,(0,g.jsx)(n.code,{children:`loss`}),` | `,(0,g.jsx)(n.code,{children:`tbd`}),` (match-card variant)`]}),(0,g.jsx)(n.td,{children:`result framing — left rail, muted text, dashed`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-status`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`complete`}),` | `,(0,g.jsx)(n.code,{children:`upcoming`})]}),(0,g.jsx)(n.td,{children:`solid vs dashed bottom border`})]})]})]}),`
`,(0,g.jsxs)(n.h3,{id:`cell-rolecell-and-column-header-rolecolumnheader`,children:[`Cell (`,(0,g.jsx)(n.code,{children:`[role="cell"]`}),`) and column header (`,(0,g.jsx)(n.code,{children:`[role="columnheader"]`}),`)`]}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Attribute`}),(0,g.jsx)(n.th,{children:`Values`}),(0,g.jsx)(n.th,{children:`Effect`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-primary`})}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsx)(n.td,{children:`stronger color (Team / Pts columns)`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-numeric`})}),(0,g.jsx)(n.td,{children:`flag`}),(0,g.jsx)(n.td,{children:`right-aligned, tabular-nums, Geist Mono`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-strong`})}),(0,g.jsx)(n.td,{children:`flag (cell only)`}),(0,g.jsx)(n.td,{children:`bold + slightly larger`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-sign`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`pos`}),` | `,(0,g.jsx)(n.code,{children:`neg`}),` | `,(0,g.jsx)(n.code,{children:`zero`}),` (cell only)`]}),(0,g.jsx)(n.td,{children:`sign coloring on numeric cells`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-sort`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`none`}),` | `,(0,g.jsx)(n.code,{children:`asc`}),` | `,(0,g.jsx)(n.code,{children:`desc`}),` (header only)`]}),(0,g.jsxs)(n.td,{children:[`sortable affordance + emits `,(0,g.jsx)(n.code,{children:`sort`}),` event on click`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-sort-key`})}),(0,g.jsx)(n.td,{children:`string (header only)`}),(0,g.jsxs)(n.td,{children:[`identifier emitted in `,(0,g.jsx)(n.code,{children:`sort`}),` event detail`]})]})]})]}),`
`,(0,g.jsx)(n.h2,{id:`events`,children:`Events`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Event`}),(0,g.jsx)(n.th,{children:`When`}),(0,g.jsx)(n.th,{children:`Detail`})]})}),(0,g.jsx)(n.tbody,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`sort`})}),(0,g.jsxs)(n.td,{children:[`A `,(0,g.jsx)(n.code,{children:`[role="columnheader"][data-sort]`}),` is clicked or activated via Space/Enter`]}),(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`{ key: string, direction: 'asc' | 'desc' }`})})]})})]}),`
`,(0,g.jsx)(n.p,{children:`The component does not sort row data. It reports user intent; consumers
re-render rows in the new order (htmx swap, re-render from store, etc.).`}),`
`,(0,g.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`Host gets `,(0,g.jsx)(n.code,{children:`role="table"`}),` if not already set.`]}),`
`,(0,g.jsxs)(n.li,{children:[`Column headers carrying `,(0,g.jsx)(n.code,{children:`data-sort`}),` keep `,(0,g.jsx)(n.code,{children:`aria-sort`}),` in sync (`,(0,g.jsx)(n.code,{children:`none`}),` /
`,(0,g.jsx)(n.code,{children:`ascending`}),` / `,(0,g.jsx)(n.code,{children:`descending`}),`).`]}),`
`,(0,g.jsxs)(n.li,{children:[`Sortable headers are activated by `,(0,g.jsx)(n.strong,{children:`click`}),` and by `,(0,g.jsx)(n.strong,{children:`Space/Enter`}),` when
focused. Mark them `,(0,g.jsx)(n.code,{children:`tabindex="0"`}),` so keyboard users can reach them.`]}),`
`,(0,g.jsxs)(n.li,{children:[`Use a real `,(0,g.jsx)(n.code,{children:`<a href>`}),` or `,(0,g.jsx)(n.code,{children:`<button>`}),` for any row that is interactive —
the host doesn't synthesize keyboard activation for rows. The CSS
treats `,(0,g.jsx)(n.code,{children:`:focus-visible`}),` on rows so focus rings are always visible.`]}),`
`,(0,g.jsxs)(n.li,{children:[`Color is never the only signal: zone is paired with table position,
sign is paired with `,(0,g.jsx)(n.code,{children:`+`}),`/`,(0,g.jsx)(n.code,{children:`-`}),` text, form pips carry an `,(0,g.jsx)(n.code,{children:`aria-label`}),`
describing the sequence.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`composition`,children:`Composition`}),`
`,(0,g.jsxs)(n.p,{children:[`The team crest, form-pip series, and trend arrow are dedicated
primitives shipped from `,(0,g.jsx)(n.code,{children:`@footyviz/kitroom`}),`: `,(0,g.jsx)(n.code,{children:`<fv-crest>`}),`,
`,(0,g.jsx)(n.code,{children:`<fv-series>`}),`, and `,(0,g.jsx)(n.code,{children:`<fv-trend>`}),`. The table's stylesheet still carries
fallback rules for the bare `,(0,g.jsx)(n.code,{children:`data-role="crest|series|trend"`}),` markup so
consumers who render those rows from a server template without the
custom elements still get reasonable styling, but the canonical markup
is the real elements as shown above.`]}),`
`,(0,g.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Token`}),(0,g.jsx)(n.th,{children:`Where`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--bg`}),`, `,(0,g.jsx)(n.code,{children:`--bg-alt`}),`, `,(0,g.jsx)(n.code,{children:`--bg-elev`})]}),(0,g.jsx)(n.td,{children:`row backgrounds, hover, header`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--fg`}),`, `,(0,g.jsx)(n.code,{children:`--fg-muted`}),`, `,(0,g.jsx)(n.code,{children:`--fg-subtle`})]}),(0,g.jsx)(n.td,{children:`primary, secondary, header text`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--border`}),`, `,(0,g.jsx)(n.code,{children:`--border-subtle`})]}),(0,g.jsx)(n.td,{children:`outer table, row separators`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--accent`}),`, `,(0,g.jsx)(n.code,{children:`--accent-soft`})]}),(0,g.jsx)(n.td,{children:`champions zone, highlight, selected`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--positive`}),`, `,(0,g.jsx)(n.code,{children:`--negative`}),`, `,(0,g.jsx)(n.code,{children:`--warning`}),`, `,(0,g.jsx)(n.code,{children:`--info`})]}),(0,g.jsx)(n.td,{children:`semantic cell signs and zones`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--font-sans`}),`, `,(0,g.jsx)(n.code,{children:`--font-mono`})]}),(0,g.jsx)(n.td,{children:`UI text vs numerics`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--radius-md`}),`, `,(0,g.jsx)(n.code,{children:`--radius-full`})]}),(0,g.jsx)(n.td,{children:`host corner, pip dots`})]})]})]}),`
`,(0,g.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(i,{of:u})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),o(),a(),f()}))();export{h as default};