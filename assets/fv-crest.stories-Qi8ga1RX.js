import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,ft as r,ut as i,x as a}from"./iframe-CCcjCKbY.js";var o=t({Codes:()=>v,ImageWithFallback:()=>y,LowercaseCodeRendersUppercase:()=>S,Playground:()=>h,RendersCodeText:()=>b,Sizes:()=>g,UpdatesOnAttributeChange:()=>x,WithLogos:()=>_,__namedExportsOrder:()=>C,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=e((()=>{r(),a(),{expect:s}=__STORYBOOK_MODULE_TEST__,c={title:`Kitroom/Crest`,component:`fv-crest`,argTypes:{code:{control:`text`,description:`data-code — 2-4 letter team monogram`},size:{control:{type:`inline-radio`},options:[`default`,`sm`,`md`,`lg`],description:`data-size — sm (20px), md (28px, default), lg (36px)`},src:{control:`text`,description:`data-src — optional image URL`},alt:{control:`text`,description:`data-alt — accessible name when data-src is used`}},parameters:{controls:{disable:!0}}},l=e=>({docs:{source:{code:e,language:`html`}}}),u=`font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);`,d=e=>`https://media.api-sports.io/football/teams/${e}.png`,f=d(33),p=d(50),m=d(42),h={args:{code:`HAR`,size:`default`,src:``,alt:``},render:e=>n`
    <fv-crest
      data-code="${e.code}"
      data-size="${e.size===`default`?i:e.size}"
      data-src="${e.src?e.src:i}"
      data-alt="${e.alt?e.alt:i}"
    ></fv-crest>
  `,parameters:{docs:{source:{language:`html`,transform:(e,t)=>{let n=[`data-code="${t.args.code}"`];return t.args.size!==`default`&&n.push(`data-size="${t.args.size}"`),t.args.src&&n.push(`data-src="${t.args.src}"`),t.args.alt&&n.push(`data-alt="${t.args.alt}"`),`<fv-crest ${n.join(` `)}></fv-crest>`}}},controls:{disable:!1}}},g={render:()=>n`
    <div style="display: inline-flex; align-items: center; gap: 16px;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="sm"></fv-crest>
        <span style="${u}">sm · 20px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="md"></fv-crest>
        <span style="${u}">md · 28px (default)</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="lg"></fv-crest>
        <span style="${u}">lg · 36px</span>
      </div>
    </div>
  `,parameters:l(`<fv-crest data-code="HAR" data-size="sm"></fv-crest>
<fv-crest data-code="HAR" data-size="md"></fv-crest>
<fv-crest data-code="HAR" data-size="lg"></fv-crest>`)},_={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: inline-flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=${f} data-code="MUN" data-alt="Manchester Utd" data-size="sm"></fv-crest>
          <span style="${u}">sm · 20px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=${p} data-code="MCI" data-alt="Manchester City" data-size="md"></fv-crest>
          <span style="${u}">md · 28px (default)</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=${m} data-code="ARS" data-alt="Arsenal" data-size="lg"></fv-crest>
          <span style="${u}">lg · 36px</span>
        </div>
      </div>
      <div style="display: inline-flex; align-items: center; gap: 8px;">
        <fv-crest data-src=${f} data-code="MUN" data-alt="Manchester Utd"></fv-crest>
        <fv-crest data-src=${p} data-code="MCI" data-alt="Manchester City"></fv-crest>
        <fv-crest data-src=${m} data-code="ARS" data-alt="Arsenal"></fv-crest>
        <span style="${u}">— inline row at default size</span>
      </div>
    </div>
  `,parameters:l(`<fv-crest
  data-src="https://media.api-sports.io/football/teams/33.png"
  data-code="MUN"
  data-alt="Manchester Utd"
></fv-crest>`)},v={render:()=>n`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <fv-crest data-code="HAR"></fv-crest>
      <fv-crest data-code="KIN"></fv-crest>
      <fv-crest data-code="WLD"></fv-crest>
      <fv-crest data-code="BRY"></fv-crest>
      <fv-crest data-code="NMP"></fv-crest>
      <fv-crest data-code="OAK"></fv-crest>
      <fv-crest data-code="CDR"></fv-crest>
      <fv-crest data-code="STM"></fv-crest>
      <fv-crest data-code="BLM"></fv-crest>
      <fv-crest data-code="WTH"></fv-crest>
    </div>
  `,parameters:l(`<fv-crest data-code="HAR"></fv-crest>
<fv-crest data-code="KIN"></fv-crest>
<fv-crest data-code="WLD"></fv-crest>`)},y={render:()=>n`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: inline-flex; align-items: center; gap: 12px;">
        <fv-crest data-src=${f} data-code="MUN" data-alt="Manchester Utd"></fv-crest>
        <span style="${u}">data-src loads → image renders, chrome drops</span>
      </div>
      <div style="display: inline-flex; align-items: center; gap: 12px;">
        <fv-crest data-src="/missing-crest.svg" data-code="HAR" data-alt="Harringate Utd"></fv-crest>
        <span style="${u}">data-src missing → falls back to data-code monogram</span>
      </div>
    </div>
  `,parameters:l(`<fv-crest
  data-src="https://media.api-sports.io/football/teams/33.png"
  data-code="MUN"
  data-alt="Manchester Utd"
></fv-crest>`)},b={render:()=>n`
    <fv-crest data-testid="c" data-code="HAR"></fv-crest>
  `,parameters:l(`<fv-crest data-code="HAR"></fv-crest>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="c"]`);s(t.textContent?.trim()).toBe(`HAR`),s(t.getAttribute(`role`)).toBe(`img`),s(t.getAttribute(`aria-label`)).toBe(`HAR`)}},x={render:()=>n`
    <fv-crest data-testid="c" data-code="HAR"></fv-crest>
  `,parameters:l(`<fv-crest data-code="HAR"></fv-crest>`),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="c"]`);s(t.textContent?.trim()).toBe(`HAR`),t.setAttribute(`data-code`,`KIN`),s(t.textContent?.trim()).toBe(`KIN`),s(t.getAttribute(`aria-label`)).toBe(`KIN`),t.setAttribute(`data-alt`,`Kingsmoor FC`),s(t.getAttribute(`aria-label`)).toBe(`Kingsmoor FC`)}},S={render:()=>n`
    <fv-crest data-testid="c" data-code="har"></fv-crest>
  `,parameters:l(`<fv-crest data-code="har"></fv-crest>`),play:async({canvasElement:e})=>{s(e.querySelector(`[data-testid="c"]`).textContent?.trim()).toBe(`HAR`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    code: 'HAR',
    size: 'default',
    src: '',
    alt: ''
  },
  render: (args): TemplateResult => html\`
    <fv-crest
      data-code="\${args.code}"
      data-size="\${args.size !== 'default' ? args.size : nothing}"
      data-src="\${args.src ? args.src : nothing}"
      data-alt="\${args.alt ? args.alt : nothing}"
    ></fv-crest>
  \`,
  parameters: {
    docs: {
      source: {
        language: 'html' as const,
        transform: (_: string, ctx: {
          args: CrestArgs;
        }) => {
          const attrs: string[] = [\`data-code="\${ctx.args.code}"\`];
          if (ctx.args.size !== 'default') attrs.push(\`data-size="\${ctx.args.size}"\`);
          if (ctx.args.src) attrs.push(\`data-src="\${ctx.args.src}"\`);
          if (ctx.args.alt) attrs.push(\`data-alt="\${ctx.args.alt}"\`);
          return \`<fv-crest \${attrs.join(' ')}></fv-crest>\`;
        }
      }
    },
    controls: {
      disable: false
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: inline-flex; align-items: center; gap: 16px;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="sm"></fv-crest>
        <span style="\${labelStyle}">sm · 20px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="md"></fv-crest>
        <span style="\${labelStyle}">md · 28px (default)</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="lg"></fv-crest>
        <span style="\${labelStyle}">lg · 36px</span>
      </div>
    </div>
  \`,
  parameters: src(\`<fv-crest data-code="HAR" data-size="sm"></fv-crest>
<fv-crest data-code="HAR" data-size="md"></fv-crest>
<fv-crest data-code="HAR" data-size="lg"></fv-crest>\`)
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: inline-flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=\${logoMUN} data-code="MUN" data-alt="Manchester Utd" data-size="sm"></fv-crest>
          <span style="\${labelStyle}">sm · 20px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=\${logoMCI} data-code="MCI" data-alt="Manchester City" data-size="md"></fv-crest>
          <span style="\${labelStyle}">md · 28px (default)</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=\${logoARS} data-code="ARS" data-alt="Arsenal" data-size="lg"></fv-crest>
          <span style="\${labelStyle}">lg · 36px</span>
        </div>
      </div>
      <div style="display: inline-flex; align-items: center; gap: 8px;">
        <fv-crest data-src=\${logoMUN} data-code="MUN" data-alt="Manchester Utd"></fv-crest>
        <fv-crest data-src=\${logoMCI} data-code="MCI" data-alt="Manchester City"></fv-crest>
        <fv-crest data-src=\${logoARS} data-code="ARS" data-alt="Arsenal"></fv-crest>
        <span style="\${labelStyle}">— inline row at default size</span>
      </div>
    </div>
  \`,
  parameters: src(\`<fv-crest
  data-src="https://media.api-sports.io/football/teams/33.png"
  data-code="MUN"
  data-alt="Manchester Utd"
></fv-crest>\`)
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <fv-crest data-code="HAR"></fv-crest>
      <fv-crest data-code="KIN"></fv-crest>
      <fv-crest data-code="WLD"></fv-crest>
      <fv-crest data-code="BRY"></fv-crest>
      <fv-crest data-code="NMP"></fv-crest>
      <fv-crest data-code="OAK"></fv-crest>
      <fv-crest data-code="CDR"></fv-crest>
      <fv-crest data-code="STM"></fv-crest>
      <fv-crest data-code="BLM"></fv-crest>
      <fv-crest data-code="WTH"></fv-crest>
    </div>
  \`,
  parameters: src(\`<fv-crest data-code="HAR"></fv-crest>
<fv-crest data-code="KIN"></fv-crest>
<fv-crest data-code="WLD"></fv-crest>\`)
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: inline-flex; align-items: center; gap: 12px;">
        <fv-crest data-src=\${logoMUN} data-code="MUN" data-alt="Manchester Utd"></fv-crest>
        <span style="\${labelStyle}">data-src loads → image renders, chrome drops</span>
      </div>
      <div style="display: inline-flex; align-items: center; gap: 12px;">
        <fv-crest data-src="/missing-crest.svg" data-code="HAR" data-alt="Harringate Utd"></fv-crest>
        <span style="\${labelStyle}">data-src missing → falls back to data-code monogram</span>
      </div>
    </div>
  \`,
  parameters: src(\`<fv-crest
  data-src="https://media.api-sports.io/football/teams/33.png"
  data-code="MUN"
  data-alt="Manchester Utd"
></fv-crest>\`)
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-crest data-testid="c" data-code="HAR"></fv-crest>
  \`,
  parameters: src(\`<fv-crest data-code="HAR"></fv-crest>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="c"]')!;
    expect(el.textContent?.trim()).toBe('HAR');
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBe('HAR');
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-crest data-testid="c" data-code="HAR"></fv-crest>
  \`,
  parameters: src(\`<fv-crest data-code="HAR"></fv-crest>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="c"]')!;
    expect(el.textContent?.trim()).toBe('HAR');
    el.setAttribute('data-code', 'KIN');
    expect(el.textContent?.trim()).toBe('KIN');
    expect(el.getAttribute('aria-label')).toBe('KIN');
    el.setAttribute('data-alt', 'Kingsmoor FC');
    expect(el.getAttribute('aria-label')).toBe('Kingsmoor FC');
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: (): TemplateResult => html\`
    <fv-crest data-testid="c" data-code="har"></fv-crest>
  \`,
  parameters: src(\`<fv-crest data-code="har"></fv-crest>\`),
  play: async ({
    canvasElement
  }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="c"]')!;
    expect(el.textContent?.trim()).toBe('HAR');
  }
}`,...S.parameters?.docs?.source}}},C=[`Playground`,`Sizes`,`WithLogos`,`Codes`,`ImageWithFallback`,`RendersCodeText`,`UpdatesOnAttributeChange`,`LowercaseCodeRendersUppercase`]}));w();export{v as Codes,y as ImageWithFallback,S as LowercaseCodeRendersUppercase,h as Playground,b as RendersCodeText,g as Sizes,x as UpdatesOnAttributeChange,_ as WithLogos,C as __namedExportsOrder,c as default,w as n,o as t};