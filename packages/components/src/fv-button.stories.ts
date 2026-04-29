import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-button.js';
import './fv-button-badge.js';
import './fv-icon.js';

type Variant = 'default' | 'primary' | 'cream' | 'secondary' | 'outline' | 'ghost' | 'destructive';
type Size = 'default' | 'xs' | 'sm' | 'lg';

type ButtonArgs = {
  label: string;
  variant: Variant;
  size: Size;
  loading: boolean;
  disabled: boolean;
};

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  component: 'fv-button',
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'cream', 'secondary', 'outline', 'ghost', 'destructive'],
      description: 'data-variant — default is the secondary white-card style',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['xs', 'sm', 'default', 'lg'],
      description: 'data-size — default is medium (no attribute)',
    },
    loading: { control: 'boolean', description: 'data-loading' },
    disabled: { control: 'boolean', description: 'aria-disabled' },
  },
  args: {
    label: 'Open match',
    variant: 'primary',
    size: 'default',
    loading: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<ButtonArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const buttonHtml = (args: ButtonArgs): string => {
  const attrs: string[] = [];
  if (args.variant !== 'default') attrs.push(`data-variant="${args.variant}"`);
  if (args.size !== 'default') attrs.push(`data-size="${args.size}"`);
  if (args.disabled) attrs.push('aria-disabled="true"');
  if (args.loading) attrs.push('data-loading');
  return `<fv-button${attrs.length ? ' ' + attrs.join(' ') : ''}>${args.label}</fv-button>`;
};

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: ButtonArgs }) => buttonHtml(ctx.args),
    },
  },
});

const renderButton = (args: ButtonArgs): TemplateResult => html`
  <fv-button
    data-variant="${args.variant !== 'default' ? args.variant : nothing}"
    data-size="${args.size !== 'default' ? args.size : nothing}"
    ?data-loading="${args.loading}"
    aria-disabled="${args.disabled ? 'true' : nothing}"
  >${args.label}</fv-button>
`;

const row = (...children: TemplateResult[]): TemplateResult => html`
  <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
    ${children}
  </div>
`;

export const Playground: Story = {
  render: renderButton,
  parameters: dynamicSrc(),
};

export const Hierarchy: Story = {
  render: (): TemplateResult => row(
    html`<fv-button data-variant="primary">Open match</fv-button>`,
    html`<fv-button data-variant="cream"><fv-icon name="live"/>Watch live</fv-button>`,
    html`<fv-button data-variant="secondary">Compare sides</fv-button>`,
    html`<fv-button data-variant="outline">Save match</fv-button>`,
    html`<fv-button data-variant="ghost">Dismiss</fv-button>`,
    html`<fv-button data-variant="destructive">Remove</fv-button>`,
  ),
  parameters: src(`<fv-button data-variant="primary">Open match</fv-button>
<fv-button data-variant="cream"><fv-icon name="live"></fv-icon>Watch live</fv-button>
<fv-button data-variant="secondary">Compare sides</fv-button>
<fv-button data-variant="outline">Save match</fv-button>
<fv-button data-variant="ghost">Dismiss</fv-button>
<fv-button data-variant="destructive">Remove</fv-button>`),
};

export const Sizes: Story = {
  render: (): TemplateResult => row(
    html`<fv-button data-variant="primary" data-size="xs">XS</fv-button>`,
    html`<fv-button data-variant="primary" data-size="sm">Small</fv-button>`,
    html`<fv-button data-variant="primary">Default</fv-button>`,
    html`<fv-button data-variant="primary" data-size="lg">Large</fv-button>`,
    html`<fv-button data-variant="secondary" aria-label="Share"><fv-icon name="share"/></fv-button>`,
    html`<fv-button data-variant="secondary" data-size="lg" aria-label="Notify"><fv-icon name="bell"/></fv-button>`,
  ),
  parameters: src(`<fv-button data-variant="primary" data-size="xs">XS</fv-button>
<fv-button data-variant="primary" data-size="sm">Small</fv-button>
<fv-button data-variant="primary">Default</fv-button>
<fv-button data-variant="primary" data-size="lg">Large</fv-button>
<fv-button data-variant="secondary" aria-label="Share"><fv-icon name="share"></fv-icon></fv-button>
<fv-button data-variant="secondary" data-size="lg" aria-label="Notify"><fv-icon name="bell"></fv-icon></fv-button>`),
};

export const States: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      ${row(
        html`<fv-button data-variant="primary">Default</fv-button>`,
        html`<fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>`,
        html`<fv-button data-variant="primary" data-loading>Loading</fv-button>`,
      )}
      ${row(
        html`<fv-button data-variant="cream">Default</fv-button>`,
        html`<fv-button data-variant="cream" aria-disabled="true">Disabled</fv-button>`,
        html`<fv-button data-variant="cream" data-loading>Loading</fv-button>`,
      )}
      ${row(
        html`<fv-button>Default</fv-button>`,
        html`<fv-button aria-disabled="true">Disabled</fv-button>`,
        html`<fv-button data-loading>Loading</fv-button>`,
      )}
    </div>
  `,
  parameters: src(`<!-- For each variant: default, aria-disabled, data-loading. -->
<fv-button data-variant="primary">Default</fv-button>
<fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>
<fv-button data-variant="primary" data-loading>Loading</fv-button>`),
};

export const WithIcon: Story = {
  render: (): TemplateResult => row(
    html`<fv-button data-variant="primary"><fv-icon name="live"/>Watch live</fv-button>`,
    html`<fv-button data-variant="secondary"><fv-icon name="bell"/>Notify me</fv-button>`,
    html`<fv-button data-variant="ghost"><fv-icon name="share"/>Share</fv-button>`,
    html`<fv-button data-variant="destructive"><fv-icon name="card"/>Remove</fv-button>`,
  ),
  parameters: src(`<fv-button data-variant="primary"><fv-icon name="live"></fv-icon>Watch live</fv-button>
