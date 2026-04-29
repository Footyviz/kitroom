import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";var a,o=e((()=>{a=class extends HTMLElement{#e=()=>this.#r();#t=e=>{(e.key===` `||e.key===`Enter`)&&!this.#n&&(e.preventDefault(),this.#r())};connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`switch`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,this.#n?`-1`:`0`),this.hasAttribute(`aria-checked`)||this.setAttribute(`aria-checked`,`false`),this.addEventListener(`click`,this.#e),this.addEventListener(`keydown`,this.#t)}disconnectedCallback(){this.removeEventListener(`click`,this.#e),this.removeEventListener(`keydown`,this.#t)}get#n(){return this.getAttribute(`aria-disabled`)===`true`}#r(){if(this.#n)return;let e=this.getAttribute(`aria-checked`)!==`true`;this.setAttribute(`aria-checked`,String(e)),this.dispatchEvent(new CustomEvent(`change`,{detail:{checked:e},bubbles:!0}))}},customElements.get(`fv-toggle`)||customElements.define(`fv-toggle`,a)})),s=t({CleansUpOnDisconnect:()=>C,Default:()=>_,Disabled:()=>v,DispatchesBubblingChangeEvent:()=>S,HandlesExtraChildren:()=>T,OnDark:()=>b,Playground:()=>y,RespectsPresetAttributes:()=>w,SurvivesHtmxSwap:()=>E,TogglesOnClick:()=>x,__namedExportsOrder:()=>D,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O=e((()=>{r(),o(),{expect:c,fn:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Toggle`,component:`fv-toggle`,argTypes:{checked:{control:`boolean`,description:`aria-checked`},disabled:{control:`boolean`,description:`aria-disabled`},variant:{control:{type:`inline-radio`},options:[`accent`,`ink`],description:`data-variant — accent (lime) for user-valued, ink for system mode`},size:{control:{type:`inline-radio`},options:[`default`,`lg`],description:`data-size`},label:{control:`text`,description:`Visible label (sibling of the toggle in the wrapping <label>)`}}},f=`display: inline-flex; align-items: center; gap: 8px; font-size: 13px;`,p=e=>({docs:{source:{code:e,language:`html`}}}),m=e=>{let t=[`aria-checked="${e.checked?`true`:`false`}"`];return e.disabled&&t.push(`aria-disabled="true"`),e.variant!==`accent`&&t.push(`data-variant="${e.variant}"`),e.size!==`default`&&t.push(`data-size="${e.size}"`),`<label>
  <fv-toggle ${t.join(` `)}><span data-role="knob"></span></fv-toggle>
  ${e.label}
</label>`},h=()=>({docs:{source:{language:`html`,transform:(e,t)=>m(t.args)}}}),g=e=>n`
  <label style="${f}">
    <fv-toggle
      aria-checked="${e.checked?`true`:`false`}"
      aria-disabled="${e.disabled?`true`:i}"
      data-variant="${e.variant===`accent`?i:e.variant}"
      data-size="${e.size===`default`?i:e.size}"
    ><span data-role="knob"></span></fv-toggle>
    ${e.label}
  </label>
`,_={args:{checked:!1,disabled:!1,variant:`accent`,size:`default`,label:`Auto-play highlights`},render:g,parameters:h()},v={args:{checked:!1,disabled:!0,variant:`accent`,size:`default`,label:`Stadium audio`},render:g,parameters:h()},y={args:{checked:!0,disabled:!1,variant:`accent`,size:`default`,label:`Notifications`},render:g,parameters:h()},b={render:()=>n`
    <div data-theme="dark" style="background: var(--bg); color: var(--fg); padding: 24px; border-radius: 14px; display: inline-block;">
      <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
        <label style="${f}">
          <fv-toggle aria-checked="true"><span data-role="knob"></span></fv-toggle>
          Notifications
        </label>
        <label style="${f}">
          <fv-toggle aria-checked="true" data-variant="ink"><span data-role="knob"></span></fv-toggle>
          Dark mode
        </label>
        <label style="${f}">
          <fv-toggle aria-checked="true" data-size="lg"><span data-role="knob"></span></fv-toggle>
          Live alerts
        </label>
      </div>
    </div>
  `,parameters:p(`<!-- Parent sets data-theme="dark" on <html> or any wrapper. -->
<div data-theme="dark">
  <label>
    <fv-toggle aria-checked="true"><span data-role="knob"></span></fv-toggle>
    Notifications
  </label>
  <label>
    <fv-toggle aria-checked="true" data-variant="ink">
      <span data-role="knob"></span>
    </fv-toggle>
    Dark mode
  </label>
  <label>
    <fv-toggle aria-checked="true" data-size="lg">
      <span data-role="knob"></span>
    </fv-toggle>
    Live alerts
  </label>
