import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";import{t as a}from"./fv-icon-cSwpiE2c.js";var o,s=e((()=>{o=[`pitch`,`ball`,`goal`,`xg`,`heat-map`,`key-pass`,`formation`,`on-target`,`whistle`,`card`,`sub`,`live`,`search`,`calendar`,`clock`,`filter`,`compare`,`star`,`trophy`,`bell`,`settings`,`share`]})),c=t({Catalog:()=>S,Default:()=>y,MarksDecorativeByDefault:()=>E,Playground:()=>C,RendersSymbolReference:()=>w,Sizes:()=>b,Tones:()=>x,UpdatesOnNameChange:()=>T,__namedExportsOrder:()=>D,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=e((()=>{r(),a(),s(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Icon`,component:`fv-icon`,argTypes:{name:{control:`select`,options:o,description:`Icon name — references <symbol id="icon-NAME"> in the page sprite`},size:{control:{type:`inline-radio`},options:[`default`,`sm`,`md`,`lg`],description:`data-size — sm: 16px · md: 20px · lg: 28px (default = md)`},tone:{control:{type:`inline-radio`},options:[`default`,`accent`,`muted`],description:`data-tone — currentColor / --accent / --fg-muted`}}},d=`display: flex; gap: 18px; flex-wrap: wrap; align-items: center;`,f=`display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 22px 14px;`,p=`display: flex; flex-direction: column; gap: 8px; align-items: center;`,m=`font-family: var(--font-mono); font-size: 10px; color: var(--fg-subtle);`,h=e=>({docs:{source:{code:e,language:`html`}}}),g=e=>{let t=[`name="${e.name}"`];return e.size!==`default`&&t.push(`data-size="${e.size}"`),e.tone!==`default`&&t.push(`data-tone="${e.tone}"`),`<fv-icon ${t.join(` `)}></fv-icon>`},_=e=>n`
  <fv-icon
    name="${e.name}"
    data-size="${e.size===`default`?i:e.size}"
    data-tone="${e.tone===`default`?i:e.tone}"
  ></fv-icon>
`,v=()=>({docs:{source:{language:`html`,transform:(e,t)=>g(t.args)}}}),y={args:{name:`pitch`,size:`default`,tone:`default`},render:_,parameters:v()},b={args:{name:`ball`,size:`default`,tone:`default`},render:()=>n`
    <div style="${d}">
      <span style="${m}">sm 16px</span>
      <fv-icon name="ball" data-size="sm"></fv-icon>
      <span style="${m}">md 20px</span>
      <fv-icon name="ball" data-size="md"></fv-icon>
      <span style="${m}">lg 28px</span>
      <fv-icon name="ball" data-size="lg"></fv-icon>
    </div>
  `,parameters:h(`<fv-icon name="ball" data-size="sm"></fv-icon>
<fv-icon name="ball" data-size="md"></fv-icon>
<fv-icon name="ball" data-size="lg"></fv-icon>`)},x={args:{name:`live`,size:`default`,tone:`default`},render:()=>n`
    <div style="${d}">
      <span style="${m}">default</span>
      <fv-icon name="live" data-size="lg"></fv-icon>
      <span style="${m}">accent</span>
      <fv-icon name="live" data-size="lg" data-tone="accent"></fv-icon>
      <span style="${m}">muted</span>
      <fv-icon name="live" data-size="lg" data-tone="muted"></fv-icon>
    </div>
  `,parameters:h(`<fv-icon name="live" data-size="lg"></fv-icon>
<fv-icon name="live" data-size="lg" data-tone="accent"></fv-icon>
<fv-icon name="live" data-size="lg" data-tone="muted"></fv-icon>`)},S={args:{name:`pitch`,size:`default`,tone:`default`},render:()=>n`
    <div style="${f}">
      ${o.map(e=>n`
          <div style="${p}">
            <fv-icon name="${e}" data-size="lg"></fv-icon>
            <span style="${m}">${e}</span>
          </div>
        `)}
    </div>
  `,parameters:h(`<!-- All 22 icons rendered at lg (28px). Names map to <symbol id="icon-NAME"> in the page sprite. -->
<fv-icon name="pitch" data-size="lg"></fv-icon>
<fv-icon name="ball" data-size="lg"></fv-icon>
<!-- ...etc. -->`)},C={args:{name:`pitch`,size:`default`,tone:`default`},render:_,parameters:v()},w={args:{name:`pitch`,size:`default`,tone:`default`},render:()=>n`<fv-icon data-testid="ref" name="pitch"></fv-icon>`,parameters:h(`<fv-icon name="pitch"></fv-icon>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="ref"]`).querySelector(`use`);l(t).not.toBeNull(),l(t?.getAttribute(`href`)).toBe(`#icon-pitch`)}},T={args:{name:`pitch`,size:`default`,tone:`default`},render:()=>n`<fv-icon data-testid="reactive" name="pitch"></fv-icon>`,parameters:h(`<fv-icon name="pitch"></fv-icon>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="reactive"]`);l(t.querySelector(`use`)?.getAttribute(`href`)).toBe(`#icon-pitch`),t.setAttribute(`name`,`ball`),l(t.querySelector(`use`)?.getAttribute(`href`)).toBe(`#icon-ball`)}},E={args:{name:`pitch`,size:`default`,tone:`default`},render:()=>n`
    <div>
      <fv-icon data-testid="decorative" name="pitch"></fv-icon>
      <fv-icon data-testid="labelled" name="live" aria-label="Live match"></fv-icon>
    </div>
  `,parameters:h(`<fv-icon name="pitch"></fv-icon>
