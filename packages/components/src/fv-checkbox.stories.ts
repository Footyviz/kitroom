import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-checkbox.js';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'fv-checkbox',
};
export default meta;

type Story = StoryObj;

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

export const Default: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-checkbox>${check}</fv-checkbox>
      Yellow cards
    </label>
  `,
  parameters: src(`<label>
  <fv-checkbox>
    ${checkSvgHtml}
  </fv-checkbox>
  Yellow cards
</label>`),
};

export const Checked: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-checkbox aria-checked="true">${check}</fv-checkbox>
      Goals
    </label>
  `,
  parameters: src(`<label>
  <fv-checkbox aria-checked="true">
    ${checkSvgHtml}
  </fv-checkbox>
  Goals
</label>`),
};

export const Accent: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-checkbox aria-checked="true" data-variant="accent">${check}</fv-checkbox>
      Big chances
    </label>
  `,
  parameters: src(`<label>
  <fv-checkbox aria-checked="true" data-variant="accent">
    ${checkSvgHtml}
  </fv-checkbox>
  Big chances
</label>`),
};

export const Disabled: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}; color: var(--fg-subtle);">
      <fv-checkbox aria-disabled="true">${check}</fv-checkbox>
      Subs (premium only)
    </label>
  `,
  parameters: src(`<label>
  <fv-checkbox aria-disabled="true">
    ${checkSvgHtml}
  </fv-checkbox>
  Subs (premium only)
</label>`),
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
    expect(cb.getAttribute('aria-checked')).toBe('false');

    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');

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

    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');

    host.removeChild(cb);

    const spy = fn();
    document.addEventListener('change', spy);
    cb.click();
    expect(spy).not.toHaveBeenCalled();
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
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('true');
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
    expect(cb.dataset.variant).toBe('accent');
    expect(cb.getAttribute('aria-checked')).toBe('true');
    await userEvent.click(cb);
    expect(cb.getAttribute('aria-checked')).toBe('false');
  },
};
