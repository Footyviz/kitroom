import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-text.js';

type Variant =
  | 'default'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'display'
  | 'display-serif'
  | 'stat-xl'
  | 'stat-lg'
  | 'stat-md'
  | 'stat-sm'
  | 'mono'
  | 'editorial';

type Tone = 'default' | 'muted' | 'subtle' | 'inverse' | 'accent';

type TextArgs = {
  text: string;
  variant: Variant;
  tone: Tone;
  maxWidth: string;
};

const variantOptions: Variant[] = [
  'default',
  'body',
  'body-sm',
  'caption',
  'label',
  'h1',
  'h2',
  'h3',
  'display',
  'display-serif',
  'stat-xl',
  'stat-lg',
  'stat-md',
  'stat-sm',
  'mono',
  'editorial',
];

const meta: Meta<TextArgs> = {
  title: 'Components/Text',
  component: 'fv-text',
  argTypes: {
    text: { control: 'text', description: 'Slot content' },
    variant: {
      control: 'select',
      options: variantOptions,
      description:
        'data-variant — picks the type style. `default` omits the attribute and falls back to body.',
    },
    tone: {
      control: { type: 'inline-radio' },
      options: ['default', 'muted', 'subtle', 'inverse', 'accent'],
      description: 'data-tone — colour override (default keeps the variant\'s own colour)',
    },
    maxWidth: {
      control: 'text',
      description:
        'data-max-width — any CSS <length> (e.g. 200px, 20ch). When present, single-line ellipsis truncation kicks in.',
    },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<TextArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const textHtml = (args: TextArgs): string => {
  const attrs: string[] = [];
  if (args.variant !== 'default') attrs.push(`data-variant="${args.variant}"`);
  if (args.tone !== 'default') attrs.push(`data-tone="${args.tone}"`);
  if (args.maxWidth) attrs.push(`data-max-width="${args.maxWidth}"`);
  return `<fv-text${attrs.length ? ' ' + attrs.join(' ') : ''}>${args.text}</fv-text>`;
};

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: TextArgs }) => textHtml(ctx.args),
    },
  },
});

const renderText = (args: TextArgs): TemplateResult => html`
  <fv-text
    data-variant="${args.variant !== 'default' ? args.variant : nothing}"
    data-tone="${args.tone !== 'default' ? args.tone : nothing}"
    data-max-width="${args.maxWidth ? args.maxWidth : nothing}"
    >${args.text}</fv-text
  >
`;

/* ------------------------- layout helpers ------------------------- */

const stack = 'display: flex; flex-direction: column; gap: 16px; align-items: flex-start;';
const labelCol = 'display: grid; grid-template-columns: 140px 1fr; gap: 18px 24px; align-items: baseline;';
const labelStyle = 'font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);';

/* ------------------------- stories ------------------------- */

export const Playground: Story = {
  args: {
    text: 'Saka advanced 11m before releasing the pass.',
    variant: 'body',
    tone: 'default',
    maxWidth: '',
  },
  render: renderText,
  parameters: { ...dynamicSrc(), controls: { disable: false } },
};

