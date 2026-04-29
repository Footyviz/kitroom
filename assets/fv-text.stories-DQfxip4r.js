import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";var a,o=e((()=>{a=class extends HTMLElement{static observedAttributes=[`data-max-width`];connectedCallback(){this.#e()}disconnectedCallback(){}attributeChangedCallback(e){e===`data-max-width`&&this.isConnected&&this.#e()}#e(){let e=this.getAttribute(`data-max-width`);e?this.style.maxWidth=e:this.style.removeProperty(`max-width`)}},customElements.get(`fv-text`)||customElements.define(`fv-text`,a)})),s=t({Playground:()=>_,ReflectsMaxWidth:()=>S,Stats:()=>x,SurvivesHtmxSwap:()=>T,Tones:()=>y,Truncation:()=>b,TruncationStylesApply:()=>C,TypeRamp:()=>v,UpdatesMaxWidthOnAttributeChange:()=>w,__namedExportsOrder:()=>E,default:()=>l}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{r(),o(),{expect:c}=__STORYBOOK_MODULE_TEST__,l={title:`Components/Text`,component:`fv-text`,argTypes:{text:{control:`text`,description:`Slot content`},variant:{control:`select`,options:[`default`,`body`,`body-sm`,`caption`,`label`,`h1`,`h2`,`h3`,`display`,`display-serif`,`stat-xl`,`stat-lg`,`stat-md`,`stat-sm`,`mono`,`editorial`],description:"data-variant — picks the type style. `default` omits the attribute and falls back to body."},tone:{control:{type:`inline-radio`},options:[`default`,`muted`,`subtle`,`inverse`,`accent`],description:`data-tone — colour override (default keeps the variant's own colour)`},maxWidth:{control:`text`,description:`data-max-width — any CSS <length> (e.g. 200px, 20ch). When present, single-line ellipsis truncation kicks in.`}},parameters:{controls:{disable:!0}}},u=e=>({docs:{source:{code:e,language:`html`}}}),d=e=>{let t=[];return e.variant!==`default`&&t.push(`data-variant="${e.variant}"`),e.tone!==`default`&&t.push(`data-tone="${e.tone}"`),e.maxWidth&&t.push(`data-max-width="${e.maxWidth}"`),`<fv-text${t.length?` `+t.join(` `):``}>${e.text}</fv-text>`},f=()=>({docs:{source:{language:`html`,transform:(e,t)=>d(t.args)}}}),p=e=>n`
  <fv-text
    data-variant="${e.variant===`default`?i:e.variant}"
    data-tone="${e.tone===`default`?i:e.tone}"
    data-max-width="${e.maxWidth?e.maxWidth:i}"
    >${e.text}</fv-text
  >
`,m=`display: flex; flex-direction: column; gap: 16px; align-items: flex-start;`,h=`display: grid; grid-template-columns: 140px 1fr; gap: 18px 24px; align-items: baseline;`,g=`font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);`,_={args:{text:`Saka advanced 11m before releasing the pass.`,variant:`body`,tone:`default`,maxWidth:``},render:p,parameters:{...f(),controls:{disable:!1}}},v={render:()=>n`
    <div style="${h}">
      <span style="${g}">display</span>
      <fv-text data-variant="display">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${g}">display-serif</span>
      <fv-text data-variant="display-serif">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${g}">h1</span>
      <fv-text data-variant="h1">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${g}">h2</span>
      <fv-text data-variant="h2">Match summary</fv-text>

      <span style="${g}">h3</span>
      <fv-text data-variant="h3">Possession by third</fv-text>

      <span style="${g}">body</span>
      <fv-text data-variant="body">Saka advanced 11m before releasing the pass.</fv-text>

      <span style="${g}">body-sm</span>
      <fv-text data-variant="body-sm">Updated 12 seconds ago.</fv-text>

      <span style="${g}">caption</span>
      <fv-text data-variant="caption">live · 73′ · 2H</fv-text>

      <span style="${g}">label</span>
      <fv-text data-variant="label">Form</fv-text>

      <span style="${g}">stat-xl</span>
      <fv-text data-variant="stat-xl">2.7</fv-text>

      <span style="${g}">stat-lg</span>
      <fv-text data-variant="stat-lg">62.4%</fv-text>

      <span style="${g}">stat-md</span>
      <fv-text data-variant="stat-md">14 / 17</fv-text>

      <span style="${g}">stat-sm</span>
      <fv-text data-variant="stat-sm">+0.08 xT</fv-text>

      <span style="${g}">mono</span>
      <fv-text data-variant="mono">12 438 passes</fv-text>

      <span style="${g}">editorial</span>
      <fv-text data-variant="editorial">"The UI is the frame. The data is the painting."</fv-text>
    </div>
  `,parameters:u(`<fv-text data-variant="display">Arsenal 2 – 1 Chelsea</fv-text>
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
<fv-text data-variant="editorial">"The UI is the frame. The data is the painting."</fv-text>`)},y={render:()=>n`
    <div style="${m}">
      <div style="${h}">
        <span style="${g}">default</span>
        <fv-text>Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${g}">muted</span>
        <fv-text data-tone="muted">Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${g}">subtle</span>
        <fv-text data-tone="subtle">Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${g}">accent</span>
        <fv-text data-tone="accent">Saka advanced 11m before releasing the pass.</fv-text>
      </div>

      <div data-theme="dark" style="background: var(--bg); padding: 14px 18px; border-radius: 12px; ${h}">
        <span style="${g}">inverse (on light surface)</span>
        <fv-text data-tone="inverse">Saka advanced 11m before releasing the pass.</fv-text>
      </div>
    </div>
  `,parameters:u(`<fv-text>Default tone — uses the variant's own colour.</fv-text>
