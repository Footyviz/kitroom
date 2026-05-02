import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-5jBwdCYq.js";import{a as r,o as i,s as a}from"./blocks-9uEZZotF.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Codes as s,ImageWithFallback as c,Playground as l,Sizes as u,WithLogos as d,n as f,t as p}from"./fv-crest.stories-Qi8ga1RX.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`fv-crest`,children:`fv-crest`}),`
`,(0,g.jsxs)(n.p,{children:[`A small badge that identifies a team. The team logo (`,(0,g.jsx)(n.code,{children:`data-src`}),`) is the
primary content; a 2-4 letter monospace monogram (`,(0,g.jsx)(n.code,{children:`data-code`}),`) is the
fallback when no image is supplied or when the image fails to load.
Always provide `,(0,g.jsx)(n.code,{children:`data-code`}),` — it doubles as a graceful fallback for
missing assets and as the accessible name when no `,(0,g.jsx)(n.code,{children:`data-alt`}),` is given.`]}),`
`,(0,g.jsxs)(n.p,{children:[`In image mode the bordered-box chrome drops away so the logo renders at
its natural shape; in text mode the bordered monogram is shown. The
host carries `,(0,g.jsx)(n.code,{children:`role="img"`}),` and an `,(0,g.jsx)(n.code,{children:`aria-label`}),` derived from `,(0,g.jsx)(n.code,{children:`data-alt`}),`
(when present) or `,(0,g.jsx)(n.code,{children:`data-code`}),`, so the badge announces a meaningful name
to assistive tech regardless of which mode it ends up in.`]}),`
`,(0,g.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-html`,children:`<!-- image variant — primary use -->
<fv-crest
  data-src="https://media.api-sports.io/football/teams/33.png"
  data-code="MUN"
  data-alt="Manchester Utd"
></fv-crest>

<!-- text fallback (no image, or image will fail) -->
<fv-crest data-code="HAR"></fv-crest>

<!-- larger size -->
<fv-crest data-code="KIN" data-size="lg"></fv-crest>
`})}),`
`,(0,g.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Attribute`}),(0,g.jsx)(n.th,{children:`On`}),(0,g.jsx)(n.th,{children:`Required`}),(0,g.jsx)(n.th,{children:`Effect`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-src`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no (but recommended)`}),(0,g.jsxs)(n.td,{children:[`URL of an SVG/PNG team logo. Renders at the size given by `,(0,g.jsx)(n.code,{children:`data-size`}),`. On load error the component falls back to the `,(0,g.jsx)(n.code,{children:`data-code`}),` text.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-code`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`yes`}),(0,g.jsx)(n.td,{children:`2-4 letter team code. Uppercased on render. Used as the visible monogram in fallback mode and as the default accessible name. Always provide it.`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-alt`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[`Accessible name (forwards to `,(0,g.jsx)(n.code,{children:`aria-label`}),` on the host). Recommended whenever `,(0,g.jsx)(n.code,{children:`data-src`}),` is set; otherwise the code itself is announced.`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-size`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`sm`}),` (20px) · default (24px, omit attribute) · `,(0,g.jsx)(n.code,{children:`lg`}),` (32px). The image fits the box via `,(0,g.jsx)(n.code,{children:`object-fit: contain`}),`.`]})]})]})]}),`
`,(0,g.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Token`}),(0,g.jsx)(n.th,{children:`Where`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--bg`})}),(0,g.jsx)(n.td,{children:`badge background`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--fg`})}),(0,g.jsx)(n.td,{children:`monogram text`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--border`})}),(0,g.jsx)(n.td,{children:`1px hairline border`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--radius-sm`})}),(0,g.jsx)(n.td,{children:`rounded corners`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--font-mono`})}),(0,g.jsx)(n.td,{children:`monogram type face`})]})]})]}),`
`,(0,g.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,g.jsx)(n.p,{children:`None.`}),`
`,(0,g.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,g.jsx)(i,{of:l}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(i,{of:c})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),o(),a(),f()}))();export{h as default};