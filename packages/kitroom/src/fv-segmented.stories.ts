import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-segmented.js';

type SegmentedArgs = {
  selected: string;
};

const meta: Meta<SegmentedArgs> = {
  title: 'Kitroom/Segmented',
  component: 'fv-segmented',
  argTypes: {
    selected: {
      control: { type: 'inline-radio' },
      description: 'data-value of the option marked aria-checked="true"',
    },
  },
};
export default meta;

type Story = StoryObj<SegmentedArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const segmentedHtml = (
  args: SegmentedArgs,
  ariaLabel: string,
  options: { value: string; label: string }[],
): string => {
  const buttons = options
    .map(
      (o) =>
        `  <button role="radio" data-value="${o.value}" aria-checked="${o.value === args.selected ? 'true' : 'false'}">${o.label}</button>`,
    )
    .join('\n');
  return `<fv-segmented aria-label="${ariaLabel}">\n${buttons}\n</fv-segmented>`;
};

const renderSegmented = (
  args: SegmentedArgs,
  ariaLabel: string,
  options: { value: string; label: string }[],
): TemplateResult => html`
  <fv-segmented aria-label="${ariaLabel}">
    ${options.map(
      (o) => html`
        <button
          role="radio"
          data-value="${o.value}"
          aria-checked="${o.value === args.selected ? 'true' : 'false'}"
        >${o.label}</button>
      `,
    )}
  </fv-segmented>
`;

const matchFilter = [
  { value: 'live', label: 'Live' },
  { value: 'today', label: 'Today' },
  { value: 'upcoming', label: 'Upcoming' },
];
const matchScope = [
  { value: 'all', label: 'All' },
  { value: 'followed', label: 'Followed' },
];

export const Default: Story = {
  args: { selected: 'live' },
  argTypes: {
    selected: { control: { type: 'inline-radio' }, options: ['live', 'today', 'upcoming'] },
  },
  render: (args) => renderSegmented(args, 'Match filter', matchFilter),
  parameters: {
    docs: {
      source: {
        language: 'html',
        transform: (_: string, ctx: { args: SegmentedArgs }) =>
          segmentedHtml(ctx.args, 'Match filter', matchFilter),
      },
    },
  },
};

export const Playground: Story = {
  args: { selected: 'today' },
  argTypes: {
    selected: { control: { type: 'inline-radio' }, options: ['live', 'today', 'upcoming'] },
  },
  render: (args) => renderSegmented(args, 'Match filter', matchFilter),
  parameters: {
    docs: {
      source: {
        language: 'html',
        transform: (_: string, ctx: { args: SegmentedArgs }) =>
          segmentedHtml(ctx.args, 'Match filter', matchFilter),
      },
    },
  },
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
  parameters: src(`<fv-segmented aria-label="Match filter">
  <button role="radio" data-value="live" aria-checked="true">Live</button>
  <button role="radio" data-value="today" aria-checked="false">Today</button>
  <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
</fv-segmented>

<fv-segmented aria-label="Match scope">
  <button role="radio" data-value="all" aria-checked="false">All</button>
  <button role="radio" data-value="followed" aria-checked="true">Followed</button>
</fv-segmented>`),
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

    // Click buttons[2] — proves the not-yet-checked option becomes checked
    // AND that the rendered-checked buttons[0] gets cleared.
    expect(buttons[0]?.getAttribute('aria-checked')).not.toBe('false');
    expect(buttons[2]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(buttons[2]!);
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('false');
    expect(buttons[2]?.getAttribute('aria-checked')).toBe('true');
    expect(lastValue).toBe('c');

    expect(buttons[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(buttons[1]!);
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('true');
    expect(buttons[2]?.getAttribute('aria-checked')).toBe('false');
    expect(lastValue).toBe('b');
  },
};

export const KeyboardArrowsMoveFocus: Story = {
  render: (): TemplateResult => html`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false">B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll<HTMLButtonElement>(
      '[data-testid="seg"] button',
    );
    buttons[0]!.focus();
    expect(document.activeElement).toBe(buttons[0]);

    await userEvent.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(buttons[1]);

    await userEvent.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(buttons[2]);

    // Wraps around
    await userEvent.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(buttons[0]);

    await userEvent.keyboard('{ArrowLeft}');
    expect(document.activeElement).toBe(buttons[2]);
  },
};

export const CleansUpOnDisconnect: Story = {
  render: (): TemplateResult => html`
    <div data-testid="host">
      <fv-segmented aria-label="Cleanup">
        <button role="radio" data-value="a" aria-checked="true">A</button>
        <button role="radio" data-value="b" aria-checked="false">B</button>
      </fv-segmented>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const seg = host.querySelector<HTMLElement>('fv-segmented')!;

    const initialButtons = seg.querySelectorAll<HTMLButtonElement>('button');
    expect(initialButtons[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(initialButtons[1]!);
    expect(initialButtons[1]?.getAttribute('aria-checked')).toBe('true');

    host.removeChild(seg);

    const spy = fn();
    document.addEventListener('change', spy);
    initialButtons[0]!.click();
    expect(spy).not.toHaveBeenCalled();
    // The detached button must keep its rendered "false" — the component
    // did not run its click handler (listener was removed on disconnect).
    expect(initialButtons[0]?.getAttribute('aria-checked')).toBe('false');
    document.removeEventListener('change', spy);
  },
};

export const HandlesEmptyGroup: Story = {
  render: (): TemplateResult => html`
    <fv-segmented aria-label="Empty" data-testid="seg"></fv-segmented>
  `,
  play: async ({ canvasElement }) => {
    // No buttons — clicking the bare host should not throw.
    const seg = canvasElement.querySelector<HTMLElement>('[data-testid="seg"]')!;
    await userEvent.click(seg);
    // role is auto-applied even when the group is empty.
    expect(seg.getAttribute('role')).toBe('radiogroup');
  },
};

export const SkipsDisabledOptionsInKeyboardNav: Story = {
  render: (): TemplateResult => html`
    <fv-segmented data-testid="seg" aria-label="Test">
      <button role="radio" data-value="a" aria-checked="true">A</button>
      <button role="radio" data-value="b" aria-checked="false" disabled>B</button>
      <button role="radio" data-value="c" aria-checked="false">C</button>
    </fv-segmented>
  `,
  parameters: src(`<!-- Disabled options stay in DOM but are skipped in arrow-key nav. -->
<fv-segmented aria-label="Match filter">
  <button role="radio" data-value="live" aria-checked="true">Live</button>
  <button role="radio" data-value="today" aria-checked="false" disabled>Today</button>
  <button role="radio" data-value="upcoming" aria-checked="false">Upcoming</button>
</fv-segmented>`),
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll<HTMLButtonElement>(
      '[data-testid="seg"] button',
    );
    buttons[0]!.focus();
    await userEvent.keyboard('{ArrowRight}');
    // B is disabled — focus should land on C, not B.
    expect(document.activeElement).toBe(buttons[2]);
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
    expect(buttons[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(buttons[1]!);
    // Clicking buttons[1] both selects it AND clears buttons[0] — proves
    // the swapped-in <fv-segmented> upgraded and wired up its handler.
    expect(buttons[0]?.getAttribute('aria-checked')).toBe('false');
    expect(buttons[1]?.getAttribute('aria-checked')).toBe('true');
  },
};
