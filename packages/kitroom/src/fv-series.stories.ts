import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-series.js';

type Pip = 'pos' | 'warn' | 'neg';

type SeriesArgs = {
  pips: string;
  label: string;
  maxVisible: string;
};

const meta: Meta<SeriesArgs> = {
  title: 'Components/Series',
  component: 'fv-series',
  argTypes: {
    pips: {
      control: 'text',
      description: 'Space-separated pip values (e.g. "pos pos warn pos pos")',
    },
    label: { control: 'text', description: 'aria-label describing the sequence' },
    maxVisible: {
      control: 'text',
      description: 'data-max-visible — leave empty for unbounded; 1-10 hide all but the last N',
    },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<SeriesArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const labelStyle = 'font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);';

const parsePips = (raw: string): Pip[] =>
  raw
    .trim()
    .split(/\s+/)
    .filter((p): p is Pip => p === 'pos' || p === 'warn' || p === 'neg');

export const Playground: Story = {
  args: { pips: 'pos pos warn pos pos', label: 'Last 5: W W D W W', maxVisible: '' },
  render: (args): TemplateResult => html`
    <fv-series
      aria-label="${args.label}"
      data-max-visible="${args.maxVisible ? args.maxVisible : nothing}"
    >
      ${parsePips(args.pips).map((p) => html`<span data-pip="${p}"></span>`)}
    </fv-series>
  `,
  parameters: {
    docs: {
      source: {
        language: 'html' as const,
        transform: (_: string, ctx: { args: SeriesArgs }) => {
          const attrs = [`aria-label="${ctx.args.label}"`];
          if (ctx.args.maxVisible) attrs.push(`data-max-visible="${ctx.args.maxVisible}"`);
          const pips = parsePips(ctx.args.pips)
            .map((p) => `  <span data-pip="${p}"></span>`)
            .join('\n');
          return `<fv-series ${attrs.join(' ')}>\n${pips}\n</fv-series>`;
        },
      },
    },
    controls: { disable: false },
  },
};

export const FormVariants: Story = {
  render: (): TemplateResult => html`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="${labelStyle}">all wins</span>
      <fv-series aria-label="Last 5: W W W W W">
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="${labelStyle}">mixed</span>
      <fv-series aria-label="Last 5: W W D W W">
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
        <span data-pip="warn"></span>
        <span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="${labelStyle}">poor</span>
      <fv-series aria-label="Last 5: L D L D L">
        <span data-pip="neg"></span>
        <span data-pip="warn"></span>
        <span data-pip="neg"></span>
        <span data-pip="warn"></span>
        <span data-pip="neg"></span>
      </fv-series>
    </div>
  `,
  parameters: src(`<fv-series aria-label="Last 5: W W D W W">
  <span data-pip="pos"></span>
  <span data-pip="pos"></span>
  <span data-pip="warn"></span>
  <span data-pip="pos"></span>
  <span data-pip="pos"></span>
</fv-series>`),
};

export const MaxVisible: Story = {
  render: (): TemplateResult => html`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="${labelStyle}">10 pips, all visible</span>
      <fv-series aria-label="Last 10 results">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="${labelStyle}">data-max-visible="5" → last 5</span>
      <fv-series aria-label="Last 5 of 10" data-max-visible="5">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>

      <span style="${labelStyle}">data-max-visible="3" → last 3</span>
      <fv-series aria-label="Last 3 of 10" data-max-visible="3">
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="neg"></span>
        <span data-pip="pos"></span><span data-pip="pos"></span><span data-pip="warn"></span>
        <span data-pip="pos"></span><span data-pip="warn"></span><span data-pip="pos"></span>
        <span data-pip="pos"></span>
      </fv-series>
    </div>
  `,
  parameters: src(`<fv-series aria-label="Last 5 of 10" data-max-visible="5">
  <span data-pip="pos"></span>
  <span data-pip="warn"></span>
  ...
</fv-series>`),
};

/* ------------------------- behaviour tests ------------------------- */

export const ExposesAriaLabel: Story = {
  render: (): TemplateResult => html`
    <fv-series data-testid="s" aria-label="Last 5: W W D W W">
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
      <span data-pip="warn"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
    </fv-series>
  `,
  parameters: src(`<fv-series aria-label="Last 5: W W D W W">…</fv-series>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBe('Last 5: W W D W W');
    expect(el.children.length).toBe(5);
  },
};

export const MaxVisibleHidesEarlyChildren: Story = {
  render: (): TemplateResult => html`
    <fv-series data-testid="s" aria-label="Last 3 of 6" data-max-visible="3">
      <span data-pip="neg"></span>
      <span data-pip="neg"></span>
      <span data-pip="neg"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
      <span data-pip="pos"></span>
    </fv-series>
  `,
  parameters: src(`<fv-series aria-label="Last 3 of 6" data-max-visible="3">…</fv-series>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    const kids = Array.from(el.children) as HTMLElement[];
    const visible = kids.filter((k) => getComputedStyle(k).display !== 'none');
    expect(visible.length).toBe(3);
    expect(visible.map((k) => k.getAttribute('data-pip'))).toEqual(['pos', 'pos', 'pos']);
  },
};
