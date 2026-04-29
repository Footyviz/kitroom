import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";var a,o=e((()=>{a=class extends HTMLElement{#e=null;#t=null;#n=null;#r=null;#i=e=>{if(this.#c||e.button!==0)return;this.#n=e.pointerId,this.setPointerCapture(e.pointerId);let t=this.#h(e.clientX);this.#g(t,{commit:!1}),e.preventDefault()};#a=e=>{if(this.#n!==e.pointerId)return;let t=this.#h(e.clientX);this.#g(t,{commit:!1})};#o=e=>{this.#n===e.pointerId&&(this.releasePointerCapture(e.pointerId),this.#n=null,this.#_())};#s=e=>{if(this.#c)return;let t=this.#d,n=this.#u-this.#l,r=null;switch(e.key){case`ArrowRight`:case`ArrowUp`:r=this.#f+t;break;case`ArrowLeft`:case`ArrowDown`:r=this.#f-t;break;case`PageUp`:r=this.#f+Math.max(t,n/10);break;case`PageDown`:r=this.#f-Math.max(t,n/10);break;case`Home`:r=this.#l;break;case`End`:r=this.#u;break}r!==null&&(e.preventDefault(),this.#g(r,{commit:!0}))};connectedCallback(){this.#e=this.querySelector(`[data-role="thumb"]`),this.#t=this.querySelector(`[data-role="fill"]`),this.hasAttribute(`role`)||this.setAttribute(`role`,`slider`),this.hasAttribute(`tabindex`)||this.setAttribute(`tabindex`,this.#c?`-1`:`0`),this.#y(),this.#v(this.#f),this.addEventListener(`pointerdown`,this.#i),this.addEventListener(`pointermove`,this.#a),this.addEventListener(`pointerup`,this.#o),this.addEventListener(`pointercancel`,this.#o),this.addEventListener(`keydown`,this.#s)}disconnectedCallback(){this.removeEventListener(`pointerdown`,this.#i),this.removeEventListener(`pointermove`,this.#a),this.removeEventListener(`pointerup`,this.#o),this.removeEventListener(`pointercancel`,this.#o),this.removeEventListener(`keydown`,this.#s),this.#e=null,this.#t=null}get#c(){return this.getAttribute(`aria-disabled`)===`true`}get#l(){return Number(this.getAttribute(`data-min`)??0)}get#u(){let e=Number(this.getAttribute(`data-max`)??100);return e>this.#l?e:this.#l+1}get#d(){let e=Number(this.getAttribute(`data-step`)??1);return e>0?e:1}get#f(){return this.#p(Number(this.getAttribute(`data-value`)??this.#l))}#p(e){return Math.max(this.#l,Math.min(this.#u,e))}#m(e){let t=this.#d,n=this.#l;return n+Math.round((e-n)/t)*t}#h(e){let t=this.getBoundingClientRect();if(t.width===0)return this.#f;let n=(e-t.left)/t.width;return this.#l+n*(this.#u-this.#l)}#g(e,t){let n=this.#p(this.#m(e));if(n===this.#f&&this.#r===null){t.commit&&this.#_();return}this.setAttribute(`data-value`,String(n)),this.#y(),this.#v(n),this.#r=n,this.dispatchEvent(new CustomEvent(`input`,{detail:{value:n},bubbles:!0})),t.commit&&this.#_()}#_(){this.#r!==null&&(this.dispatchEvent(new CustomEvent(`change`,{detail:{value:this.#r},bubbles:!0})),this.#r=null)}#v(e){let t=(e-this.#l)/(this.#u-this.#l)*100;this.#t&&(this.#t.style.width=`${t}%`),this.#e&&(this.#e.style.left=`${t}%`)}#y(){this.setAttribute(`aria-valuemin`,String(this.#l)),this.setAttribute(`aria-valuemax`,String(this.#u)),this.setAttribute(`aria-valuenow`,String(this.#f))}},customElements.get(`fv-slider`)||customElements.define(`fv-slider`,a)})),s=t({ChangeEventBubblesWithValue:()=>S,ClampsToMinMax:()=>w,CleansUpOnDisconnect:()=>E,CustomRange:()=>v,Default:()=>_,Disabled:()=>y,DisabledIgnoresKeyboard:()=>T,HandlesMissingThumbAndFill:()=>D,KeyboardArrowsAdjustValue:()=>x,Playground:()=>b,StepRoundsKeyboardChanges:()=>C,SurvivesHtmxSwap:()=>O,__namedExportsOrder:()=>k,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{r(),o(),{expect:c,fn:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Slider`,component:`fv-slider`,argTypes:{value:{control:{type:`number`},description:`data-value`},min:{control:{type:`number`},description:`data-min`},max:{control:{type:`number`},description:`data-max`},step:{control:{type:`number`},description:`data-step`},disabled:{control:`boolean`,description:`aria-disabled`}}},f=n`
  <span data-role="track"></span>
  <span data-role="fill"></span>
  <span data-role="thumb"></span>
