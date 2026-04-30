import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import './fv-gap.js';
import './fv-button.js';
import './fv-icon.js';

type GapSize = 'none' | '1' | '2' | '3' | '4' | '6' | '8' | '12' | '16' | '24';

type GapArgs = {
  size: GapSize;
};

const SIZES: GapSize[] = ['1', '2', '3', '4', '6', '8', '12', '16', '24'];

const PIXELS: Record<Exclude<GapSize, 'none'>, string> = {
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '6': '24px',
  '8': '32px',
  '12': '48px',
  '16': '64px',
  '24': '96px',
};

const meta: Meta<GapArgs> = {
  title: 'Components/Gap',
  component: 'fv-gap',
  argTypes: {
    size: {
      control: 'select',
      options: ['none', ...SIZES],
      description: 'data-size — one of the 9 spec spacing steps; "none" omits the attribute',
    },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<GapArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const marker = (label: string): TemplateResult => html`
  <span style="
    display: inline-block;
    padding: 6px 10px;
    background: var(--neutral-1000);
    color: var(--neutral-0);
    font: var(--fw-medium) 12px/1 var(--font-mono);
    border-radius: var(--radius-sm);
    vertical-align: middle;
  ">${label}</span>
`;

export const Playground: Story = {
  args: { size: '4' },
  render: ({ size }): TemplateResult => html`
    <div style="display: inline-flex; align-items: center;">
      ${marker('A')}
      <fv-gap data-size="${size !== 'none' ? size : nothing}"></fv-gap>
      ${marker('B')}
    </div>
  `,
  parameters: {
    docs: {
      source: {
        language: 'html' as const,
        transform: (_: string, ctx: { args: GapArgs }) =>
          ctx.args.size === 'none'
            ? `<span>A</span><fv-gap></fv-gap><span>B</span>`
            : `<span>A</span><fv-gap data-size="${ctx.args.size}"></fv-gap><span>B</span>`,
      },
    },
    controls: { disable: false },
  },
};

export const Scale: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 10px; font: var(--fw-medium) 11px/1 var(--font-mono); color: var(--fg-muted);">
      ${SIZES.map(
        (s) => html`
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="width: 32px; text-align: right;">${s}</span>
            <span style="width: 44px;">${PIXELS[s]}</span>
            <span style="display: inline-flex; align-items: center;">
              <span style="display: inline-block; width: 4px; height: 18px; background: var(--neutral-1000);"></span>
              <fv-gap data-size="${s}"></fv-gap>
              <span style="display: inline-block; width: 4px; height: 18px; background: var(--neutral-1000);"></span>
            </span>
          </div>
        `,
      )}
    </div>
  `,
  parameters: src(SIZES.map((s) => `<fv-gap data-size="${s}"></fv-gap>`).join('\n')),
};

export const InToolbar: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; align-items: center;">
      <fv-button data-variant="secondary"><fv-icon name="filter"></fv-icon><span>Filter</span></fv-button>
      <fv-gap data-size="2"></fv-gap>
      <fv-button data-variant="secondary"><fv-icon name="compare"></fv-icon><span>Compare</span></fv-button>

      <fv-gap data-size="6"></fv-gap>

      <fv-button data-variant="primary">Open match</fv-button>
      <fv-gap data-size="2"></fv-gap>
      <fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>
    </div>
  `,
  parameters: src(`<div style="display: flex; align-items: center;">
  <fv-button data-variant="secondary"><fv-icon name="filter"></fv-icon><span>Filter</span></fv-button>
  <fv-gap data-size="2"></fv-gap>
  <fv-button data-variant="secondary"><fv-icon name="compare"></fv-icon><span>Compare</span></fv-button>

  <fv-gap data-size="6"></fv-gap>

  <fv-button data-variant="primary">Open match</fv-button>
  <fv-gap data-size="2"></fv-gap>
  <fv-button data-variant="cream"><fv-icon name="live"></fv-icon><span>Watch live</span></fv-button>
</div>`),
};
