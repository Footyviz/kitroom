import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,ft as r,h as i}from"./iframe-CCcjCKbY.js";var a=t({Accent:()=>h,Default:()=>d,LeftLeaning:()=>f,Mirrored:()=>m,MirroredAccent:()=>g,Pair:()=>_,RightLeaning:()=>p,StampsAriaHidden:()=>v,__namedExportsOrder:()=>y,default:()=>s}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b=e((()=>{r(),i(),{expect:o}=__STORYBOOK_MODULE_TEST__,s={title:`Kitroom/RatioBar`,component:`fv-ratio-bar`,argTypes:{pct:{control:{type:`range`,min:0,max:100,step:1}},direction:{control:{type:`inline-radio`},options:[`ltr`,`rtl`]},tone:{control:{type:`inline-radio`},options:[`default`,`accent`]}},parameters:{controls:{disable:!0}}},c=`width: 200px;`,l=e=>({docs:{source:{code:e,language:`html`}}}),u=()=>({docs:{source:{language:`html`,transform:(e,t)=>{let n=t.args.direction===`rtl`?` data-direction="rtl"`:``,r=t.args.tone===`accent`?` data-tone="accent"`:``;return`<fv-ratio-bar style="--pct: ${t.args.pct}%"${n}${r}></fv-ratio-bar>`}}}}),d={args:{pct:50,direction:`ltr`,tone:`default`},render:e=>n`
    <div style="${c}">
      <fv-ratio-bar style="--pct: ${e.pct}%"></fv-ratio-bar>
    </div>
  `,parameters:{controls:{disable:!1},...u()}},f={args:{pct:75,direction:`ltr`,tone:`default`},render:e=>n`
    <div style="${c}">
      <fv-ratio-bar style="--pct: ${e.pct}%"></fv-ratio-bar>
    </div>
  `,parameters:u()},p={args:{pct:25,direction:`ltr`,tone:`default`},render:e=>n`
    <div style="${c}">
      <fv-ratio-bar style="--pct: ${e.pct}%"></fv-ratio-bar>
    </div>
  `,parameters:u()},m={args:{pct:33,direction:`rtl`,tone:`default`},render:e=>n`
    <div style="${c}">
      <fv-ratio-bar style="--pct: ${e.pct}%" data-direction="rtl"></fv-ratio-bar>
    </div>
  `,parameters:u()},h={args:{pct:67,direction:`ltr`,tone:`accent`},render:e=>n`
    <div style="${c}">
      <fv-ratio-bar style="--pct: ${e.pct}%" data-tone="accent"></fv-ratio-bar>
    </div>
  `,parameters:u()},g={args:{pct:67,direction:`rtl`,tone:`accent`},render:e=>n`
    <div style="${c}">
      <fv-ratio-bar
        style="--pct: ${e.pct}%"
        data-direction="rtl"
        data-tone="accent"
      ></fv-ratio-bar>
    </div>
  `,parameters:u()},_={render:()=>n`
    <div
      style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; width: 320px;"
    >
      <fv-ratio-bar style="--pct: 67%"></fv-ratio-bar>
      <fv-ratio-bar style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
    </div>
  `,parameters:l(`<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; width: 320px;">
  <fv-ratio-bar style="--pct: 67%"></fv-ratio-bar>
  <fv-ratio-bar style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
</div>`)},v={render:()=>n`
    <fv-ratio-bar data-testid="bar" style="--pct: 60%"></fv-ratio-bar>
  `,parameters:l(`<fv-ratio-bar style="--pct: 60%"></fv-ratio-bar>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="bar"]`);o(t.getAttribute(`aria-hidden`)).toBe(`true`),o(t.getAttribute(`role`)).toBe(`presentation`)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 50,
    direction: 'ltr',
    tone: 'default'
  },
  render: args => html\`
    <div style="\${wrapStyle}">
      <fv-ratio-bar style="--pct: \${args.pct}%"></fv-ratio-bar>
    </div>
  \`,
  parameters: {
    controls: {
      disable: false
    },
    ...dynamicSrc()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 75,
    direction: 'ltr',
    tone: 'default'
  },
  render: args => html\`
    <div style="\${wrapStyle}">
      <fv-ratio-bar style="--pct: \${args.pct}%"></fv-ratio-bar>
    </div>
  \`,
  parameters: dynamicSrc()
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 25,
    direction: 'ltr',
    tone: 'default'
  },
  render: args => html\`
    <div style="\${wrapStyle}">
      <fv-ratio-bar style="--pct: \${args.pct}%"></fv-ratio-bar>
    </div>
  \`,
  parameters: dynamicSrc()
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 33,
    direction: 'rtl',
    tone: 'default'
  },
  render: args => html\`
    <div style="\${wrapStyle}">
      <fv-ratio-bar style="--pct: \${args.pct}%" data-direction="rtl"></fv-ratio-bar>
    </div>
  \`,
  parameters: dynamicSrc()
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 67,
    direction: 'ltr',
    tone: 'accent'
  },
  render: args => html\`
    <div style="\${wrapStyle}">
      <fv-ratio-bar style="--pct: \${args.pct}%" data-tone="accent"></fv-ratio-bar>
    </div>
  \`,
  parameters: dynamicSrc()
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    pct: 67,
    direction: 'rtl',
    tone: 'accent'
  },
  render: args => html\`
    <div style="\${wrapStyle}">
      <fv-ratio-bar
        style="--pct: \${args.pct}%"
        data-direction="rtl"
        data-tone="accent"
      ></fv-ratio-bar>
    </div>
  \`,
  parameters: dynamicSrc()
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div
      style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; width: 320px;"
    >
      <fv-ratio-bar style="--pct: 67%"></fv-ratio-bar>
      <fv-ratio-bar style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
    </div>
  \`,
  parameters: src(\`<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; width: 320px;">
  <fv-ratio-bar style="--pct: 67%"></fv-ratio-bar>
  <fv-ratio-bar style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
</div>\`)
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-ratio-bar data-testid="bar" style="--pct: 60%"></fv-ratio-bar>
  \`,
  parameters: src(\`<fv-ratio-bar style="--pct: 60%"></fv-ratio-bar>\`),
  play: async ({
    canvasElement
  }) => {
    const bar = canvasElement.querySelector<HTMLElement>('[data-testid="bar"]')!;
    expect(bar.getAttribute('aria-hidden')).toBe('true');
    expect(bar.getAttribute('role')).toBe('presentation');
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`LeftLeaning`,`RightLeaning`,`Mirrored`,`Accent`,`MirroredAccent`,`Pair`,`StampsAriaHidden`]}));b();export{h as Accent,d as Default,f as LeftLeaning,m as Mirrored,g as MirroredAccent,_ as Pair,p as RightLeaning,v as StampsAriaHidden,y as __namedExportsOrder,s as default,b as n,a as t};