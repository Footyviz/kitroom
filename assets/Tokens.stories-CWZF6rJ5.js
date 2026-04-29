import{n as e}from"./chunk-DnJy8xQt.js";var t,n,r,i,a,o,s,c,l,u,d;e((()=>{t={title:`Foundations/Tokens`,parameters:{layout:`fullscreen`}},n=e=>getComputedStyle(document.documentElement).getPropertyValue(e).trim(),r=e=>{let t=document.createElement(`h2`);return t.className=`fv-caption`,t.style.margin=`0 0 var(--space-4)`,t.textContent=e,t},i=e=>{let t=document.createElement(`div`);t.style.padding=`var(--space-8)`,t.style.background=`var(--bg)`,t.style.color=`var(--fg)`,t.style.minHeight=`100vh`;for(let n of e)t.appendChild(n);return t},a=e=>{let t=document.createElement(`div`);t.style.display=`flex`,t.style.flexDirection=`column`,t.style.gap=`var(--space-2)`;let r=document.createElement(`div`);r.style.height=`64px`,r.style.borderRadius=`var(--radius-md)`,r.style.border=`1px solid var(--border)`,r.style.background=`var(${e})`,t.appendChild(r);let i=document.createElement(`div`);i.className=`fv-mono`,i.style.color=`var(--fg)`,i.textContent=e,t.appendChild(i);let a=document.createElement(`div`);return a.className=`fv-mono`,a.textContent=n(e)||`—`,t.appendChild(a),t},o=e=>{let t=document.createElement(`div`);t.style.display=`grid`,t.style.gridTemplateColumns=`repeat(auto-fill, minmax(140px, 1fr))`,t.style.gap=`var(--space-4)`,t.style.marginBottom=`var(--space-10)`;for(let n of e)t.appendChild(a(n));return t},s={render:()=>i([r(`Neutral`),o([`--neutral-0`,`--neutral-50`,`--neutral-100`,`--neutral-150`,`--neutral-200`,`--neutral-300`,`--neutral-400`,`--neutral-500`,`--neutral-600`,`--neutral-700`,`--neutral-800`,`--neutral-900`,`--neutral-1000`]),r(`Accent`),o([`--accent`,`--accent-soft`,`--accent-dim`,`--accent-ink`]),r(`Brand`),o([`--brand-navy`,`--brand-navy-deep`,`--brand-cream`,`--brand-ink`]),r(`State`),o([`--positive`,`--negative`,`--warning`,`--info`]),r(`Series`),o([`--series-1`,`--series-2`,`--series-3`,`--series-4`,`--series-5`,`--series-6`]),r(`Surface (resolves per theme)`),o([`--bg`,`--bg-alt`,`--bg-elev`,`--bg-inset`,`--fg`,`--fg-muted`,`--fg-subtle`,`--border`,`--border-subtle`,`--border-strong`])])},c=(e,t)=>{let n=document.createElement(`div`);n.style.display=`grid`,n.style.gridTemplateColumns=`160px 1fr`,n.style.gap=`var(--space-6)`,n.style.alignItems=`baseline`,n.style.padding=`var(--space-4) 0`,n.style.borderBottom=`1px solid var(--border-subtle)`;let r=document.createElement(`div`);r.className=`fv-mono`,r.textContent=`.${e}`,n.appendChild(r);let i=document.createElement(`div`);return i.className=e,i.textContent=t,n.appendChild(i),n},l={render:()=>{let e=document.createElement(`div`);for(let[t,n]of[[`fv-display`,`Arsenal 2 – 1 Chelsea`],[`fv-h1`,`Arsenal 2 – 1 Chelsea`],[`fv-h2`,`Match summary`],[`fv-h3`,`Possession by third`],[`fv-body`,`Saka advanced 11m before releasing the pass.`],[`fv-body-sm`,`Updated 12 seconds ago.`],[`fv-caption`,`live · 73′ · 2H`],[`fv-label`,`Form`],[`fv-stat-xl`,`2.7`],[`fv-stat-lg`,`62.4%`],[`fv-stat-md`,`14 / 17`],[`fv-stat-sm`,`+0.08 xT`],[`fv-mono`,`12 438 passes`],[`fv-editorial`,`"The UI is the frame. The data is the painting."`]])e.appendChild(c(t,n));return i([r(`Type ramp`),e])}},u={render:()=>{let e=document.createElement(`div`);e.style.display=`flex`,e.style.flexDirection=`column`,e.style.gap=`var(--space-3)`;for(let t of[`--space-1`,`--space-2`,`--space-3`,`--space-4`,`--space-5`,`--space-6`,`--space-8`,`--space-10`,`--space-12`,`--space-16`,`--space-20`,`--space-24`]){let r=document.createElement(`div`);r.style.display=`grid`,r.style.gridTemplateColumns=`120px 80px 1fr`,r.style.alignItems=`center`,r.style.gap=`var(--space-4)`;let i=document.createElement(`div`);i.className=`fv-mono`,i.textContent=t;let a=document.createElement(`div`);a.className=`fv-mono`,a.textContent=n(t)||`—`;let o=document.createElement(`div`);o.style.height=`12px`,o.style.width=`var(${t})`,o.style.background=`var(--accent)`,o.style.borderRadius=`var(--radius-xs)`,r.appendChild(i),r.appendChild(a),r.appendChild(o),e.appendChild(r)}return i([r(`Spacing scale (4px base)`),e])}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => page([section('Neutral'), swatchGrid(['--neutral-0', '--neutral-50', '--neutral-100', '--neutral-150', '--neutral-200', '--neutral-300', '--neutral-400', '--neutral-500', '--neutral-600', '--neutral-700', '--neutral-800', '--neutral-900', '--neutral-1000']), section('Accent'), swatchGrid(['--accent', '--accent-soft', '--accent-dim', '--accent-ink']), section('Brand'), swatchGrid(['--brand-navy', '--brand-navy-deep', '--brand-cream', '--brand-ink']), section('State'), swatchGrid(['--positive', '--negative', '--warning', '--info']), section('Series'), swatchGrid(['--series-1', '--series-2', '--series-3', '--series-4', '--series-5', '--series-6']), section('Surface (resolves per theme)'), swatchGrid(['--bg', '--bg-alt', '--bg-elev', '--bg-inset', '--fg', '--fg-muted', '--fg-subtle', '--border', '--border-subtle', '--border-strong'])])
}`,...s.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = document.createElement('div');
    const rows: Array<[string, string]> = [['fv-display', 'Arsenal 2 – 1 Chelsea'], ['fv-h1', 'Arsenal 2 – 1 Chelsea'], ['fv-h2', 'Match summary'], ['fv-h3', 'Possession by third'], ['fv-body', "Saka advanced 11m before releasing the pass."], ['fv-body-sm', 'Updated 12 seconds ago.'], ['fv-caption', 'live · 73′ · 2H'], ['fv-label', 'Form'], ['fv-stat-xl', '2.7'], ['fv-stat-lg', '62.4%'], ['fv-stat-md', '14 / 17'], ['fv-stat-sm', '+0.08 xT'], ['fv-mono', '12 438 passes'], ['fv-editorial', '"The UI is the frame. The data is the painting."']];
    for (const [k, s] of rows) wrap.appendChild(typeRow(k, s));
    return page([section('Type ramp'), wrap]);
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = 'var(--space-3)';
    const tokens = ['--space-1', '--space-2', '--space-3', '--space-4', '--space-5', '--space-6', '--space-8', '--space-10', '--space-12', '--space-16', '--space-20', '--space-24'];
    for (const t of tokens) {
      const row = document.createElement('div');
      row.style.display = 'grid';
      row.style.gridTemplateColumns = '120px 80px 1fr';
      row.style.alignItems = 'center';
      row.style.gap = 'var(--space-4)';
      const name = document.createElement('div');
      name.className = 'fv-mono';
      name.textContent = t;
      const value = document.createElement('div');
      value.className = 'fv-mono';
      value.textContent = readVar(t) || '—';
      const bar = document.createElement('div');
      bar.style.height = '12px';
      bar.style.width = \`var(\${t})\`;
      bar.style.background = 'var(--accent)';
      bar.style.borderRadius = 'var(--radius-xs)';
      row.appendChild(name);
      row.appendChild(value);
      row.appendChild(bar);
      wrap.appendChild(row);
    }
    return page([section('Spacing scale (4px base)'), wrap]);
  }
}`,...u.parameters?.docs?.source}}},d=[`Colors`,`Typography`,`Spacing`]}))();export{s as Colors,u as Spacing,l as Typography,d as __namedExportsOrder,t as default};