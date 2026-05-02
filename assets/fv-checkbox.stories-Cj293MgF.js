import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{C as n,dt as r,ft as i,ut as a}from"./iframe-CCcjCKbY.js";var o=t({CleansUpOnDisconnect:()=>w,Default:()=>v,Disabled:()=>y,DispatchesBubblingChangeEvent:()=>C,Group:()=>x,HandlesMissingCheckSvg:()=>T,Playground:()=>b,SurvivesHtmxSwap:()=>E,TogglesOnClick:()=>S,__namedExportsOrder:()=>D,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=e((()=>{i(),n(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Kitroom/Checkbox`,component:`fv-checkbox`,argTypes:{checked:{control:`boolean`,description:`aria-checked`},disabled:{control:`boolean`,description:`aria-disabled`},variant:{control:{type:`inline-radio`},options:[`ink`,`accent`],description:`data-variant — ink default, accent (lime) for user-valued filters`},label:{control:`text`,description:`Visible label (sibling of the checkbox in the wrapping <label>)`}}},d=`display: inline-flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;`,f=r`
  <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
       stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 8 7 12 13 4"></polyline>
  </svg>
`,p=e=>({docs:{source:{code:e,language:`html`}}}),m=`<svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
       stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 8 7 12 13 4"/>
  </svg>`,h=e=>{let t=[`aria-checked="${e.checked?`true`:`false`}"`];return e.disabled&&t.push(`aria-disabled="true"`),e.variant!==`ink`&&t.push(`data-variant="${e.variant}"`),`<label>
  <fv-checkbox ${t.join(` `)}>
    ${m}
  </fv-checkbox>
  ${e.label}
</label>`},g=()=>({docs:{source:{language:`html`,transform:(e,t)=>h(t.args)}}}),_=e=>r`
  <label style="${d}${e.disabled?`; color: var(--fg-subtle);`:``}">
    <fv-checkbox
      aria-checked="${e.checked?`true`:`false`}"
      aria-disabled="${e.disabled?`true`:a}"
      data-variant="${e.variant===`ink`?a:e.variant}"
    >${f}</fv-checkbox>
    ${e.label}
  </label>
`,v={args:{checked:!1,disabled:!1,variant:`ink`,label:`Yellow cards`},render:_,parameters:g()},y={args:{checked:!1,disabled:!0,variant:`ink`,label:`Subs (premium only)`},render:_,parameters:g()},b={args:{checked:!0,disabled:!1,variant:`accent`,label:`Big chances`},render:_,parameters:g()},x={render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <label style="${d}">
        <fv-checkbox aria-checked="true">${f}</fv-checkbox>
        Goals
      </label>
      <label style="${d}">
        <fv-checkbox aria-checked="true" data-variant="accent">${f}</fv-checkbox>
        Big chances
      </label>
      <label style="${d}">
        <fv-checkbox>${f}</fv-checkbox>
        Yellow cards
      </label>
      <label style="${d}">
        <fv-checkbox>${f}</fv-checkbox>
        Subs
      </label>
    </div>
  `,parameters:p(`<label>
  <fv-checkbox aria-checked="true">${m}</fv-checkbox>
  Goals
</label>
<label>
  <fv-checkbox aria-checked="true" data-variant="accent">${m}</fv-checkbox>
  Big chances
</label>
<label>
  <fv-checkbox>${m}</fv-checkbox>
  Yellow cards
</label>
<label>
  <fv-checkbox>${m}</fv-checkbox>
  Subs
</label>`)},S={render:()=>r`
    <fv-checkbox>${f}</fv-checkbox>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`fv-checkbox`);s(t.getAttribute(`aria-checked`)).toBe(`false`),s(t.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(t),s(t.getAttribute(`aria-checked`)).toBe(`true`),s(t.getAttribute(`aria-checked`)).not.toBe(`false`),await l.click(t),s(t.getAttribute(`aria-checked`)).toBe(`false`)}},C={render:()=>r`
    <fv-checkbox>${f}</fv-checkbox>
  `,play:async({canvasElement:e})=>{let t=c();document.body.addEventListener(`change`,t);let n=e.querySelector(`fv-checkbox`);await l.click(n),s(t).toHaveBeenCalledOnce();let r=t.mock.calls[0][0];s(r.detail).toEqual({checked:!0}),s(r.bubbles).toBe(!0),document.body.removeEventListener(`change`,t)}},w={render:()=>r`
    <div data-testid="host">
      <fv-checkbox>${f}</fv-checkbox>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-checkbox`);s(n.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(n),s(n.getAttribute(`aria-checked`)).toBe(`true`),t.removeChild(n);let r=c();document.addEventListener(`change`,r),n.click(),s(r).not.toHaveBeenCalled(),s(n.getAttribute(`aria-checked`)).toBe(`true`),document.removeEventListener(`change`,r)}},T={render:()=>r`
    <!-- The svg child is documented as required, but the component
         must not crash if a server template forgets it. The check
         is invisible; toggle behavior still works. -->
    <fv-checkbox data-testid="cb"></fv-checkbox>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="cb"]`);s(t.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(t),s(t.getAttribute(`aria-checked`)).toBe(`true`),s(t.getAttribute(`aria-checked`)).not.toBe(`false`),await l.click(t),s(t.getAttribute(`aria-checked`)).toBe(`false`)}},E={render:()=>r`
    <div data-testid="container">
      <fv-checkbox>${f}</fv-checkbox>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`),n=t.querySelector(`fv-checkbox`);s(n.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(n),s(n.getAttribute(`aria-checked`)).toBe(`true`),t.innerHTML=`
      <fv-checkbox aria-checked="true" data-variant="accent">
        <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
             stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 8 7 12 13 4"></polyline>
        </svg>
      </fv-checkbox>
    `,n=t.querySelector(`fv-checkbox`),s(n.dataset.variant).toBe(`accent`),await l.click(n),s(n.getAttribute(`aria-checked`)).toBe(`false`)}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    variant: 'ink',
    label: 'Yellow cards'
  },
  render: renderCheckbox,
  parameters: dynamicSrc()
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    variant: 'ink',
    label: 'Subs (premium only)'
  },
  render: renderCheckbox,
  parameters: dynamicSrc()
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    variant: 'accent',
    label: 'Big chances'
  },
  render: renderCheckbox,
  parameters: dynamicSrc()
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <label style="\${labelStyle}">
        <fv-checkbox aria-checked="true">\${check}</fv-checkbox>
        Goals
      </label>
      <label style="\${labelStyle}">
        <fv-checkbox aria-checked="true" data-variant="accent">\${check}</fv-checkbox>
        Big chances
      </label>
      <label style="\${labelStyle}">
        <fv-checkbox>\${check}</fv-checkbox>
        Yellow cards
      </label>
      <label style="\${labelStyle}">
        <fv-checkbox>\${check}</fv-checkbox>
        Subs
      </label>
    </div>
  \`,
  parameters: src(\`<label>
  <fv-checkbox aria-checked="true">\${checkSvgHtml}</fv-checkbox>
  Goals
</label>
<label>
  <fv-checkbox aria-checked="true" data-variant="accent">\${checkSvgHtml}</fv-checkbox>
  Big chances
</label>
<label>
  <fv-checkbox>\${checkSvgHtml}</fv-checkbox>
  Yellow cards
</label>
<label>
  <fv-checkbox>\${checkSvgHtml}</fv-checkbox>
  Subs
</label>\`)
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-checkbox>\${check}</fv-checkbox>
  \`,
  play: async ({
    canvasElement
  }) => {
    const cb = canvasElement.querySelector<HTMLElement>('fv-checkbox')!;
    // Render template omits aria-checked; the component must initialize it.
    expect(cb.getAttribute('aria-checked')).toBe('false');
    expect(cb.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');
    expect(cb.getAttribute('aria-checked')).not.toBe('false');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('false');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-checkbox>\${check}</fv-checkbox>
  \`,
  play: async ({
    canvasElement
  }) => {
    const handler = fn();
    document.body.addEventListener('change', handler);
    const cb = canvasElement.querySelector<HTMLElement>('fv-checkbox')!;
    await userEvent.click(cb);
    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{
      checked: boolean;
    }>;
    expect(event.detail).toEqual({
      checked: true
    });
    expect(event.bubbles).toBe(true);
    document.body.removeEventListener('change', handler);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="host">
      <fv-checkbox>\${check}</fv-checkbox>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const cb = host.querySelector<HTMLElement>('fv-checkbox')!;
    expect(cb.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');
    host.removeChild(cb);
    const spy = fn();
    document.addEventListener('change', spy);
    cb.click();
    expect(spy).not.toHaveBeenCalled();
    // aria-checked must remain "true" — the value carried over the disconnect.
    expect(cb.getAttribute('aria-checked')).toBe('true');
    document.removeEventListener('change', spy);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <!-- The svg child is documented as required, but the component
         must not crash if a server template forgets it. The check
         is invisible; toggle behavior still works. -->
    <fv-checkbox data-testid="cb"></fv-checkbox>
  \`,
  play: async ({
    canvasElement
  }) => {
    const cb = canvasElement.querySelector<HTMLElement>('[data-testid="cb"]')!;
    expect(cb.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');
    expect(cb.getAttribute('aria-checked')).not.toBe('false');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('false');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-checkbox>\${check}</fv-checkbox>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    let cb = container.querySelector<HTMLElement>('fv-checkbox')!;
    expect(cb.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');
    container.innerHTML = \`
      <fv-checkbox aria-checked="true" data-variant="accent">
        <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
             stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 8 7 12 13 4"></polyline>
        </svg>
      </fv-checkbox>
    \`;
    cb = container.querySelector<HTMLElement>('fv-checkbox')!;
    // data-variant is what the swap-in HTML set; assert it survived parsing.
    expect(cb.dataset.variant).toBe('accent');
    // aria-checked="true" was on the swap-in HTML — the meaningful assertion
    // is that toggling now flips it (proves the new instance was upgraded).
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('false');
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Disabled`,`Playground`,`Group`,`TogglesOnClick`,`DispatchesBubblingChangeEvent`,`CleansUpOnDisconnect`,`HandlesMissingCheckSvg`,`SurvivesHtmxSwap`]}));O();export{w as CleansUpOnDisconnect,v as Default,y as Disabled,C as DispatchesBubblingChangeEvent,x as Group,T as HandlesMissingCheckSvg,b as Playground,E as SurvivesHtmxSwap,S as TogglesOnClick,D as __namedExportsOrder,u as default,O as n,o as t};