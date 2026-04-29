import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";import{t as a}from"./fv-radio-CzY6W1wA.js";var o,s=e((()=>{o=class extends HTMLElement{static observedAttributes=[`data-selected-value`];#e=!1;#t=e=>{let t=e.target;if(!t||t===this||!this.#n().includes(t))return;let n=t.getAttribute(`data-value`)??``;this.getAttribute(`data-selected-value`)!==n&&(this.#e=!0,this.setAttribute(`data-selected-value`,n),this.#e=!1)};connectedCallback(){this.hasAttribute(`role`)||this.setAttribute(`role`,`radiogroup`),this.#r(),this.addEventListener(`change`,this.#t)}disconnectedCallback(){this.removeEventListener(`change`,this.#t)}attributeChangedCallback(e,t,n){e===`data-selected-value`&&t!==n&&(this.#r(),!this.#e&&this.dispatchEvent(new CustomEvent(`change`,{detail:{value:n??``},bubbles:!0})))}#n(){return Array.from(this.querySelectorAll(`[data-value]`)).filter(e=>e.closest(`fv-radio-group`)===this)}#r(){let e=this.getAttribute(`data-selected-value`);for(let t of this.#n()){let n=t.getAttribute(`data-value`)===e;t.setAttribute(`aria-checked`,String(n))}}},customElements.get(`fv-radio-group`)||customElements.define(`fv-radio-group`,o)})),c=t({ChildClickDoesNotDoubleEmit:()=>C,ChildClickUpdatesGroupAttribute:()=>x,CleansUpOnDisconnect:()=>w,Default:()=>v,Playground:()=>y,ProgrammaticAttrChangeBroadcastsAndEmits:()=>S,SurvivesHtmxSwap:()=>T,__namedExportsOrder:()=>E,default:()=>f}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{r(),a(),s(),{expect:l,fn:u,userEvent:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/RadioGroup`,component:`fv-radio-group`,argTypes:{selectedValue:{control:{type:`inline-radio`},description:`data-selected-value — which child fv-radio gets aria-checked="true"`},direction:{control:{type:`inline-radio`},options:[`column`,`row`]}}},p=[{value:`all`,label:`All comps`},{value:`followed`,label:`Followed only`},{value:`domestic`,label:`Domestic`}],m=(e,t,n)=>{let r=n.map(t=>`  <label>
    <fv-radio data-value="${t.value}" aria-checked="${t.value===e.selectedValue?`true`:`false`}">
      <span data-role="dot"></span>
    </fv-radio>
    ${t.label}
  </label>`).join(`
`),i=e.direction===`column`?``:` data-direction="${e.direction}"`;return`<fv-radio-group data-selected-value="${e.selectedValue}" aria-label="${t}"${i}>
${r}
</fv-radio-group>`},h=(e,t,r)=>n`
  <fv-radio-group
    data-selected-value="${e.selectedValue}"
    aria-label="${t}"
    data-direction="${e.direction===`column`?i:e.direction}"
  >
    ${r.map(t=>n`
        <label>
          <fv-radio data-value="${t.value}" aria-checked="${t.value===e.selectedValue?`true`:`false`}">
            <span data-role="dot"></span>
          </fv-radio>
          ${t.label}
        </label>
      `)}
  </fv-radio-group>
`,g=(e,t)=>({docs:{source:{language:`html`,transform:(n,r)=>m(r.args,e,t)}}}),_={selectedValue:{control:{type:`inline-radio`},options:[`all`,`followed`,`domestic`]}},v={args:{selectedValue:`all`,direction:`column`},argTypes:_,render:e=>h(e,`Competition filter`,p),parameters:g(`Competition filter`,p)},y={args:{selectedValue:`followed`,direction:`column`},argTypes:_,render:e=>h(e,`Competition filter`,p),parameters:g(`Competition filter`,p)},b=e=>({docs:{source:{code:e,language:`html`}}}),x={args:{selectedValue:`all`,direction:`column`},render:()=>n`
    <fv-radio-group data-testid="grp" data-selected-value="all" aria-label="Test">
      <label>
        <fv-radio data-value="all" aria-checked="true"><span data-role="dot"></span></fv-radio>
        All
      </label>
      <label>
        <fv-radio data-value="followed" aria-checked="false"><span data-role="dot"></span></fv-radio>
        Followed
      </label>
    </fv-radio-group>
  `,parameters:b(`<fv-radio-group data-selected-value="all" aria-label="Competition filter">
  <label>
    <fv-radio data-value="all" aria-checked="true"><span data-role="dot"></span></fv-radio>
    All comps
  </label>
  <label>
    <fv-radio data-value="followed" aria-checked="false"><span data-role="dot"></span></fv-radio>
    Followed only
  </label>
