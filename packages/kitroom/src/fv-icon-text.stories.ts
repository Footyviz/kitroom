import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-icon-text.js';

type IconTextArgs = {
  label: string;
  direction: 'column' | 'row';
  align: 'center' | 'start' | 'end';
  gap: 'default' | 'xs' | 'sm' | 'md' | 'lg';
};

const meta: Meta<IconTextArgs> = {
  title: 'Kitroom/IconText',
  component: 'fv-icon-text',
  argTypes: {
    label: { control: 'text' },
    direction: { control: { type: 'inline-radio' }, options: ['column', 'row'] },
    align: { control: { type: 'inline-radio' }, options: ['center', 'start', 'end'] },
    gap: { control: { type: 'select' }, options: ['default', 'xs', 'sm', 'md', 'lg'] },
  },
};
export default meta;

type Story = StoryObj<IconTextArgs>;

// A small fixed icon used by the visual stories. The component never
// generates icons — they're always real children in the host HTML.
const sampleIconHtml = `<svg data-role="icon" width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1.5"/>
    <path d="M12 5v14"/>
    <circle cx="12" cy="12" r="2.2"/>
    <circle cx="12" cy="12" r="4.2" opacity=".35"/>
  </svg>`;

const sampleIcon = html`
  <svg data-role="icon" width="22" height="22" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
       stroke-linejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1.5"></rect>
    <path d="M12 5v14"></path>
    <circle cx="12" cy="12" r="2.2"></circle>
    <circle cx="12" cy="12" r="4.2" opacity=".35"></circle>
  </svg>
`;

const iconTextHtml = (args: IconTextArgs): string => {
  const attrs: string[] = [];
  if (args.direction !== 'column') attrs.push(`data-direction="${args.direction}"`);
  if (args.align !== 'center') attrs.push(`data-align="${args.align}"`);
  if (args.gap !== 'default') attrs.push(`data-gap="${args.gap}"`);
  const tag = attrs.length ? `<fv-icon-text ${attrs.join(' ')}>` : '<fv-icon-text>';
  return `${tag}
  ${sampleIconHtml}
  <span data-role="label">${args.label}</span>
</fv-icon-text>`;
};

const renderIconText = (args: IconTextArgs): TemplateResult => html`
  <fv-icon-text
    data-direction="${args.direction !== 'column' ? args.direction : nothing}"
    data-align="${args.align !== 'center' ? args.align : nothing}"
    data-gap="${args.gap !== 'default' ? args.gap : nothing}"
  >
    ${sampleIcon}
    <span data-role="label">${args.label}</span>
  </fv-icon-text>
`;

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: IconTextArgs }) => iconTextHtml(ctx.args),
    },
  },
});

export const Default: Story = {
  args: { label: 'Live', direction: 'column', align: 'center', gap: 'default' },
  render: renderIconText,
  parameters: dynamicSrc(),
};

export const Horizontal: Story = {
  args: { label: 'Live', direction: 'row', align: 'center', gap: 'md' },
  render: renderIconText,
  parameters: dynamicSrc(),
};

export const Playground: Story = {
  args: { label: 'Live', direction: 'column', align: 'center', gap: 'default' },
  render: renderIconText,
  parameters: dynamicSrc(),
};

// Test stories — keep render shape stable so the play function can rely on it.

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

export const HandlesMissingLabel: Story = {
  args: { label: '', direction: 'column', align: 'center', gap: 'default' },
  render: () => html`
    <fv-icon-text data-testid="bare">
      ${sampleIcon}
    </fv-icon-text>
  `,
  parameters: src(`<!-- Component must not crash if the label slot is omitted. -->
<fv-icon-text>
  ${sampleIconHtml}
</fv-icon-text>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="bare"]')!;
    expect(el.querySelector('[data-role="icon"]')).not.toBeNull();
    expect(el.querySelector('[data-role="label"]')).toBeNull();
  },
};

export const SurvivesHtmxSwap: Story = {
  args: { label: '', direction: 'column', align: 'center', gap: 'default' },
  render: () => html`
    <div data-testid="container">
      <fv-icon-text><svg data-role="icon"></svg><span data-role="label">Initial</span></fv-icon-text>
    </div>
  `,
  parameters: src(`<div>
  <fv-icon-text>
    ${sampleIconHtml}
    <span data-role="label">Initial</span>
  </fv-icon-text>
</div>`),
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = `
      <fv-icon-text data-direction="row" data-gap="md">
        <svg data-role="icon"></svg>
        <span data-role="label">Swapped</span>
      </fv-icon-text>
    `;
    const el = container.querySelector<HTMLElement>('fv-icon-text')!;
    expect(el.dataset.direction).toBe('row');
    expect(el.querySelector('[data-role="label"]')?.textContent).toBe('Swapped');
  },
};
