import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";var a,o=e((()=>{a=class extends HTMLElement{#e=()=>this.#r();#t=e=>{e.key===` `&&!this.#n&&(e.preventDefault(),this.#r())};connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`checkbox`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,this.#n?`-1`:`0`),this.hasAttribute(`aria-checked`)||this.setAttribute(`aria-checked`,`false`),this.addEventListener(`click`,this.#e),this.addEventListener(`keydown`,this.#t)}disconnectedCallback(){this.removeEventListener(`click`,this.#e),this.removeEventListener(`keydown`,this.#t)}get#n(){return this.getAttribute(`aria-disabled`)===`true`}#r(){if(this.#n)return;let e=this.getAttribute(`aria-checked`)!==`true`;this.setAttribute(`aria-checked`,String(e)),this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:e},bubbles:!0}))}},customElements.get(`fv-checkbox`)||customElements.define(`fv-checkbox`,a)})),s=t({CleansUpOnDisconnect:()=>T,Default:()=>y,Disabled:()=>b,DispatchesBubblingChangeEvent:()=>w,Group:()=>S,HandlesMissingCheckSvg:()=>E,Playground:()=>x,SurvivesHtmxSwap:()=>D,TogglesOnClick:()=>C,__namedExportsOrder:()=>O,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k=e((()=>{r(),o(),{expect:c,fn:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Checkbox`,component:`fv-checkbox`,argTypes:{checked:{control:`boolean`,description:`aria-checked`},disabled:{control:`boolean`,description:`aria-disabled`},variant:{control:{type:`inline-radio`},options:[`ink`,`accent`],description:`data-variant — ink default, accent (lime) for user-valued filters`},label:{control:`text`,description:`Visible label (sibling of the checkbox in the wrapping <label>)`}}},f=`display: inline-flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;`,p=n`
  <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
       stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 8 7 12 13 4"></polyline>
  </svg>
`,m=e=>({docs:{source:{code:e,language:`html`}}}),h=`<svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
       stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 8 7 12 13 4"/>
  </svg>`,g=e=>{let t=[`aria-checked="${e.checked?`true`:`false`}"`];return e.disabled&&t.push(`aria-disabled="true"`),e.variant!==`ink`&&t.push(`data-variant="${e.variant}"`),`<label>
  <fv-checkbox ${t.join(` `)}>
    ${h}
  </fv-checkbox>
  ${e.label}
</label>`},_=()=>({docs:{source:{language:`html`,transform:(e,t)=>g(t.args)}}}),v=e=>n`
  <label style="${f}${e.disabled?`; color: var(--fg-subtle);`:``}">
    <fv-checkbox
      aria-checked="${e.checked?`true`:`false`}"
      aria-disabled="${e.disabled?`true`:i}"
      data-variant="${e.variant===`ink`?i:e.variant}"
    >${p}</fv-checkbox>
    ${e.label}
  </label>