</div>`)},x={render:()=>n`
    <fv-toggle data-testid="t"><span data-role="knob"></span></fv-toggle>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`fv-toggle`);c(t.getAttribute(`aria-checked`)).toBe(`false`);let n;t.addEventListener(`change`,e=>{n=e.detail}),c(t.getAttribute(`aria-checked`)).not.toBe(`true`),await u.click(t),c(t.getAttribute(`aria-checked`)).toBe(`true`),c(n).toEqual({checked:!0}),c(t.getAttribute(`aria-checked`)).not.toBe(`false`),await u.click(t),c(t.getAttribute(`aria-checked`)).toBe(`false`),c(n).toEqual({checked:!1})}},S={render:()=>n`
    <div data-testid="parent">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  `,play:async({canvasElement:e})=>{let t=l();document.body.addEventListener(`change`,t);let n=e.querySelector(`fv-toggle`);await u.click(n),c(t).toHaveBeenCalledOnce();let r=t.mock.calls[0][0];c(r.detail).toEqual({checked:!0}),c(r.bubbles).toBe(!0),c(r.target).toBe(n),document.body.removeEventListener(`change`,t)}},C={render:()=>n`
    <div data-testid="host">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-toggle`);c(n.getAttribute(`aria-checked`)).not.toBe(`true`),await u.click(n),c(n.getAttribute(`aria-checked`)).toBe(`true`),t.removeChild(n);let r=l();document.addEventListener(`change`,r),n.click(),c(r).not.toHaveBeenCalled(),c(n.getAttribute(`aria-checked`)).toBe(`true`),document.removeEventListener(`change`,r)}},w={render:()=>n`
    <fv-toggle aria-checked="true" tabindex="-1" data-testid="t">
      <span data-role="knob"></span>
    </fv-toggle>
  `,parameters:p(`<!-- Server-supplied role/tabindex/aria-checked are honored as-is. -->
<fv-toggle aria-checked="true" tabindex="-1">
  <span data-role="knob"></span>
</fv-toggle>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`);c(t.getAttribute(`aria-checked`)).not.toBe(`false`),c(t.getAttribute(`aria-checked`)).toBe(`true`),c(t.getAttribute(`tabindex`)).not.toBe(`0`),c(t.getAttribute(`tabindex`)).toBe(`-1`),c(t.getAttribute(`role`)).toBe(`switch`)}},T={render:()=>n`
    <fv-toggle data-testid="t">
      <span data-role="knob"></span>
      <!-- A future variant of the design might add a label slot, an
           inner glyph, etc. The component must not choke on extra DOM. -->
      <span aria-hidden="true" style="display:none">extra</span>
    </fv-toggle>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`);c(t.getAttribute(`aria-checked`)).not.toBe(`true`),await u.click(t),c(t.getAttribute(`aria-checked`)).toBe(`true`)}},E={render:()=>n`
    <div data-testid="container">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`),n=t.querySelector(`fv-toggle`);c(n.getAttribute(`aria-checked`)).not.toBe(`true`),await u.click(n),c(n.getAttribute(`aria-checked`)).toBe(`true`),t.innerHTML=`<fv-toggle aria-checked="true" data-variant="ink"><span data-role="knob"></span></fv-toggle>`,n=t.querySelector(`fv-toggle`),c(n.dataset.variant).toBe(`ink`),await u.click(n),c(n.getAttribute(`aria-checked`)).toBe(`false`)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    variant: 'accent',
    size: 'default',
    label: 'Auto-play highlights'
  },
  render: renderToggle,
  parameters: dynamicSrc()
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    variant: 'accent',
    size: 'default',
    label: 'Stadium audio'
  },
  render: renderToggle,
  parameters: dynamicSrc()
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    variant: 'accent',
    size: 'default',
    label: 'Notifications'
  },
  render: renderToggle,
  parameters: dynamicSrc()
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-theme="dark" style="background: var(--bg); color: var(--fg); padding: 24px; border-radius: 14px; display: inline-block;">
      <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
        <label style="\${labelStyle}">
          <fv-toggle aria-checked="true"><span data-role="knob"></span></fv-toggle>
          Notifications
        </label>
        <label style="\${labelStyle}">
          <fv-toggle aria-checked="true" data-variant="ink"><span data-role="knob"></span></fv-toggle>
          Dark mode
        </label>
        <label style="\${labelStyle}">
          <fv-toggle aria-checked="true" data-size="lg"><span data-role="knob"></span></fv-toggle>
          Live alerts
        </label>
      </div>
    </div>
  \`,
  parameters: src(\`<!-- Parent sets data-theme="dark" on <html> or any wrapper. -->
<div data-theme="dark">
  <label>
    <fv-toggle aria-checked="true"><span data-role="knob"></span></fv-toggle>
    Notifications
  </label>
  <label>
    <fv-toggle aria-checked="true" data-variant="ink">
      <span data-role="knob"></span>
    </fv-toggle>
    Dark mode
  </label>
  <label>
    <fv-toggle aria-checked="true" data-size="lg">
      <span data-role="knob"></span>
    </fv-toggle>
    Live alerts
  </label>
</div>\`)
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-toggle data-testid="t"><span data-role="knob"></span></fv-toggle>
  \`,
  play: async ({
    canvasElement
  }) => {
    const toggle = canvasElement.querySelector<HTMLElement>('fv-toggle')!;
    // Render template omits aria-checked; the component must initialize it.
    expect(toggle.getAttribute('aria-checked')).toBe('false');
    let lastChange: {
      checked: boolean;
    } | undefined;
    toggle.addEventListener('change', e => {
      lastChange = (e as CustomEvent<{
        checked: boolean;
      }>).detail;
    });
    expect(toggle.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    expect(lastChange).toEqual({
      checked: true
    });
    expect(toggle.getAttribute('aria-checked')).not.toBe('false');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('false');
    expect(lastChange).toEqual({
      checked: false
    });
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="parent">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    // The store + htmx coordination depends on \`change\` bubbling to body.
    const handler = fn();
    document.body.addEventListener('change', handler);
    const toggle = canvasElement.querySelector<HTMLElement>('fv-toggle')!;
    await userEvent.click(toggle);
    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{
      checked: boolean;
    }>;
    expect(event.detail).toEqual({
      checked: true
    });
    expect(event.bubbles).toBe(true);
    expect(event.target).toBe(toggle);
    document.body.removeEventListener('change', handler);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="host">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const toggle = host.querySelector<HTMLElement>('fv-toggle')!;

    // Sanity: the click handler is wired while connected.
    expect(toggle.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');

    // Disconnect — disconnectedCallback should remove the click listener.
    host.removeChild(toggle);

    // Listen on document; if the listener leaked, the toggle would still
    // dispatch \`change\` when its detached node receives a click event.
    const spy = fn();
    document.addEventListener('change', spy);
    toggle.click();
    expect(spy).not.toHaveBeenCalled();
    // aria-checked must remain "true" — the value carried over the disconnect.
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    document.removeEventListener('change', spy);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-toggle aria-checked="true" tabindex="-1" data-testid="t">
      <span data-role="knob"></span>
    </fv-toggle>
  \`,
  parameters: src(\`<!-- Server-supplied role/tabindex/aria-checked are honored as-is. -->
<fv-toggle aria-checked="true" tabindex="-1">
  <span data-role="knob"></span>
</fv-toggle>\`),
  play: async ({
    canvasElement
  }) => {
    // The component must not stomp server-supplied attribute values.
    // Defaults on a fresh connect would be aria-checked="false" and
    // tabindex="0"; the negative assertions document those defaults.
    const toggle = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(toggle.getAttribute('aria-checked')).not.toBe('false');
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    expect(toggle.getAttribute('tabindex')).not.toBe('0');
    expect(toggle.getAttribute('tabindex')).toBe('-1');
    // role isn't on the render template, so this also proves the
    // component populated it on connect.
    expect(toggle.getAttribute('role')).toBe('switch');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-toggle data-testid="t">
      <span data-role="knob"></span>
      <!-- A future variant of the design might add a label slot, an
           inner glyph, etc. The component must not choke on extra DOM. -->
      <span aria-hidden="true" style="display:none">extra</span>
    </fv-toggle>
  \`,
  play: async ({
    canvasElement
  }) => {
    const toggle = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(toggle.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;

    // Initial instance is enhanced and interactive.
    let toggle = container.querySelector<HTMLElement>('fv-toggle')!;
    expect(toggle.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');

    // Simulate an htmx-style swap: replace innerHTML with a fresh fv-toggle.
    container.innerHTML = '<fv-toggle aria-checked="true" data-variant="ink"><span data-role="knob"></span></fv-toggle>';

    // The swapped-in instance should auto-upgrade and behave correctly.
    toggle = container.querySelector<HTMLElement>('fv-toggle')!;
    // data-variant came from the swap-in HTML; assert it survived parsing.
    expect(toggle.dataset.variant).toBe('ink');
    // The meaningful proof that the new instance was upgraded: clicking it
    // now flips aria-checked from "true" → "false".
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('false');
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Disabled`,`Playground`,`OnDark`,`TogglesOnClick`,`DispatchesBubblingChangeEvent`,`CleansUpOnDisconnect`,`RespectsPresetAttributes`,`HandlesExtraChildren`,`SurvivesHtmxSwap`]}));O();export{C as CleansUpOnDisconnect,_ as Default,v as Disabled,S as DispatchesBubblingChangeEvent,T as HandlesExtraChildren,b as OnDark,y as Playground,w as RespectsPresetAttributes,E as SurvivesHtmxSwap,x as TogglesOnClick,D as __namedExportsOrder,d as default,O as n,s as t};