<fv-text data-tone="muted">Muted body copy.</fv-text>
<fv-text data-tone="subtle">Subtle annotations.</fv-text>
<fv-text data-tone="accent">Accent emphasis (use sparingly).</fv-text>
<!-- inverse pairs with an inverted surface (e.g. data-theme=dark wrapper). -->
<div data-theme="dark" style="background: var(--bg); padding: 12px;">
  <fv-text data-tone="inverse">On dark surface.</fv-text>
</div>`)},b={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <div style="${g}; margin-bottom: 6px;">
          long copy, max-width 200px — truncates with ellipsis
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body" data-max-width="200px">
            Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
          </fv-text>
        </div>
      </div>

      <div>
        <div style="${g}; margin-bottom: 6px;">
          same long copy, no max-width — wraps naturally
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body">
            Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
          </fv-text>
        </div>
      </div>

      <div>
        <div style="${g}; margin-bottom: 6px;">
          short copy, max-width 200px — attribute is harmless when content fits
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body" data-max-width="200px">Saka 11m</fv-text>
        </div>
      </div>
    </div>
  `,parameters:u(`<fv-text data-variant="body" data-max-width="200px">
  Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
</fv-text>`)},x={render:()=>n`
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
  `,parameters:u(`<fv-text data-variant="caption">xG</fv-text>
<fv-text data-variant="stat-xl">2.7</fv-text>

<fv-text data-variant="caption">Possession</fv-text>
<fv-text data-variant="stat-lg">62.4%</fv-text>

<fv-text data-variant="caption">On target</fv-text>
<fv-text data-variant="stat-md">14 / 17</fv-text>

<fv-text data-variant="caption">xT delta</fv-text>
<fv-text data-variant="stat-sm">+0.08 xT</fv-text>`)},S={render:()=>n`
    <fv-text data-testid="reflect" data-variant="body" data-max-width="180px">
      Saka advanced 11m before releasing the pass to Ødegaard.
    </fv-text>
  `,parameters:u(`<fv-text data-variant="body" data-max-width="180px">…</fv-text>`),play:async({canvasElement:e})=>{c(e.querySelector(`[data-testid="reflect"]`).style.maxWidth).toBe(`180px`)}},C={render:()=>n`
    <div>
      <fv-text data-testid="truncated" data-variant="body" data-max-width="160px">
        Saka advanced 11m before releasing the pass to Ødegaard.
      </fv-text>
      <fv-text data-testid="natural" data-variant="body">
        Saka advanced 11m before releasing the pass to Ødegaard.
      </fv-text>
    </div>
  `,parameters:u(`<fv-text data-variant="body" data-max-width="160px">…</fv-text>
<fv-text data-variant="body">…</fv-text>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="truncated"]`),n=e.querySelector(`[data-testid="natural"]`),r=getComputedStyle(t);c(r.textOverflow).toBe(`ellipsis`),c(r.whiteSpace).toBe(`nowrap`),c(r.display).toBe(`inline-block`),c(t.style.maxWidth).toBe(`160px`),c(getComputedStyle(n).whiteSpace).not.toBe(`nowrap`),c(n.style.maxWidth).toBe(``)}},w={render:()=>n`
    <fv-text data-testid="reactive" data-variant="body">
      Saka advanced 11m before releasing the pass.
    </fv-text>
  `,parameters:u(`<fv-text data-variant="body">…</fv-text>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="reactive"]`);c(t.style.maxWidth).toBe(``),t.setAttribute(`data-max-width`,`220px`),c(t.style.maxWidth).toBe(`220px`),t.setAttribute(`data-max-width`,`24ch`),c(t.style.maxWidth).toBe(`24ch`),t.removeAttribute(`data-max-width`),c(t.style.maxWidth).toBe(``)}},T={render:()=>n`
    <div data-testid="container">
      <fv-text data-variant="body">Initial body copy.</fv-text>
    </div>
  `,parameters:u(`<fv-text data-variant="body">…</fv-text>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`<fv-text data-variant="stat-md" data-max-width="120px">14 / 17</fv-text>`;let n=t.querySelector(`fv-text`);c(n.dataset.variant).toBe(`stat-md`),c(n.style.maxWidth).toBe(`120px`)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`Playground`,`TypeRamp`,`Tones`,`Truncation`,`Stats`,`ReflectsMaxWidth`,`TruncationStylesApply`,`UpdatesMaxWidthOnAttributeChange`,`SurvivesHtmxSwap`]}));D();export{_ as Playground,S as ReflectsMaxWidth,x as Stats,T as SurvivesHtmxSwap,y as Tones,b as Truncation,C as TruncationStylesApply,v as TypeRamp,w as UpdatesMaxWidthOnAttributeChange,E as __namedExportsOrder,l as default,D as n,s as t};