import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-trend.js';

type Direction = 'up' | 'down' | 'flat';

type TrendArgs = {
  direction: Direction;
  delta: string;
  label: string;
};

const meta: Meta<TrendArgs> = {
  title: 'Kitroom/Trend',
  component: 'fv-trend',
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['up', 'down', 'flat'],
      description: 'data-direction',
    },
    delta: { control: 'text', description: 'data-delta — non-negative magnitude (ignored when flat)' },
    label: { control: 'text', description: 'aria-label — overrides the auto-generated one when set' },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<TrendArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const labelStyle = 'font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);';

export const Playground: Story = {
  args: { direction: 'up', delta: '2', label: '' },
  render: (args): TemplateResult => html`
    <fv-trend
      data-direction="${args.direction}"
      data-delta="${args.delta ? args.delta : nothing}"
      aria-label="${args.label ? args.label : nothing}"
    ></fv-trend>
  `,
  parameters: {
    docs: {
      source: {
        language: 'html' as const,
        transform: (_: string, ctx: { args: TrendArgs }) => {
          const attrs = [`data-direction="${ctx.args.direction}"`];
          if (ctx.args.delta) attrs.push(`data-delta="${ctx.args.delta}"`);
          if (ctx.args.label) attrs.push(`aria-label="${ctx.args.label}"`);
          return `<fv-trend ${attrs.join(' ')}></fv-trend>`;
        },
      },
    },
    controls: { disable: false },
  },
};

export const Directions: Story = {
  render: (): TemplateResult => html`
    <div style="display: grid; grid-template-columns: max-content 1fr; gap: 12px 18px; align-items: center;">
      <span style="${labelStyle}">up · 2</span>
      <fv-trend data-direction="up" data-delta="2"></fv-trend>

      <span style="${labelStyle}">down · 1</span>
      <fv-trend data-direction="down" data-delta="1"></fv-trend>

      <span style="${labelStyle}">flat</span>
      <fv-trend data-direction="flat"></fv-trend>

      <span style="${labelStyle}">up · 0 (no delta)</span>
      <fv-trend data-direction="up"></fv-trend>
    </div>
  `,
  parameters: src(`<fv-trend data-direction="up" data-delta="2"></fv-trend>
<fv-trend data-direction="down" data-delta="1"></fv-trend>
<fv-trend data-direction="flat"></fv-trend>`),
};

export const InRow: Story = {
  render: (): TemplateResult => html`
    <div style="display: inline-flex; align-items: center; gap: 14px;
                font-family: var(--font-mono); font-size: 12px; color: var(--fg);">
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="up" data-delta="2"></fv-trend> 1
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="flat"></fv-trend> 2
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="up" data-delta="1"></fv-trend> 3
      </span>
      <span style="display: inline-flex; gap: 4px; align-items: center;">
        <fv-trend data-direction="down" data-delta="2"></fv-trend> 4
      </span>
    </div>
  `,
  parameters: src(`<fv-trend data-direction="up" data-delta="2"></fv-trend> 1
<fv-trend data-direction="flat"></fv-trend> 2
<fv-trend data-direction="up" data-delta="1"></fv-trend> 3`),
};

/* ------------------------- behaviour tests ------------------------- */

export const RendersUpWithDelta: Story = {
  render: (): TemplateResult => html`
    <fv-trend data-testid="t" data-direction="up" data-delta="2"></fv-trend>
  `,
  parameters: src(`<fv-trend data-direction="up" data-delta="2"></fv-trend>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.textContent).toBe('▲+2');
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBe('up 2 positions');
  },
};

export const RendersDownWithSingularLabel: Story = {
  render: (): TemplateResult => html`
    <fv-trend data-testid="t" data-direction="down" data-delta="1"></fv-trend>
  `,
  parameters: src(`<fv-trend data-direction="down" data-delta="1"></fv-trend>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.textContent).toBe('▼-1');
    expect(el.getAttribute('aria-label')).toBe('down 1 position');
  },
};

export const RendersFlat: Story = {
  render: (): TemplateResult => html`
    <fv-trend data-testid="t" data-direction="flat"></fv-trend>
  `,
  parameters: src(`<fv-trend data-direction="flat"></fv-trend>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.textContent).toBe('·');
    expect(el.getAttribute('aria-label')).toBe('no change');
  },
};

export const UpdatesOnAttributeChange: Story = {
  render: (): TemplateResult => html`
    <fv-trend data-testid="t" data-direction="up" data-delta="2"></fv-trend>
  `,
  parameters: src(`<fv-trend data-direction="up" data-delta="2"></fv-trend>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.textContent).toBe('▲+2');

    el.setAttribute('data-direction', 'down');
    el.setAttribute('data-delta', '5');
    expect(el.textContent).toBe('▼-5');
    expect(el.getAttribute('aria-label')).toBe('down 5 positions');

    el.setAttribute('data-direction', 'flat');
    expect(el.textContent).toBe('·');
    expect(el.getAttribute('aria-label')).toBe('no change');
  },
};

export const ConsumerAriaLabelWins: Story = {
  render: (): TemplateResult => html`
    <fv-trend data-testid="t" data-direction="up" data-delta="2" aria-label="Climbing fast"></fv-trend>
  `,
  parameters: src(`<fv-trend data-direction="up" data-delta="2" aria-label="Climbing fast"></fv-trend>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.getAttribute('aria-label')).toBe('Climbing fast');
  },
};
