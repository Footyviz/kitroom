import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-input.js';
import './fv-icon.js';

type Variant = 'default' | 'search';
type Size = 'default' | 'sm';

type InputArgs = {
  variant: Variant;
  size: Size;
  disabled: boolean;
  placeholder: string;
  value: string;
  withIcon: boolean;
  kbd: string;
};

const meta: Meta<InputArgs> = {
  title: 'Components/Input',
  component: 'fv-input',
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['default', 'search'],
      description: 'data-variant — search adds the elevated shadow stack',
    },
    size: {
      control: { type: 'inline-radio' },
      options: ['default', 'sm'],
      description: 'data-size',
    },
    disabled: { control: 'boolean', description: 'aria-disabled (and disabled on the inner input)' },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    withIcon: { control: 'boolean', description: 'Render a leading <fv-icon name="search"/>' },
    kbd: { control: 'text', description: 'Trailing <kbd> hint text (empty = none)' },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<InputArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const inputHtml = (args: InputArgs): string => {
  const hostAttrs: string[] = [];
  if (args.variant !== 'default') hostAttrs.push(`data-variant="${args.variant}"`);
  if (args.size !== 'default') hostAttrs.push(`data-size="${args.size}"`);
  if (args.disabled) hostAttrs.push('aria-disabled="true"');

  const inputAttrs: string[] = ['type="text"'];
  if (args.placeholder) inputAttrs.push(`placeholder="${args.placeholder}"`);
  if (args.value) inputAttrs.push(`value="${args.value}"`);
  if (args.disabled) inputAttrs.push('disabled');

  const lines = [`<fv-input${hostAttrs.length ? ' ' + hostAttrs.join(' ') : ''}>`];
  if (args.withIcon) lines.push('  <fv-icon name="search"></fv-icon>');
  lines.push(`  <input ${inputAttrs.join(' ')} />`);
  if (args.kbd) lines.push(`  <kbd>${args.kbd}</kbd>`);
  lines.push('</fv-input>');
  return lines.join('\n');
};

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: InputArgs }) => inputHtml(ctx.args),
    },
  },
});

const renderInput = (args: InputArgs): TemplateResult => html`
  <fv-input
    data-variant="${args.variant !== 'default' ? args.variant : nothing}"
    data-size="${args.size !== 'default' ? args.size : nothing}"
    aria-disabled="${args.disabled ? 'true' : nothing}"
  >
    ${args.withIcon ? html`<fv-icon name="search"></fv-icon>` : nothing}
    <input
      type="text"
      placeholder="${args.placeholder || nothing}"
      .value="${args.value}"
      ?disabled="${args.disabled}"
    />
    ${args.kbd ? html`<kbd>${args.kbd}</kbd>` : nothing}
  </fv-input>
`;

export const Playground: Story = {
  args: {
    variant: 'search',
    size: 'default',
    disabled: false,
    placeholder: 'Search matches, teams, players',
    value: '',
    withIcon: true,
    kbd: '⌘K',
  },
  render: renderInput,
  parameters: { ...dynamicSrc(), controls: { disable: false } },
};

export const Default: Story = {
  render: (): TemplateResult => html`
    <fv-input>
      <input type="text" placeholder="Player name" />
    </fv-input>
  `,
  parameters: src(`<fv-input>
  <input type="text" placeholder="Player name" />
</fv-input>`),
};

export const Search: Story = {
  render: (): TemplateResult => html`
    <fv-input data-variant="search" style="width: 260px;">
      <fv-icon name="search"></fv-icon>
      <input type="text" placeholder="Search matches, teams, players" />
      <kbd>⌘K</kbd>
    </fv-input>
  `,
  parameters: src(`<fv-input data-variant="search" style="width: 260px;">
  <fv-icon name="search"></fv-icon>
  <input type="text" placeholder="Search matches, teams, players" />
  <kbd>⌘K</kbd>
</fv-input>`),
};

export const Focused: Story = {
  render: (): TemplateResult => html`
    <fv-input style="width: 180px;">
      <input type="text" .value="${'Saka'}" />
      <kbd data-variant="inverse">Enter</kbd>
    </fv-input>
  `,
  parameters: src(`<fv-input style="width: 180px;">
  <input type="text" value="Saka" />
  <kbd data-variant="inverse">Enter</kbd>
</fv-input>`),
  play: async ({ canvasElement }) => {
    // Native autofocus from a render template is unreliable across
    // environments. Focus the inner input explicitly so the focused
    // chrome (border + ring) is visible in the snapshot.
    const input = canvasElement.querySelector<HTMLInputElement>('fv-input > input')!;
    input.focus();
  },
};

export const Sizes: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
      <fv-input data-size="sm">
        <input type="text" placeholder="Small" />
      </fv-input>
      <fv-input>
        <input type="text" placeholder="Default" />
      </fv-input>
    </div>
  `,
  parameters: src(`<fv-input data-size="sm"><input type="text" placeholder="Small" /></fv-input>
