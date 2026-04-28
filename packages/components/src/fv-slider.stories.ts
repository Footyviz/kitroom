import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-slider.js';

type SliderArgs = {
  value: number;
  min: number;
  max: number;
  step: number;
  disabled: boolean;
};

const meta: Meta<SliderArgs> = {
  title: 'Components/Slider',
  component: 'fv-slider',
  argTypes: {
    value: { control: { type: 'number' }, description: 'data-value' },
    min: { control: { type: 'number' }, description: 'data-min' },
    max: { control: { type: 'number' }, description: 'data-max' },
    step: { control: { type: 'number' }, description: 'data-step' },
    disabled: { control: 'boolean', description: 'aria-disabled' },
  },
};
export default meta;

type Story = StoryObj<SliderArgs>;

const innerParts = html`
  <span data-role="track"></span>
  <span data-role="fill"></span>
  <span data-role="thumb"></span>
`;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const partsHtml = `<span data-role="track"></span>
  <span data-role="fill"></span>
  <span data-role="thumb"></span>`;

const sliderHtml = (args: SliderArgs, ariaLabel: string): string => {
  const attrs: string[] = [`data-value="${args.value}"`];
  if (args.min !== 0) attrs.push(`data-min="${args.min}"`);
  if (args.max !== 100) attrs.push(`data-max="${args.max}"`);
  if (args.step !== 1) attrs.push(`data-step="${args.step}"`);
  if (args.disabled) attrs.push('aria-disabled="true"');
  attrs.push(`aria-label="${ariaLabel}"`);
  return `<fv-slider ${attrs.join(' ')}>
  ${partsHtml}
</fv-slider>`;
};

const dynamicSrc = (ariaLabel: string) => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: SliderArgs }) => sliderHtml(ctx.args, ariaLabel),
    },
  },
});

const renderSlider = (args: SliderArgs, ariaLabel: string): TemplateResult => html`
  <fv-slider
    data-value="${args.value}"
    data-min="${args.min !== 0 ? String(args.min) : nothing}"
    data-max="${args.max !== 100 ? String(args.max) : nothing}"
    data-step="${args.step !== 1 ? String(args.step) : nothing}"
    aria-disabled="${args.disabled ? 'true' : nothing}"
    aria-label="${ariaLabel}"
  >${innerParts}</fv-slider>
`;

export const Default: Story = {
  args: { value: 62, min: 0, max: 100, step: 1, disabled: false },
  render: (args) => html`
    <div style="display:inline-flex;align-items:center;gap:10px">
      ${renderSlider(args, 'Volume')}
      <span style="font-family:var(--font-mono);font-size:11px;color:var(--fg-muted)">${args.value}%</span>
    </div>
  `,
  parameters: dynamicSrc('Volume'),
};

export const Empty: Story = {
  args: { value: 0, min: 0, max: 100, step: 1, disabled: false },
  render: (args) => renderSlider(args, 'Empty'),
  parameters: dynamicSrc('Empty'),
};

export const Full: Story = {
  args: { value: 100, min: 0, max: 100, step: 1, disabled: false },
  render: (args) => renderSlider(args, 'Full'),
  parameters: dynamicSrc('Full'),
};

export const CustomRange: Story = {
  args: { value: 40, min: 0, max: 120, step: 5, disabled: false },
  render: (args) => renderSlider(args, 'Match minute'),
  parameters: dynamicSrc('Match minute'),
};

export const Disabled: Story = {
  args: { value: 40, min: 0, max: 100, step: 1, disabled: true },
  render: (args) => renderSlider(args, 'Disabled'),
  parameters: dynamicSrc('Disabled'),
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
    // Render only sets data-value="50"; aria-valuenow is mirrored by
    // the component on connect — that line is the meaningful assertion.
    expect(slider.getAttribute('aria-valuenow')).toBe('50');

    expect(slider.getAttribute('data-value')).not.toBe('51');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('51');
    expect(lastChange).toBe(51);

    // From here each step's prior assertion is the implicit "before".
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
    expect(slider.getAttribute('data-value')).not.toBe('50');
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
    expect(slider.getAttribute('data-value')).not.toBe('100');
    // Five ArrowRights from 98 → 99 → 100, then clamped at 100 thereafter.
    await userEvent.keyboard('{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('100');
    expect(slider.getAttribute('aria-valuenow')).toBe('100');

    // End on a slider already at max: value stays at max (no change).
    await userEvent.keyboard('{End}');
    expect(slider.getAttribute('data-value')).toBe('100');
    expect(slider.getAttribute('data-value')).not.toBe('0');
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
    // The whole point: data-value MUST stay "40" through arrow keys.
    expect(slider.getAttribute('data-value')).toBe('40');
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
    expect(slider.getAttribute('data-value')).not.toBe('51');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('51');

    host.removeChild(slider);

    // After disconnect, dispatching keyboard events on the detached node
    // must NOT move data-value or fire `change` — proves listeners removed.
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
    expect(slider.getAttribute('data-value')).not.toBe('51');
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
    // data-value="75" came from the swap-in HTML; the meaningful proof of
    // upgrade is that aria-valuenow was mirrored by the component.
    expect(slider.getAttribute('aria-valuenow')).toBe('75');
    slider.focus();
    expect(slider.getAttribute('data-value')).not.toBe('76');
    await userEvent.keyboard('{ArrowRight}');
    expect(slider.getAttribute('data-value')).toBe('76');
  },
};
