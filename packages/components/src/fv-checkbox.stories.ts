import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-checkbox.js';

type CheckboxArgs = {
  checked: boolean;
  disabled: boolean;
  variant: 'ink' | 'accent';
  label: string;
};

const meta: Meta<CheckboxArgs> = {
  title: 'Components/Checkbox',
  component: 'fv-checkbox',
  argTypes: {
    checked: { control: 'boolean', description: 'aria-checked' },
    disabled: { control: 'boolean', description: 'aria-disabled' },
    variant: {
      control: { type: 'inline-radio' },
      options: ['ink', 'accent'],
      description: 'data-variant — ink default, accent (lime) for user-valued filters',
    },
    label: { control: 'text', description: 'Visible label (sibling of the checkbox in the wrapping <label>)' },
  },
};
export default meta;

type Story = StoryObj<CheckboxArgs>;

const labelStyle = 'display: inline-flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;';
const check = html`
  <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
       stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 8 7 12 13 4"></polyline>
  </svg>
`;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const checkSvgHtml = `<svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
       stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
    <polyline points="3 8 7 12 13 4"/>
  </svg>`;

const checkboxHtml = (args: CheckboxArgs): string => {
  const attrs: string[] = [`aria-checked="${args.checked ? 'true' : 'false'}"`];
  if (args.disabled) attrs.push('aria-disabled="true"');
  if (args.variant !== 'ink') attrs.push(`data-variant="${args.variant}"`);
  return `<label>
  <fv-checkbox ${attrs.join(' ')}>
    ${checkSvgHtml}
  </fv-checkbox>
  ${args.label}
</label>`;
};

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: CheckboxArgs }) => checkboxHtml(ctx.args),
    },
  },
});

const renderCheckbox = (args: CheckboxArgs): TemplateResult => html`
  <label style="${labelStyle}${args.disabled ? '; color: var(--fg-subtle);' : ''}">
    <fv-checkbox
      aria-checked="${args.checked ? 'true' : 'false'}"
      aria-disabled="${args.disabled ? 'true' : nothing}"
      data-variant="${args.variant !== 'ink' ? args.variant : nothing}"
    >${check}</fv-checkbox>
    ${args.label}
  </label>
`;

export const Default: Story = {
  args: { checked: false, disabled: false, variant: 'ink', label: 'Yellow cards' },
  render: renderCheckbox,
  parameters: dynamicSrc(),
};

export const Disabled: Story = {
  args: { checked: false, disabled: true, variant: 'ink', label: 'Subs (premium only)' },
  render: renderCheckbox,
  parameters: dynamicSrc(),
};

export const Playground: Story = {
  args: { checked: true, disabled: false, variant: 'accent', label: 'Big chances' },
  render: renderCheckbox,
  parameters: dynamicSrc(),
};

export const Group: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <label style="${labelStyle}">
        <fv-checkbox aria-checked="true">${check}</fv-checkbox>
        Goals
      </label>
      <label style="${labelStyle}">
        <fv-checkbox aria-checked="true" data-variant="accent">${check}</fv-checkbox>
        Big chances
      </label>
      <label style="${labelStyle}">
        <fv-checkbox>${check}</fv-checkbox>
        Yellow cards
      </label>
      <label style="${labelStyle}">
        <fv-checkbox>${check}</fv-checkbox>
        Subs
      </label>
    </div>
  `,
  parameters: src(`<label>
  <fv-checkbox aria-checked="true">${checkSvgHtml}</fv-checkbox>
  Goals
</label>
<label>
  <fv-checkbox aria-checked="true" data-variant="accent">${checkSvgHtml}</fv-checkbox>
  Big chances
</label>
<label>
  <fv-checkbox>${checkSvgHtml}</fv-checkbox>
  Yellow cards
</label>
<label>
  <fv-checkbox>${checkSvgHtml}</fv-checkbox>
  Subs
</label>`),
};

export const TogglesOnClick: Story = {
  render: (): TemplateResult => html`
    <fv-checkbox>${check}</fv-checkbox>
  `,
  play: async ({ canvasElement }) => {
    const cb = canvasElement.querySelector<HTMLElement>('fv-checkbox')!;
    // Render template omits aria-checked; the component must initialize it.
    expect(cb.getAttribute('aria-checked')).toBe('false');

    expect(cb.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');

    expect(cb.getAttribute('aria-checked')).not.toBe('false');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('false');
  },
};

export const DispatchesBubblingChangeEvent: Story = {
  render: (): TemplateResult => html`
    <fv-checkbox>${check}</fv-checkbox>
  `,
  play: async ({ canvasElement }) => {
    const handler = fn();
    document.body.addEventListener('change', handler);

    const cb = canvasElement.querySelector<HTMLElement>('fv-checkbox')!;
    await userEvent.click(cb);

    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{ checked: boolean }>;
    expect(event.detail).toEqual({ checked: true });
    expect(event.bubbles).toBe(true);

    document.body.removeEventListener('change', handler);
  },
};

export const CleansUpOnDisconnect: Story = {
  render: (): TemplateResult => html`
    <div data-testid="host">
      <fv-checkbox>${check}</fv-checkbox>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const cb = host.querySelector<HTMLElement>('fv-checkbox')!;

    expect(cb.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');

    host.removeChild(cb);

    const spy = fn();
    document.addEventListener('change', spy);
    cb.click();
    expect(spy).not.toHaveBeenCalled();
    // aria-checked must remain "true" — the value carried over the disconnect.
    expect(cb.getAttribute('aria-checked')).toBe('true');
    document.removeEventListener('change', spy);
  },
};

export const HandlesMissingCheckSvg: Story = {
  render: (): TemplateResult => html`
    <!-- The svg child is documented as required, but the component
         must not crash if a server template forgets it. The check
         is invisible; toggle behavior still works. -->
    <fv-checkbox data-testid="cb"></fv-checkbox>
  `,
  play: async ({ canvasElement }) => {
    const cb = canvasElement.querySelector<HTMLElement>('[data-testid="cb"]')!;
    expect(cb.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');
    expect(cb.getAttribute('aria-checked')).not.toBe('false');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('false');
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-checkbox>${check}</fv-checkbox>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;

    let cb = container.querySelector<HTMLElement>('fv-checkbox')!;
    expect(cb.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');

    container.innerHTML = `
      <fv-checkbox aria-checked="true" data-variant="accent">
        <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true" fill="none"
             stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 8 7 12 13 4"></polyline>
        </svg>
      </fv-checkbox>
    `;

    cb = container.querySelector<HTMLElement>('fv-checkbox')!;
    // data-variant is what the swap-in HTML set; assert it survived parsing.
    expect(cb.dataset.variant).toBe('accent');
    // aria-checked="true" was on the swap-in HTML — the meaningful assertion
    // is that toggling now flips it (proves the new instance was upgraded).
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('false');
  },
};