`,p=`<span data-role="track"></span>
  <span data-role="fill"></span>
  <span data-role="thumb"></span>`,m=(e,t)=>{let n=[`data-value="${e.value}"`];return e.min!==0&&n.push(`data-min="${e.min}"`),e.max!==100&&n.push(`data-max="${e.max}"`),e.step!==1&&n.push(`data-step="${e.step}"`),e.disabled&&n.push(`aria-disabled="true"`),n.push(`aria-label="${t}"`),`<fv-slider ${n.join(` `)}>
  ${p}
</fv-slider>`},h=e=>({docs:{source:{language:`html`,transform:(t,n)=>m(n.args,e)}}}),g=(e,t)=>n`
  <fv-slider
    data-value="${e.value}"
    data-min="${e.min===0?i:String(e.min)}"
    data-max="${e.max===100?i:String(e.max)}"
    data-step="${e.step===1?i:String(e.step)}"
    aria-disabled="${e.disabled?`true`:i}"
    aria-label="${t}"
  >${f}</fv-slider>
`,_={args:{value:62,min:0,max:100,step:1,disabled:!1},render:e=>n`
    <div style="display:inline-flex;align-items:center;gap:10px">
      ${g(e,`Volume`)}
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--fg-muted)">${e.value}%</span>
    </div>
  `,parameters:h(`Volume`)},v={args:{value:40,min:0,max:120,step:5,disabled:!1},render:e=>g(e,`Match minute`),parameters:h(`Match minute`)},y={args:{value:40,min:0,max:100,step:1,disabled:!0},render:e=>g(e,`Disabled`),parameters:h(`Disabled`)},b={args:{value:50,min:0,max:100,step:1,disabled:!1},render:e=>n`
    <div style="display:inline-flex;align-items:center;gap:10px">
      ${g(e,`Volume`)}
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--fg-muted)">${e.value}</span>
    </div>
  `,parameters:h(`Volume`)},x={render:()=>n`
    <fv-slider data-value="50" aria-label="Test" data-testid="s">${f}</fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`),n;t.addEventListener(`change`,e=>{n=e.detail.value}),t.focus(),c(t.getAttribute(`aria-valuenow`)).toBe(`50`),c(t.getAttribute(`data-value`)).not.toBe(`51`),await u.keyboard(`{ArrowRight}`),c(t.getAttribute(`data-value`)).toBe(`51`),c(n).toBe(51),await u.keyboard(`{ArrowLeft>3/}`),c(t.getAttribute(`data-value`)).toBe(`48`),await u.keyboard(`{Home}`),c(t.getAttribute(`data-value`)).toBe(`0`),await u.keyboard(`{End}`),c(t.getAttribute(`data-value`)).toBe(`100`)}},S={render:()=>n`
    <div data-testid="parent">
      <fv-slider data-value="50" aria-label="Bubbles">${f}</fv-slider>
    </div>
  `,play:async({canvasElement:e})=>{let t=l();document.body.addEventListener(`change`,t),e.querySelector(`fv-slider`).focus(),await u.keyboard(`{ArrowRight}`),c(t).toHaveBeenCalledOnce();let n=t.mock.calls[0][0];c(n.detail).toEqual({value:51}),c(n.bubbles).toBe(!0),document.body.removeEventListener(`change`,t)}},C={render:()=>n`
    <fv-slider data-value="40" data-min="0" data-max="100" data-step="10"
               aria-label="Step" data-testid="s">${f}</fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);t.focus(),c(t.getAttribute(`data-value`)).not.toBe(`50`),await u.keyboard(`{ArrowRight}`),c(t.getAttribute(`data-value`)).toBe(`50`),await u.keyboard(`{ArrowRight}{ArrowRight}`),c(t.getAttribute(`data-value`)).toBe(`70`)}},w={render:()=>n`
    <fv-slider data-value="98" data-min="0" data-max="100"
               aria-label="Clamp" data-testid="s">${f}</fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);t.focus(),c(t.getAttribute(`data-value`)).not.toBe(`100`),await u.keyboard(`{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}`),c(t.getAttribute(`data-value`)).toBe(`100`),c(t.getAttribute(`aria-valuenow`)).toBe(`100`),await u.keyboard(`{End}`),c(t.getAttribute(`data-value`)).toBe(`100`),c(t.getAttribute(`data-value`)).not.toBe(`0`),await u.keyboard(`{Home}`),c(t.getAttribute(`data-value`)).toBe(`0`)}},T={render:()=>n`
    <fv-slider data-value="40" aria-disabled="true" aria-label="Off"
               data-testid="s">${f}</fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);t.focus(),c(t.getAttribute(`data-value`)).toBe(`40`),await u.keyboard(`{ArrowRight}{ArrowRight}`),c(t.getAttribute(`data-value`)).toBe(`40`)}},E={render:()=>n`
    <div data-testid="host">
      <fv-slider data-value="50" aria-label="Cleanup">${f}</fv-slider>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-slider`);n.focus(),c(n.getAttribute(`data-value`)).not.toBe(`51`),await u.keyboard(`{ArrowRight}`),c(n.getAttribute(`data-value`)).toBe(`51`),t.removeChild(n);let r=l();document.addEventListener(`change`,r),n.dispatchEvent(new KeyboardEvent(`keydown`,{key:`ArrowRight`,bubbles:!0})),c(r).not.toHaveBeenCalled(),c(n.getAttribute(`data-value`)).toBe(`51`),document.removeEventListener(`change`,r)}},D={render:()=>n`
    <!-- Track only — no fill or thumb spans. The component must not
         crash; paint becomes a no-op for the missing parts. -->
    <fv-slider data-value="50" aria-label="Bare" data-testid="s">
      <span data-role="track"></span>
    </fv-slider>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="s"]`);t.focus(),c(t.getAttribute(`data-value`)).not.toBe(`51`),await u.keyboard(`{ArrowRight}`),c(t.getAttribute(`data-value`)).toBe(`51`)}},O={render:()=>n`
    <div data-testid="container">
      <fv-slider data-value="20" aria-label="Initial">${f}</fv-slider>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`
      <fv-slider data-value="75" data-min="0" data-max="100" aria-label="Swapped">
        <span data-role="track"></span>
        <span data-role="fill"></span>
        <span data-role="thumb"></span>
      </fv-slider>
    `;let n=t.querySelector(`fv-slider`);c(n.getAttribute(`aria-valuenow`)).toBe(`75`),n.focus(),c(n.getAttribute(`data-value`)).not.toBe(`76`),await u.keyboard(`{ArrowRight}`),c(n.getAttribute(`data-value`)).toBe(`76`)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    min: 0,
    max: 120,
    step: 5,
    disabled: false
  },
  render: args => renderSlider(args, 'Match minute'),
  parameters: dynamicSrc('Match minute')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 40,
    min: 0,
    max: 100,
    step: 1,
    disabled: true
  },
  render: args => renderSlider(args, 'Disabled'),
  parameters: dynamicSrc('Disabled')
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`CustomRange`,`Disabled`,`Playground`,`KeyboardArrowsAdjustValue`,`ChangeEventBubblesWithValue`,`StepRoundsKeyboardChanges`,`ClampsToMinMax`,`DisabledIgnoresKeyboard`,`CleansUpOnDisconnect`,`HandlesMissingThumbAndFill`,`SurvivesHtmxSwap`]}));A();export{S as ChangeEventBubblesWithValue,w as ClampsToMinMax,E as CleansUpOnDisconnect,v as CustomRange,_ as Default,y as Disabled,T as DisabledIgnoresKeyboard,D as HandlesMissingThumbAndFill,x as KeyboardArrowsAdjustValue,b as Playground,C as StepRoundsKeyboardChanges,O as SurvivesHtmxSwap,k as __namedExportsOrder,d as default,A as n,s as t};