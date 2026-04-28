import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-radio.js';

const meta: Meta = {
  title: 'Components/Radio',
  component: 'fv-radio',
};
export default meta;

type Story = StoryObj;

const labelStyle = 'display: inline-flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;';

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

export const Default: Story = {
  render: (): TemplateResult => html`
    <label style="${labelStyle}">
      <fv-radio data-group="story-default" data-value="all">
        <span data-role="dot"></span>
      </fv-radio>
      All comps
    </label>
  `,
  parameters: src(`<label>
  <fv-radio data-group="comps" data-value="all">
    <span data-role="dot"></span>
  </fv-radio>
  All comps
</label>`),
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
  parameters: src(`<label>
  <fv-radio aria-checked="true" data-group="comps" data-value="all">
    <span data-role="dot"></span>
  </fv-radio>
  All comps
</label>`),
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
  parameters: src(`<div role="radiogroup" aria-label="Competition filter">
  <label>
    <fv-radio aria-checked="true" data-group="comps" data-value="all">
      <span data-role="dot"></span>
    </fv-radio>
    All comps
  </label>
  <label>
    <fv-radio data-group="comps" data-value="followed">
      <span data-role="dot"></span>
    </fv-radio>
    Followed only
  </label>
  <label>
    <fv-radio data-group="comps" data-value="domestic">
      <span data-role="dot"></span>
    </fv-radio>
    Domestic
  </label>
</div>`),
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
  parameters: src(`<label>
  <fv-radio aria-disabled="true" data-group="comps" data-value="ucl">
    <span data-role="dot"></span>
  </fv-radio>
  Champions League (premium)
</label>`),
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

    let lastValue: string | undefined;
    grp.addEventListener('change', (e) => {
      lastValue = (e as CustomEvent<{ value: string }>).detail.value;
    });

    // Click radios[2] — proves a not-yet-checked radio becomes checked
    // AND that radios[0] (rendered as checked) gets cleared.
    expect(radios[0]?.getAttribute('aria-checked')).not.toBe('false');
    expect(radios[2]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[2]!);
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[2]?.getAttribute('aria-checked')).toBe('true');
    expect(lastValue).toBe('c');

    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[2]?.getAttribute('aria-checked')).toBe('false');
    expect(lastValue).toBe('b');
  },
};

export const CleansUpOnDisconnect: Story = {
  render: (): TemplateResult => html`
    <div data-testid="host">
      <fv-radio data-group="cleanup-grp" data-value="x">
        <span data-role="dot"></span>
      </fv-radio>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const radio = host.querySelector<HTMLElement>('fv-radio')!;

    expect(radio.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radio);
    expect(radio.getAttribute('aria-checked')).toBe('true');

    host.removeChild(radio);

    const spy = fn();
    document.addEventListener('change', spy);
    radio.click();
    expect(spy).not.toHaveBeenCalled();
    document.removeEventListener('change', spy);
  },
};

export const HandlesMissingDot: Story = {
  render: (): TemplateResult => html`
    <fv-radio data-group="missing-dot" data-value="x" data-testid="r"></fv-radio>
  `,
  play: async ({ canvasElement }) => {
    // The dot child is documented as required, but the component
    // must not crash if a server template forgets it.
    const radio = canvasElement.querySelector<HTMLElement>('[data-testid="r"]')!;
    expect(radio.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radio);
    expect(radio.getAttribute('aria-checked')).toBe('true');
  },
};

export const HandlesMissingDataGroup: Story = {
  render: (): TemplateResult => html`
    <fv-radio data-value="standalone" data-testid="lone">
      <span data-role="dot"></span>
    </fv-radio>
    <fv-radio data-value="other" data-testid="other">
      <span data-role="dot"></span>
    </fv-radio>
  `,
  play: async ({ canvasElement }) => {
    // Without data-group, selecting a radio must not affect any peer.
    const lone = canvasElement.querySelector<HTMLElement>('[data-testid="lone"]')!;
    const other = canvasElement.querySelector<HTMLElement>('[data-testid="other"]')!;
    expect(lone.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(lone);
    expect(lone.getAttribute('aria-checked')).toBe('true');
    // `other` was rendered unchecked — assert it stayed unchecked
    // (proving the click on `lone` didn't accidentally affect a sibling).
    expect(other.getAttribute('aria-checked')).toBe('false');
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
    expect(radios[0]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[0]!);
    expect(radios[0]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);
    // Clicking radios[1] both selects it AND clears radios[0] (proves the
    // swapped-in instances participate in the same data-group correctly).
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
  },
};
