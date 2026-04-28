import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, userEvent } from 'storybook/test';
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
