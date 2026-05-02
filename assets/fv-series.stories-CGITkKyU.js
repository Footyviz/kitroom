import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,ft as r,p as i,ut as a}from"./iframe-CCcjCKbY.js";var o=t({ExposesAriaLabel:()=>h,FormVariants:()=>p,MaxVisible:()=>m,MaxVisibleHidesEarlyChildren:()=>g,Playground:()=>f,__namedExportsOrder:()=>_,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v=e((()=>{r(),i(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Kitroom/Series`,component:`fv-series`,argTypes:{pips:{control:`text`,description:`Space-separated pip values (e.g. "pos pos warn pos pos")`},label:{control:`text`,description:`aria-label describing the sequence`},maxVisible:{control:`text`,description:`data-max-visible — leave empty for unbounded; 1-10 hide all but the last N`}},parameters:{controls:{disable:!0}}},l=e=>({docs:{source:{code:e,language:`html`}}}),u=`font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);`,d=e=>e.trim().split(/\s+/).filter(e=>e===`pos`||e===`warn`||e===`neg`),f={args:{pips:`pos pos warn pos pos`,label:`Last 5: W W D W W`,maxVisible:``},render:e=>n`
    <fv-series
      aria-label="${e.label}"
      data-max-visible="${e.maxVisible?e.maxVisible:a}"
    >
      ${d(e.pips).map(e=>n`<span data-pip="${e}"></span>`)}
    </fv-series>
  `,parameters:{docs:{source:{language:`html`,transform:(e,t)=>{let n=[`aria-label="${t.args.label}"`];t.args.maxVisible&&n.push(`data-max-visible="${t.args.maxVisible}"`);let r=d(t.args.pips).map(e=>`  <span data-pip="${e}"></span>`).join(`
`);return`<fv-series ${n.join(` `)}>\n${r}\n</fv-series>`}}},controls:{disable:!1}}},p={render:()=>n`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="${u}">all wins</span>
      <fv-series aria-label="Last 5: W W W W W">
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="${u}">mixed</span>
      <fv-series aria-label="Last 5: W W D W W">
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="warn"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="${u}">poor</span>
      <fv-series aria-label="Last 5: L D L D L">
        <span data-pip="neg"></span>
        <span data-pip="warn"></span>
        <span data-pip="neg"></span>
        <span data-pip="warn"></span>
        <span data-pip="neg"></span>
      </fv-series>
    </div>
  `,parameters:l(`<fv-series aria-label="Last 5: W W D W W">
  <span data-pip="pos"></span>
  <span data-pip="pos"></span>
  <span data-pip="warn"></span>
  <span data-pip="pos"></span>
  <span data-pip="pos"></span>
</fv-series>`)},m={render:()=>n`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="${u}">10 pips, all visible</span>
      <fv-series aria-label="Last 10 results">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="${u}">data-max-visible="5" → last 5</span>
      <fv-series aria-label="Last 5 of 10" data-max-visible="5">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="${u}">data-max-visible="3" → last 3</span>
      <fv-series aria-label="Last 3 of 10" data-max-visible="3">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>
    </div>
  `,parameters:l(`<fv-series aria-label="Last 5 of 10" data-max-visible="5">
  <span data-pip="pos"></span>
  <span data-pip="warn"></span>
  ...
</fv-series>`)},h={render:()=>n`
    <fv-series data-testid="s" aria-label="Last 5: W W D W W">
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
      <span data-pip="warn"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
    </fv-series>
  `,parameters:l(`<fv-series aria-label="Last 5: W W D W W">…</fv-series>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);s(t.getAttribute(`role`)).toBe(`img`),s(t.getAttribute(`aria-label`)).toBe(`Last 5: W W D W W`),s(t.children.length).toBe(5)}},g={render:()=>n`
    <fv-series data-testid="s" aria-label="Last 3 of 6" data-max-visible="3">
      <span data-pip="neg"></span>
      <span data-pip="neg"></span>
      <span data-pip="neg"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
    </fv-series>
  `,parameters:l(`<fv-series aria-label="Last 3 of 6" data-max-visible="3">…</fv-series>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`),n=Array.from(t.children).filter(e=>getComputedStyle(e).display!==`none`);s(n.length).toBe(3),s(n.map(e=>e.getAttribute(`data-pip`))).toEqual([`pos`,`pos`,`pos`])}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    pips: 'pos pos warn pos pos',
    label: 'Last 5: W W D W W',
    maxVisible: ''
  },
  render: (args): TemplateResult => html\`
    <fv-series
      aria-label="\${args.label}"
      data-max-visible="\${args.maxVisible ? args.maxVisible : nothing}"
    >
      \${parsePips(args.pips).map(p => html\`<span data-pip="\${p}"></span>\`)}
    </fv-series>
  \`,
  parameters: {
    docs: {
      source: {
        language: 'html' as const,
        transform: (_: string, ctx: {
          args: SeriesArgs;
        }) => {
          const attrs = [\`aria-label="\${ctx.args.label}"\`];
          if (ctx.args.maxVisible) attrs.push(\`data-max-visible="\${ctx.args.maxVisible}"\`);
          const pips = parsePips(ctx.args.pips).map(p => \`  <span data-pip="\${p}"></span>\`).join('\\n');
          return \`<fv-series \${attrs.join(' ')}>\\n\${pips}\\n</fv-series>\`;
        }
      }
    },
    controls: {
      disable: false
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="\${labelStyle}">all wins</span>
      <fv-series aria-label="Last 5: W W W W W">
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="\${labelStyle}">mixed</span>
      <fv-series aria-label="Last 5: W W D W W">
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="warn"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="\${labelStyle}">poor</span>
      <fv-series aria-label="Last 5: L D L D L">
        <span data-pip="neg"></span>
        <span data-pip="warn"></span>
        <span data-pip="neg"></span>
        <span data-pip="warn"></span>
        <span data-pip="neg"></span>
      </fv-series>
    </div>
  \`,
  parameters: src(\`<fv-series aria-label="Last 5: W W D W W">
  <span data-pip="pos"></span>
  <span data-pip="pos"></span>
  <span data-pip="warn"></span>
  <span data-pip="pos"></span>
  <span data-pip="pos"></span>
</fv-series>\`)
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="\${labelStyle}">10 pips, all visible</span>
      <fv-series aria-label="Last 10 results">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="\${labelStyle}">data-max-visible="5" → last 5</span>
      <fv-series aria-label="Last 5 of 10" data-max-visible="5">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="\${labelStyle}">data-max-visible="3" → last 3</span>
      <fv-series aria-label="Last 3 of 10" data-max-visible="3">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>
    </div>
  \`,
  parameters: src(\`<fv-series aria-label="Last 5 of 10" data-max-visible="5">
  <span data-pip="pos"></span>
  <span data-pip="warn"></span>
  ...
</fv-series>\`)
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-series data-testid="s" aria-label="Last 5: W W D W W">
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
      <span data-pip="warn"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
    </fv-series>
  \`,
  parameters: src(\`<fv-series aria-label="Last 5: W W D W W">…</fv-series>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBe('Last 5: W W D W W');
    expect(el.children.length).toBe(5);
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-series data-testid="s" aria-label="Last 3 of 6" data-max-visible="3">
      <span data-pip="neg"></span>
      <span data-pip="neg"></span>
      <span data-pip="neg"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
    </fv-series>
  \`,
  parameters: src(\`<fv-series aria-label="Last 3 of 6" data-max-visible="3">…</fv-series>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    const kids = Array.from(el.children) as HTMLElement[];
    const visible = kids.filter(k => getComputedStyle(k).display !== 'none');
    expect(visible.length).toBe(3);
    expect(visible.map(k => k.getAttribute('data-pip'))).toEqual(['pos', 'pos', 'pos']);
  }
}`,...g.parameters?.docs?.source}}},_=[`Playground`,`FormVariants`,`MaxVisible`,`ExposesAriaLabel`,`MaxVisibleHidesEarlyChildren`]}));v();export{h as ExposesAriaLabel,p as FormVariants,m as MaxVisible,g as MaxVisibleHidesEarlyChildren,f as Playground,_ as __namedExportsOrder,c as default,v as n,o as t};