export const TypeRamp: Story = {
  render: (): TemplateResult => html`
    <div style="${labelCol}">
      <span style="${labelStyle}">display</span>
      <fv-text data-variant="display">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${labelStyle}">display-serif</span>
      <fv-text data-variant="display-serif">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${labelStyle}">h1</span>
      <fv-text data-variant="h1">Arsenal 2 – 1 Chelsea</fv-text>

      <span style="${labelStyle}">h2</span>
      <fv-text data-variant="h2">Match summary</fv-text>

      <span style="${labelStyle}">h3</span>
      <fv-text data-variant="h3">Possession by third</fv-text>

      <span style="${labelStyle}">body</span>
      <fv-text data-variant="body">Saka advanced 11m before releasing the pass.</fv-text>

      <span style="${labelStyle}">body-sm</span>
      <fv-text data-variant="body-sm">Updated 12 seconds ago.</fv-text>

      <span style="${labelStyle}">caption</span>
      <fv-text data-variant="caption">live · 73′ · 2H</fv-text>

      <span style="${labelStyle}">label</span>
      <fv-text data-variant="label">Form</fv-text>

      <span style="${labelStyle}">stat-xl</span>
      <fv-text data-variant="stat-xl">2.7</fv-text>

      <span style="${labelStyle}">stat-lg</span>
      <fv-text data-variant="stat-lg">62.4%</fv-text>

      <span style="${labelStyle}">stat-md</span>
      <fv-text data-variant="stat-md">14 / 17</fv-text>

      <span style="${labelStyle}">stat-sm</span>
      <fv-text data-variant="stat-sm">+0.08 xT</fv-text>

      <span style="${labelStyle}">mono</span>
      <fv-text data-variant="mono">12 438 passes</fv-text>

      <span style="${labelStyle}">editorial</span>
      <fv-text data-variant="editorial">"The UI is the frame. The data is the painting."</fv-text>
    </div>
  `,
  parameters: src(`<fv-text data-variant="display">Arsenal 2 – 1 Chelsea</fv-text>
<fv-text data-variant="h1">Arsenal 2 – 1 Chelsea</fv-text>
<fv-text data-variant="h2">Match summary</fv-text>
<fv-text data-variant="h3">Possession by third</fv-text>
<fv-text data-variant="body">Saka advanced 11m before releasing the pass.</fv-text>
<fv-text data-variant="body-sm">Updated 12 seconds ago.</fv-text>
<fv-text data-variant="caption">live · 73′ · 2H</fv-text>
<fv-text data-variant="label">Form</fv-text>
<fv-text data-variant="stat-xl">2.7</fv-text>
<fv-text data-variant="stat-lg">62.4%</fv-text>
<fv-text data-variant="stat-md">14 / 17</fv-text>
<fv-text data-variant="stat-sm">+0.08 xT</fv-text>
<fv-text data-variant="mono">12 438 passes</fv-text>
<fv-text data-variant="editorial">"The UI is the frame. The data is the painting."</fv-text>`),
};

export const Tones: Story = {
  render: (): TemplateResult => html`
    <div style="${stack}">
      <div style="${labelCol}">
        <span style="${labelStyle}">default</span>
        <fv-text>Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${labelStyle}">muted</span>
        <fv-text data-tone="muted">Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${labelStyle}">subtle</span>
        <fv-text data-tone="subtle">Saka advanced 11m before releasing the pass.</fv-text>

        <span style="${labelStyle}">accent</span>
        <fv-text data-tone="accent">Saka advanced 11m before releasing the pass.</fv-text>
      </div>

      <div data-theme="dark" style="background: var(--bg); padding: 14px 18px; border-radius: 12px; ${labelCol}">
        <span style="${labelStyle}">inverse (on light surface)</span>
        <fv-text data-tone="inverse">Saka advanced 11m before releasing the pass.</fv-text>
      </div>
    </div>
  `,
  parameters: src(`<fv-text>Default tone — uses the variant's own colour.</fv-text>
<fv-text data-tone="muted">Muted body copy.</fv-text>
<fv-text data-tone="subtle">Subtle annotations.</fv-text>
<fv-text data-tone="accent">Accent emphasis (use sparingly).</fv-text>
<!-- inverse pairs with an inverted surface (e.g. data-theme=dark wrapper). -->
<div data-theme="dark" style="background: var(--bg); padding: 12px;">
  <fv-text data-tone="inverse">On dark surface.</fv-text>
</div>`),
};

export const Truncation: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <div>
        <div style="${labelStyle}; margin-bottom: 6px;">
          long copy, max-width 200px — truncates with ellipsis
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body" data-max-width="200px">
            Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
          </fv-text>
        </div>
      </div>

      <div>
        <div style="${labelStyle}; margin-bottom: 6px;">
          same long copy, no max-width — wraps naturally
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body">
            Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
          </fv-text>
        </div>
      </div>

      <div>
        <div style="${labelStyle}; margin-bottom: 6px;">
          short copy, max-width 200px — attribute is harmless when content fits
        </div>
        <div style="width: 320px; border: 1px dashed var(--fg-subtle); padding: 8px;">
          <fv-text data-variant="body" data-max-width="200px">Saka 11m</fv-text>
        </div>
      </div>
    </div>
  `,
  parameters: src(`<fv-text data-variant="body" data-max-width="200px">
  Saka advanced 11m before releasing the pass to Ødegaard at the top of the box.
