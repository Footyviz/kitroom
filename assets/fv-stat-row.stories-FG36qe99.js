import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,ft as r,h as i,p as a,s as o,u as s}from"./iframe-CCcjCKbY.js";var c=t({BuildsAriaLabel:()=>x,Compact:()=>_,Default:()=>h,Featured:()=>g,FormLayout:()=>v,MultiRow:()=>y,StampsRowAndCellRoles:()=>b,__namedExportsOrder:()=>S,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=e((()=>{r(),s(),i(),o(),a(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Kitroom/StatRow`,component:`fv-stat-row`,argTypes:{label:{control:`text`},homeValue:{control:`text`},awayValue:{control:`text`},homePct:{control:{type:`range`,min:0,max:100,step:1}},featured:{control:`boolean`},compact:{control:`boolean`}},parameters:{controls:{disable:!0}}},d=e=>({docs:{source:{code:e,language:`html`}}}),f=`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  width: 460px;
  background: var(--bg-elev);
`,p=`border-bottom: 1px solid var(--border-subtle);`,m=e=>{let t=e.homePct,r=100-t,i=e.featured?`accent`:null;return n`
    <div style="${f}">
      <fv-stat-row
        ?data-featured=${e.featured}
        data-density=${e.compact?`compact`:`default`}
      >
        <fv-text data-role="home-value" data-variant="stat-sm">${e.homeValue}</fv-text>
        <fv-ratio-bar
          data-role="home-bar"
          style="--pct: ${t}%"
          data-tone=${i??``}
        ></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">${e.label}</fv-text>
        <fv-ratio-bar
          data-role="away-bar"
          style="--pct: ${r}%"
          data-direction="rtl"
        ></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">${e.awayValue}</fv-text>
      </fv-stat-row>
    </div>
  `},h={args:{label:`Possession`,homeValue:`58%`,awayValue:`42%`,homePct:58,featured:!1,compact:!1},render:m,parameters:{controls:{disable:!1},...d(`<fv-stat-row>
  <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">Possession</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
</fv-stat-row>`)}},g={args:{label:`xG`,homeValue:`1.84`,awayValue:`0.92`,homePct:67,featured:!0,compact:!1},render:m,parameters:{controls:{disable:!1},...d(`<fv-stat-row data-featured>
  <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">xG</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
</fv-stat-row>`)}},_={args:{label:`Shots`,homeValue:`12`,awayValue:`7`,homePct:63,featured:!1,compact:!0},render:m,parameters:{controls:{disable:!1},...d(`<fv-stat-row data-density="compact">
  <fv-text data-role="home-value" data-variant="stat-sm">12</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 63%"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">Shots</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 37%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">7</fv-text>
</fv-stat-row>`)}},v={render:()=>n`
    <div style="${f}">
      <fv-stat-row data-layout="form">
        <fv-series data-role="home-form" aria-label="Last 5: W W D W W">
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="warn"></span>
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
        </fv-series>
        <fv-text data-role="label" data-variant="caption">Form</fv-text>
        <fv-series data-role="away-form" aria-label="Last 5: L W W D L">
          <span data-pip="neg"></span>
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="warn"></span>
          <span data-pip="neg"></span>
        </fv-series>
      </fv-stat-row>
    </div>
  `,parameters:d(`<fv-stat-row data-layout="form">
  <fv-series data-role="home-form" aria-label="Last 5: W W D W W">
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
    <span data-pip="warn"></span>
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
  </fv-series>
  <fv-text data-role="label" data-variant="caption">Form</fv-text>
  <fv-series data-role="away-form" aria-label="Last 5: L W W D L">
    <span data-pip="neg"></span>
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
    <span data-pip="warn"></span>
    <span data-pip="neg"></span>
  </fv-series>
</fv-stat-row>`)},y={render:()=>n`
    <div style="${f}">
      <fv-stat-row style="${p}">
        <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Possession</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
      </fv-stat-row>
      <fv-stat-row style="${p}">
        <fv-text data-role="home-value" data-variant="stat-sm">12</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 63%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Shots</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 37%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">7</fv-text>
      </fv-stat-row>
      <fv-stat-row data-featured style="${p}">
        <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
        <fv-ratio-bar
          data-role="home-bar"
          style="--pct: 67%"
          data-tone="accent"
        ></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">xG</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
      </fv-stat-row>
      <fv-stat-row style="${p}">
        <fv-text data-role="home-value" data-variant="stat-sm">486</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 61%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Passes</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 39%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">312</fv-text>
      </fv-stat-row>
      <fv-stat-row style="${p}">
        <fv-text data-role="home-value" data-variant="stat-sm">3</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 43%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Corners</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 57%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">4</fv-text>
      </fv-stat-row>
      <fv-stat-row>
        <fv-text data-role="home-value" data-variant="stat-sm">8</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 47%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Fouls</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 53%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">9</fv-text>
      </fv-stat-row>
    </div>
  `,parameters:d(`<div class="statlist">
  <fv-stat-row>
    <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
    <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
    <fv-text data-role="label" data-variant="caption">Possession</fv-text>
    <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
    <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
  </fv-stat-row>
  <fv-stat-row data-featured>
    <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
    <fv-ratio-bar data-role="home-bar" style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
    <fv-text data-role="label" data-variant="caption">xG</fv-text>
    <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
    <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
  </fv-stat-row>
  <!-- ... additional rows ... -->
</div>`)},b={render:()=>n`
    <fv-stat-row data-testid="row">
      <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
      <fv-ratio-bar data-role="home-bar" style="--pct: 67%"></fv-ratio-bar>
      <fv-text data-role="label" data-variant="caption">xG</fv-text>
      <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
      <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
    </fv-stat-row>
  `,parameters:d(`<fv-stat-row>…</fv-stat-row>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="row"]`);l(t.getAttribute(`role`)).toBe(`row`),l(t.querySelector(`[data-role="home-value"]`)?.getAttribute(`role`)).toBe(`cell`),l(t.querySelector(`[data-role="label"]`)?.getAttribute(`role`)).toBe(`cell`),l(t.querySelector(`[data-role="away-value"]`)?.getAttribute(`role`)).toBe(`cell`),l(t.querySelector(`[data-role="home-bar"]`)?.getAttribute(`role`)).toBe(`presentation`),l(t.querySelector(`[data-role="away-bar"]`)?.getAttribute(`role`)).toBe(`presentation`)}},x={render:()=>n`
    <fv-stat-row data-testid="aria">
      <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
      <fv-ratio-bar data-role="home-bar" style="--pct: 67%"></fv-ratio-bar>
      <fv-text data-role="label" data-variant="caption">xG</fv-text>
      <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
      <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
    </fv-stat-row>
  `,parameters:d(`<fv-stat-row aria-label="xG: 1.84 vs 0.92">…</fv-stat-row>`),play:async({canvasElement:e})=>{l(e.querySelector(`[data-testid="aria"]`).getAttribute(`aria-label`)).toBe(`xG: 1.84 vs 0.92`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Possession',
    homeValue: '58%',
    awayValue: '42%',
    homePct: 58,
    featured: false,
    compact: false
  },
  render: renderRow,
  parameters: {
    controls: {
      disable: false
    },
    ...src(\`<fv-stat-row>
  <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">Possession</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
</fv-stat-row>\`)
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'xG',
    homeValue: '1.84',
    awayValue: '0.92',
    homePct: 67,
    featured: true,
    compact: false
  },
  render: renderRow,
  parameters: {
    controls: {
      disable: false
    },
    ...src(\`<fv-stat-row data-featured>
  <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">xG</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
</fv-stat-row>\`)
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Shots',
    homeValue: '12',
    awayValue: '7',
    homePct: 63,
    featured: false,
    compact: true
  },
  render: renderRow,
  parameters: {
    controls: {
      disable: false
    },
    ...src(\`<fv-stat-row data-density="compact">
  <fv-text data-role="home-value" data-variant="stat-sm">12</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 63%"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">Shots</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 37%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">7</fv-text>
</fv-stat-row>\`)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="\${listStyle}">
      <fv-stat-row data-layout="form">
        <fv-series data-role="home-form" aria-label="Last 5: W W D W W">
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="warn"></span>
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
        </fv-series>
        <fv-text data-role="label" data-variant="caption">Form</fv-text>
        <fv-series data-role="away-form" aria-label="Last 5: L W W D L">
          <span data-pip="neg"></span>
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="warn"></span>
          <span data-pip="neg"></span>
        </fv-series>
      </fv-stat-row>
    </div>
  \`,
  parameters: src(\`<fv-stat-row data-layout="form">
  <fv-series data-role="home-form" aria-label="Last 5: W W D W W">
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
    <span data-pip="warn"></span>
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
  </fv-series>
  <fv-text data-role="label" data-variant="caption">Form</fv-text>
  <fv-series data-role="away-form" aria-label="Last 5: L W W D L">
    <span data-pip="neg"></span>
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
    <span data-pip="warn"></span>
    <span data-pip="neg"></span>
  </fv-series>
</fv-stat-row>\`)
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="\${listStyle}">
      <fv-stat-row style="\${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Possession</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
      </fv-stat-row>
      <fv-stat-row style="\${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">12</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 63%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Shots</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 37%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">7</fv-text>
      </fv-stat-row>
      <fv-stat-row data-featured style="\${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
        <fv-ratio-bar
          data-role="home-bar"
          style="--pct: 67%"
          data-tone="accent"
        ></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">xG</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
      </fv-stat-row>
      <fv-stat-row style="\${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">486</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 61%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Passes</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 39%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">312</fv-text>
      </fv-stat-row>
      <fv-stat-row style="\${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">3</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 43%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Corners</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 57%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">4</fv-text>
      </fv-stat-row>
      <fv-stat-row>
        <fv-text data-role="home-value" data-variant="stat-sm">8</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 47%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Fouls</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 53%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">9</fv-text>
      </fv-stat-row>
    </div>
  \`,
  parameters: src(\`<div class="statlist">
  <fv-stat-row>
    <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
    <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
    <fv-text data-role="label" data-variant="caption">Possession</fv-text>
    <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
    <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
  </fv-stat-row>
  <fv-stat-row data-featured>
    <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
    <fv-ratio-bar data-role="home-bar" style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
    <fv-text data-role="label" data-variant="caption">xG</fv-text>
    <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
    <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
  </fv-stat-row>
  <!-- ... additional rows ... -->
</div>\`)
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-stat-row data-testid="row">
      <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
      <fv-ratio-bar data-role="home-bar" style="--pct: 67%"></fv-ratio-bar>
      <fv-text data-role="label" data-variant="caption">xG</fv-text>
      <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
      <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
    </fv-stat-row>
  \`,
  parameters: src(\`<fv-stat-row>…</fv-stat-row>\`),
  play: async ({
    canvasElement
  }) => {
    const row = canvasElement.querySelector<HTMLElement>('[data-testid="row"]')!;
    expect(row.getAttribute('role')).toBe('row');
    expect(row.querySelector('[data-role="home-value"]')?.getAttribute('role')).toBe('cell');
    expect(row.querySelector('[data-role="label"]')?.getAttribute('role')).toBe('cell');
    expect(row.querySelector('[data-role="away-value"]')?.getAttribute('role')).toBe('cell');
    expect(row.querySelector('[data-role="home-bar"]')?.getAttribute('role')).toBe('presentation');
    expect(row.querySelector('[data-role="away-bar"]')?.getAttribute('role')).toBe('presentation');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-stat-row data-testid="aria">
      <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
      <fv-ratio-bar data-role="home-bar" style="--pct: 67%"></fv-ratio-bar>
      <fv-text data-role="label" data-variant="caption">xG</fv-text>
      <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
      <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
    </fv-stat-row>
  \`,
  parameters: src(\`<fv-stat-row aria-label="xG: 1.84 vs 0.92">…</fv-stat-row>\`),
  play: async ({
    canvasElement
  }) => {
    const row = canvasElement.querySelector<HTMLElement>('[data-testid="aria"]')!;
    expect(row.getAttribute('aria-label')).toBe('xG: 1.84 vs 0.92');
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Featured`,`Compact`,`FormLayout`,`MultiRow`,`StampsRowAndCellRoles`,`BuildsAriaLabel`]}));C();export{x as BuildsAriaLabel,_ as Compact,h as Default,g as Featured,v as FormLayout,y as MultiRow,b as StampsRowAndCellRoles,S as __namedExportsOrder,u as default,C as n,c as t};