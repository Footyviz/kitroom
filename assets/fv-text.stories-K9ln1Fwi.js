import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,ft as r,s as i,ut as a}from"./iframe-CCcjCKbY.js";var o=t({Playground:()=>g,ReflectsMaxWidth:()=>x,Stats:()=>b,SurvivesHtmxSwap:()=>w,Tones:()=>v,Truncation:()=>y,TruncationStylesApply:()=>S,TypeRamp:()=>_,UpdatesMaxWidthOnAttributeChange:()=>C,__namedExportsOrder:()=>T,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=e((()=>{r(),i(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Kitroom/Text`,component:`fv-text`,argTypes:{text:{control:`text`,description:`Slot content`},variant:{control:`select`,options:[`default`,`body`,`body-sm`,`caption`,`label`,`h1`,`h2`,`h3`,`display`,`display-serif`,`stat-xl`,`stat-lg`,`stat-md`,`stat-sm`,`mono`,`editorial`],description:"data-variant — picks the type style. `default` omits the attribute and falls back to body."},tone:{control:{type:`inline-radio`},options:[`default`,`muted`,`subtle`,`inverse`,`accent`],description:`data-tone — colour override (default keeps the variant's own colour)`},maxWidth:{control:`text`,description:`data-max-width — any CSS <length> (e.g. 200px, 20ch). When present, single-line ellipsis truncation kicks in.`}},parameters:{controls:{disable:!0}}},l=e=>({docs:{source:{code:e,language:`html`}}}),u=e=>{let t=[];return e.variant!==`default`&&t.push(`data-variant="${e.variant}"`),e.tone!==`default`&&t.push(`data-tone="${e.tone}"`),e.maxWidth&&t.push(`data-max-width="${e.maxWidth}"`),`<fv-text${t.length?` `+t.join(` `):``}>${e.text}</fv-text>`},d=()=>({docs:{source:{language:`html`,transform:(e,t)=>u(t.args)}}}),f=e=>n`
  <fv-text
    data-variant="${e.variant===`default`?a:e.variant}"
    data-tone="${e.tone===`default`?a:e.tone}"
    data-max-width="${e.maxWidth?e.maxWidth:a}"
    >${e.text}</fv-text
  >
`,p=`display: flex; flex-direction: column; gap: 16px; align-items: flex-start;`,m=`display: grid; grid-template-columns: 140px 1fr; gap: 18px 24px; align-items: baseline;`,h=`font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);`,g={args:{text:`Saka advanced 11m before releasing the pass.`,variant:`body`,tone:`default`,maxWidth:``},render:f,parameters:{...d(),controls:{disable:!1}}},_={render:()=>n`
    <div style="${m}">
      <span style="${h}">display</span>
      <fv-text data-variant="display">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${h}">display-serif</span>
      <fv-text data-variant="display-serif">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${h}">h1</span>
      <fv-text data-variant="h1">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${h}">h2</span>
      <fv-text data-variant="h2">Match summary</fv-text>

      <span style="${h}">h3</span>
      <fv-text data-variant="h3">Possession by third</fv-text>

      <span style="${h}">body</span>
      <fv-text data-variant="body">Saka advanced 11m before releasing the pass.</fv-text>

      <span style="${h}">body-sm</span>
      <fv-text data-variant="body-sm">Updated 12 seconds ago.</fv-text>

      <span style="${h}">caption</span>
      <fv-text data-variant="caption">live · 73′ · 2H</fv-text>

      <span style="${h}">label</span>
      <fv-text data-variant="label">Form</fv-text>

      <span style="${h}">stat-xl</span>
      <fv-text data-variant="stat-xl">2.7</fv-text>

      <span style="${h}">stat-lg</span>
      <fv-text data-variant="stat-lg">62.4%</fv-text>

      <span style="${h}">stat-md</span>
      <fv-text data-variant="stat-md">14 / 17</fv-text>

      <span style="${h}">stat-sm</span>
      <fv-text data-variant="stat-sm">+0.08 xT</fv-text>

      <span style="${h}">mono</span>
      <fv-text data-variant="mono">12 438 passes</fv-text>

      <span style="${h}">editorial</span>
      <fv-text data-variant="editorial">"The UI is the frame. The data is the painting."</fv-text>
    </div>
  `,parameters:l(`<fv-text data-variant="display">Arsenal 2 – 1 Chelsea</fv-text>
<fv-text data-variant="h1">Arsenal 2 – 1 Chelsea</fv-text>
<fv-text data-variant="h2">Match summary</fv-text>
<fv-text data-variant="h3">Possession by third</fv-text>
<fv-text data-variant="body">Saka advanced 11m before releasing the pass.</fv-text>
<fv-text data-variant="body-sm">Updated 12 seconds ago.</fv-text>
<fv-text data-variant="caption">live · 73′ · 2H</fv-text>
<fv-text data-variant="label">Form</fv-text>
<fv-text data-variant="stat-xl">2.7</fv-text>
<fv-text data-variant="stat-lg">62.4%</fv-text>
<fv-text data-variant="stat-md">14 / 17</fv-text>
<fv-text data-variant="stat-sm">+0.08 xT</fv-text>
<fv-text data-variant="mono">12 438 passes</fv-text>
<fv-text data-variant="editorial">"The UI is the frame. The data is the painting."</fv-text>`)},v={render:()=>n`
    <div style="${p}">
      <div style="${m}">
        <span style="${h}">default</span>
        <fv-text>Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${h}">muted</span>
        <fv-text data-tone="muted">Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${h}">subtle</span>
        <fv-text data-tone="subtle">Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${h}">accent</span>
        <fv-text data-tone="accent">Saka advanced 11m before releasing the pass.</fv-text>
      </div>

      <div data-theme="dark" style="background: var(--bg); padding: 14px 18px; border-radius: 12px; ${m}">
        <span style="${h}">inverse (on light surface)</span>
        <fv-text data-tone="inverse">Saka advanced 11m before releasing the pass.</fv-text>
      </div>
    </div>
  `,parameters:l(`<fv-text>Default tone — uses the variant's own colour.</fv-text>
<fv-text data-tone="muted">Muted body copy.</fv-text>
<fv-text data-tone="subtle">Subtle annotations.</fv-text>
<fv-text data-tone="accent">Accent emphasis (use sparingly).</fv-text>
<!-- inverse pairs with an inverted surface (e.g. data-theme=dark wrapper). -->
<div data-theme="dark" style="background: var(--bg); padding: 12px;">
  <fv-text data-tone="inverse">On dark surface.</fv-text>
</div>`)},y={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <div style="${h}; margin-bottom: 6px;">
          long copy, max-width 200px — truncates with ellipsis
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body" data-max-width="200px">
            Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
          </fv-text>
        </div>
      </div>

      <div>
        <div style="${h}; margin-bottom: 6px;">
          same long copy, no max-width — wraps naturally
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body">
            Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
          </fv-text>
        </div>
      </div>

      <div>
        <div style="${h}; margin-bottom: 6px;">
          short copy, max-width 200px — attribute is harmless when content fits
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body" data-max-width="200px">Saka 11m</fv-text>
        </div>
      </div>
    </div>
  `,parameters:l(`<fv-text data-variant="body" data-max-width="200px">
  Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
</fv-text>`)},b={render:()=>n`
    <div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px;">
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">xG</fv-text>
        <fv-text data-variant="stat-xl">2.7</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">Possession</fv-text>
        <fv-text data-variant="stat-lg">62.4%</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">On target</fv-text>
        <fv-text data-variant="stat-md">14 / 17</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">xT delta</fv-text>
        <fv-text data-variant="stat-sm">+0.08 xT</fv-text>
      </div>
    </div>
  `,parameters:l(`<fv-text data-variant="caption">xG</fv-text>
<fv-text data-variant="stat-xl">2.7</fv-text>

<fv-text data-variant="caption">Possession</fv-text>
<fv-text data-variant="stat-lg">62.4%</fv-text>

<fv-text data-variant="caption">On target</fv-text>
<fv-text data-variant="stat-md">14 / 17</fv-text>

<fv-text data-variant="caption">xT delta</fv-text>
<fv-text data-variant="stat-sm">+0.08 xT</fv-text>`)},x={render:()=>n`
    <fv-text data-testid="reflect" data-variant="body" data-max-width="180px">
      Saka advanced 11m before releasing the pass to Ødegaard.
    </fv-text>
  `,parameters:l(`<fv-text data-variant="body" data-max-width="180px">…</fv-text>`),play:async({canvasElement:e})=>{s(e.querySelector(`[data-testid="reflect"]`).style.maxWidth).toBe(`180px`)}},S={render:()=>n`
    <div>
      <fv-text data-testid="truncated" data-variant="body" data-max-width="160px">
        Saka advanced 11m before releasing the pass to Ødegaard.
      </fv-text>
      <fv-text data-testid="natural" data-variant="body">
        Saka advanced 11m before releasing the pass to Ødegaard.
      </fv-text>
    </div>
  `,parameters:l(`<fv-text data-variant="body" data-max-width="160px">…</fv-text>
<fv-text data-variant="body">…</fv-text>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="truncated"]`),n=e.querySelector(`[data-testid="natural"]`),r=getComputedStyle(t);s(r.textOverflow).toBe(`ellipsis`),s(r.whiteSpace).toBe(`nowrap`),s(r.display).toBe(`inline-block`),s(t.style.maxWidth).toBe(`160px`),s(getComputedStyle(n).whiteSpace).not.toBe(`nowrap`),s(n.style.maxWidth).toBe(``)}},C={render:()=>n`
    <fv-text data-testid="reactive" data-variant="body">
      Saka advanced 11m before releasing the pass.
    </fv-text>
  `,parameters:l(`<fv-text data-variant="body">…</fv-text>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="reactive"]`);s(t.style.maxWidth).toBe(``),t.setAttribute(`data-max-width`,`220px`),s(t.style.maxWidth).toBe(`220px`),t.setAttribute(`data-max-width`,`24ch`),s(t.style.maxWidth).toBe(`24ch`),t.removeAttribute(`data-max-width`),s(t.style.maxWidth).toBe(``)}},w={render:()=>n`
    <div data-testid="container">
      <fv-text data-variant="body">Initial body copy.</fv-text>
    </div>
  `,parameters:l(`<fv-text data-variant="body">…</fv-text>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`<fv-text data-variant="stat-md" data-max-width="120px">14 / 17</fv-text>`;let n=t.querySelector(`fv-text`);s(n.dataset.variant).toBe(`stat-md`),s(n.style.maxWidth).toBe(`120px`)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Saka advanced 11m before releasing the pass.',
    variant: 'body',
    tone: 'default',
    maxWidth: ''
  },
  render: renderText,
  parameters: {
    ...dynamicSrc(),
    controls: {
      disable: false
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="\${labelCol}">
      <span style="\${labelStyle}">display</span>
      <fv-text data-variant="display">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="\${labelStyle}">display-serif</span>
      <fv-text data-variant="display-serif">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="\${labelStyle}">h1</span>
      <fv-text data-variant="h1">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="\${labelStyle}">h2</span>
      <fv-text data-variant="h2">Match summary</fv-text>

      <span style="\${labelStyle}">h3</span>
      <fv-text data-variant="h3">Possession by third</fv-text>

      <span style="\${labelStyle}">body</span>
      <fv-text data-variant="body">Saka advanced 11m before releasing the pass.</fv-text>

      <span style="\${labelStyle}">body-sm</span>
      <fv-text data-variant="body-sm">Updated 12 seconds ago.</fv-text>

      <span style="\${labelStyle}">caption</span>
      <fv-text data-variant="caption">live · 73′ · 2H</fv-text>

      <span style="\${labelStyle}">label</span>
      <fv-text data-variant="label">Form</fv-text>

      <span style="\${labelStyle}">stat-xl</span>
      <fv-text data-variant="stat-xl">2.7</fv-text>

      <span style="\${labelStyle}">stat-lg</span>
      <fv-text data-variant="stat-lg">62.4%</fv-text>

      <span style="\${labelStyle}">stat-md</span>
      <fv-text data-variant="stat-md">14 / 17</fv-text>

      <span style="\${labelStyle}">stat-sm</span>
      <fv-text data-variant="stat-sm">+0.08 xT</fv-text>

      <span style="\${labelStyle}">mono</span>
      <fv-text data-variant="mono">12 438 passes</fv-text>

      <span style="\${labelStyle}">editorial</span>
      <fv-text data-variant="editorial">"The UI is the frame. The data is the painting."</fv-text>
    </div>
  \`,
  parameters: src(\`<fv-text data-variant="display">Arsenal 2 – 1 Chelsea</fv-text>
<fv-text data-variant="h1">Arsenal 2 – 1 Chelsea</fv-text>
<fv-text data-variant="h2">Match summary</fv-text>
<fv-text data-variant="h3">Possession by third</fv-text>
<fv-text data-variant="body">Saka advanced 11m before releasing the pass.</fv-text>
<fv-text data-variant="body-sm">Updated 12 seconds ago.</fv-text>
<fv-text data-variant="caption">live · 73′ · 2H</fv-text>
<fv-text data-variant="label">Form</fv-text>
<fv-text data-variant="stat-xl">2.7</fv-text>
<fv-text data-variant="stat-lg">62.4%</fv-text>
<fv-text data-variant="stat-md">14 / 17</fv-text>
<fv-text data-variant="stat-sm">+0.08 xT</fv-text>
<fv-text data-variant="mono">12 438 passes</fv-text>
<fv-text data-variant="editorial">"The UI is the frame. The data is the painting."</fv-text>\`)
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="\${stack}">
      <div style="\${labelCol}">
        <span style="\${labelStyle}">default</span>
        <fv-text>Saka advanced 11m before releasing the pass.</fv-text>

        <span style="\${labelStyle}">muted</span>
        <fv-text data-tone="muted">Saka advanced 11m before releasing the pass.</fv-text>

        <span style="\${labelStyle}">subtle</span>
        <fv-text data-tone="subtle">Saka advanced 11m before releasing the pass.</fv-text>

        <span style="\${labelStyle}">accent</span>
        <fv-text data-tone="accent">Saka advanced 11m before releasing the pass.</fv-text>
      </div>

      <div data-theme="dark" style="background: var(--bg); padding: 14px 18px; border-radius: 12px; \${labelCol}">
        <span style="\${labelStyle}">inverse (on light surface)</span>
        <fv-text data-tone="inverse">Saka advanced 11m before releasing the pass.</fv-text>
      </div>
    </div>
  \`,
  parameters: src(\`<fv-text>Default tone — uses the variant's own colour.</fv-text>
<fv-text data-tone="muted">Muted body copy.</fv-text>
<fv-text data-tone="subtle">Subtle annotations.</fv-text>
<fv-text data-tone="accent">Accent emphasis (use sparingly).</fv-text>
<!-- inverse pairs with an inverted surface (e.g. data-theme=dark wrapper). -->
<div data-theme="dark" style="background: var(--bg); padding: 12px;">
  <fv-text data-tone="inverse">On dark surface.</fv-text>
</div>\`)
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <div style="\${labelStyle}; margin-bottom: 6px;">
          long copy, max-width 200px — truncates with ellipsis
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body" data-max-width="200px">
            Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
          </fv-text>
        </div>
      </div>

      <div>
        <div style="\${labelStyle}; margin-bottom: 6px;">
          same long copy, no max-width — wraps naturally
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body">
            Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
          </fv-text>
        </div>
      </div>

      <div>
        <div style="\${labelStyle}; margin-bottom: 6px;">
          short copy, max-width 200px — attribute is harmless when content fits
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body" data-max-width="200px">Saka 11m</fv-text>
        </div>
      </div>
    </div>
  \`,
  parameters: src(\`<fv-text data-variant="body" data-max-width="200px">
  Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
</fv-text>\`)
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px;">
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">xG</fv-text>
        <fv-text data-variant="stat-xl">2.7</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">Possession</fv-text>
        <fv-text data-variant="stat-lg">62.4%</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">On target</fv-text>
        <fv-text data-variant="stat-md">14 / 17</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">xT delta</fv-text>
        <fv-text data-variant="stat-sm">+0.08 xT</fv-text>
      </div>
    </div>
  \`,
  parameters: src(\`<fv-text data-variant="caption">xG</fv-text>
<fv-text data-variant="stat-xl">2.7</fv-text>

<fv-text data-variant="caption">Possession</fv-text>
<fv-text data-variant="stat-lg">62.4%</fv-text>

<fv-text data-variant="caption">On target</fv-text>
<fv-text data-variant="stat-md">14 / 17</fv-text>

<fv-text data-variant="caption">xT delta</fv-text>
<fv-text data-variant="stat-sm">+0.08 xT</fv-text>\`)
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-text data-testid="reflect" data-variant="body" data-max-width="180px">
      Saka advanced 11m before releasing the pass to Ødegaard.
    </fv-text>
  \`,
  parameters: src(\`<fv-text data-variant="body" data-max-width="180px">…</fv-text>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="reflect"]')!;
    expect(el.style.maxWidth).toBe('180px');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div>
      <fv-text data-testid="truncated" data-variant="body" data-max-width="160px">
        Saka advanced 11m before releasing the pass to Ødegaard.
      </fv-text>
      <fv-text data-testid="natural" data-variant="body">
        Saka advanced 11m before releasing the pass to Ødegaard.
      </fv-text>
    </div>
  \`,
  parameters: src(\`<fv-text data-variant="body" data-max-width="160px">…</fv-text>
<fv-text data-variant="body">…</fv-text>\`),
  play: async ({
    canvasElement
  }) => {
    const truncated = canvasElement.querySelector<HTMLElement>('[data-testid="truncated"]')!;
    const natural = canvasElement.querySelector<HTMLElement>('[data-testid="natural"]')!;
    const truncatedStyle = getComputedStyle(truncated);
    expect(truncatedStyle.textOverflow).toBe('ellipsis');
    expect(truncatedStyle.whiteSpace).toBe('nowrap');
    expect(truncatedStyle.display).toBe('inline-block');
    expect(truncated.style.maxWidth).toBe('160px');
    const naturalStyle = getComputedStyle(natural);
    expect(naturalStyle.whiteSpace).not.toBe('nowrap');
    expect(natural.style.maxWidth).toBe('');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-text data-testid="reactive" data-variant="body">
      Saka advanced 11m before releasing the pass.
    </fv-text>
  \`,
  parameters: src(\`<fv-text data-variant="body">…</fv-text>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="reactive"]')!;
    expect(el.style.maxWidth).toBe('');
    el.setAttribute('data-max-width', '220px');
    expect(el.style.maxWidth).toBe('220px');
    el.setAttribute('data-max-width', '24ch');
    expect(el.style.maxWidth).toBe('24ch');
    el.removeAttribute('data-max-width');
    expect(el.style.maxWidth).toBe('');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-text data-variant="body">Initial body copy.</fv-text>
    </div>
  \`,
  parameters: src(\`<fv-text data-variant="body">…</fv-text>\`),
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = '<fv-text data-variant="stat-md" data-max-width="120px">14 / 17</fv-text>';
    const el = container.querySelector<HTMLElement>('fv-text')!;
    expect(el.dataset.variant).toBe('stat-md');
    expect(el.style.maxWidth).toBe('120px');
  }
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`TypeRamp`,`Tones`,`Truncation`,`Stats`,`ReflectsMaxWidth`,`TruncationStylesApply`,`UpdatesMaxWidthOnAttributeChange`,`SurvivesHtmxSwap`]}));E();export{g as Playground,x as ReflectsMaxWidth,b as Stats,w as SurvivesHtmxSwap,v as Tones,y as Truncation,S as TruncationStylesApply,_ as TypeRamp,C as UpdatesMaxWidthOnAttributeChange,T as __namedExportsOrder,c as default,E as n,o as t};