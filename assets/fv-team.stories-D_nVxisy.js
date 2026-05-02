import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{c as n,dt as r,ft as i,s as a,ut as o,x as s}from"./iframe-CCcjCKbY.js";var c=t({Away:()=>v,Compact:()=>b,Home:()=>_,HomeAndAwayPair:()=>y,LongName:()=>x,MonogramFallback:()=>S,Playground:()=>g,SetsRoleAndAriaLabel:()=>C,UpdatesAriaLabelOnTextChange:()=>w,__namedExportsOrder:()=>T,default:()=>u}),l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=e((()=>{i(),n(),s(),a(),{expect:l}=__STORYBOOK_MODULE_TEST__,u={title:`Kitroom/Team`,component:`fv-team`,argTypes:{name:{control:`text`,description:`Team-name text content`},code:{control:`text`,description:`data-code on the inner <fv-crest>`},side:{control:{type:`inline-radio`},options:[`home`,`away`],description:`data-side — home (default LTR) or away (visual mirror)`},density:{control:{type:`inline-radio`},options:[`default`,`compact`],description:`data-density — compact tightens the gap`},crestSize:{control:{type:`inline-radio`},options:[`default`,`sm`,`md`,`lg`],description:`data-size on the inner <fv-crest>`}},parameters:{controls:{disable:!0}}},d=`font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);`,f=e=>({docs:{source:{code:e,language:`html`}}}),p=e=>r`
  <fv-team
    data-side="${e.side}"
    data-density="${e.density===`default`?o:e.density}"
  >
    <fv-crest
      data-code="${e.code}"
      data-size="${e.crestSize===`default`?o:e.crestSize}"
    ></fv-crest>
    <fv-text data-role="team-name" data-variant="body">${e.name}</fv-text>
  </fv-team>
`,m=e=>{let t=[`data-side="${e.side}"`];e.density!==`default`&&t.push(`data-density="${e.density}"`);let n=[`data-code="${e.code}"`];return e.crestSize!==`default`&&n.push(`data-size="${e.crestSize}"`),`<fv-team ${t.join(` `)}>
  <fv-crest ${n.join(` `)}></fv-crest>
  <fv-text data-role="team-name" data-variant="body">${e.name}</fv-text>
</fv-team>`},h=()=>({docs:{source:{language:`html`,transform:(e,t)=>m(t.args)}}}),g={args:{name:`Arsenal`,code:`ARS`,side:`home`,density:`default`,crestSize:`lg`},render:p,parameters:{...h(),controls:{disable:!1}}},_={render:()=>r`
    <fv-team data-side="home">
      <fv-crest data-code="ARS" data-size="lg"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  `,parameters:f(`<fv-team data-side="home">
  <fv-crest data-code="ARS" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>`)},v={render:()=>r`
    <fv-team data-side="away">
      <fv-crest data-code="CHE" data-size="lg"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
    </fv-team>
  `,parameters:f(`<fv-team data-side="away">
  <fv-crest data-code="CHE" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
</fv-team>`)},y={render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home">
        <fv-crest data-code="ARS" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
      </fv-team>
      <fv-team data-side="away">
        <fv-crest data-code="CHE" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
      </fv-team>
      <span style="${d}">home (LTR) / away (mirrored)</span>
    </div>
  `,parameters:f(`<fv-team data-side="home">
  <fv-crest data-code="ARS" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>
<fv-team data-side="away">
  <fv-crest data-code="CHE" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
</fv-team>`)},b={render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home" data-density="compact">
        <fv-crest data-code="ARS" data-size="sm"></fv-crest>
        <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
      </fv-team>
      <fv-team data-side="home">
        <fv-crest data-code="ARS" data-size="sm"></fv-crest>
        <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
      </fv-team>
      <span style="${d}">compact (top, 8px gap) / default (bottom, 12px gap)</span>
    </div>
  `,parameters:f(`<fv-team data-side="home" data-density="compact">
  <fv-crest data-code="ARS" data-size="sm"></fv-crest>
  <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
</fv-team>`)},x={render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 240px;">
      <div style="width: 200px; border: 1px dashed var(--border); padding: 8px;">
        <fv-team data-side="home" style="display: flex; max-width: 100%;">
          <fv-crest data-code="WLV" data-size="md"></fv-crest>
          <fv-text data-role="team-name" data-variant="body">
            Wolverhampton Wanderers Football Club
          </fv-text>
        </fv-team>
      </div>
      <span style="${d}">name overflows → ellipsis truncation</span>
    </div>
  `,parameters:f(`<div style="width: 200px;">
  <fv-team data-side="home" style="display: flex; max-width: 100%;">
    <fv-crest data-code="WLV" data-size="md"></fv-crest>
    <fv-text data-role="team-name" data-variant="body">
      Wolverhampton Wanderers Football Club
    </fv-text>
  </fv-team>
</div>`)},S={render:()=>r`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home">
        <fv-crest data-code="HAR" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Harringate Utd</fv-text>
      </fv-team>
      <fv-team data-side="away">
        <fv-crest data-code="KIN" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Kingsmoor FC</fv-text>
      </fv-team>
      <span style="${d}">no data-src → monogram fallback (same shape)</span>
    </div>
  `,parameters:f(`<fv-team data-side="home">
  <fv-crest data-code="HAR" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Harringate Utd</fv-text>
</fv-team>`)},C={render:()=>r`
    <fv-team data-testid="t" data-side="home">
      <fv-crest data-code="ARS"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  `,parameters:f(`<fv-team data-side="home">
  <fv-crest data-code="ARS"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`);l(t.getAttribute(`role`)).toBe(`group`),l(t.getAttribute(`aria-label`)).toBe(`Arsenal`)}},w={render:()=>r`
    <fv-team data-testid="t" data-side="home">
      <fv-crest data-code="ARS"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  `,parameters:f(`<fv-team data-side="home">
  <fv-crest data-code="ARS"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`),n=t.querySelector(`[data-role="team-name"]`);l(t.getAttribute(`aria-label`)).toBe(`Arsenal`),n.textContent=`Aston Villa`,await new Promise(e=>setTimeout(e,0)),l(t.getAttribute(`aria-label`)).toBe(`Aston Villa`)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Arsenal',
    code: 'ARS',
    side: 'home',
    density: 'default',
    crestSize: 'lg'
  },
  render: renderTeam,
  parameters: {
    ...dynamicSrc(),
    controls: {
      disable: false
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-team data-side="home">
      <fv-crest data-code="ARS" data-size="lg"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  \`,
  parameters: src(\`<fv-team data-side="home">
  <fv-crest data-code="ARS" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>\`)
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-team data-side="away">
      <fv-crest data-code="CHE" data-size="lg"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
    </fv-team>
  \`,
  parameters: src(\`<fv-team data-side="away">
  <fv-crest data-code="CHE" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
</fv-team>\`)
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home">
        <fv-crest data-code="ARS" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
      </fv-team>
      <fv-team data-side="away">
        <fv-crest data-code="CHE" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
      </fv-team>
      <span style="\${labelStyle}">home (LTR) / away (mirrored)</span>
    </div>
  \`,
  parameters: src(\`<fv-team data-side="home">
  <fv-crest data-code="ARS" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>
<fv-team data-side="away">
  <fv-crest data-code="CHE" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
</fv-team>\`)
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home" data-density="compact">
        <fv-crest data-code="ARS" data-size="sm"></fv-crest>
        <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
      </fv-team>
      <fv-team data-side="home">
        <fv-crest data-code="ARS" data-size="sm"></fv-crest>
        <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
      </fv-team>
      <span style="\${labelStyle}">compact (top, 8px gap) / default (bottom, 12px gap)</span>
    </div>
  \`,
  parameters: src(\`<fv-team data-side="home" data-density="compact">
  <fv-crest data-code="ARS" data-size="sm"></fv-crest>
  <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
</fv-team>\`)
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 240px;">
      <div style="width: 200px; border: 1px dashed var(--border); padding: 8px;">
        <fv-team data-side="home" style="display: flex; max-width: 100%;">
          <fv-crest data-code="WLV" data-size="md"></fv-crest>
          <fv-text data-role="team-name" data-variant="body">
            Wolverhampton Wanderers Football Club
          </fv-text>
        </fv-team>
      </div>
      <span style="\${labelStyle}">name overflows → ellipsis truncation</span>
    </div>
  \`,
  parameters: src(\`<div style="width: 200px;">
  <fv-team data-side="home" style="display: flex; max-width: 100%;">
    <fv-crest data-code="WLV" data-size="md"></fv-crest>
    <fv-text data-role="team-name" data-variant="body">
      Wolverhampton Wanderers Football Club
    </fv-text>
  </fv-team>
</div>\`)
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home">
        <fv-crest data-code="HAR" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Harringate Utd</fv-text>
      </fv-team>
      <fv-team data-side="away">
        <fv-crest data-code="KIN" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Kingsmoor FC</fv-text>
      </fv-team>
      <span style="\${labelStyle}">no data-src → monogram fallback (same shape)</span>
    </div>
  \`,
  parameters: src(\`<fv-team data-side="home">
  <fv-crest data-code="HAR" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Harringate Utd</fv-text>
</fv-team>\`)
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-team data-testid="t" data-side="home">
      <fv-crest data-code="ARS"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  \`,
  parameters: src(\`<fv-team data-side="home">
  <fv-crest data-code="ARS"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.getAttribute('role')).toBe('group');
    expect(el.getAttribute('aria-label')).toBe('Arsenal');
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-team data-testid="t" data-side="home">
      <fv-crest data-code="ARS"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  \`,
  parameters: src(\`<fv-team data-side="home">
  <fv-crest data-code="ARS"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    const name = el.querySelector<HTMLElement>('[data-role="team-name"]')!;
    expect(el.getAttribute('aria-label')).toBe('Arsenal');
    name.textContent = 'Aston Villa';
    await new Promise(r => setTimeout(r, 0));
    expect(el.getAttribute('aria-label')).toBe('Aston Villa');
  }
}`,...w.parameters?.docs?.source}}},T=[`Playground`,`Home`,`Away`,`HomeAndAwayPair`,`Compact`,`LongName`,`MonogramFallback`,`SetsRoleAndAriaLabel`,`UpdatesAriaLabelOnTextChange`]}));E();export{v as Away,b as Compact,_ as Home,y as HomeAndAwayPair,x as LongName,S as MonogramFallback,g as Playground,C as SetsRoleAndAriaLabel,w as UpdatesAriaLabelOnTextChange,T as __namedExportsOrder,u as default,E as n,c as t};