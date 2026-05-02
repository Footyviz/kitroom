import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,f as r,ft as i,ut as a}from"./iframe-CCcjCKbY.js";var o=t({ChangeEventBubblesWithValue:()=>x,ClampsToMinMax:()=>C,CleansUpOnDisconnect:()=>T,CustomRange:()=>_,Default:()=>g,Disabled:()=>v,DisabledIgnoresKeyboard:()=>w,HandlesMissingThumbAndFill:()=>E,KeyboardArrowsAdjustValue:()=>b,Playground:()=>y,StepRoundsKeyboardChanges:()=>S,SurvivesHtmxSwap:()=>D,__namedExportsOrder:()=>O,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{i(),r(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Kitroom/Slider`,component:`fv-slider`,argTypes:{value:{control:{type:`number`},description:`data-value`},min:{control:{type:`number`},description:`data-min`},max:{control:{type:`number`},description:`data-max`},step:{control:{type:`number`},description:`data-step`},disabled:{control:`boolean`,description:`aria-disabled`}}},d=n`
  <span data-role="track"></span>
  <span data-role="fill"></span>
  <span data-role="thumb"></span>
`,f=`<span data-role="track"></span>
  <span data-role="fill"></span>
  <span data-role="thumb"></span>`,p=(e,t)=>{let n=[`data-value="${e.value}"`];return e.min!==0&&n.push(`data-min="${e.min}"`),e.max!==100&&n.push(`data-max="${e.max}"`),e.step!==1&&n.push(`data-step="${e.step}"`),e.disabled&&n.push(`aria-disabled="true"`),n.push(`aria-label="${t}"`),`<fv-slider ${n.join(` `)}>
  ${f}
</fv-slider>`},m=e=>({docs:{source:{language:`html`,transform:(t,n)=>p(n.args,e)}}}),h=(e,t)=>n`
  <fv-slider
    data-value="${e.value}"
    data-min="${e.min===0?a:String(e.min)}"
    data-max="${e.max===100?a:String(e.max)}"
    data-step="${e.step===1?a:String(e.step)}"
    aria-disabled="${e.disabled?`true`:a}"
    aria-label="${t}"
  >${d}</fv-slider>
`,g={args:{value:62,min:0,max:100,step:1,disabled:!1},render:e=>n`
    <div style="display:inline-flex;align-items:center;gap:10px">
      ${h(e,`Volume`)}
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--fg-muted)">${e.value}%</span>
    </div>
  `,parameters:m(`Volume`)},_={args:{value:40,min:0,max:120,step:5,disabled:!1},render:e=>h(e,`Match minute`),parameters:m(`Match minute`)},v={args:{value:40,min:0,max:100,step:1,disabled:!0},render:e=>h(e,`Disabled`),parameters:m(`Disabled`)},y={args:{value:50,min:0,max:100,step:1,disabled:!1},render:e=>n`
    <div style="display:inline-flex;align-items:center;gap:10px">
      ${h(e,`Volume`)}
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--fg-muted)">${e.value}</span>
    </div>
  `,parameters:m(`Volume`)},b={render:()=>n`
    <fv-slider data-value="50" aria-label="Test" data-testid="s">${d}</fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`),n;t.addEventListener(`change`,e=>{n=e.detail.value}),t.focus(),s(t.getAttribute(`aria-valuenow`)).toBe(`50`),s(t.getAttribute(`data-value`)).not.toBe(`51`),await l.keyboard(`{ArrowRight}`),s(t.getAttribute(`data-value`)).toBe(`51`),s(n).toBe(51),await l.keyboard(`{ArrowLeft>3/}`),s(t.getAttribute(`data-value`)).toBe(`48`),await l.keyboard(`{Home}`),s(t.getAttribute(`data-value`)).toBe(`0`),await l.keyboard(`{End}`),s(t.getAttribute(`data-value`)).toBe(`100`)}},x={render:()=>n`
    <div data-testid="parent">
      <fv-slider data-value="50" aria-label="Bubbles">${d}</fv-slider>
    </div>
  `,play:async({canvasElement:e})=>{let t=c();document.body.addEventListener(`change`,t),e.querySelector(`fv-slider`).focus(),await l.keyboard(`{ArrowRight}`),s(t).toHaveBeenCalledOnce();let n=t.mock.calls[0][0];s(n.detail).toEqual({value:51}),s(n.bubbles).toBe(!0),document.body.removeEventListener(`change`,t)}},S={render:()=>n`
    <fv-slider data-value="40" data-min="0" data-max="100" data-step="10"
               aria-label="Step" data-testid="s">${d}</fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);t.focus(),s(t.getAttribute(`data-value`)).not.toBe(`50`),await l.keyboard(`{ArrowRight}`),s(t.getAttribute(`data-value`)).toBe(`50`),await l.keyboard(`{ArrowRight}{ArrowRight}`),s(t.getAttribute(`data-value`)).toBe(`70`)}},C={render:()=>n`
    <fv-slider data-value="98" data-min="0" data-max="100"
               aria-label="Clamp" data-testid="s">${d}</fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);t.focus(),s(t.getAttribute(`data-value`)).not.toBe(`100`),await l.keyboard(`{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}`),s(t.getAttribute(`data-value`)).toBe(`100`),s(t.getAttribute(`aria-valuenow`)).toBe(`100`),await l.keyboard(`{End}`),s(t.getAttribute(`data-value`)).toBe(`100`),s(t.getAttribute(`data-value`)).not.toBe(`0`),await l.keyboard(`{Home}`),s(t.getAttribute(`data-value`)).toBe(`0`)}},w={render:()=>n`
    <fv-slider data-value="40" aria-disabled="true" aria-label="Off"
               data-testid="s">${d}</fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);t.focus(),s(t.getAttribute(`data-value`)).toBe(`40`),await l.keyboard(`{ArrowRight}{ArrowRight}`),s(t.getAttribute(`data-value`)).toBe(`40`)}},T={render:()=>n`
    <div data-testid="host">
      <fv-slider data-value="50" aria-label="Cleanup">${d}</fv-slider>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-slider`);n.focus(),s(n.getAttribute(`data-value`)).not.toBe(`51`),await l.keyboard(`{ArrowRight}`),s(n.getAttribute(`data-value`)).toBe(`51`),t.removeChild(n);let r=c();document.addEventListener(`change`,r),n.dispatchEvent(new KeyboardEvent(`keydown`,{key:`ArrowRight`,bubbles:!0})),s(r).not.toHaveBeenCalled(),s(n.getAttribute(`data-value`)).toBe(`51`),document.removeEventListener(`change`,r)}},E={render:()=>n`
    <!-- Track only — no fill or thumb spans. The component must not
         crash; paint becomes a no-op for the missing parts. -->
    <fv-slider data-value="50" aria-label="Bare" data-testid="s">
      <span data-role="track"></span>
    </fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);t.focus(),s(t.getAttribute(`data-value`)).not.toBe(`51`),await l.keyboard(`{ArrowRight}`),s(t.getAttribute(`data-value`)).toBe(`51`)}},D={render:()=>n`
    <div data-testid="container">
      <fv-slider data-value="20" aria-label="Initial">${d}</fv-slider>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`
      <fv-slider data-value="75" data-min="0" data-max="100" aria-label="Swapped">
        <span data-role="track"></span>
        <span data-role="fill"></span>
        <span data-role="thumb"></span>
      </fv-slider>
    `;let n=t.querySelector(`fv-slider`);s(n.getAttribute(`aria-valuenow`)).toBe(`75`),n.focus(),s(n.getAttribute(`data-value`)).not.toBe(`76`),await l.keyboard(`{ArrowRight}`),s(n.getAttribute(`data-value`)).toBe(`76`)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 62,
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  },
  render: args => html\`
    <div style="display:inline-flex;align-items:center;gap:10px">
      \${renderSlider(args, 'Volume')}
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--fg-muted)">\${args.value}%</span>
    </div>
  \`,
  parameters: dynamicSrc('Volume')
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    min: 0,
    max: 120,
    step: 5,
    disabled: false
  },
  render: args => renderSlider(args, 'Match minute'),
  parameters: dynamicSrc('Match minute')
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    min: 0,
    max: 100,
    step: 1,
    disabled: true
  },
  render: args => renderSlider(args, 'Disabled'),
  parameters: dynamicSrc('Disabled')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50,
    min: 0,
    max: 100,
    step: 1,
    disabled: false
  },
  render: args => html\`
    <div style="display:inline-flex;align-items:center;gap:10px">
      \${renderSlider(args, 'Volume')}
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--fg-muted)">\${args.value}</span>
    </div>
  \`,
  parameters: dynamicSrc('Volume')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-slider data-value="50" aria-label="Test" data-testid="s">\${innerParts}</fv-slider>
  \`,
  play: async ({
    canvasElement
  }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    let lastChange: number | undefined;
    slider.addEventListener('change', e => {
      lastChange = (e as CustomEvent<{
        value: number;
      }>).detail.value;
    });
    slider.focus();
    // Render only sets data-value="50"; aria-valuenow is mirrored by
    // the component on connect — that line is the meaningful assertion.
    expect(slider.getAttribute('aria-valuenow')).toBe('50');
    expect(slider.getAttribute('data-value')).not.toBe('51');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('51');
    expect(lastChange).toBe(51);

    // From here each step's prior assertion is the implicit "before".
    await userEvent.keyboard('{ArrowLeft>3/}');
    expect(slider.getAttribute('data-value')).toBe('48');
    await userEvent.keyboard('{Home}');
    expect(slider.getAttribute('data-value')).toBe('0');
    await userEvent.keyboard('{End}');
    expect(slider.getAttribute('data-value')).toBe('100');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="parent">
      <fv-slider data-value="50" aria-label="Bubbles">\${innerParts}</fv-slider>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const handler = fn();
    document.body.addEventListener('change', handler);
    const slider = canvasElement.querySelector<HTMLElement>('fv-slider')!;
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{
      value: number;
    }>;
    expect(event.detail).toEqual({
      value: 51
    });
    expect(event.bubbles).toBe(true);
    document.body.removeEventListener('change', handler);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-slider data-value="40" data-min="0" data-max="100" data-step="10"
               aria-label="Step" data-testid="s">\${innerParts}</fv-slider>
  \`,
  play: async ({
    canvasElement
  }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    slider.focus();
    expect(slider.getAttribute('data-value')).not.toBe('50');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('50');
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('70');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-slider data-value="98" data-min="0" data-max="100"
               aria-label="Clamp" data-testid="s">\${innerParts}</fv-slider>
  \`,
  play: async ({
    canvasElement
  }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    slider.focus();
    expect(slider.getAttribute('data-value')).not.toBe('100');
    // Five ArrowRights from 98 → 99 → 100, then clamped at 100 thereafter.
    await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('100');
    expect(slider.getAttribute('aria-valuenow')).toBe('100');

    // End on a slider already at max: value stays at max (no change).
    await userEvent.keyboard('{End}');
    expect(slider.getAttribute('data-value')).toBe('100');
    expect(slider.getAttribute('data-value')).not.toBe('0');
    await userEvent.keyboard('{Home}');
    expect(slider.getAttribute('data-value')).toBe('0');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-slider data-value="40" aria-disabled="true" aria-label="Off"
               data-testid="s">\${innerParts}</fv-slider>
  \`,
  play: async ({
    canvasElement
  }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    // Disabled slider gets tabindex=-1; focus programmatically.
    slider.focus();
    // The whole point: data-value MUST stay "40" through arrow keys.
    expect(slider.getAttribute('data-value')).toBe('40');
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('40');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="host">
      <fv-slider data-value="50" aria-label="Cleanup">\${innerParts}</fv-slider>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const slider = host.querySelector<HTMLElement>('fv-slider')!;
    slider.focus();
    expect(slider.getAttribute('data-value')).not.toBe('51');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('51');
    host.removeChild(slider);

    // After disconnect, dispatching keyboard events on the detached node
    // must NOT move data-value or fire \`change\` — proves listeners removed.
    const spy = fn();
    document.addEventListener('change', spy);
    slider.dispatchEvent(new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      bubbles: true
    }));
    expect(spy).not.toHaveBeenCalled();
    expect(slider.getAttribute('data-value')).toBe('51');
    document.removeEventListener('change', spy);
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <!-- Track only — no fill or thumb spans. The component must not
         crash; paint becomes a no-op for the missing parts. -->
    <fv-slider data-value="50" aria-label="Bare" data-testid="s">
      <span data-role="track"></span>
    </fv-slider>
  \`,
  play: async ({
    canvasElement
  }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    slider.focus();
    expect(slider.getAttribute('data-value')).not.toBe('51');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('51');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-slider data-value="20" aria-label="Initial">\${innerParts}</fv-slider>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = \`
      <fv-slider data-value="75" data-min="0" data-max="100" aria-label="Swapped">
        <span data-role="track"></span>
        <span data-role="fill"></span>
        <span data-role="thumb"></span>
      </fv-slider>
    \`;
    const slider = container.querySelector<HTMLElement>('fv-slider')!;
    // data-value="75" came from the swap-in HTML; the meaningful proof of
    // upgrade is that aria-valuenow was mirrored by the component.
    expect(slider.getAttribute('aria-valuenow')).toBe('75');
    slider.focus();
    expect(slider.getAttribute('data-value')).not.toBe('76');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('76');
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`CustomRange`,`Disabled`,`Playground`,`KeyboardArrowsAdjustValue`,`ChangeEventBubblesWithValue`,`StepRoundsKeyboardChanges`,`ClampsToMinMax`,`DisabledIgnoresKeyboard`,`CleansUpOnDisconnect`,`HandlesMissingThumbAndFill`,`SurvivesHtmxSwap`]}));k();export{x as ChangeEventBubblesWithValue,C as ClampsToMinMax,T as CleansUpOnDisconnect,_ as CustomRange,g as Default,v as Disabled,w as DisabledIgnoresKeyboard,E as HandlesMissingThumbAndFill,b as KeyboardArrowsAdjustValue,y as Playground,S as StepRoundsKeyboardChanges,D as SurvivesHtmxSwap,O as __namedExportsOrder,u as default,k as n,o as t};