import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-radio.js';
import './fv-radio-group.js';

type RadioOption = { value: string; label: string };

type RadioGroupArgs = {
  selectedValue: string;
  direction: 'column' | 'row';
};

const meta: Meta<RadioGroupArgs> = {
  title: 'Kitroom/RadioGroup',
  component: 'fv-radio-group',
  argTypes: {
    selectedValue: {
      control: { type: 'inline-radio' },
      description: 'data-selected-value — which child fv-radio gets aria-checked="true"',
    },
    direction: {
      control: { type: 'inline-radio' },
      options: ['column', 'row'],
    },
  },
};
export default meta;

type Story = StoryObj<RadioGroupArgs>;

const compsOptions: RadioOption[] = [
  { value: 'all', label: 'All comps' },
  { value: 'followed', label: 'Followed only' },
  { value: 'domestic', label: 'Domestic' },
];

const groupHtml = (
  args: RadioGroupArgs,
  ariaLabel: string,
  options: RadioOption[],
): string => {
  const items = options
    .map(
      (o) =>
        `  <label>
    <fv-radio data-value="${o.value}" aria-checked="${o.value === args.selectedValue ? 'true' : 'false'}">
      <span data-role="dot"></span>
    </fv-radio>
    ${o.label}
  </label>`,
    )
    .join('\n');
  const dirAttr = args.direction !== 'column' ? ` data-direction="${args.direction}"` : '';
  return `<fv-radio-group data-selected-value="${args.selectedValue}" aria-label="${ariaLabel}"${dirAttr}>
${items}
</fv-radio-group>`;
};

const renderGroup = (
  args: RadioGroupArgs,
  ariaLabel: string,
  options: RadioOption[],
): TemplateResult => html`
  <fv-radio-group
    data-selected-value="${args.selectedValue}"
    aria-label="${ariaLabel}"
    data-direction="${args.direction !== 'column' ? args.direction : nothing}"
  >
    ${options.map(
      (o) => html`
        <label>
          <fv-radio data-value="${o.value}" aria-checked="${o.value === args.selectedValue ? 'true' : 'false'}">
            <span data-role="dot"></span>
          </fv-radio>
          ${o.label}
        </label>
      `,
    )}
  </fv-radio-group>
`;

const dynamicSrc = (ariaLabel: string, options: RadioOption[]) => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: RadioGroupArgs }) =>
        groupHtml(ctx.args, ariaLabel, options),
    },
  },
});

const compsArgTypes = {
  selectedValue: {
    control: { type: 'inline-radio' as const },
    options: ['all', 'followed', 'domestic'],
  },
};

export const Default: Story = {
  args: { selectedValue: 'all', direction: 'column' },
  argTypes: compsArgTypes,
  render: (args) => renderGroup(args, 'Competition filter', compsOptions),
  parameters: dynamicSrc('Competition filter', compsOptions),
};

export const Playground: Story = {
  args: { selectedValue: 'followed', direction: 'column' },
  argTypes: compsArgTypes,
  render: (args) => renderGroup(args, 'Competition filter', compsOptions),
  parameters: dynamicSrc('Competition filter', compsOptions),
};

// Test stories — fixed render shape.

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

export const ChildClickUpdatesGroupAttribute: Story = {
  args: { selectedValue: 'all', direction: 'column' },
  render: () => html`
    <fv-radio-group data-testid="grp" data-selected-value="all" aria-label="Test">
      <label>
        <fv-radio data-value="all" aria-checked="true"><span data-role="dot"></span></fv-radio>
        All
      </label>
      <label>
        <fv-radio data-value="followed" aria-checked="false"><span data-role="dot"></span></fv-radio>
        Followed
      </label>
    </fv-radio-group>
  `,
  parameters: src(`<fv-radio-group data-selected-value="all" aria-label="Competition filter">
  <label>
    <fv-radio data-value="all" aria-checked="true"><span data-role="dot"></span></fv-radio>
    All comps
  </label>
  <label>
    <fv-radio data-value="followed" aria-checked="false"><span data-role="dot"></span></fv-radio>
    Followed only
  </label>
</fv-radio-group>`),
  play: async ({ canvasElement }) => {
    const grp = canvasElement.querySelector<HTMLElement>('[data-testid="grp"]')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');

    expect(grp.getAttribute('data-selected-value')).toBe('all');
    expect(radios[0]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('false');

    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);

    // Group's own attribute is updated by the bubbled child event.
    expect(grp.getAttribute('data-selected-value')).toBe('followed');
    // Sibling sync: previous selection cleared, new one set.
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
  },
};