</fv-text>`),
};

export const Stats: Story = {
  render: (): TemplateResult => html`
    <div style="display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px;">
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">xG</fv-text>
        <fv-text data-variant="stat-xl">2.7</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">Possession</fv-text>
        <fv-text data-variant="stat-lg">62.4%</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">On target</fv-text>
        <fv-text data-variant="stat-md">14 / 17</fv-text>
      </div>
      <div style="display: flex; flex-direction: column; gap: 6px;">
        <fv-text data-variant="caption">xT delta</fv-text>
        <fv-text data-variant="stat-sm">+0.08 xT</fv-text>
      </div>
    </div>
  `,
  parameters: src(`<fv-text data-variant="caption">xG</fv-text>
<fv-text data-variant="stat-xl">2.7</fv-text>

<fv-text data-variant="caption">Possession</fv-text>
<fv-text data-variant="stat-lg">62.4%</fv-text>

<fv-text data-variant="caption">On target</fv-text>
<fv-text data-variant="stat-md">14 / 17</fv-text>

<fv-text data-variant="caption">xT delta</fv-text>
<fv-text data-variant="stat-sm">+0.08 xT</fv-text>`),
};

/* ------------------------- behaviour tests ------------------------- */

export const ReflectsMaxWidth: Story = {
  render: (): TemplateResult => html`
    <fv-text data-testid="reflect" data-variant="body" data-max-width="180px">
      Saka advanced 11m before releasing the pass to Ødegaard.
    </fv-text>
  `,
  parameters: src(`<fv-text data-variant="body" data-max-width="180px">…</fv-text>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="reflect"]')!;
    expect(el.style.maxWidth).toBe('180px');
  },
};

export const TruncationStylesApply: Story = {
  render: (): TemplateResult => html`
    <div>
      <fv-text data-testid="truncated" data-variant="body" data-max-width="160px">
        Saka advanced 11m before releasing the pass to Ødegaard.
      </fv-text>
      <fv-text data-testid="natural" data-variant="body">
        Saka advanced 11m before releasing the pass to Ødegaard.
      </fv-text>
    </div>
  `,
  parameters: src(`<fv-text data-variant="body" data-max-width="160px">…</fv-text>
<fv-text data-variant="body">…</fv-text>`),
  play: async ({ canvasElement }) => {
    const truncated = canvasElement.querySelector<HTMLElement>('[data-testid="truncated"]')!;
    const natural = canvasElement.querySelector<HTMLElement>('[data-testid="natural"]')!;

    const truncatedStyle = getComputedStyle(truncated);
    expect(truncatedStyle.textOverflow).toBe('ellipsis');
    expect(truncatedStyle.whiteSpace).toBe('nowrap');
    expect(truncatedStyle.display).toBe('inline-block');
    expect(truncated.style.maxWidth).toBe('160px');

    const naturalStyle = getComputedStyle(natural);
    expect(naturalStyle.whiteSpace).not.toBe('nowrap');
    expect(natural.style.maxWidth).toBe('');
  },
};

export const UpdatesMaxWidthOnAttributeChange: Story = {
  render: (): TemplateResult => html`
    <fv-text data-testid="reactive" data-variant="body">
      Saka advanced 11m before releasing the pass.
    </fv-text>
  `,
  parameters: src(`<fv-text data-variant="body">…</fv-text>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="reactive"]')!;
    expect(el.style.maxWidth).toBe('');

    el.setAttribute('data-max-width', '220px');
    expect(el.style.maxWidth).toBe('220px');

    el.setAttribute('data-max-width', '24ch');
    expect(el.style.maxWidth).toBe('24ch');

    el.removeAttribute('data-max-width');
    expect(el.style.maxWidth).toBe('');
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-text data-variant="body">Initial body copy.</fv-text>
    </div>
  `,
  parameters: src(`<fv-text data-variant="body">…</fv-text>`),
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML =
      '<fv-text data-variant="stat-md" data-max-width="120px">14 / 17</fv-text>';

    const el = container.querySelector<HTMLElement>('fv-text')!;
    expect(el.dataset.variant).toBe('stat-md');
    expect(el.style.maxWidth).toBe('120px');
  },
};