`,y={args:{checked:!1,disabled:!1,variant:`ink`,label:`Yellow cards`},render:v,parameters:_()},b={args:{checked:!1,disabled:!0,variant:`ink`,label:`Subs (premium only)`},render:v,parameters:_()},x={args:{checked:!0,disabled:!1,variant:`accent`,label:`Big chances`},render:v,parameters:_()},S={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <label style="${f}">
        <fv-checkbox aria-checked="true">${p}</fv-checkbox>
        Goals
      </label>
      <label style="${f}">
        <fv-checkbox aria-checked="true" data-variant="accent">${p}</fv-checkbox>
        Big chances
      </label>
      <label style="${f}">
        <fv-checkbox>${p}</fv-checkbox>
        Yellow cards
      </label>
      <label style="${f}">
        <fv-checkbox>${p}</fv-checkbox>
        Subs
      </label>
    </div>
  `,parameters:m(`<label>
  <fv-checkbox aria-checked="true">${h}</fv-checkbox>
  Goals
</label>
<label>
  <fv-checkbox aria-checked="true" data-variant="accent">${h}</fv-checkbox>
  Big chances
</label>
<label>
  <fv-checkbox>${h}</fv-checkbox>
  Yellow cards
</label>
<label>
  <fv-checkbox>${h}</fv-checkbox>
  Subs
</label>`)},C={render:()=>n`
    <fv-checkbox>${p}</fv-checkbox>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`fv-checkbox`);c(t.getAttribute(`aria-checked`)).toBe(`false`),c(t.getAttribute(`aria-checked`)).not.toBe(`true`),await u.click(t),c(t.getAttribute(`aria-checked`)).toBe(`true`),c(t.getAttribute(`aria-checked`)).not.toBe(`false`),await u.click(t),c(t.getAttribute(`aria-checked`)).toBe(`false`)}},w={render:()=>n`
    <fv-checkbox>${p}</fv-checkbox>
  `,play:async({canvasElement:e})=>{let t=l();document.body.addEventListener(`change`,t);let n=e.querySelector(`fv-checkbox`);await u.click(n),c(t).toHaveBeenCalledOnce();let r=t.mock.calls[0][0];c(r.detail).toEqual({checked:!0}),c(r.bubbles).toBe(!0),document.body.removeEventListener(`change`,t)}},T={render:()=>n`
    <div data-testid="host">
      <fv-checkbox>${p}</fv-checkbox>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-checkbox`);c(n.getAttribute(`aria-checked`)).not.toBe(`true`),await u.click(n),c(n.getAttribute(`aria-checked`)).toBe(`true`),t.removeChild(n);let r=l();document.addEventListener(`change`,r),n.click(),c(r).not.toHaveBeenCalled(),c(n.getAttribute(`aria-checked`)).toBe(`true`),document.removeEventListener(`change`,r)}},E={render:()=>n`
    <!-- The svg child is documented as required, but the component
         must not crash if a server template forgets it. The check
         is invisible; toggle behavior still works. -->
    <fv-checkbox data-testid="cb"></fv-checkbox>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="cb"]`);c(t.getAttribute(`aria-checked`)).not.toBe(`true`),await u.click(t),c(t.getAttribute(`aria-checked`)).toBe(`true`),c(t.getAttribute(`aria-checked`)).not.toBe(`false`),await u.click(t),c(t.getAttribute(`aria-checked`)).toBe(`false`)}},D={render:()=>n`
    <div data-testid="container">
      <fv-checkbox>${p}</fv-checkbox>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`),n=t.querySelector(`fv-checkbox`);c(n.getAttribute(`aria-checked`)).not.toBe(`true`),await u.click(n),c(n.getAttribute(`aria-checked`)).toBe(`true`),t.innerHTML=`
      <fv-checkbox aria-checked="true" data-variant="accent">
        <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
             stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 8 7 12 13 4"></polyline>
        </svg>
      </fv-checkbox>
    `,n=t.querySelector(`fv-checkbox`),c(n.dataset.variant).toBe(`accent`),await u.click(n),c(n.getAttribute(`aria-checked`)).toBe(`false`)}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    variant: 'ink',
    label: 'Yellow cards'
  },
  render: renderCheckbox,
  parameters: dynamicSrc()
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    variant: 'ink',
    label: 'Subs (premium only)'
  },
  render: renderCheckbox,
  parameters: dynamicSrc()
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    variant: 'accent',
    label: 'Big chances'
  },
  render: renderCheckbox,
  parameters: dynamicSrc()
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O=[`Default`,`Disabled`,`Playground`,`Group`,`TogglesOnClick`,`DispatchesBubblingChangeEvent`,`CleansUpOnDisconnect`,`HandlesMissingCheckSvg`,`SurvivesHtmxSwap`]}));k();export{T as CleansUpOnDisconnect,y as Default,b as Disabled,w as DispatchesBubblingChangeEvent,S as Group,E as HandlesMissingCheckSvg,x as Playground,D as SurvivesHtmxSwap,C as TogglesOnClick,O as __namedExportsOrder,d as default,k as n,s as t};