</fv-radio-group>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="grp"]`),n=t.querySelectorAll(`fv-radio`);l(t.getAttribute(`data-selected-value`)).toBe(`all`),l(n[0]?.getAttribute(`aria-checked`)).toBe(`true`),l(n[1]?.getAttribute(`aria-checked`)).toBe(`false`),l(n[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await d.click(n[1]),l(t.getAttribute(`data-selected-value`)).toBe(`followed`),l(n[0]?.getAttribute(`aria-checked`)).toBe(`false`),l(n[1]?.getAttribute(`aria-checked`)).toBe(`true`)}},S={args:{selectedValue:`a`,direction:`column`},render:()=>n`
    <fv-radio-group data-testid="grp" data-selected-value="a" aria-label="Test">
      <label>
        <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
        A
      </label>
      <label>
        <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
        B
      </label>
    </fv-radio-group>
  `,parameters:b(`<!-- Server flips data-selected-value via htmx -->
<fv-radio-group data-selected-value="b" aria-label="Test">
  <label>
    <fv-radio data-value="a" aria-checked="false"><span data-role="dot"></span></fv-radio>
    A
  </label>
  <label>
    <fv-radio data-value="b" aria-checked="true"><span data-role="dot"></span></fv-radio>
    B
  </label>
</fv-radio-group>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="grp"]`),n=t.querySelectorAll(`fv-radio`),r=u();document.body.addEventListener(`change`,r),l(n[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),t.setAttribute(`data-selected-value`,`b`),l(n[0]?.getAttribute(`aria-checked`)).toBe(`false`),l(n[1]?.getAttribute(`aria-checked`)).toBe(`true`),l(r).toHaveBeenCalled();let i=r.mock.calls.at(-1)?.[0];l(i.detail.value).toBe(`b`),document.body.removeEventListener(`change`,r)}},C={args:{selectedValue:`a`,direction:`column`},render:()=>n`
    <fv-radio-group data-testid="grp" data-selected-value="a" aria-label="Test">
      <label>
        <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
        A
      </label>
      <label>
        <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
        B
      </label>
    </fv-radio-group>
  `,parameters:b(`<fv-radio-group data-selected-value="a" aria-label="Test">
  <label>
    <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
    A
  </label>
  <label>
    <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
    B
  </label>
