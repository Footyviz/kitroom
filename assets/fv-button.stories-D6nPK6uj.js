import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{T as n,dt as r,ft as i,ut as a,w as o,y as s}from"./iframe-CCcjCKbY.js";var c=t({ClickFiresEvent:()=>w,DisabledBlocksClickAndKeyboard:()=>E,Hierarchy:()=>y,LoadingBlocksClick:()=>D,OnDark:()=>C,Playground:()=>v,Sizes:()=>b,SpaceAndEnterActivate:()=>T,States:()=>x,SurvivesHtmxSwap:()=>k,TabindexFlipsWithDisabled:()=>O,WithIcon:()=>S,__namedExportsOrder:()=>A,default:()=>f}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j=e((()=>{i(),n(),o(),s(),{expect:l,fn:u,userEvent:d}=__STORYBOOK_MODULE_TEST__,f={title:`Kitroom/Button`,component:`fv-button`,argTypes:{label:{control:`text`},variant:{control:`select`,options:[`default`,`primary`,`cream`,`secondary`,`outline`,`ghost`,`destructive`],description:`data-variant — default is the secondary white-card style`},size:{control:{type:`inline-radio`},options:[`xs`,`sm`,`default`,`lg`],description:`data-size — default is medium (no attribute)`},loading:{control:`boolean`,description:`data-loading`},disabled:{control:`boolean`,description:`aria-disabled`}},parameters:{controls:{disable:!0}}},p=e=>({docs:{source:{code:e,language:`html`}}}),m=e=>{let t=[];return e.variant!==`default`&&t.push(`data-variant="${e.variant}"`),e.size!==`default`&&t.push(`data-size="${e.size}"`),e.disabled&&t.push(`aria-disabled="true"`),e.loading&&t.push(`data-loading`),`<fv-button${t.length?` `+t.join(` `):``}>${e.label}</fv-button>`},h=()=>({docs:{source:{language:`html`,transform:(e,t)=>m(t.args)}}}),g=e=>r`
  <fv-button
    data-variant="${e.variant===`default`?a:e.variant}"
    data-size="${e.size===`default`?a:e.size}"
    ?data-loading="${e.loading}"
    aria-disabled="${e.disabled?`true`:a}"
  >${e.label}</fv-button>
`,_=(...e)=>r`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    ${e}
  </div>
`,v={args:{label:`Open match`,variant:`primary`,size:`default`,loading:!1,disabled:!1},render:g,parameters:{...h(),controls:{disable:!1}}},y={render:()=>_(r`<fv-button data-variant="primary">Open match</fv-button>`,r`<fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>`,r`<fv-button data-variant="secondary">Compare sides</fv-button>`,r`<fv-button data-variant="outline">Save match</fv-button>`,r`<fv-button data-variant="ghost">Dismiss</fv-button>`,r`<fv-button data-variant="destructive">Remove</fv-button>`),parameters:p(`<fv-button data-variant="primary">Open match</fv-button>
<fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>
<fv-button data-variant="secondary">Compare sides</fv-button>
<fv-button data-variant="outline">Save match</fv-button>
<fv-button data-variant="ghost">Dismiss</fv-button>
<fv-button data-variant="destructive">Remove</fv-button>`)},b={render:()=>_(r`<fv-button data-variant="primary" data-size="xs">XS</fv-button>`,r`<fv-button data-variant="primary" data-size="sm">Small</fv-button>`,r`<fv-button data-variant="primary">Default</fv-button>`,r`<fv-button data-variant="primary" data-size="lg">Large</fv-button>`,r`<fv-button data-variant="secondary" aria-label="Share"><fv-icon name="share"></fv-icon></fv-button>`,r`<fv-button data-variant="secondary" data-size="lg" aria-label="Notify"><fv-icon name="bell"></fv-icon></fv-button>`),parameters:p(`<fv-button data-variant="primary" data-size="xs">XS</fv-button>
<fv-button data-variant="primary" data-size="sm">Small</fv-button>
<fv-button data-variant="primary">Default</fv-button>
<fv-button data-variant="primary" data-size="lg">Large</fv-button>
<fv-button data-variant="secondary" aria-label="Share"><fv-icon name="share"></fv-icon></fv-button>
<fv-button data-variant="secondary" data-size="lg" aria-label="Notify"><fv-icon name="bell"></fv-icon></fv-button>`)},x={render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${_(r`<fv-button data-variant="primary">Default</fv-button>`,r`<fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>`,r`<fv-button data-variant="primary" data-loading>Loading</fv-button>`)}
      ${_(r`<fv-button data-variant="cream">Default</fv-button>`,r`<fv-button data-variant="cream" aria-disabled="true">Disabled</fv-button>`,r`<fv-button data-variant="cream" data-loading>Loading</fv-button>`)}
      ${_(r`<fv-button>Default</fv-button>`,r`<fv-button aria-disabled="true">Disabled</fv-button>`,r`<fv-button data-loading>Loading</fv-button>`)}
    </div>
  `,parameters:p(`<!-- For each variant: default, aria-disabled, data-loading. -->
<fv-button data-variant="primary">Default</fv-button>
<fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>
<fv-button data-variant="primary" data-loading>Loading</fv-button>`)},S={render:()=>_(r`<fv-button data-variant="primary"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>`,r`<fv-button data-variant="secondary"><fv-icon name="bell"></fv-icon><span>Notify me</span></fv-button>`,r`<fv-button data-variant="ghost"><fv-icon name="share"></fv-icon><span>Share</span></fv-button>`,r`<fv-button data-variant="destructive"><fv-icon name="card"></fv-icon><span>Remove</span></fv-button>`),parameters:p(`<fv-button data-variant="primary"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>
<fv-button data-variant="secondary"><fv-icon name="bell"></fv-icon><span>Notify me</span></fv-button>
<fv-button data-variant="ghost"><fv-icon name="share"></fv-icon><span>Share</span></fv-button>
<fv-button data-variant="destructive"><fv-icon name="card"></fv-icon><span>Remove</span></fv-button>`)},C={render:()=>r`
    <div data-theme="dark" style="background: var(--bg); padding: 16px 18px; border-radius: 14px;">
      ${_(r`<fv-button>Open match</fv-button>`,r`<fv-button data-variant="cream">Watch live</fv-button>`,r`<fv-button data-variant="outline">Compare sides</fv-button>`,r`<fv-button data-variant="ghost">Dismiss</fv-button>`)}
    </div>
  `,parameters:p(`<div data-theme="dark" style="background: var(--bg); padding: 16px 18px; border-radius: 14px;">
  <fv-button>Open match</fv-button>
  <fv-button data-variant="cream">Watch live</fv-button>
  <fv-button data-variant="outline">Compare sides</fv-button>
  <fv-button data-variant="ghost">Dismiss</fv-button>
</div>`)},w={render:()=>r`<fv-button data-variant="primary">Click me</fv-button>`,play:async({canvasElement:e})=>{let t=e.querySelector(`fv-button`),n=u();t.addEventListener(`click`,n),await d.click(t),l(n).toHaveBeenCalledOnce(),t.removeEventListener(`click`,n)}},T={render:()=>r`<fv-button data-variant="primary">Activate me</fv-button>`,play:async({canvasElement:e})=>{let t=e.querySelector(`fv-button`),n=u();t.addEventListener(`click`,n),t.focus(),await d.keyboard(` `),l(n).toHaveBeenCalledOnce(),await d.keyboard(`{Enter}`),l(n).toHaveBeenCalledTimes(2),t.removeEventListener(`click`,n)}},E={render:()=>r`
    <fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`fv-button`);l(t.getAttribute(`tabindex`)).toBe(`-1`);let n=u();t.addEventListener(`click`,n),await d.click(t,{pointerEventsCheck:0}),l(n).not.toHaveBeenCalled(),t.focus(),await d.keyboard(` `),await d.keyboard(`{Enter}`),l(n).not.toHaveBeenCalled(),t.removeEventListener(`click`,n)}},D={render:()=>r`
    <fv-button data-variant="primary" data-loading>Loading</fv-button>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`fv-button`);l(t.getAttribute(`tabindex`)).toBe(`-1`);let n=u();t.addEventListener(`click`,n),await d.click(t,{pointerEventsCheck:0}),l(n).not.toHaveBeenCalled(),t.removeEventListener(`click`,n)}},O={render:()=>r`<fv-button data-variant="primary">Toggle me</fv-button>`,play:async({canvasElement:e})=>{let t=e.querySelector(`fv-button`);l(t.getAttribute(`tabindex`)).toBe(`0`),t.setAttribute(`aria-disabled`,`true`),l(t.getAttribute(`tabindex`)).toBe(`-1`),t.removeAttribute(`aria-disabled`),l(t.getAttribute(`tabindex`)).toBe(`0`),t.setAttribute(`data-loading`,``),l(t.getAttribute(`tabindex`)).toBe(`-1`),t.removeAttribute(`data-loading`),l(t.getAttribute(`tabindex`)).toBe(`0`)}},k={render:()=>r`
    <div data-testid="container">
      <fv-button data-variant="primary">Initial</fv-button>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`<fv-button data-variant="cream">Swapped</fv-button>`;let n=t.querySelector(`fv-button`);l(n.dataset.variant).toBe(`cream`),l(n.getAttribute(`role`)).toBe(`button`),l(n.getAttribute(`tabindex`)).toBe(`0`);let r=u();n.addEventListener(`click`,r),await d.click(n),l(r).toHaveBeenCalledOnce(),n.removeEventListener(`click`,r)}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Open match',
    variant: 'primary',
    size: 'default',
    loading: false,
    disabled: false
  },
  render: renderButton,
  parameters: {
    ...dynamicSrc(),
    controls: {
      disable: false
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:'{\n  render: (): TemplateResult => row(html`<fv-button data-variant="primary">Open match</fv-button>`, html`<fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>`, html`<fv-button data-variant="secondary">Compare sides</fv-button>`, html`<fv-button data-variant="outline">Save match</fv-button>`, html`<fv-button data-variant="ghost">Dismiss</fv-button>`, html`<fv-button data-variant="destructive">Remove</fv-button>`),\n  parameters: src(`<fv-button data-variant="primary">Open match</fv-button>\n<fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>\n<fv-button data-variant="secondary">Compare sides</fv-button>\n<fv-button data-variant="outline">Save match</fv-button>\n<fv-button data-variant="ghost">Dismiss</fv-button>\n<fv-button data-variant="destructive">Remove</fv-button>`)\n}',...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:'{\n  render: (): TemplateResult => row(html`<fv-button data-variant="primary" data-size="xs">XS</fv-button>`, html`<fv-button data-variant="primary" data-size="sm">Small</fv-button>`, html`<fv-button data-variant="primary">Default</fv-button>`, html`<fv-button data-variant="primary" data-size="lg">Large</fv-button>`, html`<fv-button data-variant="secondary" aria-label="Share"><fv-icon name="share"></fv-icon></fv-button>`, html`<fv-button data-variant="secondary" data-size="lg" aria-label="Notify"><fv-icon name="bell"></fv-icon></fv-button>`),\n  parameters: src(`<fv-button data-variant="primary" data-size="xs">XS</fv-button>\n<fv-button data-variant="primary" data-size="sm">Small</fv-button>\n<fv-button data-variant="primary">Default</fv-button>\n<fv-button data-variant="primary" data-size="lg">Large</fv-button>\n<fv-button data-variant="secondary" aria-label="Share"><fv-icon name="share"></fv-icon></fv-button>\n<fv-button data-variant="secondary" data-size="lg" aria-label="Notify"><fv-icon name="bell"></fv-icon></fv-button>`)\n}',...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:'{\n  render: (): TemplateResult => html`\n    <div style="display: flex; flex-direction: column; gap: 10px;">\n      ${row(html`<fv-button data-variant="primary">Default</fv-button>`, html`<fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>`, html`<fv-button data-variant="primary" data-loading>Loading</fv-button>`)}\n      ${row(html`<fv-button data-variant="cream">Default</fv-button>`, html`<fv-button data-variant="cream" aria-disabled="true">Disabled</fv-button>`, html`<fv-button data-variant="cream" data-loading>Loading</fv-button>`)}\n      ${row(html`<fv-button>Default</fv-button>`, html`<fv-button aria-disabled="true">Disabled</fv-button>`, html`<fv-button data-loading>Loading</fv-button>`)}\n    </div>\n  `,\n  parameters: src(`<!-- For each variant: default, aria-disabled, data-loading. -->\n<fv-button data-variant="primary">Default</fv-button>\n<fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>\n<fv-button data-variant="primary" data-loading>Loading</fv-button>`)\n}',...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:'{\n  render: (): TemplateResult => row(html`<fv-button data-variant="primary"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>`, html`<fv-button data-variant="secondary"><fv-icon name="bell"></fv-icon><span>Notify me</span></fv-button>`, html`<fv-button data-variant="ghost"><fv-icon name="share"></fv-icon><span>Share</span></fv-button>`, html`<fv-button data-variant="destructive"><fv-icon name="card"></fv-icon><span>Remove</span></fv-button>`),\n  parameters: src(`<fv-button data-variant="primary"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>\n<fv-button data-variant="secondary"><fv-icon name="bell"></fv-icon><span>Notify me</span></fv-button>\n<fv-button data-variant="ghost"><fv-icon name="share"></fv-icon><span>Share</span></fv-button>\n<fv-button data-variant="destructive"><fv-icon name="card"></fv-icon><span>Remove</span></fv-button>`)\n}',...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:'{\n  render: (): TemplateResult => html`\n    <div data-theme="dark" style="background: var(--bg); padding: 16px 18px; border-radius: 14px;">\n      ${row(html`<fv-button>Open match</fv-button>`, html`<fv-button data-variant="cream">Watch live</fv-button>`, html`<fv-button data-variant="outline">Compare sides</fv-button>`, html`<fv-button data-variant="ghost">Dismiss</fv-button>`)}\n    </div>\n  `,\n  parameters: src(`<div data-theme="dark" style="background: var(--bg); padding: 16px 18px; border-radius: 14px;">\n  <fv-button>Open match</fv-button>\n  <fv-button data-variant="cream">Watch live</fv-button>\n  <fv-button data-variant="outline">Compare sides</fv-button>\n  <fv-button data-variant="ghost">Dismiss</fv-button>\n</div>`)\n}',...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`<fv-button data-variant="primary">Click me</fv-button>\`,
  play: async ({
    canvasElement
  }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    const handler = fn();
    btn.addEventListener('click', handler);
    await userEvent.click(btn);
    expect(handler).toHaveBeenCalledOnce();
    btn.removeEventListener('click', handler);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`<fv-button data-variant="primary">Activate me</fv-button>\`,
  play: async ({
    canvasElement
  }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    const handler = fn();
    btn.addEventListener('click', handler);
    btn.focus();
    await userEvent.keyboard(' ');
    expect(handler).toHaveBeenCalledOnce();
    await userEvent.keyboard('{Enter}');
    expect(handler).toHaveBeenCalledTimes(2);
    btn.removeEventListener('click', handler);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>
  \`,
  play: async ({
    canvasElement
  }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    expect(btn.getAttribute('tabindex')).toBe('-1');
    const handler = fn();
    btn.addEventListener('click', handler);

    // pointerEventsCheck: 0 — CSS sets pointer-events: none on disabled buttons,
    // which would make userEvent throw. We're verifying the JS-level block here
    // (the CSS block is a separate concern, visible in the rendered styles).
    await userEvent.click(btn, {
      pointerEventsCheck: 0
    });
    expect(handler).not.toHaveBeenCalled();
    btn.focus();
    await userEvent.keyboard(' ');
    await userEvent.keyboard('{Enter}');
    expect(handler).not.toHaveBeenCalled();
    btn.removeEventListener('click', handler);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-button data-variant="primary" data-loading>Loading</fv-button>
  \`,
  play: async ({
    canvasElement
  }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    expect(btn.getAttribute('tabindex')).toBe('-1');
    const handler = fn();
    btn.addEventListener('click', handler);
    await userEvent.click(btn, {
      pointerEventsCheck: 0
    });
    expect(handler).not.toHaveBeenCalled();
    btn.removeEventListener('click', handler);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`<fv-button data-variant="primary">Toggle me</fv-button>\`,
  play: async ({
    canvasElement
  }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    expect(btn.getAttribute('tabindex')).toBe('0');
    btn.setAttribute('aria-disabled', 'true');
    expect(btn.getAttribute('tabindex')).toBe('-1');
    btn.removeAttribute('aria-disabled');
    expect(btn.getAttribute('tabindex')).toBe('0');
    btn.setAttribute('data-loading', '');
    expect(btn.getAttribute('tabindex')).toBe('-1');
    btn.removeAttribute('data-loading');
    expect(btn.getAttribute('tabindex')).toBe('0');
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-button data-variant="primary">Initial</fv-button>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = \`<fv-button data-variant="cream">Swapped</fv-button>\`;
    const btn = container.querySelector<HTMLElement>('fv-button')!;
    expect(btn.dataset.variant).toBe('cream');
    expect(btn.getAttribute('role')).toBe('button');
    expect(btn.getAttribute('tabindex')).toBe('0');
    const handler = fn();
    btn.addEventListener('click', handler);
    await userEvent.click(btn);
    expect(handler).toHaveBeenCalledOnce();
    btn.removeEventListener('click', handler);
  }
}`,...k.parameters?.docs?.source}}},A=[`Playground`,`Hierarchy`,`Sizes`,`States`,`WithIcon`,`OnDark`,`ClickFiresEvent`,`SpaceAndEnterActivate`,`DisabledBlocksClickAndKeyboard`,`LoadingBlocksClick`,`TabindexFlipsWithDisabled`,`SurvivesHtmxSwap`]}));j();export{w as ClickFiresEvent,E as DisabledBlocksClickAndKeyboard,y as Hierarchy,D as LoadingBlocksClick,C as OnDark,v as Playground,b as Sizes,T as SpaceAndEnterActivate,x as States,k as SurvivesHtmxSwap,O as TabindexFlipsWithDisabled,S as WithIcon,A as __namedExportsOrder,f as default,j as n,c as t};