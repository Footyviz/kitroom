import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{B as n,V as r,z as i}from"./iframe-CnQc__3c.js";var a,o=e((()=>{a=class extends HTMLElement{#e=null;#t=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent(`close`,{detail:{value:this.getAttribute(`data-value`)??``},bubbles:!0}))};connectedCallback(){this.#e=this.querySelector(`[data-action="close"]`),this.#e?.addEventListener(`click`,this.#t)}disconnectedCallback(){this.#e?.removeEventListener(`click`,this.#t),this.#e=null}},customElements.get(`fv-chip`)||customElements.define(`fv-chip`,a)})),s=t({CleansUpOnDisconnect:()=>k,Closable:()=>S,ClosableWithoutCloseButtonDoesNotCrash:()=>O,CloseDispatchesEvent:()=>T,CloseEventBubbles:()=>E,Counts:()=>w,Default:()=>y,NonClosableChipDoesNotDispatchClose:()=>D,Playground:()=>b,StatusVariants:()=>x,SurvivesHtmxSwap:()=>A,Teams:()=>C,__namedExportsOrder:()=>j,default:()=>d}),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{r(),o(),{expect:c,fn:l,userEvent:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Chip`,component:`fv-chip`,argTypes:{variant:{control:`select`,options:[`default`,`mono`,`strong`,`accent`,`info`,`warn`,`neg`,`pos`,`outline`,`live`],description:`data-variant — chooses hue / typography / animation`},text:{control:`text`,description:`Chip label text (text content)`}}},f=n`
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor"
       stroke-width="1.4" aria-hidden="true">
    <path d="M1 1l6 6M7 1L1 7"></path>
  </svg>
`,p=`display: flex; gap: 8px; flex-wrap: wrap; align-items: center;`,m=e=>({docs:{source:{code:e,language:`html`}}}),h=`<svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
      <path d="M1 1l6 6M7 1L1 7"/>
    </svg>`,g=e=>e.variant===`default`?`<fv-chip>${e.text}</fv-chip>`:`<fv-chip data-variant="${e.variant}">${e.text}</fv-chip>`,_=e=>n`
  <fv-chip data-variant="${e.variant===`default`?i:e.variant}">
    ${e.text}
  </fv-chip>
`,v=()=>({docs:{source:{language:`html`,transform:(e,t)=>g(t.args)}}}),y={args:{variant:`default`,text:`Premier League`},render:_,parameters:v()},b={args:{variant:`live`,text:`LIVE`},render:_,parameters:v()},x={render:()=>n`
    <div style="${p}">
      <fv-chip data-variant="live">LIVE</fv-chip>
      <fv-chip data-variant="mono">73'</fv-chip>
      <fv-chip data-variant="mono">HT</fv-chip>
      <fv-chip data-variant="strong"><span data-role="dot"></span>FT</fv-chip>
      <fv-chip data-variant="info">VAR review</fv-chip>
      <fv-chip data-variant="warn"><span data-role="dot" style="background:#B88700"></span>Delay</fv-chip>
      <fv-chip data-variant="pos"><span data-role="dot" style="background:#3B7217"></span>Goal</fv-chip>
      <fv-chip data-variant="neg">Red card</fv-chip>
    </div>
  `,parameters:m(`<fv-chip data-variant="live">LIVE</fv-chip>
<fv-chip data-variant="mono">73'</fv-chip>
<fv-chip data-variant="strong"><span data-role="dot"></span>FT</fv-chip>
<fv-chip data-variant="info">VAR review</fv-chip>
<fv-chip data-variant="warn"><span data-role="dot" style="background:#B88700"></span>Delay</fv-chip>
<fv-chip data-variant="pos"><span data-role="dot" style="background:#3B7217"></span>Goal</fv-chip>
<fv-chip data-variant="neg">Red card</fv-chip>`)},S={render:()=>n`
    <div style="${p}">
      <fv-chip data-closable data-variant="accent" data-value="premier">
        Premier League
        <button data-action="close" aria-label="Remove Premier League">${f}</button>
      </fv-chip>
      <fv-chip data-closable data-value="arsenal">
        Arsenal
        <button data-action="close" aria-label="Remove Arsenal">${f}</button>
      </fv-chip>
      <fv-chip data-closable data-value="saka">
        Saka
        <button data-action="close" aria-label="Remove Saka">${f}</button>
      </fv-chip>
      <fv-chip data-variant="outline">+ Add filter</fv-chip>
    </div>
  `,parameters:m(`<fv-chip data-closable data-variant="accent" data-value="premier">
  Premier League
  <button data-action="close" aria-label="Remove Premier League">
    ${h}
  </button>
</fv-chip>

<fv-chip data-closable data-value="arsenal">
  Arsenal
  <button data-action="close" aria-label="Remove Arsenal">
    ${h}
  </button>
</fv-chip>

<fv-chip data-variant="outline">+ Add filter</fv-chip>`)},C={render:()=>n`
    <div style="${p}">
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#DB0007">ARS</span>Arsenal
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#034694">CHE</span>Chelsea
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#6CABDD;color:#1C2C5B">MCI</span>Man City
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#DA291C">LIV</span>Liverpool
      </fv-chip>
    </div>
  `,parameters:m(`<fv-chip data-variant="team">
  <span data-role="crest" style="background: #DB0007">ARS</span>
  Arsenal
</fv-chip>

<fv-chip data-variant="team">
  <span data-role="crest" style="background: #034694">CHE</span>
  Chelsea
</fv-chip>`)},w={render:()=>n`
    <div style="${p}">
      <fv-chip data-variant="count"><span>Followers</span><b data-role="count">12.4k</b></fv-chip>
      <fv-chip data-variant="count"><span>xG</span><b data-role="count">1.84</b></fv-chip>
      <fv-chip data-variant="count"><span>Possession</span><b data-role="count">63%</b></fv-chip>
    </div>
  `,parameters:m(`<fv-chip data-variant="count">
  <span>Followers</span>
  <b data-role="count">12.4k</b>
</fv-chip>

<fv-chip data-variant="count">
  <span>xG</span>
  <b data-role="count">1.84</b>
</fv-chip>`)},T={render:()=>n`
    <fv-chip data-closable data-value="arsenal" data-testid="chip">
      Arsenal
      <button data-action="close" aria-label="Remove Arsenal">${f}</button>
    </fv-chip>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="chip"]`),n=t.querySelector(`[data-action="close"]`),r;t.addEventListener(`close`,e=>{r=e.detail.value}),await u.click(n),c(r).toBe(`arsenal`)}},E={render:()=>n`
    <div data-testid="parent">
      <fv-chip data-closable data-value="bubbles">
        Filter
        <button data-action="close" aria-label="Remove">${f}</button>
      </fv-chip>
    </div>
  `,play:async({canvasElement:e})=>{let t=l();document.body.addEventListener(`close`,t);let n=e.querySelector(`[data-action="close"]`);await u.click(n),c(t).toHaveBeenCalledOnce();let r=t.mock.calls[0][0];c(r.detail).toEqual({value:`bubbles`}),c(r.bubbles).toBe(!0),document.body.removeEventListener(`close`,t)}},D={render:()=>n`
    <fv-chip data-testid="chip">Status</fv-chip>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="chip"]`),n=l();document.addEventListener(`close`,n),await u.click(t),c(n).not.toHaveBeenCalled(),document.removeEventListener(`close`,n)}},O={render:()=>n`
    <!-- Marked closable but the server forgot the close button.
         The component must not throw — it just dispatches no close events. -->
    <fv-chip data-closable data-value="orphan" data-testid="chip">No X here</fv-chip>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="chip"]`),n=l();document.addEventListener(`close`,n),await u.click(t),c(n).not.toHaveBeenCalled(),document.removeEventListener(`close`,n)}},k={render:()=>n`
    <div data-testid="host">
      <fv-chip data-closable data-value="cleanup">
        Filter
        <button data-action="close" aria-label="Remove">${f}</button>
      </fv-chip>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="host"]`),n=t.querySelector(`fv-chip`),r=n.querySelector(`[data-action="close"]`),i=0;n.addEventListener(`close`,()=>i++),c(i).toBe(0),await u.click(r),c(i).toBe(1),t.removeChild(n),r.click(),c(i).toBe(1)}},A={render:()=>n`
    <div data-testid="container">
      <fv-chip data-closable data-value="initial">
        Initial
        <button data-action="close" aria-label="Remove">${f}</button>
      </fv-chip>
    </div>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`
      <fv-chip data-closable data-value="swapped">
        Swapped
        <button data-action="close" aria-label="Remove"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 1l6 6M7 1L1 7"/></svg></button>
      </fv-chip>
    `;let n=t.querySelector(`fv-chip`),r=n.querySelector(`[data-action="close"]`),i;n.addEventListener(`close`,e=>{i=e.detail.value}),c(i).toBeUndefined(),await u.click(r),c(i).toBe(`swapped`)}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    text: 'Premier League'
  },
  render: renderChip,
  parameters: dynamicSrc()
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'live',
    text: 'LIVE'
  },
  render: renderChip,
  parameters: dynamicSrc()
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="\${row}">
      <fv-chip data-variant="live">LIVE</fv-chip>
      <fv-chip data-variant="mono">73'</fv-chip>
      <fv-chip data-variant="mono">HT</fv-chip>
      <fv-chip data-variant="strong"><span data-role="dot"></span>FT</fv-chip>
      <fv-chip data-variant="info">VAR review</fv-chip>
      <fv-chip data-variant="warn"><span data-role="dot" style="background:#B88700"></span>Delay</fv-chip>
      <fv-chip data-variant="pos"><span data-role="dot" style="background:#3B7217"></span>Goal</fv-chip>
      <fv-chip data-variant="neg">Red card</fv-chip>
    </div>
  \`,
  parameters: src(\`<fv-chip data-variant="live">LIVE</fv-chip>
<fv-chip data-variant="mono">73'</fv-chip>
<fv-chip data-variant="strong"><span data-role="dot"></span>FT</fv-chip>
<fv-chip data-variant="info">VAR review</fv-chip>
<fv-chip data-variant="warn"><span data-role="dot" style="background:#B88700"></span>Delay</fv-chip>
<fv-chip data-variant="pos"><span data-role="dot" style="background:#3B7217"></span>Goal</fv-chip>
<fv-chip data-variant="neg">Red card</fv-chip>\`)
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="\${row}">
      <fv-chip data-closable data-variant="accent" data-value="premier">
        Premier League
        <button data-action="close" aria-label="Remove Premier League">\${xIcon}</button>
      </fv-chip>
      <fv-chip data-closable data-value="arsenal">
        Arsenal
        <button data-action="close" aria-label="Remove Arsenal">\${xIcon}</button>
      </fv-chip>
      <fv-chip data-closable data-value="saka">
        Saka
        <button data-action="close" aria-label="Remove Saka">\${xIcon}</button>
      </fv-chip>
      <fv-chip data-variant="outline">+ Add filter</fv-chip>
    </div>
  \`,
  parameters: src(\`<fv-chip data-closable data-variant="accent" data-value="premier">
  Premier League
  <button data-action="close" aria-label="Remove Premier League">
    \${xIconHtml}
  </button>
</fv-chip>

<fv-chip data-closable data-value="arsenal">
  Arsenal
  <button data-action="close" aria-label="Remove Arsenal">
    \${xIconHtml}
  </button>
</fv-chip>

<fv-chip data-variant="outline">+ Add filter</fv-chip>\`)
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="\${row}">
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#DB0007">ARS</span>Arsenal
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#034694">CHE</span>Chelsea
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#6CABDD;color:#1C2C5B">MCI</span>Man City
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#DA291C">LIV</span>Liverpool
      </fv-chip>
    </div>
  \`,
  parameters: src(\`<fv-chip data-variant="team">
  <span data-role="crest" style="background: #DB0007">ARS</span>
  Arsenal
</fv-chip>

<fv-chip data-variant="team">
  <span data-role="crest" style="background: #034694">CHE</span>
  Chelsea
</fv-chip>\`)
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="\${row}">
      <fv-chip data-variant="count"><span>Followers</span><b data-role="count">12.4k</b></fv-chip>
      <fv-chip data-variant="count"><span>xG</span><b data-role="count">1.84</b></fv-chip>
      <fv-chip data-variant="count"><span>Possession</span><b data-role="count">63%</b></fv-chip>
    </div>
  \`,
  parameters: src(\`<fv-chip data-variant="count">
  <span>Followers</span>
  <b data-role="count">12.4k</b>
</fv-chip>

<fv-chip data-variant="count">
  <span>xG</span>
  <b data-role="count">1.84</b>
</fv-chip>\`)
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-chip data-closable data-value="arsenal" data-testid="chip">
      Arsenal
      <button data-action="close" aria-label="Remove Arsenal">\${xIcon}</button>
    </fv-chip>
  \`,
  play: async ({
    canvasElement
  }) => {
    const chip = canvasElement.querySelector<HTMLElement>('[data-testid="chip"]')!;
    const closeBtn = chip.querySelector<HTMLButtonElement>('[data-action="close"]')!;
    let lastValue: string | undefined;
    chip.addEventListener('close', e => {
      lastValue = (e as CustomEvent<{
        value: string;
      }>).detail.value;
    });
    await userEvent.click(closeBtn);
    expect(lastValue).toBe('arsenal');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="parent">
      <fv-chip data-closable data-value="bubbles">
        Filter
        <button data-action="close" aria-label="Remove">\${xIcon}</button>
      </fv-chip>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const handler = fn();
    document.body.addEventListener('close', handler);
    const closeBtn = canvasElement.querySelector<HTMLButtonElement>('[data-action="close"]')!;
    await userEvent.click(closeBtn);
    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{
      value: string;
    }>;
    expect(event.detail).toEqual({
      value: 'bubbles'
    });
    expect(event.bubbles).toBe(true);
    document.body.removeEventListener('close', handler);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-chip data-testid="chip">Status</fv-chip>
  \`,
  play: async ({
    canvasElement
  }) => {
    // A chip without a [data-action="close"] child must not throw at
    // connect time and must not dispatch close on its own click.
    const chip = canvasElement.querySelector<HTMLElement>('[data-testid="chip"]')!;
    const spy = fn();
    document.addEventListener('close', spy);
    await userEvent.click(chip);
    expect(spy).not.toHaveBeenCalled();
    document.removeEventListener('close', spy);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <!-- Marked closable but the server forgot the close button.
         The component must not throw — it just dispatches no close events. -->
    <fv-chip data-closable data-value="orphan" data-testid="chip">No X here</fv-chip>
  \`,
  play: async ({
    canvasElement
  }) => {
    const chip = canvasElement.querySelector<HTMLElement>('[data-testid="chip"]')!;
    const spy = fn();
    document.addEventListener('close', spy);
    await userEvent.click(chip);
    expect(spy).not.toHaveBeenCalled();
    document.removeEventListener('close', spy);
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="host">
      <fv-chip data-closable data-value="cleanup">
        Filter
        <button data-action="close" aria-label="Remove">\${xIcon}</button>
      </fv-chip>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const chip = host.querySelector<HTMLElement>('fv-chip')!;
    const closeBtn = chip.querySelector<HTMLButtonElement>('[data-action="close"]')!;

    // Sanity while connected.
    let dispatched = 0;
    chip.addEventListener('close', () => dispatched++);
    expect(dispatched).toBe(0);
    await userEvent.click(closeBtn);
    expect(dispatched).toBe(1);

    // Disconnect; clicking the now-detached close button should not
    // re-fire (the component's internal listener is removed).
    host.removeChild(chip);
    closeBtn.click();
    // Counter must be UNCHANGED — proves disconnectedCallback removed
    // the click listener on the close button.
    expect(dispatched).toBe(1);
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div data-testid="container">
      <fv-chip data-closable data-value="initial">
        Initial
        <button data-action="close" aria-label="Remove">\${xIcon}</button>
      </fv-chip>
    </div>
  \`,
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = \`
      <fv-chip data-closable data-value="swapped">
        Swapped
        <button data-action="close" aria-label="Remove"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 1l6 6M7 1L1 7"/></svg></button>
      </fv-chip>
    \`;
    const chip = container.querySelector<HTMLElement>('fv-chip')!;
    const closeBtn = chip.querySelector<HTMLButtonElement>('[data-action="close"]')!;
    let lastValue: string | undefined;
    chip.addEventListener('close', e => {
      lastValue = (e as CustomEvent<{
        value: string;
      }>).detail.value;
    });
    expect(lastValue).toBeUndefined();
    await userEvent.click(closeBtn);
    expect(lastValue).toBe('swapped');
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Playground`,`StatusVariants`,`Closable`,`Teams`,`Counts`,`CloseDispatchesEvent`,`CloseEventBubbles`,`NonClosableChipDoesNotDispatchClose`,`ClosableWithoutCloseButtonDoesNotCrash`,`CleansUpOnDisconnect`,`SurvivesHtmxSwap`]}));M();export{k as CleansUpOnDisconnect,S as Closable,O as ClosableWithoutCloseButtonDoesNotCrash,T as CloseDispatchesEvent,E as CloseEventBubbles,w as Counts,y as Default,D as NonClosableChipDoesNotDispatchClose,b as Playground,x as StatusVariants,A as SurvivesHtmxSwap,C as Teams,j as __namedExportsOrder,d as default,M as n,s as t};