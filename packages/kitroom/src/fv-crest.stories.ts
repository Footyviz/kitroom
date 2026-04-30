import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-crest.js';

type Size = 'default' | 'sm' | 'md' | 'lg';

type CrestArgs = {
  code: string;
  size: Size;
  src: string;
  alt: string;
};

const meta: Meta<CrestArgs> = {
  title: 'Kitroom/Crest',
  component: 'fv-crest',
  argTypes: {
    code: { control: 'text', description: 'data-code — 2-4 letter team monogram' },
    size: {
      control: { type: 'inline-radio' },
      options: ['default', 'sm', 'md', 'lg'],
      description: 'data-size — sm (20px), md (28px, default), lg (36px)',
    },
    src: { control: 'text', description: 'data-src — optional image URL' },
    alt: { control: 'text', description: 'data-alt — accessible name when data-src is used' },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<CrestArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const labelStyle = 'font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);';

/* Real team logos from api-sports.io. The numeric IDs are their team
   IDs (33 = Manchester Utd, 50 = Manchester City, 42 = Arsenal). If the
   network is unavailable the component falls back to data-code, which
   doubles as a live demo of the fallback path. */
const logoUrl = (id: number): string => `https://media.api-sports.io/football/teams/${id}.png`;
const logoMUN = logoUrl(33);
const logoMCI = logoUrl(50);
const logoARS = logoUrl(42);

export const Playground: Story = {
  args: { code: 'HAR', size: 'default', src: '', alt: '' },
  render: (args): TemplateResult => html`
    <fv-crest
      data-code="${args.code}"
      data-size="${args.size !== 'default' ? args.size : nothing}"
      data-src="${args.src ? args.src : nothing}"
      data-alt="${args.alt ? args.alt : nothing}"
    ></fv-crest>
  `,
  parameters: {
    docs: {
      source: {
        language: 'html' as const,
        transform: (_: string, ctx: { args: CrestArgs }) => {
          const attrs: string[] = [`data-code="${ctx.args.code}"`];
          if (ctx.args.size !== 'default') attrs.push(`data-size="${ctx.args.size}"`);
          if (ctx.args.src) attrs.push(`data-src="${ctx.args.src}"`);
          if (ctx.args.alt) attrs.push(`data-alt="${ctx.args.alt}"`);
          return `<fv-crest ${attrs.join(' ')}></fv-crest>`;
        },
      },
    },
    controls: { disable: false },
  },
};

export const Sizes: Story = {
  render: (): TemplateResult => html`
    <div style="display: inline-flex; align-items: center; gap: 16px;">
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="sm"></fv-crest>
        <span style="${labelStyle}">sm · 20px</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="md"></fv-crest>
        <span style="${labelStyle}">md · 28px (default)</span>
      </div>
      <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
        <fv-crest data-code="HAR" data-size="lg"></fv-crest>
        <span style="${labelStyle}">lg · 36px</span>
      </div>
    </div>
  `,
  parameters: src(`<fv-crest data-code="HAR" data-size="sm"></fv-crest>
<fv-crest data-code="HAR" data-size="md"></fv-crest>
<fv-crest data-code="HAR" data-size="lg"></fv-crest>`),
};

export const WithLogos: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: inline-flex; align-items: center; gap: 16px;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=${logoMUN} data-code="MUN" data-alt="Manchester Utd" data-size="sm"></fv-crest>
          <span style="${labelStyle}">sm · 20px</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=${logoMCI} data-code="MCI" data-alt="Manchester City" data-size="md"></fv-crest>
          <span style="${labelStyle}">md · 28px (default)</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 6px;">
          <fv-crest data-src=${logoARS} data-code="ARS" data-alt="Arsenal" data-size="lg"></fv-crest>
          <span style="${labelStyle}">lg · 36px</span>
        </div>
      </div>
      <div style="display: inline-flex; align-items: center; gap: 8px;">
        <fv-crest data-src=${logoMUN} data-code="MUN" data-alt="Manchester Utd"></fv-crest>
        <fv-crest data-src=${logoMCI} data-code="MCI" data-alt="Manchester City"></fv-crest>
        <fv-crest data-src=${logoARS} data-code="ARS" data-alt="Arsenal"></fv-crest>
        <span style="${labelStyle}">— inline row at default size</span>
      </div>
    </div>
  `,
  parameters: src(`<fv-crest
  data-src="https://media.api-sports.io/football/teams/33.png"
  data-code="MUN"
  data-alt="Manchester Utd"
></fv-crest>`),
};

export const Codes: Story = {
  render: (): TemplateResult => html`
    <div style="display: inline-flex; align-items: center; gap: 8px;">
      <fv-crest data-code="HAR"></fv-crest>
      <fv-crest data-code="KIN"></fv-crest>
      <fv-crest data-code="WLD"></fv-crest>
      <fv-crest data-code="BRY"></fv-crest>
      <fv-crest data-code="NMP"></fv-crest>
      <fv-crest data-code="OAK"></fv-crest>
      <fv-crest data-code="CDR"></fv-crest>
      <fv-crest data-code="STM"></fv-crest>
      <fv-crest data-code="BLM"></fv-crest>
      <fv-crest data-code="WTH"></fv-crest>
    </div>
  `,
  parameters: src(`<fv-crest data-code="HAR"></fv-crest>
<fv-crest data-code="KIN"></fv-crest>
<fv-crest data-code="WLD"></fv-crest>`),
};

export const ImageWithFallback: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <div style="display: inline-flex; align-items: center; gap: 12px;">
        <fv-crest data-src=${logoMUN} data-code="MUN" data-alt="Manchester Utd"></fv-crest>
        <span style="${labelStyle}">data-src loads → image renders, chrome drops</span>
      </div>
      <div style="display: inline-flex; align-items: center; gap: 12px;">
        <fv-crest data-src="/missing-crest.svg" data-code="HAR" data-alt="Harringate Utd"></fv-crest>
        <span style="${labelStyle}">data-src missing → falls back to data-code monogram</span>
      </div>
    </div>
  `,
  parameters: src(`<fv-crest
  data-src="https://media.api-sports.io/football/teams/33.png"
  data-code="MUN"
  data-alt="Manchester Utd"
></fv-crest>`),
};

/* ------------------------- behaviour tests ------------------------- */

export const RendersCodeText: Story = {
  render: (): TemplateResult => html`
    <fv-crest data-testid="c" data-code="HAR"></fv-crest>
  `,
  parameters: src(`<fv-crest data-code="HAR"></fv-crest>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="c"]')!;
    expect(el.textContent?.trim()).toBe('HAR');
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBe('HAR');
  },
};

export const UpdatesOnAttributeChange: Story = {
  render: (): TemplateResult => html`
    <fv-crest data-testid="c" data-code="HAR"></fv-crest>
  `,
  parameters: src(`<fv-crest data-code="HAR"></fv-crest>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="c"]')!;
    expect(el.textContent?.trim()).toBe('HAR');

    el.setAttribute('data-code', 'KIN');
    expect(el.textContent?.trim()).toBe('KIN');
    expect(el.getAttribute('aria-label')).toBe('KIN');

    el.setAttribute('data-alt', 'Kingsmoor FC');
    expect(el.getAttribute('aria-label')).toBe('Kingsmoor FC');
  },
};

export const LowercaseCodeRendersUppercase: Story = {
  render: (): TemplateResult => html`
    <fv-crest data-testid="c" data-code="har"></fv-crest>
  `,
  parameters: src(`<fv-crest data-code="har"></fv-crest>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="c"]')!;
    expect(el.textContent?.trim()).toBe('HAR');
  },
};
