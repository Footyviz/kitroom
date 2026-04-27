import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Foundations/Tokens',
  parameters: { layout: 'fullscreen' },
};

export default meta;

type Story = StoryObj;

const readVar = (name: string): string =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

const section = (title: string): HTMLElement => {
  const h = document.createElement('h2');
  h.className = 'fv-caption';
  h.style.margin = '0 0 var(--space-4)';
  h.textContent = title;
  return h;
};

const page = (children: HTMLElement[]): HTMLElement => {
  const root = document.createElement('div');
  root.style.padding = 'var(--space-8)';
  root.style.background = 'var(--bg)';
  root.style.color = 'var(--fg)';
  root.style.minHeight = '100vh';
  for (const c of children) root.appendChild(c);
  return root;
};

const swatch = (token: string): HTMLElement => {
  const wrap = document.createElement('div');
  wrap.style.display = 'flex';
  wrap.style.flexDirection = 'column';
  wrap.style.gap = 'var(--space-2)';

  const chip = document.createElement('div');
  chip.style.height = '64px';
  chip.style.borderRadius = 'var(--radius-md)';
  chip.style.border = '1px solid var(--border)';
  chip.style.background = `var(${token})`;
  wrap.appendChild(chip);

  const name = document.createElement('div');
  name.className = 'fv-mono';
  name.style.color = 'var(--fg)';
  name.textContent = token;
  wrap.appendChild(name);

  const value = document.createElement('div');
  value.className = 'fv-mono';
  value.textContent = readVar(token) || '—';
  wrap.appendChild(value);

  return wrap;
};

const swatchGrid = (tokens: string[]): HTMLElement => {
  const grid = document.createElement('div');
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(140px, 1fr))';
  grid.style.gap = 'var(--space-4)';
  grid.style.marginBottom = 'var(--space-10)';
  for (const t of tokens) grid.appendChild(swatch(t));
  return grid;
};

export const Colors: Story = {
  render: () =>
    page([
      section('Neutral'),
      swatchGrid([
        '--neutral-0',
        '--neutral-50',
        '--neutral-100',
        '--neutral-150',
        '--neutral-200',
        '--neutral-300',
        '--neutral-400',
        '--neutral-500',
        '--neutral-600',
        '--neutral-700',
        '--neutral-800',
        '--neutral-900',
        '--neutral-1000',
      ]),
      section('Accent'),
      swatchGrid(['--accent', '--accent-soft', '--accent-dim', '--accent-ink']),
      section('Brand'),
      swatchGrid([
        '--brand-navy',
        '--brand-navy-deep',
        '--brand-cream',
        '--brand-ink',
      ]),
      section('State'),
      swatchGrid(['--positive', '--negative', '--warning', '--info']),
      section('Series'),
      swatchGrid([
        '--series-1',
        '--series-2',
        '--series-3',
        '--series-4',
        '--series-5',
        '--series-6',
      ]),
      section('Surface (resolves per theme)'),
      swatchGrid([
        '--bg',
        '--bg-alt',
        '--bg-elev',
        '--bg-inset',
        '--fg',
        '--fg-muted',
        '--fg-subtle',
        '--border',
        '--border-subtle',
        '--border-strong',
      ]),
    ]),
};

const typeRow = (klass: string, sample: string): HTMLElement => {
  const row = document.createElement('div');
  row.style.display = 'grid';
  row.style.gridTemplateColumns = '160px 1fr';
  row.style.gap = 'var(--space-6)';
  row.style.alignItems = 'baseline';
  row.style.padding = 'var(--space-4) 0';
  row.style.borderBottom = '1px solid var(--border-subtle)';

  const label = document.createElement('div');
  label.className = 'fv-mono';
  label.textContent = `.${klass}`;
  row.appendChild(label);

  const text = document.createElement('div');
  text.className = klass;
  text.textContent = sample;
  row.appendChild(text);

  return row;
};

export const Typography: Story = {
  render: () => {
    const wrap = document.createElement('div');
    const rows: Array<[string, string]> = [
      ['fv-display', 'Arsenal 2 – 1 Chelsea'],
      ['fv-h1', 'Arsenal 2 – 1 Chelsea'],
      ['fv-h2', 'Match summary'],
      ['fv-h3', 'Possession by third'],
      ['fv-body', "Saka advanced 11m before releasing the pass."],
      ['fv-body-sm', 'Updated 12 seconds ago.'],
      ['fv-caption', 'live · 73′ · 2H'],
      ['fv-label', 'Form'],
      ['fv-stat-xl', '2.7'],
      ['fv-stat-lg', '62.4%'],
      ['fv-stat-md', '14 / 17'],
      ['fv-stat-sm', '+0.08 xT'],
      ['fv-mono', '12 438 passes'],
      ['fv-editorial', '"The UI is the frame. The data is the painting."'],
    ];
    for (const [k, s] of rows) wrap.appendChild(typeRow(k, s));
    return page([section('Type ramp'), wrap]);
  },
};

export const Spacing: Story = {
  render: () => {
    const wrap = document.createElement('div');
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    wrap.style.gap = 'var(--space-3)';

    const tokens = [
      '--space-1',
      '--space-2',
      '--space-3',
      '--space-4',
      '--space-5',
      '--space-6',
      '--space-8',
      '--space-10',
      '--space-12',
      '--space-16',
      '--space-20',
      '--space-24',
    ];

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
      bar.style.width = `var(${t})`;
      bar.style.background = 'var(--accent)';
      bar.style.borderRadius = 'var(--radius-xs)';

      row.appendChild(name);
      row.appendChild(value);
      row.appendChild(bar);
      wrap.appendChild(row);
    }

    return page([section('Spacing scale (4px base)'), wrap]);
  },
};