<fv-button data-variant="secondary"><fv-icon name="bell"></fv-icon>Notify me</fv-button>
<fv-button data-variant="ghost"><fv-icon name="share"></fv-icon>Share</fv-button>
<fv-button data-variant="destructive"><fv-icon name="card"></fv-icon>Remove</fv-button>`),
};

export const OnDark: Story = {
  render: (): TemplateResult => html`
    <div data-theme="dark" style="background: var(--bg); padding: 16px 18px; border-radius: 14px;">
      ${row(
        html`<fv-button>Open match</fv-button>`,
        html`<fv-button data-variant="cream">Watch live</fv-button>`,
        html`<fv-button data-variant="outline">Compare sides</fv-button>`,
        html`<fv-button data-variant="ghost">Dismiss</fv-button>`,
      )}
    </div>
  `,
  parameters: src(`<div data-theme="dark" style="background: var(--bg); padding: 16px 18px; border-radius: 14px;">
  <fv-button>Open match</fv-button>
  <fv-button data-variant="cream">Watch live</fv-button>
  <fv-button data-variant="outline">Compare sides</fv-button>
  <fv-button data-variant="ghost">Dismiss</fv-button>
</div>`),
};

/* ------------------------- Behavior tests (play stories) ------------------------- */

export const ClickFiresEvent: Story = {
  render: (): TemplateResult => html`<fv-button data-variant="primary">Click me</fv-button>`,
  play: async ({ canvasElement }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    const handler = fn();
    btn.addEventListener('click', handler);
    await userEvent.click(btn);
    expect(handler).toHaveBeenCalledOnce();
    btn.removeEventListener('click', handler);
  },
};

export const SpaceAndEnterActivate: Story = {
  render: (): TemplateResult => html`<fv-button data-variant="primary">Activate me</fv-button>`,
  play: async ({ canvasElement }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    const handler = fn();
    btn.addEventListener('click', handler);

    btn.focus();
    await userEvent.keyboard(' ');
    expect(handler).toHaveBeenCalledOnce();

    await userEvent.keyboard('{Enter}');
    expect(handler).toHaveBeenCalledTimes(2);

    btn.removeEventListener('click', handler);
  },
};

export const DisabledBlocksClickAndKeyboard: Story = {
  render: (): TemplateResult => html`
    <fv-button data-variant="primary" aria-disabled="true">Disabled</fv-button>
  `,
  play: async ({ canvasElement }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    expect(btn.getAttribute('tabindex')).toBe('-1');

    const handler = fn();
    btn.addEventListener('click', handler);

    await userEvent.click(btn);
    expect(handler).not.toHaveBeenCalled();

    btn.focus();
    await userEvent.keyboard(' ');
    await userEvent.keyboard('{Enter}');
    expect(handler).not.toHaveBeenCalled();

    btn.removeEventListener('click', handler);
  },
};

export const LoadingBlocksClick: Story = {
  render: (): TemplateResult => html`
    <fv-button data-variant="primary" data-loading>Loading</fv-button>
  `,
  play: async ({ canvasElement }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    expect(btn.getAttribute('tabindex')).toBe('-1');

    const handler = fn();
    btn.addEventListener('click', handler);
    await userEvent.click(btn);
    expect(handler).not.toHaveBeenCalled();
    btn.removeEventListener('click', handler);
  },
};

export const TabindexFlipsWithDisabled: Story = {
  render: (): TemplateResult => html`<fv-button data-variant="primary">Toggle me</fv-button>`,
  play: async ({ canvasElement }) => {
    const btn = canvasElement.querySelector<HTMLElement>('fv-button')!;
    expect(btn.getAttribute('tabindex')).toBe('0');

    btn.setAttribute('aria-disabled', 'true');
    expect(btn.getAttribute('tabindex')).toBe('-1');

    btn.removeAttribute('aria-disabled');
    expect(btn.getAttribute('tabindex')).toBe('0');

    btn.setAttribute('data-loading', '');
    expect(btn.getAttribute('tabindex')).toBe('-1');

    btn.removeAttribute('data-loading');
    expect(btn.getAttribute('tabindex')).toBe('0');
  },
};

export const CleansUpOnDisconnect: Story = {
  render: (): TemplateResult => html`
    <div data-testid="host">
      <fv-button data-variant="primary">Test</fv-button>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const btn = host.querySelector<HTMLElement>('fv-button')!;

    const handler = fn();
    btn.addEventListener('click', handler);
    await userEvent.click(btn);
    expect(handler).toHaveBeenCalledOnce();

    host.removeChild(btn);
    btn.click();
    expect(handler).toHaveBeenCalledOnce(); // not called again
    btn.removeEventListener('click', handler);
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-button data-variant="primary">Initial</fv-button>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = `<fv-button data-variant="cream">Swapped</fv-button>`;

    const btn = container.querySelector<HTMLElement>('fv-button')!;
    expect(btn.dataset.variant).toBe('cream');
    expect(btn.getAttribute('role')).toBe('button');
    expect(btn.getAttribute('tabindex')).toBe('0');

    const handler = fn();
    btn.addEventListener('click', handler);
    await userEvent.click(btn);
    expect(handler).toHaveBeenCalledOnce();
    btn.removeEventListener('click', handler);
  },
};