</fv-radio-group>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="grp"]`),n=t.querySelectorAll(`fv-radio`),r={childChange:0,groupChange:0};n.forEach(e=>e.addEventListener(`change`,()=>{r.childChange++})),t.addEventListener(`change`,()=>{r.groupChange++}),await d.click(n[1]),l(r.childChange).toBe(1),l(r.groupChange).toBe(1)}},w={args:{selectedValue:`a`,direction:`column`},render:()=>n`
    <div data-testid="host">
      <fv-radio-group data-selected-value="a" aria-label="Cleanup">
        <label>
          <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
          A
        </label>
        <label>
          <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
          B
        </label>
      </fv-radio-group>
    </div>
  `,parameters:b(`<div>…cleanup test scaffold…</div>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-radio-group`),r=n.querySelectorAll(`fv-radio`);l(r[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await d.click(r[1]),l(n.getAttribute(`data-selected-value`)).toBe(`b`),t.removeChild(n),r[0].dispatchEvent(new CustomEvent(`change`,{detail:{value:`a`},bubbles:!0})),l(n.getAttribute(`data-selected-value`)).toBe(`b`)}},T={args:{selectedValue:`a`,direction:`column`},render:()=>n`
    <div data-testid="container">
      <fv-radio-group data-selected-value="a" aria-label="Initial">
        <label>
          <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
          A
        </label>
      </fv-radio-group>
    </div>
  `,parameters:b(`<div>…htmx swap scaffold…</div>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`
      <fv-radio-group data-selected-value="x" aria-label="Swapped">
        <label>
          <fv-radio data-value="x" aria-checked="false"><span data-role="dot"></span></fv-radio>
          X
        </label>
        <label>
          <fv-radio data-value="y" aria-checked="false"><span data-role="dot"></span></fv-radio>
          Y
        </label>
      </fv-radio-group>
    `;let n=t.querySelector(`fv-radio-group`),r=n.querySelectorAll(`fv-radio`);l(r[0]?.getAttribute(`aria-checked`)).toBe(`true`),l(r[1]?.getAttribute(`aria-checked`)).toBe(`false`),l(r[1]?.getAttribute(`aria-checked`)).not.toBe(`true`),await d.click(r[1]),l(n.getAttribute(`data-selected-value`)).toBe(`y`),l(r[0]?.getAttribute(`aria-checked`)).toBe(`false`),l(r[1]?.getAttribute(`aria-checked`)).toBe(`true`)}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    selectedValue: 'all',
    direction: 'column'
  },
  argTypes: compsArgTypes,
  render: args => renderGroup(args, 'Competition filter', compsOptions),
  parameters: dynamicSrc('Competition filter', compsOptions)
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    selectedValue: 'followed',
    direction: 'column'
  },
  argTypes: compsArgTypes,
  render: args => renderGroup(args, 'Competition filter', compsOptions),
  parameters: dynamicSrc('Competition filter', compsOptions)
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    selectedValue: 'all',
    direction: 'column'
  },
  render: () => html\`
    <fv-radio-group data-testid="grp" data-selected-value="all" aria-label="Test">
      <label>
        <fv-radio data-value="all" aria-checked="true"><span data-role="dot"></span></fv-radio>
        All
      </label>
      <label>
        <fv-radio data-value="followed" aria-checked="false"><span data-role="dot"></span></fv-radio>
        Followed
      </label>
    </fv-radio-group>
  \`,
  parameters: src(\`<fv-radio-group data-selected-value="all" aria-label="Competition filter">
  <label>
    <fv-radio data-value="all" aria-checked="true"><span data-role="dot"></span></fv-radio>
    All comps
  </label>
  <label>
    <fv-radio data-value="followed" aria-checked="false"><span data-role="dot"></span></fv-radio>
    Followed only
  </label>
</fv-radio-group>\`),
  play: async ({
    canvasElement
  }) => {
    const grp = canvasElement.querySelector<HTMLElement>('[data-testid="grp"]')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');
    expect(grp.getAttribute('data-selected-value')).toBe('all');
    expect(radios[0]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);

    // Group's own attribute is updated by the bubbled child event.
    expect(grp.getAttribute('data-selected-value')).toBe('followed');
    // Sibling sync: previous selection cleared, new one set.
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    selectedValue: 'a',
    direction: 'column'
  },
  render: () => html\`
    <fv-radio-group data-testid="grp" data-selected-value="a" aria-label="Test">
      <label>
        <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
        A
      </label>
      <label>
        <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
        B
      </label>
    </fv-radio-group>
  \`,
  parameters: src(\`<!-- Server flips data-selected-value via htmx -->
<fv-radio-group data-selected-value="b" aria-label="Test">
  <label>
    <fv-radio data-value="a" aria-checked="false"><span data-role="dot"></span></fv-radio>
    A
  </label>
  <label>
    <fv-radio data-value="b" aria-checked="true"><span data-role="dot"></span></fv-radio>
    B
  </label>
</fv-radio-group>\`),
  play: async ({
    canvasElement
  }) => {
    const grp = canvasElement.querySelector<HTMLElement>('[data-testid="grp"]')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');
    const handler = fn();
    document.body.addEventListener('change', handler);
    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    grp.setAttribute('data-selected-value', 'b');
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');

    // Self-emit on programmatic change (bubbles to body).
    expect(handler).toHaveBeenCalled();
    const event = handler.mock.calls.at(-1)?.[0] as CustomEvent<{
      value: string;
    }>;
    expect(event.detail.value).toBe('b');
    document.body.removeEventListener('change', handler);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    selectedValue: 'a',
    direction: 'column'
  },
  render: () => html\`
    <fv-radio-group data-testid="grp" data-selected-value="a" aria-label="Test">
      <label>
        <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
        A
      </label>
      <label>
        <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
        B
      </label>
    </fv-radio-group>
  \`,
  parameters: src(\`<fv-radio-group data-selected-value="a" aria-label="Test">
  <label>
    <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
    A
  </label>
  <label>
    <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
    B
  </label>
</fv-radio-group>\`),
  play: async ({
    canvasElement
  }) => {
    // The group catches the child's bubbling change to update its
    // attribute, but it must NOT re-emit (consumers would see two
    // change events at body level for one user click).
    const grp = canvasElement.querySelector<HTMLElement>('[data-testid="grp"]')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');
    const counts = {
      childChange: 0,
      groupChange: 0
    };
    radios.forEach(r => r.addEventListener('change', () => {
      counts.childChange++;
    }));
    grp.addEventListener('change', () => {
      counts.groupChange++;
    });
    await userEvent.click(radios[1]!);
    expect(counts.childChange).toBe(1);
    // The handler attached to grp will fire from the bubbling child
    // event AND from any group self-emit. Bubbling counts as 1; we
    // don't want 2 here.
    expect(counts.groupChange).toBe(1);
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    selectedValue: 'a',
    direction: 'column'
  },
  render: () => html\`
    <div data-testid="host">
      <fv-radio-group data-selected-value="a" aria-label="Cleanup">
        <label>
          <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
          A
        </label>
        <label>
          <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
          B
        </label>
      </fv-radio-group>
    </div>
  \`,
  parameters: src(\`<div>…cleanup test scaffold…</div>\`),
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const grp = host.querySelector<HTMLElement>('fv-radio-group')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');
    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);
    expect(grp.getAttribute('data-selected-value')).toBe('b');
    host.removeChild(grp);

    // Detached radio's bubbling change should not propagate up to a
    // group listener anymore (the group is gone). No assertions about
    // the group at this point; the test is that nothing throws.
    radios[0]!.dispatchEvent(new CustomEvent('change', {
      detail: {
        value: 'a'
      },
      bubbles: true
    }));
    // Verifying no surprise — the (detached) group's attribute is still
    // 'b' because nothing wrote to it after disconnect.
    expect(grp.getAttribute('data-selected-value')).toBe('b');
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    selectedValue: 'a',
    direction: 'column'
  },
  render: () => html\`
    <div data-testid="container">
      <fv-radio-group data-selected-value="a" aria-label="Initial">
        <label>
          <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
          A
        </label>
      </fv-radio-group>
    </div>
  \`,
  parameters: src(\`<div>…htmx swap scaffold…</div>\`),
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = \`
      <fv-radio-group data-selected-value="x" aria-label="Swapped">
        <label>
          <fv-radio data-value="x" aria-checked="false"><span data-role="dot"></span></fv-radio>
          X
        </label>
        <label>
          <fv-radio data-value="y" aria-checked="false"><span data-role="dot"></span></fv-radio>
          Y
        </label>
      </fv-radio-group>
    \`;
    const grp = container.querySelector<HTMLElement>('fv-radio-group')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');

    // On connect the group should have synced aria-checked from
    // data-selected-value="x" — radio[0] becomes true even though the
    // server-rendered HTML had it as false.
    expect(radios[0]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);
    expect(grp.getAttribute('data-selected-value')).toBe('y');
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Playground`,`ChildClickUpdatesGroupAttribute`,`ProgrammaticAttrChangeBroadcastsAndEmits`,`ChildClickDoesNotDoubleEmit`,`CleansUpOnDisconnect`,`SurvivesHtmxSwap`]}));D();export{C as ChildClickDoesNotDoubleEmit,x as ChildClickUpdatesGroupAttribute,w as CleansUpOnDisconnect,v as Default,y as Playground,S as ProgrammaticAttrChangeBroadcastsAndEmits,T as SurvivesHtmxSwap,E as __namedExportsOrder,f as default,D as n,c as t};