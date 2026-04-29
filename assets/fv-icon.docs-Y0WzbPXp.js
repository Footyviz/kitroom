import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-ri9QLorm.js";import{a as r,o as i,s as a}from"./blocks-DCD1AnX_.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{Catalog as s,Default as c,Playground as l,Sizes as u,Tones as d,n as f,t as p}from"./fv-icon.stories-BjgAUC5_.js";function m(e){let n={code:`code`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...t(),...e.components};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r,{of:p}),`
`,(0,g.jsx)(n.h1,{id:`fv-icon`,children:`fv-icon`}),`
`,(0,g.jsxs)(n.p,{children:[`A sprite-backed icon. `,(0,g.jsx)(n.code,{children:`<fv-icon name="pitch">`}),` renders a tiny
`,(0,g.jsx)(n.code,{children:`<svg><use href="#icon-pitch"/></svg>`}),` reference into its light DOM,
which points at a `,(0,g.jsx)(n.code,{children:`<symbol id="icon-pitch">`}),` defined in the page-level
icon sprite.`]}),`
`,(0,g.jsxs)(n.p,{children:[`The component does not ship the SVG paths — those live in a single
sprite that the page is responsible for placing once near `,(0,g.jsx)(n.code,{children:`<body>`}),`.
The sprite is shipped two ways:`]}),`
`,(0,g.jsxs)(n.ul,{children:[`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`@footyviz/components/icons.js`}),` exports `,(0,g.jsx)(n.code,{children:`iconSpriteHtml`}),` (a string)
for inline injection during app boot.`]}),`
`,(0,g.jsxs)(n.li,{children:[(0,g.jsx)(n.code,{children:`@footyviz/tokens/icons.svg`}),` is the same sprite as a static file,
for `,(0,g.jsx)(n.code,{children:`<use href="/path/to/icons.svg#icon-pitch"/>`}),`-style fetch.`]}),`
`]}),`
`,(0,g.jsxs)(n.p,{children:[`Storybook injects the sprite once via a global decorator in
`,(0,g.jsx)(n.code,{children:`preview.ts`}),`, so all stories on this page can reference it.`]}),`
`,(0,g.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,g.jsx)(n.p,{children:`The page must include the sprite once. Then anywhere on the page:`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-html`,children:`<fv-icon name="pitch" data-size="md"></fv-icon>
<fv-icon name="live" data-size="lg" data-tone="accent" aria-label="Live match"></fv-icon>
`})}),`
`,(0,g.jsx)(n.p,{children:`To inject the sprite at app boot:`}),`
`,(0,g.jsx)(n.pre,{children:(0,g.jsx)(n.code,{className:`language-ts`,children:`import { iconSpriteHtml } from '@footyviz/components/icons.js';
document.body.insertAdjacentHTML('beforeend', iconSpriteHtml);
`})}),`
`,(0,g.jsx)(n.h2,{id:`architecture-note`,children:`Architecture note`}),`
`,(0,g.jsxs)(n.p,{children:[(0,g.jsx)(n.code,{children:`<fv-icon>`}),` is the one component in this library that uses
`,(0,g.jsx)(n.code,{children:`innerHTML`}),` in `,(0,g.jsx)(n.code,{children:`connectedCallback`}),`. It only emits a small
`,(0,g.jsx)(n.code,{children:'<svg><use href="#icon-${name}"/></svg>'}),` reference — the actual paths
live in the page sprite. The transform is deterministic
(`,(0,g.jsx)(n.code,{children:`name`}),` → `,(0,g.jsx)(n.code,{children:"#icon-${name}"}),`) and contains no JS-resident content; it is
a styling hook in the same sense as a CSS `,(0,g.jsx)(n.code,{children:`background-image`}),`. See
`,(0,g.jsx)(n.code,{children:`ARCHITECTURE.md`}),` for the general rule this exception lives under.`]}),`
`,(0,g.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Attribute`}),(0,g.jsx)(n.th,{children:`On`}),(0,g.jsx)(n.th,{children:`Required`}),(0,g.jsx)(n.th,{children:`Effect`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`name`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`yes`}),(0,g.jsxs)(n.td,{children:[`Picks `,(0,g.jsx)(n.code,{children:`<symbol id="icon-NAME">`}),` from the sprite`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-size`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`sm`}),` (16px) · `,(0,g.jsx)(n.code,{children:`md`}),` (20px, default) · `,(0,g.jsx)(n.code,{children:`lg`}),` (28px)`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`data-tone`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`default`}),` (currentColor) · `,(0,g.jsx)(n.code,{children:`accent`}),` · `,(0,g.jsx)(n.code,{children:`muted`})]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`aria-label`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`no`}),(0,g.jsx)(n.td,{children:`When present, the icon is treated as meaningful (not aria-hidden)`})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`aria-hidden`})}),(0,g.jsx)(n.td,{children:`host`}),(0,g.jsx)(n.td,{children:`auto`}),(0,g.jsxs)(n.td,{children:[`Set to `,(0,g.jsx)(n.code,{children:`"true"`}),` if neither `,(0,g.jsx)(n.code,{children:`aria-label`}),` nor `,(0,g.jsx)(n.code,{children:`aria-hidden`}),` is set`]})]})]})]}),`
`,(0,g.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,g.jsxs)(n.table,{children:[(0,g.jsx)(n.thead,{children:(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.th,{children:`Token`}),(0,g.jsx)(n.th,{children:`Where`})]})}),(0,g.jsxs)(n.tbody,{children:[(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--accent`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`data-tone="accent"`}),` foreground`]})]}),(0,g.jsxs)(n.tr,{children:[(0,g.jsx)(n.td,{children:(0,g.jsx)(n.code,{children:`--fg-muted`})}),(0,g.jsxs)(n.td,{children:[(0,g.jsx)(n.code,{children:`data-tone="muted"`}),` foreground`]})]})]})]}),`
`,(0,g.jsxs)(n.p,{children:[`The sprite itself uses `,(0,g.jsx)(n.code,{children:`currentColor`}),` for stroke / fill on every
symbol, so the host's `,(0,g.jsx)(n.code,{children:`color`}),` themes the glyph. The one exception is
the inner dot of `,(0,g.jsx)(n.code,{children:`icon-live`}),`, which keeps a hardcoded `,(0,g.jsx)(n.code,{children:`#C6F24E`}),` fill
to match the design spec's accent indicator.`]}),`
`,(0,g.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,g.jsx)(n.p,{children:`None.`}),`
`,(0,g.jsx)(n.h2,{id:`store-interaction`,children:`Store interaction`}),`
`,(0,g.jsx)(n.p,{children:`None.`}),`
`,(0,g.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,g.jsx)(i,{of:c}),`
`,(0,g.jsx)(i,{of:u}),`
`,(0,g.jsx)(i,{of:d}),`
`,(0,g.jsx)(i,{of:s}),`
`,(0,g.jsx)(i,{of:l})]})}function h(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,g.jsx)(n,{...e,children:(0,g.jsx)(m,{...e})}):m(e)}var g;e((()=>{g=n(),o(),a(),f()}))();export{h as default};