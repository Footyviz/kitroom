import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";import{t as a}from"./fv-radio-CzY6W1wA.js";var o=t({CleansUpOnDisconnect:()=>x,Default:()=>g,Disabled:()=>v,Group:()=>_,HandlesMissingDataGroup:()=>C,HandlesMissingDot:()=>S,Playground:()=>y,SelectingOneDeselectsSiblings:()=>b,SurvivesHtmxSwap:()=>w,__namedExportsOrder:()=>T,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=e((()=>{r(),a(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Radio`,component:`fv-radio`,argTypes:{checked:{control:`boolean`,description:`aria-checked`},disabled:{control:`boolean`,description:`aria-disabled`},label:{control:`text`,description:`Visible label (sibling of the radio in the wrapping <label>)`}}},d=`display: inline-flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;`,f=e=>({docs:{source:{code:e,language:`html`}}}),p=(e,t=`all`)=>{let n=[`data-group="comps"`,`data-value="${t}"`];return e.checked&&n.unshift(`aria-checked="true"`),e.disabled&&n.push(`aria-disabled="true"`),`<label>
  <fv-radio ${n.join(` `)}>
    <span data-role="dot"></span>
  </fv-radio>
  ${e.label}
</label>`},m=e=>({docs:{source:{language:`html`,transform:(t,n)=>p(n.args,e)}}}),h=(e,t,r=`all`)=>n`
  <label style="${d}${e.disabled?`; color: var(--fg-subtle);`:``}">
    <fv-radio
      aria-checked="${e.checked?`true`:i}"
      aria-disabled="${e.disabled?`true`:i}"
      data-group="${t}"
      data-value="${r}"
    >
      <span data-role="dot"></span>
    </fv-radio>
    ${e.label}
  </label>
`,g={args:{checked:!1,disabled:!1,label:`All comps`},render:e=>h(e,`story-default`),parameters:m()},_={render:()=>n`
    <div role="radiogroup" aria-label="Competition filter"
         style="display: flex; flex-direction: column; gap: 10px;">
      <label style="${d}">
        <fv-radio aria-checked="true" data-group="comps" data-value="all">
          <span data-role="dot"></span>
        </fv-radio>
        All comps
      </label>
      <label style="${d}">
        <fv-radio data-group="comps" data-value="followed">
          <span data-role="dot"></span>
        </fv-radio>
        Followed only
      </label>
      <label style="${d}">
        <fv-radio data-group="comps" data-value="domestic">
          <span data-role="dot"></span>
        </fv-radio>
        Domestic
      </label>
    </div>
  `,parameters:f(`<div role="radiogroup" aria-label="Competition filter">
  <label>
    <fv-radio aria-checked="true" data-group="comps" data-value="all">
      <span data-role="dot"></span>
    </fv-radio>
    All comps
  </label>
  <label>
    <fv-radio data-group="comps" data-value="followed">
      <span data-role="dot"></span>
    </fv-radio>
    Followed only
  </label>
  <label>
    <fv-radio data-group="comps" data-value="domestic">
      <span data-role="dot"></span>
    </fv-radio>
    Domestic
  </label>
