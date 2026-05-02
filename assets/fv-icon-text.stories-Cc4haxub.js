import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,ft as r,ut as i,v as a}from"./iframe-CCcjCKbY.js";var o=t({Default:()=>m,HandlesMissingLabel:()=>v,Horizontal:()=>h,Playground:()=>g,SurvivesHtmxSwap:()=>y,__namedExportsOrder:()=>b,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{r(),a(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Kitroom/IconText`,component:`fv-icon-text`,argTypes:{label:{control:`text`},direction:{control:{type:`inline-radio`},options:[`column`,`row`]},align:{control:{type:`inline-radio`},options:[`center`,`start`,`end`]},gap:{control:{type:`select`},options:[`default`,`xs`,`sm`,`md`,`lg`]}}},l=`<svg data-role="icon" width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1.5"/>
    <path d="M12 5v14"/>
    <circle cx="12" cy="12" r="2.2"/>
    <circle cx="12" cy="12" r="4.2" opacity=".35"/>
  </svg>`,u=n`
  <svg data-role="icon" width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1.5"></rect>
    <path d="M12 5v14"></path>
    <circle cx="12" cy="12" r="2.2"></circle>
    <circle cx="12" cy="12" r="4.2" opacity=".35"></circle>
  </svg>
`,d=e=>{let t=[];return e.direction!==`column`&&t.push(`data-direction="${e.direction}"`),e.align!==`center`&&t.push(`data-align="${e.align}"`),e.gap!==`default`&&t.push(`data-gap="${e.gap}"`),`${t.length?`<fv-icon-text ${t.join(` `)}>`:`<fv-icon-text>`}
  ${l}
  <span data-role="label">${e.label}</span>
</fv-icon-text>`},f=e=>n`
  <fv-icon-text
    data-direction="${e.direction===`column`?i:e.direction}"
    data-align="${e.align===`center`?i:e.align}"
    data-gap="${e.gap===`default`?i:e.gap}"
  >
    ${u}
    <span data-role="label">${e.label}</span>
  </fv-icon-text>
`,p=()=>({docs:{source:{language:`html`,transform:(e,t)=>d(t.args)}}}),m={args:{label:`Live`,direction:`column`,align:`center`,gap:`default`},render:f,parameters:p()},h={args:{label:`Live`,direction:`row`,align:`center`,gap:`md`},render:f,parameters:p()},g={args:{label:`Live`,direction:`column`,align:`center`,gap:`default`},render:f,parameters:p()},_=e=>({docs:{source:{code:e,language:`html`}}}),v={args:{label:``,direction:`column`,align:`center`,gap:`default`},render:()=>n`
    <fv-icon-text data-testid="bare">
      ${u}
    </fv-icon-text>
  `,parameters:_(`<!-- Component must not crash if the label slot is omitted. -->
<fv-icon-text>
  ${l}
</fv-icon-text>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="bare"]`);s(t.querySelector(`[data-role="icon"]`)).not.toBeNull(),s(t.querySelector(`[data-role="label"]`)).toBeNull()}},y={args:{label:``,direction:`column`,align:`center`,gap:`default`},render:()=>n`
    <div data-testid="container">
      <fv-icon-text><svg data-role="icon"></svg><span data-role="label">Initial</span></fv-icon-text>
    </div>
  `,parameters:_(`<div>
  <fv-icon-text>
    ${l}
    <span data-role="label">Initial</span>
  </fv-icon-text>
</div>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="container"]`);t.innerHTML=`
      <fv-icon-text data-direction="row" data-gap="md">
        <svg data-role="icon"></svg>
        <span data-role="label">Swapped</span>
      </fv-icon-text>
    `;let n=t.querySelector(`fv-icon-text`);s(n.dataset.direction).toBe(`row`),s(n.querySelector(`[data-role="label"]`)?.textContent).toBe(`Swapped`)}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Live',
    direction: 'column',
    align: 'center',
    gap: 'default'
  },
  render: renderIconText,
  parameters: dynamicSrc()
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Live',
    direction: 'row',
    align: 'center',
    gap: 'md'
  },
  render: renderIconText,
  parameters: dynamicSrc()
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Live',
    direction: 'column',
    align: 'center',
    gap: 'default'
  },
  render: renderIconText,
  parameters: dynamicSrc()
}`,...g.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    direction: 'column',
    align: 'center',
    gap: 'default'
  },
  render: () => html\`
    <fv-icon-text data-testid="bare">
      \${sampleIcon}
    </fv-icon-text>
  \`,
  parameters: src(\`<!-- Component must not crash if the label slot is omitted. -->
<fv-icon-text>
  \${sampleIconHtml}
</fv-icon-text>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="bare"]')!;
    expect(el.querySelector('[data-role="icon"]')).not.toBeNull();
    expect(el.querySelector('[data-role="label"]')).toBeNull();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: '',
    direction: 'column',
    align: 'center',
    gap: 'default'
  },
  render: () => html\`
    <div data-testid="container">
      <fv-icon-text><svg data-role="icon"></svg><span data-role="label">Initial</span></fv-icon-text>
    </div>
  \`,
  parameters: src(\`<div>
  <fv-icon-text>
    \${sampleIconHtml}
    <span data-role="label">Initial</span>
  </fv-icon-text>
</div>\`),
  play: async ({
    canvasElement
  }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = \`
      <fv-icon-text data-direction="row" data-gap="md">
        <svg data-role="icon"></svg>
        <span data-role="label">Swapped</span>
      </fv-icon-text>
    \`;
    const el = container.querySelector<HTMLElement>('fv-icon-text')!;
    expect(el.dataset.direction).toBe('row');
    expect(el.querySelector('[data-role="label"]')?.textContent).toBe('Swapped');
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Horizontal`,`Playground`,`HandlesMissingLabel`,`SurvivesHtmxSwap`]}));x();export{m as Default,v as HandlesMissingLabel,h as Horizontal,g as Playground,y as SurvivesHtmxSwap,b as __namedExportsOrder,c as default,x as n,o as t};