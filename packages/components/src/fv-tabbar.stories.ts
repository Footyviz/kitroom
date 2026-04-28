import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-icon-text.js';
import './fv-tabbar.js';

type TabValue = 'live' | 'fixtures' | 'observe' | 'follow' | 'you';

type TabbarArgs = {
  current: TabValue;
};

const meta: Meta<TabbarArgs> = {
  title: 'Components/Tabbar',
  component: 'fv-tabbar',
  argTypes: {
    current: {
      control: { type: 'select' },
      options: ['live', 'fixtures', 'observe', 'follow', 'you'],
      description: 'data-value of the tab marked aria-current="page"',
    },
  },
};
export default meta;

type Story = StoryObj<TabbarArgs>;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

// Inline-SVG icon snippets used in the copy-paste source. Kept compact
// (single-line per <svg>) so the visible HTML doesn't dwarf the structure.
const ICONS_HTML = {
  live: '<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5"/><path d="M12 5v14"/><circle cx="12" cy="12" r="2.2"/><circle cx="12" cy="12" r="4.2" opacity=".35"/></svg>',
  fixtures: '<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="7.5" height="14" rx="1.2"/><rect x="13.5" y="5" width="7.5" height="14" rx="1.2"/><path d="M6.5 10h1.5M6.5 14h1.5M16 10h1.5M16 14h1.5"/></svg>',
  observe: '<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.3 15.3 20 20"/><path d="M7.5 10.5h6M10.5 7.5v6" opacity=".55"/></svg>',
  follow: '<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12v17l-6-4-6 4Z"/><path d="M9 8h6M9 11h6" opacity=".55"/></svg>',
  you: '<svg data-role="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3 4 6v4l3-1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9l3 1V6l-4-3"/><path d="M8 3c0 2 1.8 3.5 4 3.5S16 5 16 3"/></svg>',
};

const liveIcon = html`
  <svg data-role="icon" viewBox="0 0 24 24">
    <rect x="3" y="5" width="18" height="14" rx="1.5"></rect>
    <path d="M12 5v14"></path>
    <circle cx="12" cy="12" r="2.2"></circle>
    <circle cx="12" cy="12" r="4.2" opacity=".35"></circle>
  </svg>
`;

const fixturesIcon = html`
  <svg data-role="icon" viewBox="0 0 24 24">
    <rect x="3" y="5" width="7.5" height="14" rx="1.2"></rect>
    <rect x="13.5" y="5" width="7.5" height="14" rx="1.2"></rect>
    <path d="M6.5 10h1.5M6.5 14h1.5M16 10h1.5M16 14h1.5"></path>
  </svg>
`;

const observeIcon = html`
  <svg data-role="icon" viewBox="0 0 24 24">
    <circle cx="10.5" cy="10.5" r="6.5"></circle>
    <path d="M15.3 15.3 20 20"></path>
    <path d="M7.5 10.5h6M10.5 7.5v6" opacity=".55"></path>
  </svg>
`;

const followIcon = html`
  <svg data-role="icon" viewBox="0 0 24 24">
    <path d="M6 3h12v17l-6-4-6 4Z"></path>
    <path d="M9 8h6M9 11h6" opacity=".55"></path>
  </svg>
`;

const youIcon = html`
  <svg data-role="icon" viewBox="0 0 24 24">
    <path d="M8 3 4 6v4l3-1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9l3 1V6l-4-3"></path>
    <path d="M8 3c0 2 1.8 3.5 4 3.5S16 5 16 3"></path>
  </svg>
`;

const TABS: { value: TabValue; href: string; label: string; iconHtml: string; icon: TemplateResult }[] = [
  { value: 'live',     href: '/live',     label: 'Live',     iconHtml: ICONS_HTML.live,     icon: liveIcon },
  { value: 'fixtures', href: '/fixtures', label: 'Fixtures', iconHtml: ICONS_HTML.fixtures, icon: fixturesIcon },
  { value: 'observe',  href: '/observe',  label: 'Observe',  iconHtml: ICONS_HTML.observe,  icon: observeIcon },
  { value: 'follow',   href: '/follow',   label: 'Follow',   iconHtml: ICONS_HTML.follow,   icon: followIcon },
  { value: 'you',      href: '/you',      label: 'You',      iconHtml: ICONS_HTML.you,      icon: youIcon },
];

