import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-icon.js';
import { iconNames, type IconName } from './icons.js';

type IconSize = 'default' | 'sm' | 'md' | 'lg';
type IconTone = 'default' | 'accent' | 'muted';

type IconArgs = {
  name: IconName;
  size: IconSize;
  tone: IconTone;
};

const meta: Meta<IconArgs> = {
  title: 'Kitroom/Icon',
  component: 'fv-icon',
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Icon name — references <symbol id="icon-NAME"> in the page sprite',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['default', 'sm', 'md', 'lg'],
      description: 'data-size — sm: 16px · md: 20px · lg: 28px (default = md)',
    },
    tone: {
      control: { type: 'inline-radio' },
      options: ['default', 'accent', 'muted'],
      description: 'data-tone — currentColor / --accent / --fg-muted',
    },
  },
};
export default meta;

type Story = StoryObj<IconArgs>;

const row = 'display: flex; gap: 18px; flex-wrap: wrap; align-items: center;';
const grid = 'display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 22px 14px;';
const cell = 'display: flex; flex-direction: column; gap: 8px; align-items: center;';
const labelStyle = 'font-family: var(--font-mono); font-size: 10px; color: var(--fg-subtle);';

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const iconHtml = (args: IconArgs): string => {
  const attrs: string[] = [`name="${args.name}"`];
  if (args.size !== 'default') attrs.push(`data-size="${args.size}"`);
  if (args.tone !== 'default') attrs.push(`data-tone="${args.tone}"`);
  return `<fv-icon ${attrs.join(' ')}></fv-icon>`;
};

const renderIcon = (args: IconArgs): TemplateResult => html`
  <fv-icon
    name="${args.name}"
    data-size="${args.size !== 'default' ? args.size : nothing}"
    data-tone="${args.tone !== 'default' ? args.tone : nothing}"
  ></fv-icon>
`;

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: IconArgs }) => iconHtml(ctx.args),
    },
  },
});

export const Default: Story = {
  args: { name: 'pitch', size: 'default', tone: 'default' },
  render: renderIcon,
  parameters: dynamicSrc(),
};

export const Sizes: Story = {
  args: { name: 'ball', size: 'default', tone: 'default' },
  render: () => html`
    <div style="${row}">
      <span style="${labelStyle}">sm 16px</span>
      <fv-icon name="ball" data-size="sm"></fv-icon>
      <span style="${labelStyle}">md 20px</span>
      <fv-icon name="ball" data-size="md"></fv-icon>
      <span style="${labelStyle}">lg 28px</span>
      <fv-icon name="ball" data-size="lg"></fv-icon>
    </div>
  `,
  parameters: src(`<fv-icon name="ball" data-size="sm"></fv-icon>
<fv-icon name="ball" data-size="md"></fv-icon>
<fv-icon name="ball" data-size="lg"></fv-icon>`),
};

export const Tones: Story = {
  args: { name: 'live', size: 'default', tone: 'default' },
  render: () => html`
    <div style="${row}">
      <span style="${labelStyle}">default</span>
      <fv-icon name="live" data-size="lg"></fv-icon>
      <span style="${labelStyle}">accent</span>
      <fv-icon name="live" data-size="lg" data-tone="accent"></fv-icon>
      <span style="${labelStyle}">muted</span>
      <fv-icon name="live" data-size="lg" data-tone="muted"></fv-icon>
    </div>
  `,
  parameters: src(`<fv-icon name="live" data-size="lg"></fv-icon>
<fv-icon name="live" data-size="lg" data-tone="accent"></fv-icon>
<fv-icon name="live" data-size="lg" data-tone="muted"></fv-icon>`),
};

export const Catalog: Story = {
  args: { name: 'pitch', size: 'default', tone: 'default' },
  render: () => html`
    <div style="${grid}">
      ${iconNames.map(
        (n) => html`
          <div style="${cell}">
            <fv-icon name="${n}" data-size="lg"></fv-icon>
            <span style="${labelStyle}">${n}</span>
          </div>
        `,
      )}
    </div>
  `,
  parameters: src(`<!-- All 22 icons rendered at lg (28px). Names map to <symbol id="icon-NAME"> in the page sprite. -->
<fv-icon name="pitch" data-size="lg"></fv-icon>
<fv-icon name="ball" data-size="lg"></fv-icon>
<!-- ...etc. -->`),
};

export const Playground: Story = {
  args: { name: 'pitch', size: 'default', tone: 'default' },
  render: renderIcon,
  parameters: dynamicSrc(),
};

// ===== Test stories =====
// Keep the render output stable so the play function can rely on it.

export const RendersSymbolReference: Story = {
  args: { name: 'pitch', size: 'default', tone: 'default' },
  render: () => html`<fv-icon data-testid="ref" name="pitch"></fv-icon>`,
  parameters: src(`<fv-icon name="pitch"></fv-icon>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="ref"]')!;
    const use = el.querySelector('use');
    expect(use).not.toBeNull();
    expect(use?.getAttribute('href')).toBe('#icon-pitch');
  },
};

export const UpdatesOnNameChange: Story = {
  args: { name: 'pitch', size: 'default', tone: 'default' },
  render: () => html`<fv-icon data-testid="reactive" name="pitch"></fv-icon>`,
  parameters: src(`<fv-icon name="pitch"></fv-icon>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="reactive"]')!;
    expect(el.querySelector('use')?.getAttribute('href')).toBe('#icon-pitch');
    el.setAttribute('name', 'ball');
    expect(el.querySelector('use')?.getAttribute('href')).toBe('#icon-ball');
  },
};

export const MarksDecorativeByDefault: Story = {
  args: { name: 'pitch', size: 'default', tone: 'default' },
  render: () => html`
    <div>
      <fv-icon data-testid="decorative" name="pitch"></fv-icon>
      <fv-icon data-testid="labelled" name="live" aria-label="Live match"></fv-icon>
    </div>
  `,
  parameters: src(`<fv-icon name="pitch"></fv-icon>
<fv-icon name="live" aria-label="Live match"></fv-icon>`),
  play: async ({ canvasElement }) => {
    const decorative = canvasElement.querySelector<HTMLElement>('[data-testid="decorative"]')!;
    const labelled = canvasElement.querySelector<HTMLElement>('[data-testid="labelled"]')!;
    expect(decorative.getAttribute('aria-hidden')).toBe('true');
    expect(labelled.hasAttribute('aria-hidden')).toBe(false);
    expect(labelled.getAttribute('aria-label')).toBe('Live match');
  },
};