export const ProgrammaticAttrChangeBroadcastsAndEmits: Story = {
  args: { selectedValue: 'a', direction: 'column' },
  render: () => html`
    <fv-radio-group data-testid="grp" data-selected-value="a" aria-label="Test">
      <label>
        <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
        A
      </label>
      <label>
        <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
        B
      </label>
    </fv-radio-group>
  `,
  parameters: src(`<!-- Server flips data-selected-value via htmx -->
<fv-radio-group data-selected-value="b" aria-label="Test">
  <label>
    <fv-radio data-value="a" aria-checked="false"><span data-role="dot"></span></fv-radio>
    A
  </label>
  <label>
    <fv-radio data-value="b" aria-checked="true"><span data-role="dot"></span></fv-radio>
    B
  </label>
</fv-radio-group>`),
  play: async ({ canvasElement }) => {
    const grp = canvasElement.querySelector<HTMLElement>('[data-testid="grp"]')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');

    const handler = fn();
    document.body.addEventListener('change', handler);

    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    grp.setAttribute('data-selected-value', 'b');

    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');

    // Self-emit on programmatic change (bubbles to body).
    expect(handler).toHaveBeenCalled();
    const event = handler.mock.calls.at(-1)?.[0] as CustomEvent<{ value: string }>;
    expect(event.detail.value).toBe('b');

    document.body.removeEventListener('change', handler);
  },
};

export const ChildClickDoesNotDoubleEmit: Story = {
  args: { selectedValue: 'a', direction: 'column' },
  render: () => html`
    <fv-radio-group data-testid="grp" data-selected-value="a" aria-label="Test">
      <label>
        <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
        A
      </label>
      <label>
        <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
        B
      </label>
    </fv-radio-group>
  `,
  parameters: src(`<fv-radio-group data-selected-value="a" aria-label="Test">
  <label>
    <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
    A
  </label>
  <label>
    <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
    B
  </label>
</fv-radio-group>`),
  play: async ({ canvasElement }) => {
    // The group catches the child's bubbling change to update its
    // attribute, but it must NOT re-emit (consumers would see two
    // change events at body level for one user click).
    const grp = canvasElement.querySelector<HTMLElement>('[data-testid="grp"]')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');

    const counts = { childChange: 0, groupChange: 0 };
    radios.forEach((r) =>
      r.addEventListener('change', () => {
        counts.childChange++;
      }),
    );
    grp.addEventListener('change', () => {
      counts.groupChange++;
    });

    await userEvent.click(radios[1]!);

    expect(counts.childChange).toBe(1);
    // The handler attached to grp will fire from the bubbling child
    // event AND from any group self-emit. Bubbling counts as 1; we
    // don't want 2 here.
    expect(counts.groupChange).toBe(1);
  },
};

export const CleansUpOnDisconnect: Story = {
  args: { selectedValue: 'a', direction: 'column' },
  render: () => html`
    <div data-testid="host">
      <fv-radio-group data-selected-value="a" aria-label="Cleanup">
        <label>
          <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
          A
        </label>
        <label>
          <fv-radio data-value="b" aria-checked="false"><span data-role="dot"></span></fv-radio>
          B
        </label>
      </fv-radio-group>
    </div>
  `,
  parameters: src(`<div>…cleanup test scaffold…</div>`),
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const grp = host.querySelector<HTMLElement>('fv-radio-group')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');

    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);
    expect(grp.getAttribute('data-selected-value')).toBe('b');

    host.removeChild(grp);

    // Detached radio's bubbling change should not propagate up to a
    // group listener anymore (the group is gone). No assertions about
    // the group at this point; the test is that nothing throws.
    radios[0]!.dispatchEvent(new CustomEvent('change', {
      detail: { value: 'a' },
      bubbles: true,
    }));
    // Verifying no surprise — the (detached) group's attribute is still
    // 'b' because nothing wrote to it after disconnect.
    expect(grp.getAttribute('data-selected-value')).toBe('b');
  },
};

export const SurvivesHtmxSwap: Story = {
  args: { selectedValue: 'a', direction: 'column' },
  render: () => html`
    <div data-testid="container">
      <fv-radio-group data-selected-value="a" aria-label="Initial">
        <label>
          <fv-radio data-value="a" aria-checked="true"><span data-role="dot"></span></fv-radio>
          A
        </label>
      </fv-radio-group>
    </div>
  `,
  parameters: src(`<div>…htmx swap scaffold…</div>`),
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = `
      <fv-radio-group data-selected-value="x" aria-label="Swapped">
        <label>
          <fv-radio data-value="x" aria-checked="false"><span data-role="dot"></span></fv-radio>
          X
        </label>
        <label>
          <fv-radio data-value="y" aria-checked="false"><span data-role="dot"></span></fv-radio>
          Y
        </label>
      </fv-radio-group>
    `;

    const grp = container.querySelector<HTMLElement>('fv-radio-group')!;
    const radios = grp.querySelectorAll<HTMLElement>('fv-radio');

    // On connect the group should have synced aria-checked from
    // data-selected-value="x" — radio[0] becomes true even though the
    // server-rendered HTML had it as false.
    expect(radios[0]?.getAttribute('aria-checked')).toBe('true');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('false');

    expect(radios[1]?.getAttribute('aria-checked')).not.toBe('true');
    await userEvent.click(radios[1]!);
    expect(grp.getAttribute('data-selected-value')).toBe('y');
    expect(radios[0]?.getAttribute('aria-checked')).toBe('false');
    expect(radios[1]?.getAttribute('aria-checked')).toBe('true');
  },
};
