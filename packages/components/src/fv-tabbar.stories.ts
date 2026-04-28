import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, userEvent } from 'storybook/test';
import './fv-tabbar.js';

const meta: Meta = {
  title: 'Components/Tabbar',
  component: 'fv-tabbar',
};
export default meta;

type Story = StoryObj;

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

export const Default: Story = {
  render: (): TemplateResult => html`
    <fv-tabbar aria-label="Main navigation">
      <a href="/live" role="tab" data-value="live" aria-current="page">
        ${liveIcon}<span data-role="label">Live</span><span data-role="indicator"></span>
      </a>
      <a href="/fixtures" role="tab" data-value="fixtures">
        ${fixturesIcon}<span data-role="label">Fixtures</span><span data-role="indicator"></span>
      </a>
      <a href="/observe" role="tab" data-value="observe">
        ${observeIcon}<span data-role="label">Observe</span><span data-role="indicator"></span>
      </a>
      <a href="/follow" role="tab" data-value="follow">
        ${followIcon}<span data-role="label">Follow</span><span data-role="indicator"></span>
      </a>
      <a href="/you" role="tab" data-value="you">
        ${youIcon}<span data-role="label">You</span><span data-role="indicator"></span>
      </a>
    </fv-tabbar>
  `,
};

export const FixturesActive: Story = {
  render: (): TemplateResult => html`
    <fv-tabbar aria-label="Main navigation">
      <a href="/live" role="tab" data-value="live">
        ${liveIcon}<span data-role="label">Live</span><span data-role="indicator"></span>
      </a>
      <a href="/fixtures" role="tab" data-value="fixtures" aria-current="page">
        ${fixturesIcon}<span data-role="label">Fixtures</span><span data-role="indicator"></span>
      </a>
      <a href="/observe" role="tab" data-value="observe">
        ${observeIcon}<span data-role="label">Observe</span><span data-role="indicator"></span>
      </a>
      <a href="/follow" role="tab" data-value="follow">
        ${followIcon}<span data-role="label">Follow</span><span data-role="indicator"></span>
      </a>
      <a href="/you" role="tab" data-value="you">
        ${youIcon}<span data-role="label">You</span><span data-role="indicator"></span>
      </a>
    </fv-tabbar>
  `,
};

export const ButtonTabs: Story = {
  render: (): TemplateResult => html`
    <fv-tabbar aria-label="Section">
      <button type="button" role="tab" data-value="live" aria-current="page">
        ${liveIcon}<span data-role="label">Live</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="fixtures">
        ${fixturesIcon}<span data-role="label">Fixtures</span><span data-role="indicator"></span>
      </button>
      <button type="button" role="tab" data-value="observe">
        ${observeIcon}<span data-role="label">Observe</span><span data-role="indicator"></span>
      </button>
    </fv-tabbar>
  `,
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
    expect(tabs[0]?.getAttribute('aria-current')).toBe('page');

    await userEvent.click(tabs[2]!);
    expect(tabs[0]?.getAttribute('aria-current')).toBeNull();
    expect(tabs[2]?.getAttribute('aria-current')).toBe('page');
    expect(lastValue).toBe('c');

    await userEvent.click(tabs[1]!);
    expect(tabs[1]?.getAttribute('aria-current')).toBe('page');
    expect(tabs[2]?.getAttribute('aria-current')).toBeNull();
    expect(lastValue).toBe('b');
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
    await userEvent.click(tabs[1]!);
    expect(tabs[0]?.getAttribute('aria-current')).toBeNull();
    expect(tabs[1]?.getAttribute('aria-current')).toBe('page');
  },
};
