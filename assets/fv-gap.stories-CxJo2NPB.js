import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{T as n,b as r,dt as i,ft as a,ut as o,y as s}from"./iframe-CCcjCKbY.js";var c=t({InToolbar:()=>g,Playground:()=>m,Scale:()=>h,__namedExportsOrder:()=>_,default:()=>d}),l,u,d,f,p,m,h,g,_,v=e((()=>{a(),r(),n(),s(),l=[`1`,`2`,`3`,`4`,`6`,`8`,`12`,`16`,`24`],u={1:`4px`,2:`8px`,3:`12px`,4:`16px`,6:`24px`,8:`32px`,12:`48px`,16:`64px`,24:`96px`},d={title:`Kitroom/Gap`,component:`fv-gap`,argTypes:{size:{control:`select`,options:[`none`,...l],description:`data-size — one of the 9 spec spacing steps; "none" omits the attribute`}},parameters:{controls:{disable:!0}}},f=e=>({docs:{source:{code:e,language:`html`}}}),p=e=>i`
  <span style="
    display: inline-block;
    padding: 6px 10px;
    background: var(--neutral-1000);
    color: var(--neutral-0);
    font: var(--fw-medium) 12px/1 var(--font-mono);
    border-radius: var(--radius-sm);
    vertical-align: middle;
  ">${e}</span>
`,m={args:{size:`4`},render:({size:e})=>i`
    <div style="display: inline-flex; align-items: center;">
      ${p(`A`)}
      <fv-gap data-size="${e===`none`?o:e}"></fv-gap>
      ${p(`B`)}
    </div>
  `,parameters:{docs:{source:{language:`html`,transform:(e,t)=>t.args.size===`none`?`<span>A</span><fv-gap></fv-gap><span>B</span>`:`<span>A</span><fv-gap data-size="${t.args.size}"></fv-gap><span>B</span>`}},controls:{disable:!1}}},h={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 10px; font: var(--fw-medium) 11px/1 var(--font-mono); color: var(--fg-muted);">
      ${l.map(e=>i`
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="width: 32px; text-align: right;">${e}</span>
            <span style="width: 44px;">${u[e]}</span>
            <span style="display: inline-flex; align-items: center;">
              <span style="display: inline-block; width: 4px; height: 18px; background: var(--neutral-1000);"></span>
              <fv-gap data-size="${e}"></fv-gap>
              <span style="display: inline-block; width: 4px; height: 18px; background: var(--neutral-1000);"></span>
            </span>
          </div>
        `)}
    </div>
  `,parameters:f(l.map(e=>`<fv-gap data-size="${e}"></fv-gap>`).join(`
`))},g={render:()=>i`
    <div style="display: flex; align-items: center;">
      <fv-button data-variant="secondary"><fv-icon name="filter"></fv-icon><span>Filter</span></fv-button>
      <fv-gap data-size="2"></fv-gap>
      <fv-button data-variant="secondary"><fv-icon name="compare"></fv-icon><span>Compare</span></fv-button>

      <fv-gap data-size="6"></fv-gap>

      <fv-button data-variant="primary">Open match</fv-button>
      <fv-gap data-size="2"></fv-gap>
      <fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>
    </div>
  `,parameters:f(`<div style="display: flex; align-items: center;">
  <fv-button data-variant="secondary"><fv-icon name="filter"></fv-icon><span>Filter</span></fv-button>
  <fv-gap data-size="2"></fv-gap>
  <fv-button data-variant="secondary"><fv-icon name="compare"></fv-icon><span>Compare</span></fv-button>

  <fv-gap data-size="6"></fv-gap>

  <fv-button data-variant="primary">Open match</fv-button>
  <fv-gap data-size="2"></fv-gap>
  <fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>
</div>`)},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: '4'
  },
  render: ({
    size
  }): TemplateResult => html\`
    <div style="display: inline-flex; align-items: center;">
      \${marker('A')}
      <fv-gap data-size="\${size !== 'none' ? size : nothing}"></fv-gap>
      \${marker('B')}
    </div>
  \`,
  parameters: {
    docs: {
      source: {
        language: 'html' as const,
        transform: (_: string, ctx: {
          args: GapArgs;
        }) => ctx.args.size === 'none' ? \`<span>A</span><fv-gap></fv-gap><span>B</span>\` : \`<span>A</span><fv-gap data-size="\${ctx.args.size}"></fv-gap><span>B</span>\`
      }
    },
    controls: {
      disable: false
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 10px; font: var(--fw-medium) 11px/1 var(--font-mono); color: var(--fg-muted);">
      \${SIZES.map(s => html\`
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="width: 32px; text-align: right;">\${s}</span>
            <span style="width: 44px;">\${PIXELS[s]}</span>
            <span style="display: inline-flex; align-items: center;">
              <span style="display: inline-block; width: 4px; height: 18px; background: var(--neutral-1000);"></span>
              <fv-gap data-size="\${s}"></fv-gap>
              <span style="display: inline-block; width: 4px; height: 18px; background: var(--neutral-1000);"></span>
            </span>
          </div>
        \`)}
    </div>
  \`,
  parameters: src(SIZES.map(s => \`<fv-gap data-size="\${s}"></fv-gap>\`).join('\\n'))
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; align-items: center;">
      <fv-button data-variant="secondary"><fv-icon name="filter"></fv-icon><span>Filter</span></fv-button>
      <fv-gap data-size="2"></fv-gap>
      <fv-button data-variant="secondary"><fv-icon name="compare"></fv-icon><span>Compare</span></fv-button>

      <fv-gap data-size="6"></fv-gap>

      <fv-button data-variant="primary">Open match</fv-button>
      <fv-gap data-size="2"></fv-gap>
      <fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>
    </div>
  \`,
  parameters: src(\`<div style="display: flex; align-items: center;">
  <fv-button data-variant="secondary"><fv-icon name="filter"></fv-icon><span>Filter</span></fv-button>
  <fv-gap data-size="2"></fv-gap>
  <fv-button data-variant="secondary"><fv-icon name="compare"></fv-icon><span>Compare</span></fv-button>

  <fv-gap data-size="6"></fv-gap>

  <fv-button data-variant="primary">Open match</fv-button>
  <fv-gap data-size="2"></fv-gap>
  <fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>
</div>\`)
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`Scale`,`InToolbar`]}));v();export{g as InToolbar,m as Playground,h as Scale,_ as __namedExportsOrder,d as default,v as n,c as t};