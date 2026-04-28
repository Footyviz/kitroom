import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-toggle.js';

type ToggleArgs = {
  checked: boolean;
  disabled: boolean;
  variant: 'accent' | 'ink';
  size: 'default' | 'lg';
  label: string;
};

const meta: Meta<ToggleArgs> = {
  title: 'Components/Toggle',
  component: 'fv-toggle',
  argTypes: {
    checked: { control: 'boolean', description: 'aria-checked' },
    disabled: { control: 'boolean', description: 'aria-disabled' },
    variant: {
      control: { type: 'inline-radio' },
      options: ['accent', 'ink'],
      description: 'data-variant — accent (lime) for user-valued, ink for system mode',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['default', 'lg'],
      description: 'data-size',
    },
    label: { control: 'text', description: 'Visible label (sibling of the toggle in the wrapping <label>)' },
  },
};
export default meta;

type Story = StoryObj<ToggleArgs>;

const labelStyle = 'display: inline-flex; align-items: center; gap: 8px; font-size: 13px;';

// Static-snippet helper for stories whose markup doesn't vary by args
// (composites, test scaffolds, degradation cases). The "Show code" panel
// shows this exact HTML.
const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

// Build the literal HTML a server template would emit for the current args.
// Used both as the snippet (via parameters.docs.source.transform) and as
// the basis for the live render so the two never drift.
const toggleHtml = (args: ToggleArgs): string => {
  const attrs: string[] = [`aria-checked="${args.checked ? 'true' : 'false'}"`];
  if (args.disabled) attrs.push('aria-disabled="true"');
  if (args.variant !== 'accent') attrs.push(`data-variant="${args.variant}"`);
  if (args.size !== 'default') attrs.push(`data-size="${args.size}"`);
  return `<label>
  <fv-toggle ${attrs.join(' ')}><span data-role="knob"></span></fv-toggle>
  ${args.label}
</label>`;
};

// `parameters: dynamicSrc()` makes the "Show code" panel re-derive its
// HTML whenever any control is tweaked.
const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: ToggleArgs }) => toggleHtml(ctx.args),
    },
  },
});

// Live lit-html render that mirrors toggleHtml (kept side-by-side so a
// reviewer can verify they agree).
const renderToggle = (args: ToggleArgs): TemplateResult => html`
  <label style="${labelStyle}">
    <fv-toggle
      aria-checked="${args.checked ? 'true' : 'false'}"
      aria-disabled="${args.disabled ? 'true' : nothing}"
      data-variant="${args.variant !== 'accent' ? args.variant : nothing}"
      data-size="${args.size !== 'default' ? args.size : nothing}"
    ><span data-role="knob"></span></fv-toggle>
    ${args.label}
  </label>
`;

export const Default: Story = {
  args: { checked: false, disabled: false, variant: 'accent', size: 'default', label: 'Auto-play highlights' },
  render: renderToggle,
  parameters: dynamicSrc(),
};

export const Disabled: Story = {
  args: { checked: false, disabled: true, variant: 'accent', size: 'default', label: 'Stadium audio' },
  render: renderToggle,
  parameters: dynamicSrc(),
};

export const Playground: Story = {
  args: { checked: true, disabled: false, variant: 'accent', size: 'default', label: 'Notifications' },
  render: renderToggle,
  parameters: dynamicSrc(),
};

export const OnDark: Story = {
  render: (): TemplateResult => html`
    <div data-theme="dark" style="background: var(--bg); color: var(--fg); padding: 24px; border-radius: 14px; display: inline-block;">
      <div style="display: flex; gap: 18px; flex-wrap: wrap; align-items: center;">
        <label style="${labelStyle}">
          <fv-toggle aria-checked="true"><span data-role="knob"></span></fv-toggle>
          Notifications
        </label>
        <label style="${labelStyle}">
          <fv-toggle aria-checked="true" data-variant="ink"><span data-role="knob"></span></fv-toggle>
          Dark mode
        </label>
        <label style="${labelStyle}">
          <fv-toggle aria-checked="true" data-size="lg"><span data-role="knob"></span></fv-toggle>
          Live alerts
        </label>
      </div>
    </div>
  `,
  parameters: src(`<!-- Parent sets data-theme="dark" on <html> or any wrapper. -->
<div data-theme="dark">
  <label>
    <fv-toggle aria-checked="true"><span data-role="knob"></span></fv-toggle>
    Notifications
  </label>
  <label>
    <fv-toggle aria-checked="true" data-variant="ink">
      <span data-role="knob"></span>
    </fv-toggle>
    Dark mode
  </label>
  <label>
    <fv-toggle aria-checked="true" data-size="lg">
      <span data-role="knob"></span>
    </fv-toggle>
    Live alerts
  </label>
</div>`),
};

