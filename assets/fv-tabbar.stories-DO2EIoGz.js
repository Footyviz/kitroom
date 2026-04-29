import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";import{t as a}from"./fv-icon-text-kE0yc43d.js";var o,s=e((()=>{o=class extends HTMLElement{#e=e=>{let t=e.target?.closest(`a[role="tab"], button[role="tab"]`);if(!(!t||!this.contains(t))){if(t.hasAttribute(`aria-disabled`)){e.preventDefault();return}this.#t(t)}};connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`tablist`),this.addEventListener(`click`,this.#e)}disconnectedCallback(){this.removeEventListener(`click`,this.#e)}#t(e){e.getAttribute(`aria-current`)!==`page`&&(this.querySelectorAll(`[role="tab"]`).forEach(t=>{t===e?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)}),this.dispatchEvent(new CustomEvent(`change`,{detail:{value:e.getAttribute(`data-value`)??``},bubbles:!0})))}},customElements.get(`fv-tabbar`)||customElements.define(`fv-tabbar`,o)})),c=t({ButtonTabs:()=>w,ChangeEventBubbles:()=>D,CleansUpOnDisconnect:()=>k,ClickingMovesActive:()=>E,Default:()=>C,DisabledTabsAreNotActivated:()=>O,HandlesEmptyTabbar:()=>A,Playground:()=>T,SurvivesHtmxSwap:()=>j,__namedExportsOrder:()=>M,default:()=>f}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N=e((()=>{r(),a(),s(),{expect:l,fn:u,userEvent:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Tabbar`,component:`fv-tabbar`,argTypes:{current:{control:{type:`select`},options:[`live`,`fixtures`,`observe`,`follow`,`you`],description:`data-value of the tab marked aria-current="page"`}}},p={live:`<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M12 5v14"/><circle cx="12" cy="12" r="2.2"/><circle cx="12" cy="12" r="4.2" opacity=".35"/></svg>`,fixtures:`<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="7.5" height="14" rx="1.2"/><rect x="13.5" y="5" width="7.5" height="14" rx="1.2"/><path d="M6.5 10h1.5M6.5 14h1.5M16 10h1.5M16 14h1.5"/></svg>`,observe:`<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.3 15.3 20 20"/><path d="M7.5 10.5h6M10.5 7.5v6" opacity=".55"/></svg>`,follow:`<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v17l-6-4-6 4Z"/><path d="M9 8h6M9 11h6" opacity=".55"/></svg>`,you:`<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3 4 6v4l3-1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9l3 1V6l-4-3"/><path d="M8 3c0 2 1.8 3.5 4 3.5S16 5 16 3"/></svg>`},m=n`
  <svg data-role="icon" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="1.5"></rect>
    <path d="M12 5v14"></path>
    <circle cx="12" cy="12" r="2.2"></circle>
    <circle cx="12" cy="12" r="4.2" opacity=".35"></circle>
  </svg>
`,h=n`
  <svg data-role="icon" viewBox="0 0 24 24">
    <rect x="3" y="5" width="7.5" height="14" rx="1.2"></rect>
    <rect x="13.5" y="5" width="7.5" height="14" rx="1.2"></rect>
    <path d="M6.5 10h1.5M6.5 14h1.5M16 10h1.5M16 14h1.5"></path>
  </svg>
`,g=n`
  <svg data-role="icon" viewBox="0 0 24 24">
    <circle cx="10.5" cy="10.5" r="6.5"></circle>
    <path d="M15.3 15.3 20 20"></path>
    <path d="M7.5 10.5h6M10.5 7.5v6" opacity=".55"></path>
  </svg>
`,_=n`
  <svg data-role="icon" viewBox="0 0 24 24">
    <path d="M6 3h12v17l-6-4-6 4Z"></path>
    <path d="M9 8h6M9 11h6" opacity=".55"></path>
  </svg>
`,v=n`
  <svg data-role="icon" viewBox="0 0 24 24">
    <path d="M8 3 4 6v4l3-1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9l3 1V6l-4-3"></path>
    <path d="M8 3c0 2 1.8 3.5 4 3.5S16 5 16 3"></path>
  </svg>
