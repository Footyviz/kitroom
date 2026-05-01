import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-stat-row.js';
import './fv-ratio-bar.js';
import './fv-text.js';
import './fv-series.js';

type StatRowArgs = {
  label: string;
  homeValue: string;
  awayValue: string;
  homePct: number;
  featured: boolean;
  compact: boolean;
};

const meta: Meta<StatRowArgs> = {
  title: 'Kitroom/StatRow',
  component: 'fv-stat-row',
  argTypes: {
    label: { control: 'text' },
    homeValue: { control: 'text' },
    awayValue: { control: 'text' },
    homePct: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    featured: { control: 'boolean' },
    compact: { control: 'boolean' },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<StatRowArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

/* ------------------------- helpers ------------------------- */

const listStyle = `
  display: flex;
  flex-direction: column;
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  width: 460px;
  background: var(--bg-elev);
`;

const dividerStyle = 'border-bottom: 1px solid var(--border-subtle);';

const renderRow = (args: StatRowArgs): TemplateResult => {
  const homePct = args.homePct;
  const awayPct = 100 - homePct;
  const homeBarTone = args.featured ? 'accent' : null;
  return html`
    <div style="${listStyle}">
      <fv-stat-row
        ?data-featured=${args.featured}
        data-density=${args.compact ? 'compact' : 'default'}
      >
        <fv-text data-role="home-value" data-variant="stat-sm">${args.homeValue}</fv-text>
        <fv-ratio-bar
          data-role="home-bar"
          style="--pct: ${homePct}%"
          data-tone=${homeBarTone ?? ''}
        ></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">${args.label}</fv-text>
        <fv-ratio-bar
          data-role="away-bar"
          style="--pct: ${awayPct}%"
          data-direction="rtl"
        ></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">${args.awayValue}</fv-text>
      </fv-stat-row>
    </div>
  `;
};

/* ------------------------- stories ------------------------- */

export const Default: Story = {
  args: {
    label: 'Possession',
    homeValue: '58%',
    awayValue: '42%',
    homePct: 58,
    featured: false,
    compact: false,
  },
  render: renderRow,
  parameters: {
    controls: { disable: false },
    ...src(`<fv-stat-row>
  <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">Possession</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
</fv-stat-row>`),
  },
};

export const Featured: Story = {
  args: {
    label: 'xG',
    homeValue: '1.84',
    awayValue: '0.92',
    homePct: 67,
    featured: true,
    compact: false,
  },
  render: renderRow,
  parameters: {
    controls: { disable: false },
    ...src(`<fv-stat-row data-featured>
  <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">xG</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
</fv-stat-row>`),
  },
};

export const Compact: Story = {
  args: {
    label: 'Shots',
    homeValue: '12',
    awayValue: '7',
    homePct: 63,
    featured: false,
    compact: true,
  },
  render: renderRow,
  parameters: {
    controls: { disable: false },
    ...src(`<fv-stat-row data-density="compact">
  <fv-text data-role="home-value" data-variant="stat-sm">12</fv-text>
  <fv-ratio-bar data-role="home-bar" style="--pct: 63%"></fv-ratio-bar>
  <fv-text data-role="label" data-variant="caption">Shots</fv-text>
  <fv-ratio-bar data-role="away-bar" style="--pct: 37%" data-direction="rtl"></fv-ratio-bar>
  <fv-text data-role="away-value" data-variant="stat-sm">7</fv-text>
</fv-stat-row>`),
  },
};

export const FormLayout: Story = {
  render: (): TemplateResult => html`
    <div style="${listStyle}">
      <fv-stat-row data-layout="form">
        <fv-series data-role="home-form" aria-label="Last 5: W W D W W">
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="warn"></span>
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
        </fv-series>
        <fv-text data-role="label" data-variant="caption">Form</fv-text>
        <fv-series data-role="away-form" aria-label="Last 5: L W W D L">
          <span data-pip="neg"></span>
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="warn"></span>
          <span data-pip="neg"></span>
        </fv-series>
      </fv-stat-row>
    </div>
  `,
  parameters: src(`<fv-stat-row data-layout="form">
  <fv-series data-role="home-form" aria-label="Last 5: W W D W W">
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
    <span data-pip="warn"></span>
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
  </fv-series>
  <fv-text data-role="label" data-variant="caption">Form</fv-text>
  <fv-series data-role="away-form" aria-label="Last 5: L W W D L">
    <span data-pip="neg"></span>
    <span data-pip="pos"></span>
    <span data-pip="pos"></span>
    <span data-pip="warn"></span>
    <span data-pip="neg"></span>
  </fv-series>
</fv-stat-row>`),
};

export const MultiRow: Story = {
  render: (): TemplateResult => html`
    <div style="${listStyle}">
      <fv-stat-row style="${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Possession</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
      </fv-stat-row>
      <fv-stat-row style="${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">12</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 63%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Shots</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 37%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">7</fv-text>
      </fv-stat-row>
      <fv-stat-row data-featured style="${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
        <fv-ratio-bar
          data-role="home-bar"
          style="--pct: 67%"
          data-tone="accent"
        ></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">xG</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
      </fv-stat-row>
      <fv-stat-row style="${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">486</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 61%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Passes</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 39%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">312</fv-text>
      </fv-stat-row>
      <fv-stat-row style="${dividerStyle}">
        <fv-text data-role="home-value" data-variant="stat-sm">3</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 43%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Corners</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 57%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">4</fv-text>
      </fv-stat-row>
      <fv-stat-row>
        <fv-text data-role="home-value" data-variant="stat-sm">8</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 47%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="caption">Fouls</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 53%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">9</fv-text>
      </fv-stat-row>
    </div>
  `,
  parameters: src(`<div class="statlist">
  <fv-stat-row>
    <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
    <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
    <fv-text data-role="label" data-variant="caption">Possession</fv-text>
    <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
    <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
  </fv-stat-row>
  <fv-stat-row data-featured>
    <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
    <fv-ratio-bar data-role="home-bar" style="--pct: 67%" data-tone="accent"></fv-ratio-bar>
    <fv-text data-role="label" data-variant="caption">xG</fv-text>
    <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
    <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
  </fv-stat-row>
  <!-- ... additional rows ... -->
</div>`),
};

/* ------------------------- behaviour tests ------------------------- */

export const StampsRowAndCellRoles: Story = {
  render: (): TemplateResult => html`
    <fv-stat-row data-testid="row">
      <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
      <fv-ratio-bar data-role="home-bar" style="--pct: 67%"></fv-ratio-bar>
      <fv-text data-role="label" data-variant="caption">xG</fv-text>
      <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
      <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
    </fv-stat-row>
  `,
  parameters: src(`<fv-stat-row>…</fv-stat-row>`),
  play: async ({ canvasElement }) => {
    const row = canvasElement.querySelector<HTMLElement>('[data-testid="row"]')!;
    expect(row.getAttribute('role')).toBe('row');
    expect(row.querySelector('[data-role="home-value"]')?.getAttribute('role')).toBe('cell');
    expect(row.querySelector('[data-role="label"]')?.getAttribute('role')).toBe('cell');
    expect(row.querySelector('[data-role="away-value"]')?.getAttribute('role')).toBe('cell');
    expect(row.querySelector('[data-role="home-bar"]')?.getAttribute('role')).toBe('presentation');
    expect(row.querySelector('[data-role="away-bar"]')?.getAttribute('role')).toBe('presentation');
  },
};

export const BuildsAriaLabel: Story = {
  render: (): TemplateResult => html`
    <fv-stat-row data-testid="aria">
      <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
      <fv-ratio-bar data-role="home-bar" style="--pct: 67%"></fv-ratio-bar>
      <fv-text data-role="label" data-variant="caption">xG</fv-text>
      <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
      <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
    </fv-stat-row>
  `,
  parameters: src(`<fv-stat-row aria-label="xG: 1.84 vs 0.92">…</fv-stat-row>`),
  play: async ({ canvasElement }) => {
    const row = canvasElement.querySelector<HTMLElement>('[data-testid="aria"]')!;
    expect(row.getAttribute('aria-label')).toBe('xG: 1.84 vs 0.92');
  },
};
