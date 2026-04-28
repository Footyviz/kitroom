import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, userEvent } from 'storybook/test';
import './fv-segmented.js';

const meta: Meta = {
  title: 'Components/Segmented',
  component: 'fv-segmented',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (): TemplateResult => html`
    <fv-segmented aria-label="Match filter">
      <button role="radio" data-value="live" aria-checked="true">Live</button>
      <button role="radio" data-value="today" aria-checked="false">Today</button>
      <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
    </fv-segmented>
  `,
};

export const TwoOptions: Story = {
  render: (): TemplateResult => html`
    <fv-segmented aria-label="Match scope">
      <button role="radio" data-value="all" aria-checked="false">All</button>
      <button role="radio" data-value="followed" aria-checked="true">Followed</button>
    </fv-segmented>
  `,
};

export const Grouped: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
      <fv-segmented aria-label="Match filter">
        <button role="radio" data-value="live" aria-checked="true">Live</button>
        <button role="radio" data-value="today" aria-checked="false">Today</button>
        <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
      </fv-segmented>
      <fv-segmented aria-label="Match scope">
        <button role="radio" data-value="all" aria-checked="false">All</button>
        <button role="radio" data-value="followed" aria-checked="true">Followed</button>
      </fv-segmented>
    </div>
  `,
};

export const SelectingOneDeselectsSiblings: Story = {
  render: (): TemplateResult => html`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false">B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,
  play: async ({ canvasElement }) => {
    const seg = canvasElement.querySelector<HTMLElement>('[data-testid="seg"]')!;
    let lastValue: string | undefined;
    seg.addEventListener('change', (e) => {
      lastValue = (e as CustomEvent<{ value: string }>).detail.value;
    });

    const buttons = seg.querySelectorAll<HTMLButtonElement>('button');
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('true');

    await userEvent.click(buttons[2]!);
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('false');
    expect(buttons[2]?.getAttribute('aria-checked')).toBe('true');
    expect(lastValue).toBe('c');

    await userEvent.click(buttons[1]!);
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('true');
    expect(buttons[2]?.getAttribute('aria-checked')).toBe('false');
    expect(lastValue).toBe('b');
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-segmented aria-label="Initial">
        <button role="radio" data-value="x" aria-checked="true">X</button>
      </fv-segmented>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = `
      <fv-segmented aria-label="Swapped">
        <button role="radio" data-value="one" aria-checked="true">One</button>
        <button role="radio" data-value="two" aria-checked="false">Two</button>
      </fv-segmented>
    `;
    const seg = container.querySelector<HTMLElement>('fv-segmented')!;
    const buttons = seg.querySelectorAll<HTMLButtonElement>('button');
    await userEvent.click(buttons[1]!);
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('false');
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('true');
  },
};
