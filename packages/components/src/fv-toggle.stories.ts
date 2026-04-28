import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-toggle.js';

const meta: Meta = {
  title: 'Components/Toggle',
  component: 'fv-toggle',
};
export default meta;

type Story = StoryObj;

const labelStyle = 'display: inline-flex; align-items: center; gap: 8px; font-size: 13px;';

export const Default: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-toggle><span data-role="knob"></span></fv-toggle>
      Auto-play highlights
    </label>
  `,
};

export const Checked: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-toggle aria-checked="true"><span data-role="knob"></span></fv-toggle>
      Notifications
    </label>
  `,
};

export const Ink: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-toggle aria-checked="true" data-variant="ink"><span data-role="knob"></span></fv-toggle>
      Dark mode
    </label>
  `,
};

export const Large: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-toggle aria-checked="true" data-size="lg"><span data-role="knob"></span></fv-toggle>
      Live alerts
    </label>
  `,
};

export const Disabled: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}; color: var(--fg-subtle);">
      <fv-toggle aria-disabled="true"><span data-role="knob"></span></fv-toggle>
      Stadium audio
    </label>
  `,
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
};

export const TogglesOnClick: Story = {
  render: (): TemplateResult => html`
    <fv-toggle data-testid="t"><span data-role="knob"></span></fv-toggle>
  `,
  play: async ({ canvasElement }) => {
    const toggle = canvasElement.querySelector<HTMLElement>('fv-toggle')!;
    expect(toggle.getAttribute('aria-checked')).toBe('false');

    let lastChange: { checked: boolean } | undefined;
    toggle.addEventListener('change', (e) => {
      lastChange = (e as CustomEvent<{ checked: boolean }>).detail;
    });

    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    expect(lastChange).toEqual({ checked: true });

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
  play: async ({ canvasElement }) => {
    // The component must not stomp server-supplied attribute values.
    const toggle = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(toggle.getAttribute('aria-checked')).toBe('true');
    expect(toggle.getAttribute('tabindex')).toBe('-1');
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
    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('true');

    // Simulate an htmx-style swap: replace innerHTML with a fresh fv-toggle.
    container.innerHTML =
      '<fv-toggle aria-checked="true" data-variant="ink"><span data-role="knob"></span></fv-toggle>';

    // The swapped-in instance should auto-upgrade and behave correctly.
    toggle = container.querySelector<HTMLElement>('fv-toggle')!;
    expect(toggle.dataset.variant).toBe('ink');
    expect(toggle.getAttribute('aria-checked')).toBe('true');

    await userEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe('false');
  },
};
