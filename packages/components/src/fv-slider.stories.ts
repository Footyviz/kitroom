import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-slider.js';

const meta: Meta = {
  title: 'Components/Slider',
  component: 'fv-slider',
};
export default meta;

type Story = StoryObj;

const innerParts = html`
  <span data-role="track"></span>
  <span data-role="fill"></span>
  <span data-role="thumb"></span>
`;

export const Default: Story = {
  render: (): TemplateResult => html`
    <div style="display:inline-flex;align-items:center;gap:10px">
      <fv-slider data-value="62" aria-label="Volume">${innerParts}</fv-slider>
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--fg-muted)">62%</span>
    </div>
  `,
};

export const Empty: Story = {
  render: (): TemplateResult => html`
    <fv-slider data-value="0" aria-label="Empty">${innerParts}</fv-slider>
  `,
};

export const Full: Story = {
  render: (): TemplateResult => html`
    <fv-slider data-value="100" aria-label="Full">${innerParts}</fv-slider>
  `,
};

export const CustomRange: Story = {
  render: (): TemplateResult => html`
    <fv-slider data-value="40" data-min="0" data-max="120" data-step="5"
               aria-label="Match minute">${innerParts}</fv-slider>
  `,
};

export const Disabled: Story = {
  render: (): TemplateResult => html`
    <fv-slider data-value="40" aria-disabled="true" aria-label="Disabled">${innerParts}</fv-slider>
  `,
};

export const KeyboardArrowsAdjustValue: Story = {
  render: (): TemplateResult => html`
    <fv-slider data-value="50" aria-label="Test" data-testid="s">${innerParts}</fv-slider>
  `,
  play: async ({ canvasElement }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    let lastChange: number | undefined;
    slider.addEventListener('change', (e) => {
      lastChange = (e as CustomEvent<{ value: number }>).detail.value;
    });

    slider.focus();
    expect(slider.getAttribute('data-value')).toBe('50');
    expect(slider.getAttribute('aria-valuenow')).toBe('50');

    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('51');
    expect(lastChange).toBe(51);

    await userEvent.keyboard('{ArrowLeft>3/}');
    expect(slider.getAttribute('data-value')).toBe('48');

    await userEvent.keyboard('{Home}');
    expect(slider.getAttribute('data-value')).toBe('0');

    await userEvent.keyboard('{End}');
    expect(slider.getAttribute('data-value')).toBe('100');
  },
};

export const ChangeEventBubblesWithValue: Story = {
  render: (): TemplateResult => html`
    <div data-testid="parent">
      <fv-slider data-value="50" aria-label="Bubbles">${innerParts}</fv-slider>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const handler = fn();
    document.body.addEventListener('change', handler);

    const slider = canvasElement.querySelector<HTMLElement>('fv-slider')!;
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');

    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{ value: number }>;
    expect(event.detail).toEqual({ value: 51 });
    expect(event.bubbles).toBe(true);

    document.body.removeEventListener('change', handler);
  },
};

export const StepRoundsKeyboardChanges: Story = {
  render: (): TemplateResult => html`
    <fv-slider data-value="40" data-min="0" data-max="100" data-step="10"
               aria-label="Step" data-testid="s">${innerParts}</fv-slider>
  `,
  play: async ({ canvasElement }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('50');
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('70');
  },
};

export const ClampsToMinMax: Story = {
  render: (): TemplateResult => html`
    <fv-slider data-value="98" data-min="0" data-max="100"
               aria-label="Clamp" data-testid="s">${innerParts}</fv-slider>
  `,
  play: async ({ canvasElement }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    slider.focus();
    await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('100');
    expect(slider.getAttribute('aria-valuenow')).toBe('100');

    await userEvent.keyboard('{End}');
    expect(slider.getAttribute('data-value')).toBe('100');
    await userEvent.keyboard('{Home}');
    expect(slider.getAttribute('data-value')).toBe('0');
  },
};

export const DisabledIgnoresKeyboard: Story = {
  render: (): TemplateResult => html`
    <fv-slider data-value="40" aria-disabled="true" aria-label="Off"
               data-testid="s">${innerParts}</fv-slider>
  `,
  play: async ({ canvasElement }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    // Disabled slider gets tabindex=-1; focus programmatically.
    slider.focus();
    await userEvent.keyboard('{ArrowRight}{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('40');
  },
};

export const CleansUpOnDisconnect: Story = {
  render: (): TemplateResult => html`
    <div data-testid="host">
      <fv-slider data-value="50" aria-label="Cleanup">${innerParts}</fv-slider>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const slider = host.querySelector<HTMLElement>('fv-slider')!;
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('51');

    host.removeChild(slider);

    // Clicking on the detached slider should not re-trigger keyboard
    // logic, but more importantly, dispatching keyboard events on the
    // detached node should not move data-value or fire change.
    const spy = fn();
    document.addEventListener('change', spy);
    slider.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
    expect(spy).not.toHaveBeenCalled();
    expect(slider.getAttribute('data-value')).toBe('51');
    document.removeEventListener('change', spy);
  },
};

export const HandlesMissingThumbAndFill: Story = {
  render: (): TemplateResult => html`
    <!-- Track only — no fill or thumb spans. The component must not
         crash; paint becomes a no-op for the missing parts. -->
    <fv-slider data-value="50" aria-label="Bare" data-testid="s">
      <span data-role="track"></span>
    </fv-slider>
  `,
  play: async ({ canvasElement }) => {
    const slider = canvasElement.querySelector<HTMLElement>('[data-testid="s"]')!;
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('51');
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-slider data-value="20" aria-label="Initial">${innerParts}</fv-slider>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = `
      <fv-slider data-value="75" data-min="0" data-max="100" aria-label="Swapped">
        <span data-role="track"></span>
        <span data-role="fill"></span>
        <span data-role="thumb"></span>
      </fv-slider>
    `;
    const slider = container.querySelector<HTMLElement>('fv-slider')!;
    expect(slider.getAttribute('data-value')).toBe('75');
    expect(slider.getAttribute('aria-valuenow')).toBe('75');
    slider.focus();
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('76');
  },
};
