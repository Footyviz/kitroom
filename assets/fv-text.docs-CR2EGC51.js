import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Playground as s,Stats as c,Tones as l,Truncation as u,TypeRamp as d,n as f,t as p}from"./fv-text.stories-K9ln1Fwi.js";function m(e){let n={code:`code`,em:`em`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`fv-text`,children:`fv-text`}),`
`,(0,g.jsxs)(n.p,{children:[`A light-DOM styling primitive over the typography utility classes in
`,(0,g.jsx)(n.code,{children:`@footyviz/tokens`}),` (`,(0,g.jsx)(n.code,{children:`.fv-display`}),` … `,(0,g.jsx)(n.code,{children:`.fv-editorial`}),`). Picks a type style
via `,(0,g.jsx)(n.code,{children:`data-variant`}),`, optionally overrides the colour with `,(0,g.jsx)(n.code,{children:`data-tone`}),`,
and optionally caps width with single-line ellipsis truncation via
`,(0,g.jsx)(n.code,{children:`data-max-width`}),`.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The component is intentionally semantic-free: `,(0,g.jsx)(n.code,{children:`data-variant="h1"`}),`
`,(0,g.jsx)(n.em,{children:`styles`}),` like an H1 but does not set `,(0,g.jsx)(n.code,{children:`role="heading"`}),` or any other
ARIA. Wrap with the appropriate semantic element (`,(0,g.jsx)(n.code,{children:`<h1>`}),`, `,(0,g.jsx)(n.code,{children:`<p>`}),`,
`,(0,g.jsx)(n.code,{children:`<label>`}),` …) when meaning matters to assistive tech.`]}),`
`,(0,g.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-html`,children:`<fv-text>Saka advanced 11m before releasing the pass.</fv-text>

<fv-text data-variant="caption">live · 73′ · 2H</fv-text>

<fv-text data-variant="stat-lg">62.4%</fv-text>

<fv-text data-variant="body" data-tone="muted">Updated 12 seconds ago.</fv-text>

<fv-text data-variant="body" data-max-width="200px">
  Long line that gets truncated with an ellipsis.
</fv-text>
`})}),`
`,(0,g.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Attribute`}),(0,g.jsx)(n.th,{children:`On`}),(0,g.jsx)(n.th,{children:`Required`}),(0,g.jsx)(n.th,{children:`Effect`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-variant`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[`One of `,(0,g.jsx)(n.code,{children:`body`}),` (default) · `,(0,g.jsx)(n.code,{children:`body-sm`}),` · `,(0,g.jsx)(n.code,{children:`caption`}),` · `,(0,g.jsx)(n.code,{children:`label`}),` · `,(0,g.jsx)(n.code,{children:`h1`}),` · `,(0,g.jsx)(n.code,{children:`h2`}),` · `,(0,g.jsx)(n.code,{children:`h3`}),` · `,(0,g.jsx)(n.code,{children:`display`}),` · `,(0,g.jsx)(n.code,{children:`display-serif`}),` · `,(0,g.jsx)(n.code,{children:`stat-xl`}),` · `,(0,g.jsx)(n.code,{children:`stat-lg`}),` · `,(0,g.jsx)(n.code,{children:`stat-md`}),` · `,(0,g.jsx)(n.code,{children:`stat-sm`}),` · `,(0,g.jsx)(n.code,{children:`mono`}),` · `,(0,g.jsx)(n.code,{children:`editorial`}),`. Mirrors the matching `,(0,g.jsx)(n.code,{children:`.fv-*`}),` utility class in `,(0,g.jsx)(n.code,{children:`tokens.css`}),`.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-tone`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`default`}),` (variant's own colour) · `,(0,g.jsx)(n.code,{children:`muted`}),` · `,(0,g.jsx)(n.code,{children:`subtle`}),` · `,(0,g.jsx)(n.code,{children:`inverse`}),` · `,(0,g.jsx)(n.code,{children:`accent`}),`. Overrides the variant's foreground colour.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-max-width`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[`Any CSS `,(0,g.jsx)(n.code,{children:`<length>`}),` (e.g. `,(0,g.jsx)(n.code,{children:`200px`}),`, `,(0,g.jsx)(n.code,{children:`20ch`}),`, `,(0,g.jsx)(n.code,{children:`12rem`}),`). When present, the host becomes `,(0,g.jsx)(n.code,{children:`display: inline-block`}),` and truncates overflow with an ellipsis. The value is reflected to inline `,(0,g.jsx)(n.code,{children:`style.max-width`}),` by the component.`]})]})]})]}),`
`,(0,g.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Token`}),(0,g.jsx)(n.th,{children:`Where`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--font-sans`}),`, `,(0,g.jsx)(n.code,{children:`--font-mono`})]}),(0,g.jsx)(n.td,{children:`font-family per variant`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--fw-regular`}),`, `,(0,g.jsx)(n.code,{children:`--fw-medium`}),`, `,(0,g.jsx)(n.code,{children:`--fw-semibold`})]}),(0,g.jsx)(n.td,{children:`font-weight per variant`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--lh-tight`}),`, `,(0,g.jsx)(n.code,{children:`--lh-snug`}),`, `,(0,g.jsx)(n.code,{children:`--lh-normal`}),`, `,(0,g.jsx)(n.code,{children:`--lh-relaxed`})]}),(0,g.jsx)(n.td,{children:`line-height per variant`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`--tracking-tight`}),`, `,(0,g.jsx)(n.code,{children:`--tracking-snug`}),`, `,(0,g.jsx)(n.code,{children:`--tracking-caps`})]}),(0,g.jsx)(n.td,{children:`letter-spacing per variant`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--fg`})}),(0,g.jsxs)(n.td,{children:[`default foreground (and `,(0,g.jsx)(n.code,{children:`data-tone="default"`}),`)`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--fg-muted`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`body-sm`}),` / `,(0,g.jsx)(n.code,{children:`caption`}),` / `,(0,g.jsx)(n.code,{children:`stat-sm`}),` / `,(0,g.jsx)(n.code,{children:`mono`}),` colour, plus `,(0,g.jsx)(n.code,{children:`data-tone="muted"`})]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--fg-subtle`})}),(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-tone="subtle"`})})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--fg-inverse`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`data-tone="inverse"`}),` (pair with an inverted surface)`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--accent`})}),(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-tone="accent"`})})]})]})]}),`
`,(0,g.jsxs)(n.p,{children:[`The component does not declare any new tokens — every value comes from
`,(0,g.jsx)(n.code,{children:`tokens.css`}),`. When the type ramp changes there, mirror the change in
`,(0,g.jsx)(n.code,{children:`packages/styles/src/fv-text.css`}),`.`]}),`
`,(0,g.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,g.jsx)(n.p,{children:`None.`}),`
`,(0,g.jsx)(n.h2,{id:`store-interaction`,children:`Store interaction`}),`
`,(0,g.jsx)(n.p,{children:`None.`}),`
`,(0,g.jsxs)(n.h2,{id:`when-not-to-use-this`,children:[`When `,(0,g.jsx)(n.em,{children:`not`}),` to use this`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[`For a real document heading, write the semantic element and (if you
want the type style) put `,(0,g.jsx)(n.code,{children:`<fv-text data-variant="h1">`}),` `,(0,g.jsx)(n.em,{children:`inside`}),` it,
or apply the `,(0,g.jsx)(n.code,{children:`.fv-h1`}),` utility class directly to the `,(0,g.jsx)(n.code,{children:`<h1>`}),`. Don't
rely on `,(0,g.jsx)(n.code,{children:`<fv-text data-variant="h1">`}),` to carry heading semantics.`]}),`
`,(0,g.jsxs)(n.li,{children:[`For paragraphs of running prose, prefer `,(0,g.jsx)(n.code,{children:`<p class="fv-body">`}),` so the
paragraph element supplies the natural block semantics. `,(0,g.jsx)(n.code,{children:`<fv-text>`}),`
is best for inline phrases, single-line stat readouts, and labels
where the surrounding layout already supplies structure.`]}),`
`]}),`
`,(0,g.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(i,{of:c})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),o(),a(),f()}))();export{h as default};