`,y=[{value:`live`,href:`/live`,label:`Live`,iconHtml:p.live,icon:m},{value:`fixtures`,href:`/fixtures`,label:`Fixtures`,iconHtml:p.fixtures,icon:h},{value:`observe`,href:`/observe`,label:`Observe`,iconHtml:p.observe,icon:g},{value:`follow`,href:`/follow`,label:`Follow`,iconHtml:p.follow,icon:_},{value:`you`,href:`/you`,label:`You`,iconHtml:p.you,icon:v}],b=(e,t,n,r)=>`<fv-tabbar aria-label="${t}">
${r.map(t=>{let r=t.value===e.current?` aria-current="page"`:``,i=n===`a`?`<a href="${t.href}" role="tab" data-value="${t.value}"${r}>`:`<button type="button" role="tab" data-value="${t.value}"${r}>`,a=n===`a`?`</a>`:`</button>`;return`  ${i}
    <fv-icon-text>
      ${t.iconHtml}
      <span data-role="label">${t.label}</span>
    </fv-icon-text>
    <span data-role="indicator"></span>
  ${a}`}).join(`
`)}
</fv-tabbar>`,x=(e,t,r,a)=>n`
  <fv-tabbar aria-label="${t}">
    ${a.map(t=>{let a=t.value===e.current?`page`:i,o=n`
        <fv-icon-text>
          ${t.icon}
          <span data-role="label">${t.label}</span>
        </fv-icon-text>
        <span data-role="indicator"></span>
      `;return r===`a`?n`<a href="${t.href}" role="tab" data-value="${t.value}" aria-current="${a}">${o}</a>`:n`<button type="button" role="tab" data-value="${t.value}" aria-current="${a}">${o}</button>`})}
  </fv-tabbar>