<fv-input><input type="text" placeholder="Default" /></fv-input>`),
};

export const Disabled: Story = {
  render: (): TemplateResult => html`
    <fv-input aria-disabled="true">
      <fv-icon name="search"></fv-icon>
      <input type="text" placeholder="Search…" disabled />
    </fv-input>
  `,
  parameters: src(`<fv-input aria-disabled="true">
  <fv-icon name="search"></fv-icon>
  <input type="text" placeholder="Search…" disabled />
</fv-input>`),
};

export const OnDark: Story = {
  render: (): TemplateResult => html`
    <div class="theme-dark" data-theme="dark" style="background: var(--bg); color: var(--fg); padding: 14px 16px; border-radius: 14px; display: flex; gap: 14px; flex-wrap: wrap; align-items: center;">
      <fv-input style="width: 240px;">
        <fv-icon name="search"></fv-icon>
        <input type="text" placeholder="Search…" />
        <kbd>⌘K</kbd>
      </fv-input>
      <fv-input>
        <input type="text" .value="${'Saka'}" />
        <kbd data-variant="inverse">Enter</kbd>
      </fv-input>
    </div>
  `,
  parameters: src(`<!-- Apps usually flip dark globally with <html data-theme="dark">.
     Inside Storybook we use class="theme-dark" on a wrapper so a single
     story can demo both themes side by side; tokens.css supports both. -->
<div class="theme-dark">
  <fv-input>
    <fv-icon name="search"></fv-icon>
    <input type="text" placeholder="Search…" />
    <kbd>⌘K</kbd>
  </fv-input>
</div>`),
};

/* ------------------------- Behavior tests (play stories) ------------------------- */

export const FocusesInputOnHostClick: Story = {
  render: (): TemplateResult => html`
    <fv-input data-variant="search" style="width: 240px;">
      <fv-icon name="search"></fv-icon>
      <input type="text" placeholder="Search…" data-testid="i" />
      <kbd>⌘K</kbd>
    </fv-input>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('fv-input')!;
    const input = canvasElement.querySelector<HTMLInputElement>('[data-testid="i"]')!;
    const kbd = canvasElement.querySelector<HTMLElement>('fv-input > kbd')!;

    expect(document.activeElement).not.toBe(input);

    // Click the kbd (NOT the input) — the host should still focus the input.
    await userEvent.click(kbd);
    expect(document.activeElement).toBe(input);

    // Focus stays on the input when the host receives any other click.
    input.blur();
    await userEvent.click(host);
    expect(document.activeElement).toBe(input);
  },
};

export const InputAndChangeEventsBubble: Story = {
  render: (): TemplateResult => html`
    <div data-testid="parent">
      <fv-input>
        <input type="text" data-testid="i" />
      </fv-input>
    </div>
  `,
  play: async ({ canvasElement }) => {
    // Native input/change events bubble — htmx + the store rely on this.
    const parent = canvasElement.querySelector<HTMLElement>('[data-testid="parent"]')!;
    const input = canvasElement.querySelector<HTMLInputElement>('[data-testid="i"]')!;

    const inputHandler = fn();
    const changeHandler = fn();
    parent.addEventListener('input', inputHandler);
    parent.addEventListener('change', changeHandler);

    input.focus();
    await userEvent.type(input, 'Saka');

    expect(inputHandler).toHaveBeenCalled();
    expect(input.value).toBe('Saka');

    // change fires on blur for native <input>.
    input.blur();
    expect(changeHandler).toHaveBeenCalled();

    parent.removeEventListener('input', inputHandler);
    parent.removeEventListener('change', changeHandler);
  },
};

export const DisabledInputDoesNotFocusOnHostClick: Story = {
  render: (): TemplateResult => html`
    <fv-input aria-disabled="true">
      <input type="text" placeholder="Search…" disabled data-testid="i" />
    </fv-input>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('fv-input')!;
    const input = canvasElement.querySelector<HTMLInputElement>('[data-testid="i"]')!;

    expect(document.activeElement).not.toBe(input);
    await userEvent.click(host);
    // Native disabled input cannot receive focus, even when we call .focus().
    expect(document.activeElement).not.toBe(input);
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-input>
        <input type="text" placeholder="Initial" />
      </fv-input>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;

    // Simulate an htmx-style swap.
    container.innerHTML =
      '<fv-input data-variant="search"><fv-icon name="search"></fv-icon><input type="text" placeholder="Swapped" data-testid="i" /><kbd>⌘K</kbd></fv-input>';

    const host = container.querySelector<HTMLElement>('fv-input')!;
    const input = container.querySelector<HTMLInputElement>('[data-testid="i"]')!;
    const kbd = container.querySelector<HTMLElement>('fv-input > kbd')!;

    expect(host.dataset.variant).toBe('search');

    // The swapped-in instance should auto-upgrade and rewire the click handler.
    await userEvent.click(kbd);
    expect(document.activeElement).toBe(input);
  },
};