</div>`)},v={args:{checked:!1,disabled:!0,label:`Champions League (premium)`},render:e=>h(e,`story-disabled`,`ucl`),parameters:m(`ucl`)},y={args:{checked:!0,disabled:!1,label:`All comps`},render:e=>h(e,`story-playground`),parameters:m()},b={render:()=>n`
    <div role="radiogroup" data-testid="grp"
         style="display: flex; flex-direction: column; gap: 6px;">
      <fv-radio aria-checked="true" data-group="play-grp" data-value="a">
        <span data-role="dot"></span>
      </fv-radio>
      <fv-radio data-group="play-grp" data-value="b">
        <span data-role="dot"></span>
      </fv-radio>
      <fv-radio data-group="play-grp" data-value="c">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="grp"]`),n=t.querySelectorAll(`fv-radio`),r;t.addEventListener(`change`,e=>{r=e.detail.value}),s(n[0]?.getAttribute(`aria-checked`)).not.toBe(`false`),s(n[2]?.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(n[2]),s(n[0]?.getAttribute(`aria-checked`)).toBe(`false`),s(n[1]?.getAttribute(`aria-checked`)).toBe(`false`),s(n[2]?.getAttribute(`aria-checked`)).toBe(`true`),s(r).toBe(`c`),s(n[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(n[1]),s(n[1]?.getAttribute(`aria-checked`)).toBe(`true`),s(n[2]?.getAttribute(`aria-checked`)).toBe(`false`),s(r).toBe(`b`)}},x={render:()=>n`
    <div data-testid="host">
      <fv-radio data-group="cleanup-grp" data-value="x">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-radio`);s(n.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(n),s(n.getAttribute(`aria-checked`)).toBe(`true`),t.removeChild(n);let r=c();document.addEventListener(`change`,r),n.click(),s(r).not.toHaveBeenCalled(),document.removeEventListener(`change`,r)}},S={render:()=>n`
    <fv-radio data-group="missing-dot" data-value="x" data-testid="r"></fv-radio>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="r"]`);s(t.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(t),s(t.getAttribute(`aria-checked`)).toBe(`true`)}},C={render:()=>n`
    <fv-radio data-value="standalone" data-testid="lone">
      <span data-role="dot"></span>
    </fv-radio>
    <fv-radio data-value="other" data-testid="other">
      <span data-role="dot"></span>
    </fv-radio>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="lone"]`),n=e.querySelector(`[data-testid="other"]`);s(t.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(t),s(t.getAttribute(`aria-checked`)).toBe(`true`),s(n.getAttribute(`aria-checked`)).toBe(`false`)}},w={render:()=>n`
    <div data-testid="container">
      <fv-radio aria-checked="true" data-group="swap-1" data-value="x">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`
      <fv-radio data-group="swap-2" data-value="a"><span data-role="dot"></span></fv-radio>
      <fv-radio data-group="swap-2" data-value="b"><span data-role="dot"></span></fv-radio>
    `;let n=t.querySelectorAll(`fv-radio`);s(n.length).toBe(2),s(n[0]?.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(n[0]),s(n[0]?.getAttribute(`aria-checked`)).toBe(`true`),s(n[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(n[1]),s(n[0]?.getAttribute(`aria-checked`)).toBe(`false`),s(n[1]?.getAttribute(`aria-checked`)).toBe(`true`)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: 'All comps'
  },
  render: args => renderRadio(args, 'story-default'),
  parameters: dynamicSrc()
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div role="radiogroup" aria-label="Competition filter"
         style="display: flex; flex-direction: column; gap: 10px;">
      <label style="\${labelStyle}">
        <fv-radio aria-checked="true" data-group="comps" data-value="all">
          <span data-role="dot"></span>
        </fv-radio>
        All comps
      </label>
      <label style="\${labelStyle}">
        <fv-radio data-group="comps" data-value="followed">
          <span data-role="dot"></span>
        </fv-radio>
        Followed only
      </label>
      <label style="\${labelStyle}">
        <fv-radio data-group="comps" data-value="domestic">
          <span data-role="dot"></span>
        </fv-radio>
        Domestic
      </label>
    </div>
  \`,
  parameters: src(\`<div role="radiogroup" aria-label="Competition filter">
  <label>
    <fv-radio aria-checked="true" data-group="comps" data-value="all">
      <span data-role="dot"></span>
    </fv-radio>
    All comps
  </label>
  <label>
    <fv-radio data-group="comps" data-value="followed">
      <span data-role="dot"></span>
    </fv-radio>
    Followed only
  </label>
  <label>
    <fv-radio data-group="comps" data-value="domestic">
      <span data-role="dot"></span>
    </fv-radio>
    Domestic
  </label>
</div>\`)
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: 'Champions League (premium)'
  },
  render: args => renderRadio(args, 'story-disabled', 'ucl'),
  parameters: dynamicSrc('ucl')
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: false,
    label: 'All comps'
  },
  render: args => renderRadio(args, 'story-playground'),
  parameters: dynamicSrc()
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div role="radiogroup" data-testid="grp"
         style="display: flex; flex-direction: column; gap: 6px;">
      <fv-radio aria-checked="true" data-group="play-grp" data-value="a">
        <span data-role="dot"></span>
      </fv-radio>
      <fv-radio data-group="play-grp" data-value="b">
        <span data-role="dot"></span>
      </fv-radio>
      <fv-radio data-group="play-grp" data-value="c">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const grp = canvasElement.querySelector<HTMLElement>('[data-testid="grp"]')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');
    let lastValue: string | undefined;
    grp.addEventListener('change', e => {
      lastValue = (e as CustomEvent<{
        value: string;
      }>).detail.value;
    });

    // Click radios[2] — proves a not-yet-checked radio becomes checked
    // AND that radios[0] (rendered as checked) gets cleared.
    expect(radios[0]?.getAttribute('aria-checked')).not.toBe('false');
    expect(radios[2]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[2]!);
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[2]?.getAttribute('aria-checked')).toBe('true');
    expect(lastValue).toBe('c');
    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[2]?.getAttribute('aria-checked')).toBe('false');
    expect(lastValue).toBe('b');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="host">
      <fv-radio data-group="cleanup-grp" data-value="x">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const radio = host.querySelector<HTMLElement>('fv-radio')!;
    expect(radio.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radio);
    expect(radio.getAttribute('aria-checked')).toBe('true');
    host.removeChild(radio);
    const spy = fn();
    document.addEventListener('change', spy);
    radio.click();
    expect(spy).not.toHaveBeenCalled();
    document.removeEventListener('change', spy);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-radio data-group="missing-dot" data-value="x" data-testid="r"></fv-radio>
  \`,
  play: async ({
    canvasElement
  }) => {
    // The dot child is documented as required, but the component
    // must not crash if a server template forgets it.
    const radio = canvasElement.querySelector<HTMLElement>('[data-testid="r"]')!;
    expect(radio.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radio);
    expect(radio.getAttribute('aria-checked')).toBe('true');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-radio data-value="standalone" data-testid="lone">
      <span data-role="dot"></span>
    </fv-radio>
    <fv-radio data-value="other" data-testid="other">
      <span data-role="dot"></span>
    </fv-radio>
  \`,
  play: async ({
    canvasElement
  }) => {
    // Without data-group, selecting a radio must not affect any peer.
    const lone = canvasElement.querySelector<HTMLElement>('[data-testid="lone"]')!;
    const other = canvasElement.querySelector<HTMLElement>('[data-testid="other"]')!;
    expect(lone.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(lone);
    expect(lone.getAttribute('aria-checked')).toBe('true');
    // \`other\` was rendered unchecked — assert it stayed unchecked
    // (proving the click on \`lone\` didn't accidentally affect a sibling).
    expect(other.getAttribute('aria-checked')).toBe('false');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-radio aria-checked="true" data-group="swap-1" data-value="x">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = \`
      <fv-radio data-group="swap-2" data-value="a"><span data-role="dot"></span></fv-radio>
      <fv-radio data-group="swap-2" data-value="b"><span data-role="dot"></span></fv-radio>
    \`;
    const radios = container.querySelectorAll<HTMLElement>('fv-radio');
    expect(radios.length).toBe(2);
    expect(radios[0]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[0]!);
    expect(radios[0]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);
    // Clicking radios[1] both selects it AND clears radios[0] (proves the
    // swapped-in instances participate in the same data-group correctly).
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Group`,`Disabled`,`Playground`,`SelectingOneDeselectsSiblings`,`CleansUpOnDisconnect`,`HandlesMissingDot`,`HandlesMissingDataGroup`,`SurvivesHtmxSwap`]}));E();export{x as CleansUpOnDisconnect,g as Default,v as Disabled,_ as Group,C as HandlesMissingDataGroup,S as HandlesMissingDot,y as Playground,b as SelectingOneDeselectsSiblings,w as SurvivesHtmxSwap,T as __namedExportsOrder,u as default,E as n,o as t};