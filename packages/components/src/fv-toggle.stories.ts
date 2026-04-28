import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, userEvent } from 'storybook/test';
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
