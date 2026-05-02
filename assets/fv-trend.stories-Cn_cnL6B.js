import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{a as n,dt as r,ft as i,ut as a}from"./iframe-CCcjCKbY.js";var o=t({ConsumerAriaLabelWins:()=>v,Directions:()=>f,InRow:()=>p,Playground:()=>d,RendersDownWithSingularLabel:()=>h,RendersFlat:()=>g,RendersUpWithDelta:()=>m,UpdatesOnAttributeChange:()=>_,__namedExportsOrder:()=>y,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{i(),n(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Kitroom/Trend`,component:`fv-trend`,argTypes:{direction:{control:{type:`inline-radio`},options:[`up`,`down`,`flat`],description:`data-direction`},delta:{control:`text`,description:`data-delta — non-negative magnitude (ignored when flat)`},label:{control:`text`,description:`aria-label — overrides the auto-generated one when set`}},parameters:{controls:{disable:!0}}},l=e=>({docs:{source:{code:e,language:`html`}}}),u=`font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);`,d={args:{direction:`up`,delta:`2`,label:``},render:e=>r`
    <fv-trend
      data-direction="${e.direction}"
      data-delta="${e.delta?e.delta:a}"
      aria-label="${e.label?e.label:a}"
    ></fv-trend>
  `,parameters:{docs:{source:{language:`html`,transform:(e,t)=>{let n=[`data-direction="${t.args.direction}"`];return t.args.delta&&n.push(`data-delta="${t.args.delta}"`),t.args.label&&n.push(`aria-label="${t.args.label}"`),`<fv-trend ${n.join(` `)}></fv-trend>`}}},controls:{disable:!1}}},f={render:()=>r`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="${u}">up · 2</span>
      <fv-trend data-direction="up" data-delta="2"></fv-trend>

      <span style="${u}">down · 1</span>
      <fv-trend data-direction="down" data-delta="1"></fv-trend>

      <span style="${u}">flat</span>
      <fv-trend data-direction="flat"></fv-trend>

      <span style="${u}">up · 0 (no delta)</span>
      <fv-trend data-direction="up"></fv-trend>
    </div>
  `,parameters:l(`<fv-trend data-direction="up" data-delta="2"></fv-trend>
<fv-trend data-direction="down" data-delta="1"></fv-trend>
<fv-trend data-direction="flat"></fv-trend>`)},p={render:()=>r`
    <div style="display: inline-flex; align-items: center; gap: 14px;
                font-family: var(--font-mono); font-size: 12px; color: var(--fg);">
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="up" data-delta="2"></fv-trend> 1
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="flat"></fv-trend> 2
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="up" data-delta="1"></fv-trend> 3
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="down" data-delta="2"></fv-trend> 4
      </span>
    </div>
  `,parameters:l(`<fv-trend data-direction="up" data-delta="2"></fv-trend> 1
<fv-trend data-direction="flat"></fv-trend> 2
<fv-trend data-direction="up" data-delta="1"></fv-trend> 3`)},m={render:()=>r`
    <fv-trend data-testid="t" data-direction="up" data-delta="2"></fv-trend>
  `,parameters:l(`<fv-trend data-direction="up" data-delta="2"></fv-trend>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`);s(t.textContent).toBe(`▲+2`),s(t.getAttribute(`role`)).toBe(`img`),s(t.getAttribute(`aria-label`)).toBe(`up 2 positions`)}},h={render:()=>r`
    <fv-trend data-testid="t" data-direction="down" data-delta="1"></fv-trend>
  `,parameters:l(`<fv-trend data-direction="down" data-delta="1"></fv-trend>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`);s(t.textContent).toBe(`▼-1`),s(t.getAttribute(`aria-label`)).toBe(`down 1 position`)}},g={render:()=>r`
    <fv-trend data-testid="t" data-direction="flat"></fv-trend>
  `,parameters:l(`<fv-trend data-direction="flat"></fv-trend>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`);s(t.textContent).toBe(`·`),s(t.getAttribute(`aria-label`)).toBe(`no change`)}},_={render:()=>r`
    <fv-trend data-testid="t" data-direction="up" data-delta="2"></fv-trend>
  `,parameters:l(`<fv-trend data-direction="up" data-delta="2"></fv-trend>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`);s(t.textContent).toBe(`▲+2`),t.setAttribute(`data-direction`,`down`),t.setAttribute(`data-delta`,`5`),s(t.textContent).toBe(`▼-5`),s(t.getAttribute(`aria-label`)).toBe(`down 5 positions`),t.setAttribute(`data-direction`,`flat`),s(t.textContent).toBe(`·`),s(t.getAttribute(`aria-label`)).toBe(`no change`)}},v={render:()=>r`
    <fv-trend data-testid="t" data-direction="up" data-delta="2" aria-label="Climbing fast"></fv-trend>
  `,parameters:l(`<fv-trend data-direction="up" data-delta="2" aria-label="Climbing fast"></fv-trend>`),play:async({canvasElement:e})=>{s(e.querySelector(`[data-testid="t"]`).getAttribute(`aria-label`)).toBe(`Climbing fast`)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'up',
    delta: '2',
    label: ''
  },
  render: (args): TemplateResult => html\`
    <fv-trend
      data-direction="\${args.direction}"
      data-delta="\${args.delta ? args.delta : nothing}"
      aria-label="\${args.label ? args.label : nothing}"
    ></fv-trend>
  \`,
  parameters: {
    docs: {
      source: {
        language: 'html' as const,
        transform: (_: string, ctx: {
          args: TrendArgs;
        }) => {
          const attrs = [\`data-direction="\${ctx.args.direction}"\`];
          if (ctx.args.delta) attrs.push(\`data-delta="\${ctx.args.delta}"\`);
          if (ctx.args.label) attrs.push(\`aria-label="\${ctx.args.label}"\`);
          return \`<fv-trend \${attrs.join(' ')}></fv-trend>\`;
        }
      }
    },
    controls: {
      disable: false
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="\${labelStyle}">up · 2</span>
      <fv-trend data-direction="up" data-delta="2"></fv-trend>

      <span style="\${labelStyle}">down · 1</span>
      <fv-trend data-direction="down" data-delta="1"></fv-trend>

      <span style="\${labelStyle}">flat</span>
      <fv-trend data-direction="flat"></fv-trend>

      <span style="\${labelStyle}">up · 0 (no delta)</span>
      <fv-trend data-direction="up"></fv-trend>
    </div>
  \`,
  parameters: src(\`<fv-trend data-direction="up" data-delta="2"></fv-trend>
<fv-trend data-direction="down" data-delta="1"></fv-trend>
<fv-trend data-direction="flat"></fv-trend>\`)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: inline-flex; align-items: center; gap: 14px;
                font-family: var(--font-mono); font-size: 12px; color: var(--fg);">
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="up" data-delta="2"></fv-trend> 1
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="flat"></fv-trend> 2
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="up" data-delta="1"></fv-trend> 3
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="down" data-delta="2"></fv-trend> 4
      </span>
    </div>
  \`,
  parameters: src(\`<fv-trend data-direction="up" data-delta="2"></fv-trend> 1
<fv-trend data-direction="flat"></fv-trend> 2
<fv-trend data-direction="up" data-delta="1"></fv-trend> 3\`)
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-trend data-testid="t" data-direction="up" data-delta="2"></fv-trend>
  \`,
  parameters: src(\`<fv-trend data-direction="up" data-delta="2"></fv-trend>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.textContent).toBe('▲+2');
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBe('up 2 positions');
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-trend data-testid="t" data-direction="down" data-delta="1"></fv-trend>
  \`,
  parameters: src(\`<fv-trend data-direction="down" data-delta="1"></fv-trend>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.textContent).toBe('▼-1');
    expect(el.getAttribute('aria-label')).toBe('down 1 position');
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-trend data-testid="t" data-direction="flat"></fv-trend>
  \`,
  parameters: src(\`<fv-trend data-direction="flat"></fv-trend>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.textContent).toBe('·');
    expect(el.getAttribute('aria-label')).toBe('no change');
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-trend data-testid="t" data-direction="up" data-delta="2"></fv-trend>
  \`,
  parameters: src(\`<fv-trend data-direction="up" data-delta="2"></fv-trend>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.textContent).toBe('▲+2');
    el.setAttribute('data-direction', 'down');
    el.setAttribute('data-delta', '5');
    expect(el.textContent).toBe('▼-5');
    expect(el.getAttribute('aria-label')).toBe('down 5 positions');
    el.setAttribute('data-direction', 'flat');
    expect(el.textContent).toBe('·');
    expect(el.getAttribute('aria-label')).toBe('no change');
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-trend data-testid="t" data-direction="up" data-delta="2" aria-label="Climbing fast"></fv-trend>
  \`,
  parameters: src(\`<fv-trend data-direction="up" data-delta="2" aria-label="Climbing fast"></fv-trend>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.getAttribute('aria-label')).toBe('Climbing fast');
  }
}`,...v.parameters?.docs?.source}}},y=[`Playground`,`Directions`,`InRow`,`RendersUpWithDelta`,`RendersDownWithSingularLabel`,`RendersFlat`,`UpdatesOnAttributeChange`,`ConsumerAriaLabelWins`]}));b();export{v as ConsumerAriaLabelWins,f as Directions,p as InRow,d as Playground,h as RendersDownWithSingularLabel,g as RendersFlat,m as RendersUpWithDelta,_ as UpdatesOnAttributeChange,y as __namedExportsOrder,c as default,b as n,o as t};