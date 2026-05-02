import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Compact as s,Dark as c,Final as l,Grid as u,Live as d,Upcoming as f,n as p,t as m}from"./fv-match-card.stories-XLiNS90E.js";function h(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(r,{of:m}),`
`,(0,_.jsx)(n.h1,{id:`fv-match-card`,children:`fv-match-card`}),`
`,(0,_.jsxs)(n.p,{children:[`A match summary card formation. Composes `,(0,_.jsx)(n.code,{children:`<fv-team>`}),`, `,(0,_.jsx)(n.code,{children:`<fv-stat-row>`}),`,
`,(0,_.jsx)(n.code,{children:`<fv-chip>`}),`, `,(0,_.jsx)(n.code,{children:`<fv-button-badge>`}),`, `,(0,_.jsx)(n.code,{children:`<fv-icon>`}),`, and `,(0,_.jsx)(n.code,{children:`<fv-text>`}),`
primitives into the canonical match-card layout from the design spec.`]}),`
`,(0,_.jsxs)(n.p,{children:[(0,_.jsx)(n.code,{children:`<fv-match-card>`}),` is light-DOM and uses CSS subgrid so multiple cards
laid out side-by-side share head/score/footer baselines. The card
structure itself is a 4-row grid: head, score, stats (optional),
footer.`]}),`
`,(0,_.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-html`,children:`<fv-match-card data-status="live">
  <header data-role="head">
    <fv-chip data-variant="live">LIVE</fv-chip>
    <fv-text data-role="time" data-variant="mono">73'</fv-text>
    <fv-text data-role="meta" data-variant="caption" data-tone="muted">
      Premier League<span data-role="dot"></span>Emirates
    </fv-text>
  </header>

  <div data-role="score">
    <fv-team data-side="home">
      <fv-crest data-code="ARS" data-size="lg"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
    <div data-role="result">
      <fv-text data-variant="stat-lg">2</fv-text>
      <fv-text data-role="sep" data-variant="stat-lg" data-tone="subtle">–</fv-text>
      <fv-text data-variant="stat-lg">1</fv-text>
    </div>
    <fv-team data-side="away">
      <fv-crest data-code="CHE" data-size="lg"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
    </fv-team>
  </div>

  <div data-role="stats" role="group" aria-label="Match stats">
    <fv-stat-row data-featured>
      <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
      <fv-ratio-bar data-role="home-bar" style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
      <fv-text data-role="label" data-variant="label" data-tone="muted">xG</fv-text>
      <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
      <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
    </fv-stat-row>
    <fv-stat-row>
      <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
      <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
      <fv-text data-role="label" data-variant="label" data-tone="muted">Possession</fv-text>
      <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
      <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
    </fv-stat-row>
  </div>

  <footer data-role="more">
    <fv-text data-variant="body-sm">View all stats</fv-text>
    <fv-button-badge>32</fv-button-badge>
    <fv-icon name="chevron-right"></fv-icon>
  </footer>
</fv-match-card>
`})}),`
`,(0,_.jsx)(n.h2,{id:`slots`,children:`Slots`}),`
`,(0,_.jsx)(n.p,{children:`The card has four positional slots, addressed by their direct child
selector. Children are rendered in source order; slot order in the DOM
matches visual order on the card.`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Slot`}),(0,_.jsx)(n.th,{children:`Required`}),(0,_.jsx)(n.th,{children:`Purpose`})]})}),(0,_.jsxs)(n.tbody,{children:[(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`<header data-role="head">`})}),(0,_.jsx)(n.td,{children:`yes`}),(0,_.jsx)(n.td,{children:`status chip, kickoff time / match clock, meta line (competition · venue)`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`<div data-role="score">`})}),(0,_.jsx)(n.td,{children:`yes`}),(0,_.jsxs)(n.td,{children:[`home `,(0,_.jsx)(n.code,{children:`<fv-team>`}),`, `,(0,_.jsx)(n.code,{children:`[data-role="result"]`}),` block, away `,(0,_.jsx)(n.code,{children:`<fv-team>`})]})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`<div data-role="stats">`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsxs)(n.td,{children:[`column of `,(0,_.jsx)(n.code,{children:`<fv-stat-row>`}),` children. Compact variant typically omits this`]})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`<footer data-role="more">`})}),(0,_.jsx)(n.td,{children:`yes`}),(0,_.jsxs)(n.td,{children:[`leading label, optional `,(0,_.jsx)(n.code,{children:`<fv-button-badge>`}),` count, trailing chevron icon`]})]})]})]}),`
`,(0,_.jsxs)(n.p,{children:[`The stats slot accepts any children. Typical content is one or more
`,(0,_.jsx)(n.code,{children:`<fv-stat-row>`}),` elements (proportion bars for a live / final match,
or `,(0,_.jsx)(n.code,{children:`<fv-stat-row data-layout="form">`}),` containing `,(0,_.jsx)(n.code,{children:`<fv-series>`}),` form
pips for an upcoming match).`]}),`
`,(0,_.jsx)(n.h2,{id:`host-attributes`,children:`Host attributes`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Attribute`}),(0,_.jsx)(n.th,{children:`Required`}),(0,_.jsx)(n.th,{children:`Values`}),(0,_.jsx)(n.th,{children:`Effect`})]})}),(0,_.jsxs)(n.tbody,{children:[(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`data-status`})}),(0,_.jsx)(n.td,{children:`yes`}),(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`live`}),` | `,(0,_.jsx)(n.code,{children:`upcoming`}),` | `,(0,_.jsx)(n.code,{children:`final`})]}),(0,_.jsxs)(n.td,{children:[`drives result-column treatment, sets `,(0,_.jsx)(n.code,{children:`aria-live`}),` for `,(0,_.jsx)(n.code,{children:`live`})]})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`data-density`})}),(0,_.jsx)(n.td,{children:`no`}),(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`default`}),` | `,(0,_.jsx)(n.code,{children:`compact`})]}),(0,_.jsx)(n.td,{children:`tighter padding, smaller scoreline. Consumers also pick crest size`})]})]})]}),`
`,(0,_.jsxs)(n.p,{children:[`Theme is inherited via `,(0,_.jsx)(n.code,{children:`<html data-theme="dark">`}),` (or any ancestor
with that attribute) per the design system rule. The component does
not expose a theme attribute of its own.`]}),`
`,(0,_.jsxs)(n.h2,{id:`cross-card-alignment-with-fv-match-card-grid`,children:[`Cross-card alignment with `,(0,_.jsx)(n.code,{children:`.fv-match-card-grid`})]}),`
`,(0,_.jsxs)(n.p,{children:[`The optional consumer wrapper `,(0,_.jsx)(n.code,{children:`.fv-match-card-grid`}),` aligns multiple
cards side-by-side so their head, score and footer rows line up
horizontally regardless of how many stat rows each card carries.`]}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-html`,children:`<div class="fv-match-card-grid">
  <fv-match-card>...</fv-match-card>
  <fv-match-card>...</fv-match-card>
  <fv-match-card>...</fv-match-card>
</div>
`})}),`
`,(0,_.jsx)(n.p,{children:`The wrapper declares four shared row tracks:`}),`
`,(0,_.jsx)(n.pre,{children:(0,_.jsx)(n.code,{className:`language-css`,children:`.fv-match-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-template-rows: auto auto 1fr auto; /* head | score | stats-fill | footer */
  gap: var(--space-4);
}
`})}),`
`,(0,_.jsxs)(n.p,{children:[`Each `,(0,_.jsx)(n.code,{children:`<fv-match-card>`}),` inside the wrapper claims those four rows via
`,(0,_.jsx)(n.code,{children:`grid-row: span 4`}),` and inherits them via `,(0,_.jsx)(n.code,{children:`grid-template-rows: subgrid`}),`.
The third (stats) track is the elastic `,(0,_.jsx)(n.code,{children:`1fr`}),` track — variable-height
stats areas absorb the difference, leaving head/score/footer aligned.`]}),`
`,(0,_.jsxs)(n.p,{children:[`A standalone card (one not inside `,(0,_.jsx)(n.code,{children:`.fv-match-card-grid`}),`) falls back
to its own row tracks via the `,(0,_.jsx)(n.code,{children:`:not(.fv-match-card-grid > *)`}),`
selector, so the same component works in both layouts.`]}),`
`,(0,_.jsxs)(n.p,{children:[`The `,(0,_.jsx)(n.code,{children:`Grid`}),` story is the visual proof of this wiring.`]}),`
`,(0,_.jsx)(n.h2,{id:`events`,children:`Events`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Event`}),(0,_.jsx)(n.th,{children:`When`}),(0,_.jsx)(n.th,{children:`Detail`})]})}),(0,_.jsx)(n.tbody,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`fv-match-card-expand`})}),(0,_.jsx)(n.td,{children:`Footer is clicked or activated via Space/Enter`}),(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`{}`})})]})})]}),`
`,(0,_.jsxs)(n.p,{children:[`The component does not navigate or fetch — it reports user intent.
Consumers wire the rest by listening for the event or by adding
`,(0,_.jsx)(n.code,{children:`hx-*`}),` attributes directly to the `,(0,_.jsx)(n.code,{children:`<footer data-role="more">`}),`
element. The event bubbles, so a single listener at a parent
container can serve a grid of cards.`]}),`
`,(0,_.jsx)(n.h2,{id:`accessibility`,children:`Accessibility`}),`
`,(0,_.jsxs)(n.ul,{children:[`
`,(0,_.jsxs)(n.li,{children:[`Host gets `,(0,_.jsx)(n.code,{children:`role="article"`}),` if not already set.`]}),`
`,(0,_.jsxs)(n.li,{children:[`The host's `,(0,_.jsx)(n.code,{children:`aria-labelledby`}),` is synthesised from the home and away
team-name elements; the component assigns stable ids where they're
missing. Screen readers announce both team names when the card
receives focus.`]}),`
`,(0,_.jsxs)(n.li,{children:[`For `,(0,_.jsx)(n.code,{children:`data-status="live"`}),`, the host gets `,(0,_.jsx)(n.code,{children:`aria-live="polite"`}),` so
score updates are announced when the inner DOM swaps.`]}),`
`,(0,_.jsxs)(n.li,{children:[`The footer is wired as a button: `,(0,_.jsx)(n.code,{children:`role="button"`}),`, `,(0,_.jsx)(n.code,{children:`tabindex="0"`}),`,
click + Space/Enter activate. Focus ring uses the accent token via
`,(0,_.jsx)(n.code,{children:`:focus-visible`}),`.`]}),`
`,(0,_.jsxs)(n.li,{children:[`The stats slot carries `,(0,_.jsx)(n.code,{children:`role="group"`}),` (set by the consumer in the
markup); each `,(0,_.jsx)(n.code,{children:`<fv-stat-row>`}),` self-stamps `,(0,_.jsx)(n.code,{children:`role="row"`}),` and synthesises
its own `,(0,_.jsx)(n.code,{children:`aria-label`}),` (`,(0,_.jsx)(n.code,{children:`"xG: 1.84 vs 0.92"`}),`).`]}),`
`]}),`
`,(0,_.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,_.jsxs)(n.table,{children:[(0,_.jsx)(n.thead,{children:(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.th,{children:`Token`}),(0,_.jsx)(n.th,{children:`Where`})]})}),(0,_.jsxs)(n.tbody,{children:[(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--bg-elev`}),`, `,(0,_.jsx)(n.code,{children:`--bg-alt`})]}),(0,_.jsx)(n.td,{children:`card surface, footer hover`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--fg`}),`, `,(0,_.jsx)(n.code,{children:`--fg-muted`}),`, `,(0,_.jsx)(n.code,{children:`--fg-subtle`})]}),(0,_.jsx)(n.td,{children:`primary text, meta line, separators`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--border`}),`, `,(0,_.jsx)(n.code,{children:`--border-subtle`})]}),(0,_.jsx)(n.td,{children:`card outline, internal dividers`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsx)(n.td,{children:(0,_.jsx)(n.code,{children:`--accent`})}),(0,_.jsx)(n.td,{children:`focus ring`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--space-1`}),` … `,(0,_.jsx)(n.code,{children:`--space-4`})]}),(0,_.jsx)(n.td,{children:`padding + gaps`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--radius-lg`}),`, `,(0,_.jsx)(n.code,{children:`--radius-full`})]}),(0,_.jsx)(n.td,{children:`card corners, meta-line dot`})]}),(0,_.jsxs)(n.tr,{children:[(0,_.jsxs)(n.td,{children:[(0,_.jsx)(n.code,{children:`--font-sans`}),`, `,(0,_.jsx)(n.code,{children:`--font-mono`})]}),(0,_.jsx)(n.td,{children:`UI text vs scoreline`})]})]})]}),`
`,(0,_.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,_.jsx)(i,{of:d}),`
`,(0,_.jsx)(i,{of:f}),`
`,(0,_.jsx)(i,{of:l}),`
`,(0,_.jsx)(i,{of:s}),`
`,(0,_.jsx)(i,{of:c}),`
`,(0,_.jsx)(i,{of:u})]})}function g(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,_.jsx)(n,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;e((()=>{_=n(),o(),a(),p()}))();export{g as default};