<fv-icon name="live" aria-label="Live match"></fv-icon>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="decorative"]`),n=e.querySelector(`[data-testid="labelled"]`);l(t.getAttribute(`aria-hidden`)).toBe(`true`),l(n.hasAttribute(`aria-hidden`)).toBe(!1),l(n.getAttribute(`aria-label`)).toBe(`Live match`)}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pitch',
    size: 'default',
    tone: 'default'
  },
  render: renderIcon,
  parameters: dynamicSrc()
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'ball',
    size: 'default',
    tone: 'default'
  },
  render: () => html\`
    <div style="\${row}">
      <span style="\${labelStyle}">sm 16px</span>
      <fv-icon name="ball" data-size="sm"></fv-icon>
      <span style="\${labelStyle}">md 20px</span>
      <fv-icon name="ball" data-size="md"></fv-icon>
      <span style="\${labelStyle}">lg 28px</span>
      <fv-icon name="ball" data-size="lg"></fv-icon>
    </div>
  \`,
  parameters: src(\`<fv-icon name="ball" data-size="sm"></fv-icon>
<fv-icon name="ball" data-size="md"></fv-icon>
<fv-icon name="ball" data-size="lg"></fv-icon>\`)
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'live',
    size: 'default',
    tone: 'default'
  },
  render: () => html\`
    <div style="\${row}">
      <span style="\${labelStyle}">default</span>
      <fv-icon name="live" data-size="lg"></fv-icon>
      <span style="\${labelStyle}">accent</span>
      <fv-icon name="live" data-size="lg" data-tone="accent"></fv-icon>
      <span style="\${labelStyle}">muted</span>
      <fv-icon name="live" data-size="lg" data-tone="muted"></fv-icon>
    </div>
  \`,
  parameters: src(\`<fv-icon name="live" data-size="lg"></fv-icon>
<fv-icon name="live" data-size="lg" data-tone="accent"></fv-icon>
<fv-icon name="live" data-size="lg" data-tone="muted"></fv-icon>\`)
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pitch',
    size: 'default',
    tone: 'default'
  },
  render: () => html\`
    <div style="\${grid}">
      \${iconNames.map(n => html\`
          <div style="\${cell}">
            <fv-icon name="\${n}" data-size="lg"></fv-icon>
            <span style="\${labelStyle}">\${n}</span>
          </div>
        \`)}
    </div>
  \`,
  parameters: src(\`<!-- All 22 icons rendered at lg (28px). Names map to <symbol id="icon-NAME"> in the page sprite. -->
<fv-icon name="pitch" data-size="lg"></fv-icon>
<fv-icon name="ball" data-size="lg"></fv-icon>
<!-- ...etc. -->\`)
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pitch',
    size: 'default',
    tone: 'default'
  },
  render: renderIcon,
  parameters: dynamicSrc()
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pitch',
    size: 'default',
    tone: 'default'
  },
  render: () => html\`<fv-icon data-testid="ref" name="pitch"></fv-icon>\`,
  parameters: src(\`<fv-icon name="pitch"></fv-icon>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="ref"]')!;
    const use = el.querySelector('use');
    expect(use).not.toBeNull();
    expect(use?.getAttribute('href')).toBe('#icon-pitch');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pitch',
    size: 'default',
    tone: 'default'
  },
  render: () => html\`<fv-icon data-testid="reactive" name="pitch"></fv-icon>\`,
  parameters: src(\`<fv-icon name="pitch"></fv-icon>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="reactive"]')!;
    expect(el.querySelector('use')?.getAttribute('href')).toBe('#icon-pitch');
    el.setAttribute('name', 'ball');
    expect(el.querySelector('use')?.getAttribute('href')).toBe('#icon-ball');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'pitch',
    size: 'default',
    tone: 'default'
  },
  render: () => html\`
    <div>
      <fv-icon data-testid="decorative" name="pitch"></fv-icon>
      <fv-icon data-testid="labelled" name="live" aria-label="Live match"></fv-icon>
    </div>
  \`,
  parameters: src(\`<fv-icon name="pitch"></fv-icon>
<fv-icon name="live" aria-label="Live match"></fv-icon>\`),
  play: async ({
    canvasElement
  }) => {
    const decorative = canvasElement.querySelector<HTMLElement>('[data-testid="decorative"]')!;
    const labelled = canvasElement.querySelector<HTMLElement>('[data-testid="labelled"]')!;
    expect(decorative.getAttribute('aria-hidden')).toBe('true');
    expect(labelled.hasAttribute('aria-hidden')).toBe(false);
    expect(labelled.getAttribute('aria-label')).toBe('Live match');
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Sizes`,`Tones`,`Catalog`,`Playground`,`RendersSymbolReference`,`UpdatesOnNameChange`,`MarksDecorativeByDefault`]}));O();export{S as Catalog,y as Default,E as MarksDecorativeByDefault,C as Playground,w as RendersSymbolReference,b as Sizes,x as Tones,T as UpdatesOnNameChange,D as __namedExportsOrder,u as default,O as n,c as t};