import{n as e,r as t}from"./chunk-DnJy8xQt.js";import{dt as n,ft as r,i}from"./iframe-CCcjCKbY.js";var a=t({ColumnsAttributeBroadcasts:()=>S,Comfortable:()=>_,Compact:()=>g,Selected:()=>b,SortHeaderEmitsEvent:()=>x,Standings:()=>h,StickyHead:()=>v,Zones:()=>y,__namedExportsOrder:()=>C,default:()=>l}),o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w=e((()=>{r(),i(),{expect:o,fn:s,userEvent:c}=__STORYBOOK_MODULE_TEST__,l={title:`Locker Room/Table`,component:`fv-table`,argTypes:{density:{control:{type:`inline-radio`},options:[`compact`,`default`,`comfortable`],description:`data-density — row height + horizontal padding scale`},zebra:{control:`boolean`,description:`data-zebra — alternating row tint`},stickyHead:{control:`boolean`,description:`data-sticky-head — header sticks to scroll container top`}},parameters:{actions:{handles:[`sort`]}}},u=[{pos:1,trend:`up`,delta:2,code:`HAR`,name:`Harringate Utd`,gd:18,gf:32,ga:14,form:[`pos`,`pos`,`warn`,`pos`,`pos`],pts:42,zone:`champions`,highlight:!0},{pos:2,trend:`flat`,delta:0,code:`KIN`,name:`Kingsmoor FC`,gd:14,gf:28,ga:14,form:[`pos`,`pos`,`pos`,`warn`,`pos`],pts:38,zone:`champions`},{pos:3,trend:`up`,delta:1,code:`WLD`,name:`Wildwood Town`,gd:11,gf:25,ga:14,form:[`pos`,`warn`,`pos`,`pos`,`warn`],pts:35,zone:`continental`},{pos:4,trend:`down`,delta:2,code:`BRY`,name:`Bryeford`,gd:6,gf:22,ga:16,form:[`warn`,`pos`,`warn`,`pos`,`pos`],pts:33,zone:`continental`},{pos:5,trend:`flat`,delta:0,code:`NMP`,name:`Northampton Rvrs`,gd:3,gf:19,ga:16,form:[`pos`,`warn`,`warn`,`pos`,`warn`],pts:30,zone:`conference`},{pos:6,trend:`up`,delta:3,code:`OAK`,name:`Oakhill City`,gd:1,gf:18,ga:17,form:[`warn`,`pos`,`pos`,`warn`,`pos`],pts:28},{pos:7,trend:`down`,delta:1,code:`CDR`,name:`Cedar Park`,gd:-2,gf:15,ga:17,form:[`warn`,`warn`,`pos`,`neg`,`pos`],pts:25},{pos:8,trend:`flat`,delta:0,code:`STM`,name:`Stormont`,gd:-5,gf:13,ga:18,form:[`neg`,`warn`,`pos`,`warn`,`warn`],pts:22},{pos:9,trend:`up`,delta:1,code:`BLM`,name:`Bellmore`,gd:-8,gf:12,ga:20,form:[`warn`,`neg`,`pos`,`neg`,`warn`],pts:19,zone:`relegation`},{pos:10,trend:`down`,delta:2,code:`WTH`,name:`Witherton AFC`,gd:-12,gf:10,ga:22,form:[`neg`,`warn`,`neg`,`warn`,`neg`],pts:14,zone:`relegation`}],d=e=>e>0?`pos`:e<0?`neg`:`zero`,f=e=>e>0?`+${e}`:`${e}`,p=e=>`Last 5: ${e.map(e=>e===`pos`?`W`:e===`warn`?`D`:`L`).join(` `)}`,m=(e,t=u)=>n`
  <fv-table
    data-density=${e.density}
    ?data-zebra=${e.zebra}
    ?data-sticky-head=${e.stickyHead}
    data-columns="36px minmax(0,1fr) 56px 48px 48px 100px 48px"
    aria-label="League table"
  >
    <header role="rowgroup">
      <div role="row" class="fv-table-head">
        <span role="columnheader">#</span>
        <span role="columnheader" data-primary>Team</span>
        <span role="columnheader" data-numeric>GD</span>
        <span role="columnheader" data-numeric>GF</span>
        <span role="columnheader" data-numeric>GA</span>
        <span role="columnheader">Form</span>
        <span role="columnheader" data-numeric data-primary data-sort="desc" data-sort-key="pts" tabindex="0">Pts</span>
      </div>
    </header>
    <div role="rowgroup">
      ${t.map(e=>n`
          <a
            role="row"
            href="#"
            data-zone=${e.zone??``}
            ?data-highlight=${!!e.highlight}
          >
            <span role="cell">
              <fv-trend data-direction=${e.trend} data-delta=${e.delta}></fv-trend>
              ${e.pos}
            </span>
            <span role="cell" data-primary>
              <fv-crest data-code=${e.code}></fv-crest>
              <fv-text>${e.name}</fv-text>
            </span>
            <span role="cell" data-numeric data-sign=${d(e.gd)}>${f(e.gd)}</span>
            <span role="cell" data-numeric>${e.gf}</span>
            <span role="cell" data-numeric>${e.ga}</span>
            <span role="cell">
              <fv-series aria-label=${p(e.form)}>
                ${e.form.map(e=>n`<span data-pip=${e}></span>`)}
              </fv-series>
            </span>
            <span role="cell" data-numeric data-strong>${e.pts}</span>
          </a>
        `)}
    </div>
  </fv-table>
`,h={args:{density:`default`,zebra:!1,stickyHead:!1},render:e=>m(e)},g={args:{density:`compact`,zebra:!0,stickyHead:!1},render:e=>m(e)},_={args:{density:`comfortable`,zebra:!1,stickyHead:!1},render:e=>m(e)},v={args:{density:`default`,zebra:!1,stickyHead:!0},render:e=>n`
    <div
      style="height: 320px; overflow: auto; border: 1px solid var(--border); border-radius: var(--radius-md);"
      aria-label="Scrollable league table viewport"
    >
      ${m({...e,stickyHead:!0},[...u,...u.map(e=>({...e,pos:e.pos+u.length}))])}
    </div>
  `,parameters:{docs:{description:{story:"When `data-sticky-head` is set, the column header row pins to the top of the nearest scrolling ancestor. Wrap the table in a fixed-height scroll container (the consumer owns the scroll boundary; the component just handles the sticky behaviour). The dataset here is doubled so you can scroll to see it stick."}}}},y={args:{density:`default`,zebra:!1,stickyHead:!1},render:e=>m(e),parameters:{docs:{description:{story:"Zone accents live on `data-zone` on each row. Champions = straw, continental = info blue, conference = positive green, relegation = negative red. Color is paired with row position so the meaning is never carried by hue alone."}}}},b={args:{density:`default`,zebra:!1,stickyHead:!1},render:e=>n`
    <fv-table
      data-density=${e.density}
      data-columns="36px minmax(0,1fr) 56px 48px 48px 100px 48px"
      aria-label="League table — Cedar Park selected"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader" data-primary>Team</span>
          <span role="columnheader" data-numeric>GD</span>
          <span role="columnheader" data-numeric>GF</span>
          <span role="columnheader" data-numeric>GA</span>
          <span role="columnheader">Form</span>
          <span role="columnheader" data-numeric data-primary data-sort="desc" data-sort-key="pts" tabindex="0">Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        ${u.map(e=>n`
            <a
              role="row"
              href="#"
              data-zone=${e.zone??``}
              ?data-selected=${e.code===`CDR`}
              aria-selected=${e.code===`CDR`?`true`:`false`}
            >
              <span role="cell">
                <fv-trend data-direction=${e.trend} data-delta=${e.delta}></fv-trend>
                ${e.pos}
              </span>
              <span role="cell" data-primary>
                <fv-crest data-code=${e.code}></fv-crest>
                <fv-text>${e.name}</fv-text>
              </span>
              <span role="cell" data-numeric data-sign=${d(e.gd)}>${f(e.gd)}</span>
              <span role="cell" data-numeric>${e.gf}</span>
              <span role="cell" data-numeric>${e.ga}</span>
              <span role="cell">
                <fv-series aria-label=${p(e.form)}>
                  ${e.form.map(e=>n`<span data-pip=${e}></span>`)}
                </fv-series>
              </span>
              <span role="cell" data-numeric data-strong>${e.pts}</span>
            </a>
          `)}
      </div>
    </fv-table>
  `},x={args:{density:`default`,zebra:!1,stickyHead:!1},render:()=>n`
    <fv-table
      data-testid="t"
      data-columns="60px 1fr 80px"
      aria-label="Sortable test"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader" data-primary>Team</span>
          <span role="columnheader" data-numeric data-sort="none" data-sort-key="pts" tabindex="0">Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        <a role="row" href="#"><span role="cell">1</span><span role="cell">A</span><span role="cell" data-numeric>10</span></a>
      </div>
    </fv-table>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`),n=t.querySelectorAll(`[role="columnheader"]`)[2],r=s();t.addEventListener(`sort`,r),o(n.getAttribute(`data-sort`)).toBe(`none`),o(n.getAttribute(`aria-sort`)).toBe(`none`),await c.click(n),o(n.getAttribute(`data-sort`)).toBe(`asc`),o(n.getAttribute(`aria-sort`)).toBe(`ascending`),await c.click(n),o(n.getAttribute(`data-sort`)).toBe(`desc`),o(n.getAttribute(`aria-sort`)).toBe(`descending`),o(r).toHaveBeenCalledTimes(2);let i=r.mock.calls.at(-1)?.[0];o(i.detail.key).toBe(`pts`),o(i.detail.direction).toBe(`desc`),t.removeEventListener(`sort`,r)}},S={args:{density:`default`,zebra:!1,stickyHead:!1},render:()=>n`
    <fv-table
      data-testid="t"
      data-columns="40px 1fr 60px"
      aria-label="Columns broadcast test"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader">Team</span>
          <span role="columnheader" data-numeric>Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        <div role="row"><span role="cell">1</span><span role="cell">Alpha</span><span role="cell" data-numeric>42</span></div>
      </div>
    </fv-table>
  `,play:async({canvasElement:e})=>{let t=e.querySelector(`[data-testid="t"]`);o(t.style.getPropertyValue(`--fv-table-cols`)).toBe(`40px 1fr 60px`),t.setAttribute(`data-columns`,`50px 1fr 80px`),o(t.style.getPropertyValue(`--fv-table-cols`)).toBe(`50px 1fr 80px`)}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'default',
    zebra: false,
    stickyHead: false
  },
  render: args => renderTable(args)
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'compact',
    zebra: true,
    stickyHead: false
  },
  render: args => renderTable(args)
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'comfortable',
    zebra: false,
    stickyHead: false
  },
  render: args => renderTable(args)
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'default',
    zebra: false,
    stickyHead: true
  },
  render: args => html\`
    <div
      style="height: 320px; overflow: auto; border: 1px solid var(--border); border-radius: var(--radius-md);"
      aria-label="Scrollable league table viewport"
    >
      \${renderTable({
    ...args,
    stickyHead: true
  },
  // Duplicate the dataset so the body overflows the 320px viewport
  // and the user can scroll to confirm the header stays pinned.
  [...TEAMS, ...TEAMS.map(t => ({
    ...t,
    pos: t.pos + TEAMS.length
  }))])}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: 'When \`data-sticky-head\` is set, the column header row pins to the top of the nearest scrolling ancestor. Wrap the table in a fixed-height scroll container (the consumer owns the scroll boundary; the component just handles the sticky behaviour). The dataset here is doubled so you can scroll to see it stick.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'default',
    zebra: false,
    stickyHead: false
  },
  render: args => renderTable(args),
  parameters: {
    docs: {
      description: {
        story: 'Zone accents live on \`data-zone\` on each row. Champions = straw, continental = info blue, conference = positive green, relegation = negative red. Color is paired with row position so the meaning is never carried by hue alone.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'default',
    zebra: false,
    stickyHead: false
  },
  render: args => html\`
    <fv-table
      data-density=\${args.density}
      data-columns="36px minmax(0,1fr) 56px 48px 48px 100px 48px"
      aria-label="League table — Cedar Park selected"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader" data-primary>Team</span>
          <span role="columnheader" data-numeric>GD</span>
          <span role="columnheader" data-numeric>GF</span>
          <span role="columnheader" data-numeric>GA</span>
          <span role="columnheader">Form</span>
          <span role="columnheader" data-numeric data-primary data-sort="desc" data-sort-key="pts" tabindex="0">Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        \${TEAMS.map(t => html\`
            <a
              role="row"
              href="#"
              data-zone=\${t.zone ?? ''}
              ?data-selected=\${t.code === 'CDR'}
              aria-selected=\${t.code === 'CDR' ? 'true' : 'false'}
            >
              <span role="cell">
                <fv-trend data-direction=\${t.trend} data-delta=\${t.delta}></fv-trend>
                \${t.pos}
              </span>
              <span role="cell" data-primary>
                <fv-crest data-code=\${t.code}></fv-crest>
                <fv-text>\${t.name}</fv-text>
              </span>
              <span role="cell" data-numeric data-sign=\${sign(t.gd)}>\${fmtSigned(t.gd)}</span>
              <span role="cell" data-numeric>\${t.gf}</span>
              <span role="cell" data-numeric>\${t.ga}</span>
              <span role="cell">
                <fv-series aria-label=\${formLabel(t.form)}>
                  \${t.form.map(p => html\`<span data-pip=\${p}></span>\`)}
                </fv-series>
              </span>
              <span role="cell" data-numeric data-strong>\${t.pts}</span>
            </a>
          \`)}
      </div>
    </fv-table>
  \`
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'default',
    zebra: false,
    stickyHead: false
  },
  render: () => html\`
    <fv-table
      data-testid="t"
      data-columns="60px 1fr 80px"
      aria-label="Sortable test"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader" data-primary>Team</span>
          <span role="columnheader" data-numeric data-sort="none" data-sort-key="pts" tabindex="0">Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        <a role="row" href="#"><span role="cell">1</span><span role="cell">A</span><span role="cell" data-numeric>10</span></a>
      </div>
    </fv-table>
  \`,
  play: async ({
    canvasElement
  }) => {
    const tbl = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    const ptsHeader = tbl.querySelectorAll<HTMLElement>('[role="columnheader"]')[2]!;
    const handler = fn();
    tbl.addEventListener('sort', handler as EventListener);
    expect(ptsHeader.getAttribute('data-sort')).toBe('none');
    expect(ptsHeader.getAttribute('aria-sort')).toBe('none');
    await userEvent.click(ptsHeader);
    expect(ptsHeader.getAttribute('data-sort')).toBe('asc');
    expect(ptsHeader.getAttribute('aria-sort')).toBe('ascending');
    await userEvent.click(ptsHeader);
    expect(ptsHeader.getAttribute('data-sort')).toBe('desc');
    expect(ptsHeader.getAttribute('aria-sort')).toBe('descending');
    expect(handler).toHaveBeenCalledTimes(2);
    const ev = handler.mock.calls.at(-1)?.[0] as CustomEvent<{
      key: string;
      direction: string;
    }>;
    expect(ev.detail.key).toBe('pts');
    expect(ev.detail.direction).toBe('desc');
    tbl.removeEventListener('sort', handler as EventListener);
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    density: 'default',
    zebra: false,
    stickyHead: false
  },
  render: () => html\`
    <fv-table
      data-testid="t"
      data-columns="40px 1fr 60px"
      aria-label="Columns broadcast test"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader">Team</span>
          <span role="columnheader" data-numeric>Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        <div role="row"><span role="cell">1</span><span role="cell">Alpha</span><span role="cell" data-numeric>42</span></div>
      </div>
    </fv-table>
  \`,
  play: async ({
    canvasElement
  }) => {
    const tbl = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(tbl.style.getPropertyValue('--fv-table-cols')).toBe('40px 1fr 60px');
    tbl.setAttribute('data-columns', '50px 1fr 80px');
    expect(tbl.style.getPropertyValue('--fv-table-cols')).toBe('50px 1fr 80px');
  }
}`,...S.parameters?.docs?.source}}},C=[`Standings`,`Compact`,`Comfortable`,`StickyHead`,`Zones`,`Selected`,`SortHeaderEmitsEvent`,`ColumnsAttributeBroadcasts`]}));w();export{S as ColumnsAttributeBroadcasts,_ as Comfortable,g as Compact,b as Selected,x as SortHeaderEmitsEvent,h as Standings,v as StickyHead,y as Zones,C as __namedExportsOrder,l as default,w as n,a as t};