const tabbarHtml = (
  args: TabbarArgs,
  ariaLabel: string,
  use: 'a' | 'button',
  tabs: typeof TABS,
): string => {
  const items = tabs
    .map((t) => {
      const current = t.value === args.current ? ' aria-current="page"' : '';
      const open = use === 'a'
        ? `<a href="${t.href}" role="tab" data-value="${t.value}"${current}>`
        : `<button type="button" role="tab" data-value="${t.value}"${current}>`;
      const close = use === 'a' ? '</a>' : '</button>';
      return `  ${open}
    <fv-icon-text>
      ${t.iconHtml}
      <span data-role="label">${t.label}</span>
    </fv-icon-text>
    <span data-role="indicator"></span>
  ${close}`;
    })
    .join('\n');
  return `<fv-tabbar aria-label="${ariaLabel}">
${items}
</fv-tabbar>`;
};

const renderTabbar = (
  args: TabbarArgs,
  ariaLabel: string,
  use: 'a' | 'button',
  tabs: typeof TABS,
): TemplateResult => html`
  <fv-tabbar aria-label="${ariaLabel}">
    ${tabs.map((t) => {
      const current = t.value === args.current ? 'page' : nothing;
      const inner = html`
        <fv-icon-text>
          ${t.icon}
          <span data-role="label">${t.label}</span>
        </fv-icon-text>
        <span data-role="indicator"></span>
      `;
      return use === 'a'
        ? html`<a href="${t.href}" role="tab" data-value="${t.value}" aria-current="${current}">${inner}</a>`
        : html`<button type="button" role="tab" data-value="${t.value}" aria-current="${current}">${inner}</button>`;
    })}
  </fv-tabbar>
`;

const dynamicSrc = (ariaLabel: string, use: 'a' | 'button', tabs = TABS) => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: TabbarArgs }) => tabbarHtml(ctx.args, ariaLabel, use, tabs),
    },
  },
});

export const Default: Story = {
  args: { current: 'live' },
  render: (args) => renderTabbar(args, 'Main navigation', 'a', TABS),
  parameters: dynamicSrc('Main navigation', 'a'),
};

export const ButtonTabs: Story = {
  args: { current: 'live' },
  argTypes: {
    current: { control: { type: 'select' }, options: ['live', 'fixtures', 'observe'] },
  },
  render: (args) => renderTabbar(args, 'Section', 'button', TABS.slice(0, 3)),
  parameters: dynamicSrc('Section', 'button', TABS.slice(0, 3)),
};

export const Playground: Story = {
  args: { current: 'fixtures' },
  render: (args) => renderTabbar(args, 'Main navigation', 'a', TABS),
  parameters: dynamicSrc('Main navigation', 'a'),
};

export const ClickingMovesActive: Story = {
  render: (): TemplateResult => html`
    <fv-tabbar aria-label="Test" data-testid="bar">
      <button type="button" role="tab" data-value="a" aria-current="page">
        <span data-role="label">A</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="b">
        <span data-role="label">B</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="c">
        <span data-role="label">C</span><span data-role="indicator"></span>
      </button>
    </fv-tabbar>
  `,
  play: async ({ canvasElement }) => {
    const bar = canvasElement.querySelector<HTMLElement>('[data-testid="bar"]')!;
    let lastValue: string | undefined;
    bar.addEventListener('change', (e) => {
      lastValue = (e as CustomEvent<{ value: string }>).detail.value;
    });

    const tabs = bar.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    // Click tabs[2] — proves the not-yet-current tab becomes current
    // AND that tabs[0] (rendered as current) gets cleared.
    expect(tabs[0]?.getAttribute('aria-current')).not.toBeNull();
    expect(tabs[2]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[2]!);
    expect(tabs[0]?.getAttribute('aria-current')).toBeNull();
    expect(tabs[2]?.getAttribute('aria-current')).toBe('page');
    expect(lastValue).toBe('c');

    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[1]!);
    expect(tabs[1]?.getAttribute('aria-current')).toBe('page');
    expect(tabs[2]?.getAttribute('aria-current')).toBeNull();
    expect(lastValue).toBe('b');
  },
};