export const TogglesOnClick: Story = {
  render: (): TemplateResult => html`
    <fv-toggle data-testid="t"><span data-role="knob"></span></fv-toggle>
  `,
  play: async ({ canvasElement }) => {
    const toggle = canvasElement.querySelector<HTMLElement>('fv-toggle')!;
    // Render template omits aria-checked; the component must initialize it.
    expect(toggle.getAttribute('aria-checked')).toBe('false');

    let lastChange: { checked: boolean } | undefined;
    toggle.addEventListener('change', (e) => {
      lastChange = (e as CustomEvent<{ checked: boolean }>).detail;
    });

    expect(toggle.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    expect(lastChange).toEqual({ checked: true });

    expect(toggle.getAttribute('aria-checked')).not.toBe('false');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('false');
    expect(lastChange).toEqual({ checked: false });
  },
};

export const DispatchesBubblingChangeEvent: Story = {
  render: (): TemplateResult => html`
    <div data-testid="parent">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  `,
  play: async ({ canvasElement }) => {
    // The store + htmx coordination depends on `change` bubbling to body.
    const handler = fn();
    document.body.addEventListener('change', handler);

    const toggle = canvasElement.querySelector<HTMLElement>('fv-toggle')!;
    await userEvent.click(toggle);

    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{ checked: boolean }>;
    expect(event.detail).toEqual({ checked: true });
    expect(event.bubbles).toBe(true);
    expect(event.target).toBe(toggle);

    document.body.removeEventListener('change', handler);
  },
};

export const CleansUpOnDisconnect: Story = {
  render: (): TemplateResult => html`
    <div data-testid="host">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const toggle = host.querySelector<HTMLElement>('fv-toggle')!;

    // Sanity: the click handler is wired while connected.
    expect(toggle.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');

    // Disconnect — disconnectedCallback should remove the click listener.
    host.removeChild(toggle);

    // Listen on document; if the listener leaked, the toggle would still
    // dispatch `change` when its detached node receives a click event.
    const spy = fn();
    document.addEventListener('change', spy);
    toggle.click();
    expect(spy).not.toHaveBeenCalled();
    // aria-checked must remain "true" — the value carried over the disconnect.
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    document.removeEventListener('change', spy);
  },
};

export const RespectsPresetAttributes: Story = {
  render: (): TemplateResult => html`
    <fv-toggle aria-checked="true" tabindex="-1" data-testid="t">
      <span data-role="knob"></span>
    </fv-toggle>
  `,
  parameters: src(`<!-- Server-supplied role/tabindex/aria-checked are honored as-is. -->
<fv-toggle aria-checked="true" tabindex="-1">
  <span data-role="knob"></span>
</fv-toggle>`),
  play: async ({ canvasElement }) => {
    // The component must not stomp server-supplied attribute values.
    // Defaults on a fresh connect would be aria-checked="false" and
    // tabindex="0"; the negative assertions document those defaults.
    const toggle = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(toggle.getAttribute('aria-checked')).not.toBe('false');
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    expect(toggle.getAttribute('tabindex')).not.toBe('0');
    expect(toggle.getAttribute('tabindex')).toBe('-1');
    // role isn't on the render template, so this also proves the
    // component populated it on connect.
    expect(toggle.getAttribute('role')).toBe('switch');
  },
};

export const HandlesExtraChildren: Story = {
  render: (): TemplateResult => html`
    <fv-toggle data-testid="t">
      <span data-role="knob"></span>
      <!-- A future variant of the design might add a label slot, an
           inner glyph, etc. The component must not choke on extra DOM. -->
      <span aria-hidden="true" style="display:none">extra</span>
    </fv-toggle>
  `,
  play: async ({ canvasElement }) => {
    const toggle = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(toggle.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;

    // Initial instance is enhanced and interactive.
    let toggle = container.querySelector<HTMLElement>('fv-toggle')!;
    expect(toggle.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');

    // Simulate an htmx-style swap: replace innerHTML with a fresh fv-toggle.
    container.innerHTML =
      '<fv-toggle aria-checked="true" data-variant="ink"><span data-role="knob"></span></fv-toggle>';

    // The swapped-in instance should auto-upgrade and behave correctly.
    toggle = container.querySelector<HTMLElement>('fv-toggle')!;
    // data-variant came from the swap-in HTML; assert it survived parsing.
    expect(toggle.dataset.variant).toBe('ink');
    // The meaningful proof that the new instance was upgraded: clicking it
    // now flips aria-checked from "true" → "false".
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('false');
  },
};