`,S=(e,t,n=y)=>({docs:{source:{language:`html`,transform:(r,i)=>b(i.args,e,t,n)}}}),C={args:{current:`live`},render:e=>x(e,`Main navigation`,`a`,y),parameters:S(`Main navigation`,`a`)},w={args:{current:`live`},argTypes:{current:{control:{type:`select`},options:[`live`,`fixtures`,`observe`]}},render:e=>x(e,`Section`,`button`,y.slice(0,3)),parameters:S(`Section`,`button`,y.slice(0,3))},T={args:{current:`fixtures`},render:e=>x(e,`Main navigation`,`a`,y),parameters:S(`Main navigation`,`a`)},E={render:()=>n`
    <fv-tabbar aria-label="Test" data-testid="bar">
      <button type="button" role="tab" data-value="a" aria-current="page">
        <span data-role="label">A</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="b">
        <span data-role="label">B</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="c">
        <span data-role="label">C</span><span data-role="indicator"></span>
      </button>
    </fv-tabbar>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="bar"]`),n;t.addEventListener(`change`,e=>{n=e.detail.value});let r=t.querySelectorAll(`[role="tab"]`);l(r[0]?.getAttribute(`aria-current`)).not.toBeNull(),l(r[2]?.getAttribute(`aria-current`)).toBeNull(),await d.click(r[2]),l(r[0]?.getAttribute(`aria-current`)).toBeNull(),l(r[2]?.getAttribute(`aria-current`)).toBe(`page`),l(n).toBe(`c`),l(r[1]?.getAttribute(`aria-current`)).toBeNull(),await d.click(r[1]),l(r[1]?.getAttribute(`aria-current`)).toBe(`page`),l(r[2]?.getAttribute(`aria-current`)).toBeNull(),l(n).toBe(`b`)}},D={render:()=>n`
    <div data-testid="parent">
      <fv-tabbar aria-label="Bubble">
        <button type="button" role="tab" data-value="a" aria-current="page">
          <span data-role="label">A</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="b">
          <span data-role="label">B</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  `,play:async({canvasElement:e})=>{let t=u();document.body.addEventListener(`change`,t);let n=e.querySelectorAll(`[role="tab"]`);await d.click(n[1]),l(t).toHaveBeenCalledOnce();let r=t.mock.calls[0][0];l(r.detail).toEqual({value:`b`}),l(r.bubbles).toBe(!0),document.body.removeEventListener(`change`,t)}},O={render:()=>n`
    <fv-tabbar aria-label="Disabled" data-testid="bar">
      <button type="button" role="tab" data-value="a" aria-current="page">
        <span data-role="label">A</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="b" aria-disabled="true">
        <span data-role="label">B</span><span data-role="indicator"></span>
      </button>
    </fv-tabbar>
  `,play:async({canvasElement:e})=>{let t=e.querySelectorAll(`[role="tab"]`);l(t[0]?.getAttribute(`aria-current`)).toBe(`page`),l(t[1]?.getAttribute(`aria-current`)).toBeNull(),await d.click(t[1]),l(t[0]?.getAttribute(`aria-current`)).toBe(`page`),l(t[1]?.getAttribute(`aria-current`)).toBeNull()}},k={render:()=>n`
    <div data-testid="host">
      <fv-tabbar aria-label="Cleanup">
        <button type="button" role="tab" data-value="a" aria-current="page">
          <span data-role="label">A</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="b">
          <span data-role="label">B</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-tabbar`),r=n.querySelectorAll(`[role="tab"]`);l(r[1]?.getAttribute(`aria-current`)).toBeNull(),await d.click(r[1]),l(r[1]?.getAttribute(`aria-current`)).toBe(`page`),t.removeChild(n);let i=u();document.addEventListener(`change`,i),r[0].click(),l(i).not.toHaveBeenCalled(),l(r[0]?.getAttribute(`aria-current`)).toBeNull(),document.removeEventListener(`change`,i)}},A={render:()=>n`
    <fv-tabbar aria-label="Empty" data-testid="bar"></fv-tabbar>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="bar"]`);await d.click(t),l(t.getAttribute(`role`)).toBe(`tablist`)}},j={render:()=>n`
    <div data-testid="container">
      <fv-tabbar aria-label="Initial">
        <button type="button" role="tab" data-value="x" aria-current="page">
          <span data-role="label">X</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`
      <fv-tabbar aria-label="Swapped">
        <button type="button" role="tab" data-value="one" aria-current="page">
          <span data-role="label">One</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="two">
          <span data-role="label">Two</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    `;let n=t.querySelector(`fv-tabbar`).querySelectorAll(`[role="tab"]`);l(n[1]?.getAttribute(`aria-current`)).toBeNull(),await d.click(n[1]),l(n[0]?.getAttribute(`aria-current`)).toBeNull(),l(n[1]?.getAttribute(`aria-current`)).toBe(`page`)}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    current: 'live'
  },
  render: args => renderTabbar(args, 'Main navigation', 'a', TABS),
  parameters: dynamicSrc('Main navigation', 'a')
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    current: 'live'
  },
  argTypes: {
    current: {
      control: {
        type: 'select'
      },
      options: ['live', 'fixtures', 'observe']
    }
  },
  render: args => renderTabbar(args, 'Section', 'button', TABS.slice(0, 3)),
  parameters: dynamicSrc('Section', 'button', TABS.slice(0, 3))
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    current: 'fixtures'
  },
  render: args => renderTabbar(args, 'Main navigation', 'a', TABS),
  parameters: dynamicSrc('Main navigation', 'a')
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-tabbar aria-label="Test" data-testid="bar">
      <button type="button" role="tab" data-value="a" aria-current="page">
        <span data-role="label">A</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="b">
        <span data-role="label">B</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="c">
        <span data-role="label">C</span><span data-role="indicator"></span>
      </button>
    </fv-tabbar>
  \`,
  play: async ({
    canvasElement
  }) => {
    const bar = canvasElement.querySelector<HTMLElement>('[data-testid="bar"]')!;
    let lastValue: string | undefined;
    bar.addEventListener('change', e => {
      lastValue = (e as CustomEvent<{
        value: string;
      }>).detail.value;
    });
    const tabs = bar.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    // Click tabs[2] — proves the not-yet-current tab becomes current
    // AND that tabs[0] (rendered as current) gets cleared.
    expect(tabs[0]?.getAttribute('aria-current')).not.toBeNull();
    expect(tabs[2]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[2]!);
    expect(tabs[0]?.getAttribute('aria-current')).toBeNull();
    expect(tabs[2]?.getAttribute('aria-current')).toBe('page');
    expect(lastValue).toBe('c');
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[1]!);
    expect(tabs[1]?.getAttribute('aria-current')).toBe('page');
    expect(tabs[2]?.getAttribute('aria-current')).toBeNull();
    expect(lastValue).toBe('b');
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="parent">
      <fv-tabbar aria-label="Bubble">
        <button type="button" role="tab" data-value="a" aria-current="page">
          <span data-role="label">A</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="b">
          <span data-role="label">B</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const handler = fn();
    document.body.addEventListener('change', handler);
    const tabs = canvasElement.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    await userEvent.click(tabs[1]!);
    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{
      value: string;
    }>;
    expect(event.detail).toEqual({
      value: 'b'
    });
    expect(event.bubbles).toBe(true);
    document.body.removeEventListener('change', handler);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-tabbar aria-label="Disabled" data-testid="bar">
      <button type="button" role="tab" data-value="a" aria-current="page">
        <span data-role="label">A</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="b" aria-disabled="true">
        <span data-role="label">B</span><span data-role="indicator"></span>
      </button>
    </fv-tabbar>
  \`,
  play: async ({
    canvasElement
  }) => {
    const tabs = canvasElement.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    // Whole point: clicking the disabled tab MUST NOT change anything.
    // Capture the rendered state, click, assert state is identical.
    expect(tabs[0]?.getAttribute('aria-current')).toBe('page');
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[1]!);
    expect(tabs[0]?.getAttribute('aria-current')).toBe('page');
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="host">
      <fv-tabbar aria-label="Cleanup">
        <button type="button" role="tab" data-value="a" aria-current="page">
          <span data-role="label">A</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="b">
          <span data-role="label">B</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const bar = host.querySelector<HTMLElement>('fv-tabbar')!;
    const tabs = bar.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    // Sanity while connected.
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[1]!);
    expect(tabs[1]?.getAttribute('aria-current')).toBe('page');
    host.removeChild(bar);
    const spy = fn();
    document.addEventListener('change', spy);
    tabs[0]!.click();
    expect(spy).not.toHaveBeenCalled();
    // tabs[0] WAS current (set by the swap when tabs[1] became current
    // cleared it). Detached click must not re-promote it.
    expect(tabs[0]?.getAttribute('aria-current')).toBeNull();
    document.removeEventListener('change', spy);
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-tabbar aria-label="Empty" data-testid="bar"></fv-tabbar>
  \`,
  play: async ({
    canvasElement
  }) => {
    // No tabs — clicking the bar should not throw, role still set.
    const bar = canvasElement.querySelector<HTMLElement>('[data-testid="bar"]')!;
    await userEvent.click(bar);
    expect(bar.getAttribute('role')).toBe('tablist');
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-tabbar aria-label="Initial">
        <button type="button" role="tab" data-value="x" aria-current="page">
          <span data-role="label">X</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = \`
      <fv-tabbar aria-label="Swapped">
        <button type="button" role="tab" data-value="one" aria-current="page">
          <span data-role="label">One</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="two">
          <span data-role="label">Two</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    \`;
    const bar = container.querySelector<HTMLElement>('fv-tabbar')!;
    const tabs = bar.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[1]!);
    // Clicking tabs[1] both promotes it AND clears tabs[0] — proves the
    // swapped-in <fv-tabbar> upgraded and wired up its handler.
    expect(tabs[0]?.getAttribute('aria-current')).toBeNull();
    expect(tabs[1]?.getAttribute('aria-current')).toBe('page');
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`ButtonTabs`,`Playground`,`ClickingMovesActive`,`ChangeEventBubbles`,`DisabledTabsAreNotActivated`,`CleansUpOnDisconnect`,`HandlesEmptyTabbar`,`SurvivesHtmxSwap`]}));N();export{w as ButtonTabs,D as ChangeEventBubbles,k as CleansUpOnDisconnect,E as ClickingMovesActive,C as Default,O as DisabledTabsAreNotActivated,A as HandlesEmptyTabbar,T as Playground,j as SurvivesHtmxSwap,M as __namedExportsOrder,f as default,N as n,c as t};