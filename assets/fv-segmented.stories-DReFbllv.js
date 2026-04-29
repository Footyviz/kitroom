import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r}from"./iframe-CnQc__3c.js";var i,a=e((()=>{i=class extends HTMLElement{#e=e=>{let t=e.target?.closest(`button[role="radio"]`);!t||!this.contains(t)||this.#r(t)};#t=e=>{let t=e.target?.closest(`button[role="radio"]`);!t||!this.contains(t)||(e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),this.#i(t,1)):e.key===`ArrowLeft`||e.key===`ArrowUp`?(e.preventDefault(),this.#i(t,-1)):(e.key===` `||e.key===`Enter`)&&(e.preventDefault(),this.#r(t)))};connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`radiogroup`),this.addEventListener(`click`,this.#e),this.addEventListener(`keydown`,this.#t)}disconnectedCallback(){this.removeEventListener(`click`,this.#e),this.removeEventListener(`keydown`,this.#t)}#n(){return Array.from(this.querySelectorAll(`button[role="radio"]`))}#r(e){if(e.getAttribute(`aria-checked`)!==`true`&&!e.hasAttribute(`disabled`)){for(let t of this.#n())t.setAttribute(`aria-checked`,t===e?`true`:`false`);this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e.getAttribute(`data-value`)??``},bubbles:!0}))}}#i(e,t){let n=this.#n().filter(e=>!e.hasAttribute(`disabled`)),r=n.indexOf(e);r!==-1&&n[(r+t+n.length)%n.length]?.focus()}},customElements.get(`fv-segmented`)||customElements.define(`fv-segmented`,i)})),o=t({CleansUpOnDisconnect:()=>b,Default:()=>h,Grouped:()=>_,HandlesEmptyGroup:()=>x,KeyboardArrowsMoveFocus:()=>y,Playground:()=>g,SelectingOneDeselectsSiblings:()=>v,SkipsDisabledOptionsInKeyboardNav:()=>S,SurvivesHtmxSwap:()=>C,__namedExportsOrder:()=>w,default:()=>u}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=e((()=>{r(),a(),{expect:s,fn:c,userEvent:l}=__STORYBOOK_MODULE_TEST__,u={title:`Components/Segmented`,component:`fv-segmented`,argTypes:{selected:{control:{type:`inline-radio`},description:`data-value of the option marked aria-checked="true"`}}},d=e=>({docs:{source:{code:e,language:`html`}}}),f=(e,t,n)=>`<fv-segmented aria-label="${t}">\n${n.map(t=>`  <button role="radio" data-value="${t.value}" aria-checked="${t.value===e.selected?`true`:`false`}">${t.label}</button>`).join(`
`)}\n</fv-segmented>`,p=(e,t,r)=>n`
  <fv-segmented aria-label="${t}">
    ${r.map(t=>n`
        <button
          role="radio"
          data-value="${t.value}"
          aria-checked="${t.value===e.selected?`true`:`false`}"
        >${t.label}</button>
      `)}
  </fv-segmented>
`,m=[{value:`live`,label:`Live`},{value:`today`,label:`Today`},{value:`upcoming`,label:`Upcoming`}],h={args:{selected:`live`},argTypes:{selected:{control:{type:`inline-radio`},options:[`live`,`today`,`upcoming`]}},render:e=>p(e,`Match filter`,m),parameters:{docs:{source:{language:`html`,transform:(e,t)=>f(t.args,`Match filter`,m)}}}},g={args:{selected:`today`},argTypes:{selected:{control:{type:`inline-radio`},options:[`live`,`today`,`upcoming`]}},render:e=>p(e,`Match filter`,m),parameters:{docs:{source:{language:`html`,transform:(e,t)=>f(t.args,`Match filter`,m)}}}},_={render:()=>n`
    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
      <fv-segmented aria-label="Match filter">
        <button role="radio" data-value="live" aria-checked="true">Live</button>
        <button role="radio" data-value="today" aria-checked="false">Today</button>
        <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
      </fv-segmented>
      <fv-segmented aria-label="Match scope">
        <button role="radio" data-value="all" aria-checked="false">All</button>
        <button role="radio" data-value="followed" aria-checked="true">Followed</button>
      </fv-segmented>
    </div>
  `,parameters:d(`<fv-segmented aria-label="Match filter">
  <button role="radio" data-value="live" aria-checked="true">Live</button>
  <button role="radio" data-value="today" aria-checked="false">Today</button>
  <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
</fv-segmented>

<fv-segmented aria-label="Match scope">
  <button role="radio" data-value="all" aria-checked="false">All</button>
  <button role="radio" data-value="followed" aria-checked="true">Followed</button>
</fv-segmented>`)},v={render:()=>n`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false">B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="seg"]`),n;t.addEventListener(`change`,e=>{n=e.detail.value});let r=t.querySelectorAll(`button`);s(r[0]?.getAttribute(`aria-checked`)).not.toBe(`false`),s(r[2]?.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(r[2]),s(r[0]?.getAttribute(`aria-checked`)).toBe(`false`),s(r[2]?.getAttribute(`aria-checked`)).toBe(`true`),s(n).toBe(`c`),s(r[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(r[1]),s(r[1]?.getAttribute(`aria-checked`)).toBe(`true`),s(r[2]?.getAttribute(`aria-checked`)).toBe(`false`),s(n).toBe(`b`)}},y={render:()=>n`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false">B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,play:async({canvasElement:e})=>{let t=e.querySelectorAll(`[data-testid="seg"] button`);t[0].focus(),s(document.activeElement).toBe(t[0]),await l.keyboard(`{ArrowRight}`),s(document.activeElement).toBe(t[1]),await l.keyboard(`{ArrowRight}`),s(document.activeElement).toBe(t[2]),await l.keyboard(`{ArrowRight}`),s(document.activeElement).toBe(t[0]),await l.keyboard(`{ArrowLeft}`),s(document.activeElement).toBe(t[2])}},b={render:()=>n`
    <div data-testid="host">
      <fv-segmented aria-label="Cleanup">
        <button role="radio" data-value="a" aria-checked="true">A</button>
        <button role="radio" data-value="b" aria-checked="false">B</button>
      </fv-segmented>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-segmented`),r=n.querySelectorAll(`button`);s(r[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(r[1]),s(r[1]?.getAttribute(`aria-checked`)).toBe(`true`),t.removeChild(n);let i=c();document.addEventListener(`change`,i),r[0].click(),s(i).not.toHaveBeenCalled(),s(r[0]?.getAttribute(`aria-checked`)).toBe(`false`),document.removeEventListener(`change`,i)}},x={render:()=>n`
    <fv-segmented aria-label="Empty" data-testid="seg"></fv-segmented>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="seg"]`);await l.click(t),s(t.getAttribute(`role`)).toBe(`radiogroup`)}},S={render:()=>n`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false" disabled>B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,parameters:d(`<!-- Disabled options stay in DOM but are skipped in arrow-key nav. -->
<fv-segmented aria-label="Match filter">
  <button role="radio" data-value="live" aria-checked="true">Live</button>
  <button role="radio" data-value="today" aria-checked="false" disabled>Today</button>
  <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
</fv-segmented>`),play:async({canvasElement:e})=>{let t=e.querySelectorAll(`[data-testid="seg"] button`);t[0].focus(),await l.keyboard(`{ArrowRight}`),s(document.activeElement).toBe(t[2])}},C={render:()=>n`
    <div data-testid="container">
      <fv-segmented aria-label="Initial">
        <button role="radio" data-value="x" aria-checked="true">X</button>
      </fv-segmented>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`
      <fv-segmented aria-label="Swapped">
        <button role="radio" data-value="one" aria-checked="true">One</button>
        <button role="radio" data-value="two" aria-checked="false">Two</button>
      </fv-segmented>
    `;let n=t.querySelector(`fv-segmented`).querySelectorAll(`button`);s(n[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await l.click(n[1]),s(n[0]?.getAttribute(`aria-checked`)).toBe(`false`),s(n[1]?.getAttribute(`aria-checked`)).toBe(`true`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    selected: 'live'
  },
  argTypes: {
    selected: {
      control: {
        type: 'inline-radio'
      },
      options: ['live', 'today', 'upcoming']
    }
  },
  render: args => renderSegmented(args, 'Match filter', matchFilter),
  parameters: {
    docs: {
      source: {
        language: 'html',
        transform: (_: string, ctx: {
          args: SegmentedArgs;
        }) => segmentedHtml(ctx.args, 'Match filter', matchFilter)
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    selected: 'today'
  },
  argTypes: {
    selected: {
      control: {
        type: 'inline-radio'
      },
      options: ['live', 'today', 'upcoming']
    }
  },
  render: args => renderSegmented(args, 'Match filter', matchFilter),
  parameters: {
    docs: {
      source: {
        language: 'html',
        transform: (_: string, ctx: {
          args: SegmentedArgs;
        }) => segmentedHtml(ctx.args, 'Match filter', matchFilter)
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
      <fv-segmented aria-label="Match filter">
        <button role="radio" data-value="live" aria-checked="true">Live</button>
        <button role="radio" data-value="today" aria-checked="false">Today</button>
        <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
      </fv-segmented>
      <fv-segmented aria-label="Match scope">
        <button role="radio" data-value="all" aria-checked="false">All</button>
        <button role="radio" data-value="followed" aria-checked="true">Followed</button>
      </fv-segmented>
    </div>
  \`,
  parameters: src(\`<fv-segmented aria-label="Match filter">
  <button role="radio" data-value="live" aria-checked="true">Live</button>
  <button role="radio" data-value="today" aria-checked="false">Today</button>
  <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
</fv-segmented>

<fv-segmented aria-label="Match scope">
  <button role="radio" data-value="all" aria-checked="false">All</button>
  <button role="radio" data-value="followed" aria-checked="true">Followed</button>
</fv-segmented>\`)
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false">B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  \`,
  play: async ({
    canvasElement
  }) => {
    const seg = canvasElement.querySelector<HTMLElement>('[data-testid="seg"]')!;
    let lastValue: string | undefined;
    seg.addEventListener('change', e => {
      lastValue = (e as CustomEvent<{
        value: string;
      }>).detail.value;
    });
    const buttons = seg.querySelectorAll<HTMLButtonElement>('button');

    // Click buttons[2] — proves the not-yet-checked option becomes checked
    // AND that the rendered-checked buttons[0] gets cleared.
    expect(buttons[0]?.getAttribute('aria-checked')).not.toBe('false');
    expect(buttons[2]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(buttons[2]!);
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('false');
    expect(buttons[2]?.getAttribute('aria-checked')).toBe('true');
    expect(lastValue).toBe('c');
    expect(buttons[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(buttons[1]!);
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('true');
    expect(buttons[2]?.getAttribute('aria-checked')).toBe('false');
    expect(lastValue).toBe('b');
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false">B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  \`,
  play: async ({
    canvasElement
  }) => {
    const buttons = canvasElement.querySelectorAll<HTMLButtonElement>('[data-testid="seg"] button');
    buttons[0]!.focus();
    expect(document.activeElement).toBe(buttons[0]);
    await userEvent.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(buttons[1]);
    await userEvent.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(buttons[2]);

    // Wraps around
    await userEvent.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(buttons[0]);
    await userEvent.keyboard('{ArrowLeft}');
    expect(document.activeElement).toBe(buttons[2]);
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="host">
      <fv-segmented aria-label="Cleanup">
        <button role="radio" data-value="a" aria-checked="true">A</button>
        <button role="radio" data-value="b" aria-checked="false">B</button>
      </fv-segmented>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const seg = host.querySelector<HTMLElement>('fv-segmented')!;
    const initialButtons = seg.querySelectorAll<HTMLButtonElement>('button');
    expect(initialButtons[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(initialButtons[1]!);
    expect(initialButtons[1]?.getAttribute('aria-checked')).toBe('true');
    host.removeChild(seg);
    const spy = fn();
    document.addEventListener('change', spy);
    initialButtons[0]!.click();
    expect(spy).not.toHaveBeenCalled();
    // The detached button must keep its rendered "false" — the component
    // did not run its click handler (listener was removed on disconnect).
    expect(initialButtons[0]?.getAttribute('aria-checked')).toBe('false');
    document.removeEventListener('change', spy);
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-segmented aria-label="Empty" data-testid="seg"></fv-segmented>
  \`,
  play: async ({
    canvasElement
  }) => {
    // No buttons — clicking the bare host should not throw.
    const seg = canvasElement.querySelector<HTMLElement>('[data-testid="seg"]')!;
    await userEvent.click(seg);
    // role is auto-applied even when the group is empty.
    expect(seg.getAttribute('role')).toBe('radiogroup');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false" disabled>B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  \`,
  parameters: src(\`<!-- Disabled options stay in DOM but are skipped in arrow-key nav. -->
<fv-segmented aria-label="Match filter">
  <button role="radio" data-value="live" aria-checked="true">Live</button>
  <button role="radio" data-value="today" aria-checked="false" disabled>Today</button>
  <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
</fv-segmented>\`),
  play: async ({
    canvasElement
  }) => {
    const buttons = canvasElement.querySelectorAll<HTMLButtonElement>('[data-testid="seg"] button');
    buttons[0]!.focus();
    await userEvent.keyboard('{ArrowRight}');
    // B is disabled — focus should land on C, not B.
    expect(document.activeElement).toBe(buttons[2]);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-segmented aria-label="Initial">
        <button role="radio" data-value="x" aria-checked="true">X</button>
      </fv-segmented>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = \`
      <fv-segmented aria-label="Swapped">
        <button role="radio" data-value="one" aria-checked="true">One</button>
        <button role="radio" data-value="two" aria-checked="false">Two</button>
      </fv-segmented>
    \`;
    const seg = container.querySelector<HTMLElement>('fv-segmented')!;
    const buttons = seg.querySelectorAll<HTMLButtonElement>('button');
    expect(buttons[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(buttons[1]!);
    // Clicking buttons[1] both selects it AND clears buttons[0] — proves
    // the swapped-in <fv-segmented> upgraded and wired up its handler.
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('false');
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('true');
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Playground`,`Grouped`,`SelectingOneDeselectsSiblings`,`KeyboardArrowsMoveFocus`,`CleansUpOnDisconnect`,`HandlesEmptyGroup`,`SkipsDisabledOptionsInKeyboardNav`,`SurvivesHtmxSwap`]}));T();export{b as CleansUpOnDisconnect,h as Default,_ as Grouped,x as HandlesEmptyGroup,y as KeyboardArrowsMoveFocus,g as Playground,v as SelectingOneDeselectsSiblings,S as SkipsDisabledOptionsInKeyboardNav,C as SurvivesHtmxSwap,w as __namedExportsOrder,u as default,T as n,o as t};