export const ChangeEventBubbles: Story = {
  render: (): TemplateResult => html`
    <div data-testid="parent">
      <fv-tabbar aria-label="Bubble">
        <button type="button" role="tab" data-value="a" aria-current="page">
          <span data-role="label">A</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="b">
          <span data-role="label">B</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const handler = fn();
    document.body.addEventListener('change', handler);

    const tabs = canvasElement.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    await userEvent.click(tabs[1]!);

    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{ value: string }>;
    expect(event.detail).toEqual({ value: 'b' });
    expect(event.bubbles).toBe(true);

    document.body.removeEventListener('change', handler);
  },
};

export const DisabledTabsAreNotActivated: Story = {
  render: (): TemplateResult => html`
    <fv-tabbar aria-label="Disabled" data-testid="bar">
      <button type="button" role="tab" data-value="a" aria-current="page">
        <span data-role="label">A</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="b" aria-disabled="true">
        <span data-role="label">B</span><span data-role="indicator"></span>
      </button>
    </fv-tabbar>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    // Whole point: clicking the disabled tab MUST NOT change anything.
    // Capture the rendered state, click, assert state is identical.
    expect(tabs[0]?.getAttribute('aria-current')).toBe('page');
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[1]!);
    expect(tabs[0]?.getAttribute('aria-current')).toBe('page');
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
  },
};

export const CleansUpOnDisconnect: Story = {
  render: (): TemplateResult => html`
    <div data-testid="host">
      <fv-tabbar aria-label="Cleanup">
        <button type="button" role="tab" data-value="a" aria-current="page">
          <span data-role="label">A</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="b">
          <span data-role="label">B</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const bar = host.querySelector<HTMLElement>('fv-tabbar')!;
    const tabs = bar.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    // Sanity while connected.
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[1]!);
    expect(tabs[1]?.getAttribute('aria-current')).toBe('page');

    host.removeChild(bar);

    const spy = fn();
    document.addEventListener('change', spy);
    tabs[0]!.click();
    expect(spy).not.toHaveBeenCalled();
    // tabs[0] WAS current (set by the swap when tabs[1] became current
    // cleared it). Detached click must not re-promote it.
    expect(tabs[0]?.getAttribute('aria-current')).toBeNull();
    document.removeEventListener('change', spy);
  },
};

export const HandlesEmptyTabbar: Story = {
  render: (): TemplateResult => html`
    <fv-tabbar aria-label="Empty" data-testid="bar"></fv-tabbar>
  `,
  play: async ({ canvasElement }) => {
    // No tabs — clicking the bar should not throw, role still set.
    const bar = canvasElement.querySelector<HTMLElement>('[data-testid="bar"]')!;
    await userEvent.click(bar);
    expect(bar.getAttribute('role')).toBe('tablist');
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-tabbar aria-label="Initial">
        <button type="button" role="tab" data-value="x" aria-current="page">
          <span data-role="label">X</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = `
      <fv-tabbar aria-label="Swapped">
        <button type="button" role="tab" data-value="one" aria-current="page">
          <span data-role="label">One</span><span data-role="indicator"></span>
        </button>
        <button type="button" role="tab" data-value="two">
          <span data-role="label">Two</span><span data-role="indicator"></span>
        </button>
      </fv-tabbar>
    `;
    const bar = container.querySelector<HTMLElement>('fv-tabbar')!;
    const tabs = bar.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    expect(tabs[1]?.getAttribute('aria-current')).toBeNull();
    await userEvent.click(tabs[1]!);
    // Clicking tabs[1] both promotes it AND clears tabs[0] — proves the
    // swapped-in <fv-tabbar> upgraded and wired up its handler.
    expect(tabs[0]?.getAttribute('aria-current')).toBeNull();
    expect(tabs[1]?.getAttribute('aria-current')).toBe('page');
  },
};
