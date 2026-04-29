import{n as e}from"./chunk-DnJy8xQt.js";import{r as t}from"./react-pjoPW_VL.js";import{a as n}from"./chunk-RD3KTAHR-ri9QLorm.js";import{a as r,o as i,s as a}from"./blocks-DCD1AnX_.js";import{t as o}from"./mdx-react-shim-DzZRHTHx.js";import{ButtonTabs as s,Default as c,Playground as l,n as u,t as d}from"./fv-tabbar.stories-DO2EIoGz.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r,{of:d}),`
`,(0,m.jsx)(n.h1,{id:`fv-tabbar`,children:`fv-tabbar`}),`
`,(0,m.jsxs)(n.p,{children:[`Bottom-of-screen tab bar. Each tab is a normal `,(0,m.jsx)(n.code,{children:`<a>`}),` link (or
`,(0,m.jsx)(n.code,{children:`<button>`}),` for SPA-style navigation). Clicking a tab sets
`,(0,m.jsx)(n.code,{children:`aria-current="page"`}),` on it and clears it on siblings, then
dispatches `,(0,m.jsx)(n.code,{children:`change`}),` with `,(0,m.jsx)(n.code,{children:`{ value }`}),`.`]}),`
`,(0,m.jsxs)(n.p,{children:[`The component does `,(0,m.jsx)(n.strong,{children:`not`}),` prevent default link navigation. For
htmx-driven tab swaps, wire `,(0,m.jsx)(n.code,{children:`hx-get`}),` / `,(0,m.jsx)(n.code,{children:`hx-target`}),` on each `,(0,m.jsx)(n.code,{children:`<a>`}),`;
the visual active state updates locally before the swap returns.`]}),`
`,(0,m.jsx)(n.h2,{id:`required-html`,children:`Required HTML`}),`
`,(0,m.jsxs)(n.p,{children:[`Each tab nests an `,(0,m.jsx)(n.code,{children:`<fv-icon-text>`}),` for the icon + label pair, with the
indicator span as a sibling. fv-tabbar and fv-icon-text are independent
custom elements — both are registered at app startup, neither imports
the other.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-html`,children:`<fv-tabbar aria-label="Main navigation">
  <a href="/live" role="tab" data-value="live" aria-current="page">
    <fv-icon-text>
      <svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="1.5"/>
        <path d="M12 5v14"/>
        <circle cx="12" cy="12" r="2.2"/>
        <circle cx="12" cy="12" r="4.2" opacity=".35"/>
      </svg>
      <span data-role="label">Live</span>
    </fv-icon-text>
    <span data-role="indicator"></span>
  </a>
  ...
</fv-tabbar>
`})}),`
`,(0,m.jsxs)(n.p,{children:[`The component does not generate tabs, icons, labels, or indicators —
the server outputs them all. The `,(0,m.jsx)(n.code,{children:`[data-role="indicator"]`}),` span is
the small accent bar shown under the active tab.`]}),`
`,(0,m.jsx)(n.h2,{id:`attributes`,children:`Attributes`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Attribute`}),(0,m.jsx)(n.th,{children:`On`}),(0,m.jsx)(n.th,{children:`Required`}),(0,m.jsx)(n.th,{children:`Effect`})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`aria-label`})}),(0,m.jsx)(n.td,{children:`host`}),(0,m.jsx)(n.td,{children:`yes`}),(0,m.jsx)(n.td,{children:`accessible name for the tablist`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`role`})}),(0,m.jsx)(n.td,{children:`host`}),(0,m.jsx)(n.td,{children:`auto`}),(0,m.jsxs)(n.td,{children:[`set to `,(0,m.jsx)(n.code,{children:`tablist`}),` on connection`]})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`role="tab"`})}),(0,m.jsx)(n.td,{children:`child`}),(0,m.jsx)(n.td,{children:`yes`}),(0,m.jsx)(n.td,{children:`identifies a navigable tab (a or button)`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`data-value`})}),(0,m.jsx)(n.td,{children:`child`}),(0,m.jsx)(n.td,{children:`yes`}),(0,m.jsx)(n.td,{children:`included in the dispatched event`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`aria-current`})}),(0,m.jsx)(n.td,{children:`child`}),(0,m.jsx)(n.td,{children:`optional`}),(0,m.jsxs)(n.td,{children:[(0,m.jsx)(n.code,{children:`"page"`}),` marks the active tab`]})]})]})]}),`
`,(0,m.jsx)(n.h2,{id:`tokens-used`,children:`Tokens used`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Token`}),(0,m.jsx)(n.th,{children:`Where`})]})}),(0,m.jsxs)(n.tbody,{children:[(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--bg-elev`})}),(0,m.jsx)(n.td,{children:`bar background`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--border`})}),(0,m.jsx)(n.td,{children:`bar border`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--shadow-md`})}),(0,m.jsx)(n.td,{children:`bar shadow`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--fg`})}),(0,m.jsx)(n.td,{children:`active tab text`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--fg-muted`})}),(0,m.jsx)(n.td,{children:`inactive tab text`})]}),(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`--accent`})}),(0,m.jsx)(n.td,{children:`active indicator bar + focus outline`})]})]})]}),`
`,(0,m.jsx)(n.h2,{id:`events-dispatched`,children:`Events dispatched`}),`
`,(0,m.jsxs)(n.table,{children:[(0,m.jsx)(n.thead,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.th,{children:`Event`}),(0,m.jsx)(n.th,{children:`When`}),(0,m.jsx)(n.th,{children:`Detail`})]})}),(0,m.jsx)(n.tbody,{children:(0,m.jsxs)(n.tr,{children:[(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`change`})}),(0,m.jsx)(n.td,{children:`After a tab is activated`}),(0,m.jsx)(n.td,{children:(0,m.jsx)(n.code,{children:`{ value: string }`})})]})})]}),`
`,(0,m.jsx)(n.h2,{id:`store-interaction`,children:`Store interaction`}),`
`,(0,m.jsx)(n.p,{children:`None.`}),`
`,(0,m.jsx)(n.h2,{id:`stories`,children:`Stories`}),`
`,(0,m.jsx)(i,{of:c}),`
`,(0,m.jsx)(i,{of:s}),`
`,(0,m.jsx)(i,{of:l})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;e((()=>{m=n(),o(),a(),u()}))();export{p as default};