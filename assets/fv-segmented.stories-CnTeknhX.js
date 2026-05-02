import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,ft as r,m as i}from"./iframe-CCcjCKbY.js";var a=t({CleansUpOnDisconnect:()=>y,Default:()=>m,Grouped:()=>g,HandlesEmptyGroup:()=>b,KeyboardArrowsMoveFocus:()=>v,Playground:()=>h,SelectingOneDeselectsSiblings:()=>_,SkipsDisabledOptionsInKeyboardNav:()=>x,SurvivesHtmxSwap:()=>S,__namedExportsOrder:()=>C,default:()=>l}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=e((()=>{r(),i(),{expect:o,fn:s,userEvent:c}=__STORYBOOK_MODULE_TEST__,l={title:`Kitroom/Segmented`,component:`fv-segmented`,argTypes:{selected:{control:{type:`inline-radio`},description:`data-value of the option marked aria-checked="true"`}}},u=e=>({docs:{source:{code:e,language:`html`}}}),d=(e,t,n)=>`<fv-segmented aria-label="${t}">\n${n.map(t=>`  <button role="radio" data-value="${t.value}" aria-checked="${t.value===e.selected?`true`:`false`}">${t.label}</button>`).join(`
`)}\n</fv-segmented>`,f=(e,t,r)=>n`
  <fv-segmented aria-label="${t}">
    ${r.map(t=>n`
        <button
          role="radio"
          data-value="${t.value}"
          aria-checked="${t.value===e.selected?`true`:`false`}"
        >${t.label}</button>
      `)}
  </fv-segmented>
`,p=[{value:`live`,label:`Live`},{value:`today`,label:`Today`},{value:`upcoming`,label:`Upcoming`}],m={args:{selected:`live`},argTypes:{selected:{control:{type:`inline-radio`},options:[`live`,`today`,`upcoming`]}},render:e=>f(e,`Match filter`,p),parameters:{docs:{source:{language:`html`,transform:(e,t)=>d(t.args,`Match filter`,p)}}}},h={args:{selected:`today`},argTypes:{selected:{control:{type:`inline-radio`},options:[`live`,`today`,`upcoming`]}},render:e=>f(e,`Match filter`,p),parameters:{docs:{source:{language:`html`,transform:(e,t)=>d(t.args,`Match filter`,p)}}}},g={render:()=>n`
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
  `,parameters:u(`<fv-segmented aria-label="Match filter">
  <button role="radio" data-value="live" aria-checked="true">Live</button>
  <button role="radio" data-value="today" aria-checked="false">Today</button>
  <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
</fv-segmented>

<fv-segmented aria-label="Match scope">
  <button role="radio" data-value="all" aria-checked="false">All</button>
  <button role="radio" data-value="followed" aria-checked="true">Followed</button>
</fv-segmented>`)},_={render:()=>n`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false">B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="seg"]`),n;t.addEventListener(`change`,e=>{n=e.detail.value});let r=t.querySelectorAll(`button`);o(r[0]?.getAttribute(`aria-checked`)).not.toBe(`false`),o(r[2]?.getAttribute(`aria-checked`)).not.toBe(`true`),await c.click(r[2]),o(r[0]?.getAttribute(`aria-checked`)).toBe(`false`),o(r[2]?.getAttribute(`aria-checked`)).toBe(`true`),o(n).toBe(`c`),o(r[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await c.click(r[1]),o(r[1]?.getAttribute(`aria-checked`)).toBe(`true`),o(r[2]?.getAttribute(`aria-checked`)).toBe(`false`),o(n).toBe(`b`)}},v={render:()=>n`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false">B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,play:async({canvasElement:e})=>{let t=e.querySelectorAll(`[data-testid="seg"] button`);t[0].focus(),o(document.activeElement).toBe(t[0]),await c.keyboard(`{ArrowRight}`),o(document.activeElement).toBe(t[1]),await c.keyboard(`{ArrowRight}`),o(document.activeElement).toBe(t[2]),await c.keyboard(`{ArrowRight}`),o(document.activeElement).toBe(t[0]),await c.keyboard(`{ArrowLeft}`),o(document.activeElement).toBe(t[2])}},y={render:()=>n`
    <div data-testid="host">
      <fv-segmented aria-label="Cleanup">
        <button role="radio" data-value="a" aria-checked="true">A</button>
        <button role="radio" data-value="b" aria-checked="false">B</button>
      </fv-segmented>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-segmented`),r=n.querySelectorAll(`button`);o(r[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await c.click(r[1]),o(r[1]?.getAttribute(`aria-checked`)).toBe(`true`),t.removeChild(n);let i=s();document.addEventListener(`change`,i),r[0].click(),o(i).not.toHaveBeenCalled(),o(r[0]?.getAttribute(`aria-checked`)).toBe(`false`),document.removeEventListener(`change`,i)}},b={render:()=>n`
    <fv-segmented aria-label="Empty" data-testid="seg"></fv-segmented>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="seg"]`);await c.click(t),o(t.getAttribute(`role`)).toBe(`radiogroup`)}},x={render:()=>n`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false" disabled>B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,parameters:u(`<!-- Disabled options stay in DOM but are skipped in arrow-key nav. -->
<fv-segmented aria-label="Match filter">
  <button role="radio" data-value="live" aria-checked="true">Live</button>
  <button role="radio" data-value="today" aria-checked="false" disabled>Today</button>
  <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
</fv-segmented>`),play:async({canvasElement:e})=>{let t=e.querySelectorAll(`[data-testid="seg"] button`);t[0].focus(),await c.keyboard(`{ArrowRight}`),o(document.activeElement).toBe(t[2])}},S={render:()=>n`
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
    `;let n=t.querySelector(`fv-segmented`).querySelectorAll(`button`);o(n[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await c.click(n[1]),o(n[0]?.getAttribute(`aria-checked`)).toBe(`false`),o(n[1]?.getAttribute(`aria-checked`)).toBe(`true`)}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Playground`,`Grouped`,`SelectingOneDeselectsSiblings`,`KeyboardArrowsMoveFocus`,`CleansUpOnDisconnect`,`HandlesEmptyGroup`,`SkipsDisabledOptionsInKeyboardNav`,`SurvivesHtmxSwap`]}));w();export{y as CleansUpOnDisconnect,m as Default,g as Grouped,b as HandlesEmptyGroup,v as KeyboardArrowsMoveFocus,h as Playground,_ as SelectingOneDeselectsSiblings,x as SkipsDisabledOptionsInKeyboardNav,S as SurvivesHtmxSwap,C as __namedExportsOrder,l as default,w as n,a as t};