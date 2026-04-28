import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, userEvent } from 'storybook/test';
import './fv-radio.js';

const meta: Meta = {
  title: 'Components/Radio',
  component: 'fv-radio',
};
export default meta;

type Story = StoryObj;

const labelStyle = 'display: inline-flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;';

export const Default: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-radio data-group="story-default" data-value="all">
        <span data-role="dot"></span>
      </fv-radio>
      All comps
    </label>
  `,
};

export const Checked: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-radio aria-checked="true" data-group="story-checked" data-value="all">
        <span data-role="dot"></span>
      </fv-radio>
      All comps
    </label>
  `,
};

export const Group: Story = {
  render: (): TemplateResult => html`
    <div role="radiogroup" aria-label="Competition filter"
         style="display: flex; flex-direction: column; gap: 10px;">
      <label style="${labelStyle}">
        <fv-radio aria-checked="true" data-group="comps" data-value="all">
          <span data-role="dot"></span>
        </fv-radio>
        All comps
      </label>
      <label style="${labelStyle}">
        <fv-radio data-group="comps" data-value="followed">
          <span data-role="dot"></span>
        </fv-radio>
        Followed only
      </label>
      <label style="${labelStyle}">
        <fv-radio data-group="comps" data-value="domestic">
          <span data-role="dot"></span>
        </fv-radio>
        Domestic
      </label>
    </div>
  `,
};

export const Disabled: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}; color: var(--fg-subtle);">
      <fv-radio aria-disabled="true" data-group="story-disabled" data-value="x">
        <span data-role="dot"></span>
      </fv-radio>
      Champions League (premium)
    </label>
  `,
};

export const SelectingOneDeselectsSiblings: Story = {
  render: (): TemplateResult => html`
    <div role="radiogroup" data-testid="grp"
         style="display: flex; flex-direction: column; gap: 6px;">
      <fv-radio aria-checked="true" data-group="play-grp" data-value="a">
        <span data-role="dot"></span>
      </fv-radio>
      <fv-radio data-group="play-grp" data-value="b">
        <span data-role="dot"></span>
      </fv-radio>
      <fv-radio data-group="play-grp" data-value="c">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const grp = canvasElement.querySelector<HTMLElement>('[data-testid="grp"]')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');
    expect(radios[0]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('false');

    let lastValue: string | undefined;
    grp.addEventListener('change', (e) => {
      lastValue = (e as CustomEvent<{ value: string }>).detail.value;
    });

    await userEvent.click(radios[2]!);
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[2]?.getAttribute('aria-checked')).toBe('true');
    expect(lastValue).toBe('c');

    await userEvent.click(radios[1]!);
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[2]?.getAttribute('aria-checked')).toBe('false');
    expect(lastValue).toBe('b');
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-radio aria-checked="true" data-group="swap-1" data-value="x">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;

    container.innerHTML = `
      <fv-radio data-group="swap-2" data-value="a"><span data-role="dot"></span></fv-radio>
      <fv-radio data-group="swap-2" data-value="b"><span data-role="dot"></span></fv-radio>
    `;

    const radios = container.querySelectorAll<HTMLElement>('fv-radio');
    expect(radios.length).toBe(2);
    await userEvent.click(radios[0]!);
    expect(radios[0]?.getAttribute('aria-checked')).toBe('true');
    await userEvent.click(radios[1]!);
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
  },
};
