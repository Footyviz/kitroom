import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-ratio-bar.js';

type RatioBarArgs = {
  pct: number;
  direction: 'ltr' | 'rtl';
  tone: 'default' | 'accent';
};

const meta: Meta<RatioBarArgs> = {
  title: 'Kitroom/RatioBar',
  component: 'fv-ratio-bar',
  argTypes: {
    pct: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    direction: { control: { type: 'inline-radio' }, options: ['ltr', 'rtl'] },
    tone: { control: { type: 'inline-radio' }, options: ['default', 'accent'] },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<RatioBarArgs>;

const wrapStyle = 'width: 200px;';

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const renderBar = (args: RatioBarArgs): TemplateResult => {
  const dirAttr = args.direction === 'rtl' ? 'data-direction="rtl"' : '';
  const toneAttr = args.tone === 'accent' ? 'data-tone="accent"' : '';
  // Build the bar with raw HTML so the data-* attributes appear cleanly
  // in the rendered DOM and the docs source.
  const fragment = document.createElement('div');
  fragment.style.cssText = wrapStyle;
  fragment.innerHTML = `<fv-ratio-bar style="--pct: ${args.pct}%" ${dirAttr} ${toneAttr}></fv-ratio-bar>`;
  return html`${fragment}`;
};

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: RatioBarArgs }) => {
        const dirAttr = ctx.args.direction === 'rtl' ? ' data-direction="rtl"' : '';
        const toneAttr = ctx.args.tone === 'accent' ? ' data-tone="accent"' : '';
        return `<fv-ratio-bar style="--pct: ${ctx.args.pct}%"${dirAttr}${toneAttr}></fv-ratio-bar>`;
      },
    },
  },
});

/* ------------------------- stories ------------------------- */

export const Default: Story = {
  args: { pct: 50, direction: 'ltr', tone: 'default' },
  render: (args) => html`
    <div style="${wrapStyle}">
      <fv-ratio-bar style="--pct: ${args.pct}%"></fv-ratio-bar>
    </div>
  `,
  parameters: {
    controls: { disable: false },
    ...dynamicSrc(),
  },
};

export const LeftLeaning: Story = {
  args: { pct: 75, direction: 'ltr', tone: 'default' },
  render: (args) => html`
    <div style="${wrapStyle}">
      <fv-ratio-bar style="--pct: ${args.pct}%"></fv-ratio-bar>
    </div>
  `,
  parameters: dynamicSrc(),
};

export const RightLeaning: Story = {
  args: { pct: 25, direction: 'ltr', tone: 'default' },
  render: (args) => html`
    <div style="${wrapStyle}">
      <fv-ratio-bar style="--pct: ${args.pct}%"></fv-ratio-bar>
    </div>
  `,
  parameters: dynamicSrc(),
};

export const Mirrored: Story = {
  args: { pct: 33, direction: 'rtl', tone: 'default' },
  render: (args) => html`
    <div style="${wrapStyle}">
      <fv-ratio-bar style="--pct: ${args.pct}%" data-direction="rtl"></fv-ratio-bar>
    </div>
  `,
  parameters: dynamicSrc(),
};

export const Accent: Story = {
  args: { pct: 67, direction: 'ltr', tone: 'accent' },
  render: (args) => html`
    <div style="${wrapStyle}">
      <fv-ratio-bar style="--pct: ${args.pct}%" data-tone="accent"></fv-ratio-bar>
    </div>
  `,
  parameters: dynamicSrc(),
};

export const MirroredAccent: Story = {
  args: { pct: 67, direction: 'rtl', tone: 'accent' },
  render: (args) => html`
    <div style="${wrapStyle}">
      <fv-ratio-bar
        style="--pct: ${args.pct}%"
        data-direction="rtl"
        data-tone="accent"
      ></fv-ratio-bar>
    </div>
  `,
  parameters: dynamicSrc(),
};

export const Pair: Story = {
  render: (): TemplateResult => html`
    <div
      style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; width: 320px;"
    >
      <fv-ratio-bar style="--pct: 67%"></fv-ratio-bar>
      <fv-ratio-bar style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
    </div>
  `,
  parameters: src(`<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 16px; width: 320px;">
  <fv-ratio-bar style="--pct: 67%"></fv-ratio-bar>
  <fv-ratio-bar style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
</div>`),
};

/* ------------------------- behaviour tests ------------------------- */

export const StampsAriaHidden: Story = {
  render: (): TemplateResult => html`
    <fv-ratio-bar data-testid="bar" style="--pct: 60%"></fv-ratio-bar>
  `,
  parameters: src(`<fv-ratio-bar style="--pct: 60%"></fv-ratio-bar>`),
  play: async ({ canvasElement }) => {
    const bar = canvasElement.querySelector<HTMLElement>('[data-testid="bar"]')!;
    expect(bar.getAttribute('aria-hidden')).toBe('true');
    expect(bar.getAttribute('role')).toBe('presentation');
  },
};
