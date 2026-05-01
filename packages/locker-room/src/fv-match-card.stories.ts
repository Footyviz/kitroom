import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, fn } from 'storybook/test';
import './fv-match-card.js';

type Status = 'live' | 'upcoming' | 'final';
type Density = 'default' | 'compact';

type CardArgs = {
  status: Status;
  density: Density;
};

const meta: Meta<CardArgs> = {
  title: 'Locker Room/MatchCard',
  component: 'fv-match-card',
  argTypes: {
    status: {
      control: { type: 'inline-radio' },
      options: ['live', 'upcoming', 'final'],
      description: 'data-status — drives chip color, score formatting, aria-live',
    },
    density: {
      control: { type: 'inline-radio' },
      options: ['default', 'compact'],
      description: 'data-density — tightens padding and shrinks fonts',
    },
  },
  parameters: {
    actions: { handles: ['fv-match-card-expand'] },
  },
};
export default meta;

type Story = StoryObj<CardArgs>;

/* ------------------------- helpers ------------------------- */

const cardWrap = (cards: TemplateResult): TemplateResult => html`
  <div style="background: var(--bg-alt); padding: 24px; min-height: 360px;">
    ${cards}
  </div>
`;

const liveCard = (): TemplateResult => html`
  <fv-match-card data-status="live">
    <header data-role="head">
      <fv-chip data-variant="live">LIVE</fv-chip>
      <fv-text data-role="time" data-variant="mono">73'</fv-text>
      <fv-text data-role="meta" data-variant="caption" data-tone="muted">
        Premier League<span data-role="dot"></span>Emirates
      </fv-text>
    </header>

    <div data-role="score">
      <fv-team data-side="home">
        <fv-crest data-code="ARS" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
      </fv-team>
      <div data-role="result">
        <fv-text data-variant="stat-md">2</fv-text>
        <fv-text data-role="sep" data-variant="stat-md" data-tone="subtle">–</fv-text>
        <fv-text data-variant="stat-md">1</fv-text>
      </div>
      <fv-team data-side="away">
        <fv-crest data-code="CHE" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
      </fv-team>
    </div>

    <div data-role="stats" role="group" aria-label="Match stats">
      <fv-stat-row data-featured>
        <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
        <fv-ratio-bar
          data-role="home-bar"
          style="--pct: 67%"
          data-tone="accent"
        ></fv-ratio-bar>
        <fv-text data-role="label" data-variant="label" data-tone="muted">xG</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 33%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
      </fv-stat-row>
      <fv-stat-row>
        <fv-text data-role="home-value" data-variant="stat-sm">58%</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 58%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="label" data-tone="muted">Possession</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 42%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">42%</fv-text>
      </fv-stat-row>
    </div>

    <footer data-role="more">
      <fv-text data-variant="body-sm">View all stats</fv-text>
      <fv-button-badge>32</fv-button-badge>
      <fv-icon name="chevron-right"></fv-icon>
    </footer>
  </fv-match-card>
`;

const upcomingCard = (): TemplateResult => html`
  <fv-match-card data-status="upcoming">
    <header data-role="head">
      <fv-chip data-variant="outline">UPCOMING</fv-chip>
      <fv-text data-role="time" data-variant="mono">SAT · 5:30 PM</fv-text>
      <fv-text data-role="meta" data-variant="caption" data-tone="muted">
        Premier League<span data-role="dot"></span>Anfield
      </fv-text>
    </header>

    <div data-role="score">
      <fv-team data-side="home">
        <fv-crest data-code="LIV" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Liverpool</fv-text>
      </fv-team>
      <div data-role="result">
        <fv-text data-variant="body" data-tone="subtle">vs</fv-text>
      </div>
      <fv-team data-side="away">
        <fv-crest data-code="MCI" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Man City</fv-text>
      </fv-team>
    </div>

    <div data-role="stats" role="group" aria-label="Form, last 5">
      <fv-stat-row data-layout="form">
        <fv-series data-role="home-form" aria-label="Liverpool last 5: W W D W W">
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="warn"></span>
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
        </fv-series>
        <fv-text data-role="label" data-variant="label" data-tone="muted">Form · L5</fv-text>
        <fv-series data-role="away-form" aria-label="Man City last 5: W W W L W">
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="pos"></span>
          <span data-pip="neg"></span>
          <span data-pip="pos"></span>
        </fv-series>
      </fv-stat-row>
    </div>

    <footer data-role="more">
      <fv-text data-variant="body-sm">Preview &amp; predicted lineups</fv-text>
      <fv-icon name="chevron-right"></fv-icon>
    </footer>
  </fv-match-card>
`;

const finalCard = (): TemplateResult => html`
  <fv-match-card data-status="final">
    <header data-role="head">
      <fv-chip data-variant="mono">FT</fv-chip>
      <fv-text data-role="time" data-variant="mono">Yesterday · 3:00 PM</fv-text>
      <fv-text data-role="meta" data-variant="caption" data-tone="muted">
        Premier League<span data-role="dot"></span>St James' Park
      </fv-text>
    </header>

    <div data-role="score">
      <fv-team data-side="home">
        <fv-crest data-code="NEW" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Newcastle</fv-text>
      </fv-team>
      <div data-role="result">
        <fv-text data-variant="stat-md">0</fv-text>
        <fv-text data-role="sep" data-variant="stat-md" data-tone="subtle">–</fv-text>
        <fv-text data-variant="stat-md">3</fv-text>
      </div>
      <fv-team data-side="away">
        <fv-crest data-code="TOT" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Tottenham</fv-text>
      </fv-team>
    </div>

    <div data-role="stats" role="group" aria-label="Match stats">
      <fv-stat-row>
        <fv-text data-role="home-value" data-variant="stat-sm">8</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 41%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="label" data-tone="muted">Shots</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 59%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">12</fv-text>
      </fv-stat-row>
      <fv-stat-row>
        <fv-text data-role="home-value" data-variant="stat-sm">47%</fv-text>
        <fv-ratio-bar data-role="home-bar" style="--pct: 47%"></fv-ratio-bar>
        <fv-text data-role="label" data-variant="label" data-tone="muted">Possession</fv-text>
        <fv-ratio-bar data-role="away-bar" style="--pct: 53%" data-direction="rtl"></fv-ratio-bar>
        <fv-text data-role="away-value" data-variant="stat-sm">53%</fv-text>
      </fv-stat-row>
    </div>

    <footer data-role="more">
      <fv-text data-variant="body-sm">Match report</fv-text>
      <fv-button-badge>32</fv-button-badge>
      <fv-icon name="chevron-right"></fv-icon>
    </footer>
  </fv-match-card>
`;

const compactCard = (): TemplateResult => html`
  <fv-match-card data-status="final" data-density="compact">
    <header data-role="head">
      <fv-chip data-variant="mono">FT</fv-chip>
      <fv-text data-role="time" data-variant="mono">Yesterday</fv-text>
      <fv-text data-role="meta" data-variant="caption" data-tone="muted">Premier League</fv-text>
    </header>

    <div data-role="score">
      <fv-team data-side="home" data-density="compact">
        <fv-crest data-code="NEW" data-size="md"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Newcastle</fv-text>
      </fv-team>
      <div data-role="result">
        <fv-text data-variant="stat-md">0</fv-text>
        <fv-text data-role="sep" data-variant="stat-md" data-tone="subtle">–</fv-text>
        <fv-text data-variant="stat-md">3</fv-text>
      </div>
      <fv-team data-side="away" data-density="compact">
        <fv-crest data-code="TOT" data-size="md"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Tottenham</fv-text>
      </fv-team>
    </div>

    <footer data-role="more">
      <fv-text data-variant="body-sm">Match report</fv-text>
      <fv-button-badge>32</fv-button-badge>
      <fv-icon name="chevron-right"></fv-icon>
    </footer>
  </fv-match-card>
`;

/* ------------------------- stories ------------------------- */

export const Live: Story = {
  args: { status: 'live', density: 'default' },
  render: () => cardWrap(html`<div style="max-width: 360px;">${liveCard()}</div>`),
  parameters: {
    docs: {
      description: {
        story:
          'The canonical live match card — pulsing LIVE chip, scoreline in Geist Mono, two stat rows (xG featured + Possession). Header gets `aria-live="polite"` so score updates are announced.',
      },
    },
  },
};

export const Upcoming: Story = {
  args: { status: 'upcoming', density: 'default' },
  render: () => cardWrap(html`<div style="max-width: 360px;">${upcomingCard()}</div>`),
  parameters: {
    docs: {
      description: {
        story:
          'Upcoming match — `data-status="upcoming"` swaps the result column for "vs" and tones the chip down. The stats slot uses `<fv-stat-row data-layout="form">` with `<fv-series>` form-pip rows in place of the proportion bars.',
      },
    },
  },
};

export const Final: Story = {
  args: { status: 'final', density: 'default' },
  render: () => cardWrap(html`<div style="max-width: 360px;">${finalCard()}</div>`),
  parameters: {
    docs: {
      description: {
        story:
          'Full-time match — neutral FT chip, scoreline rendered identically to Live, stats remain visible.',
      },
    },
  },
};

export const Compact: Story = {
  args: { status: 'final', density: 'compact' },
  render: () => cardWrap(html`<div style="max-width: 320px;">${compactCard()}</div>`),
  parameters: {
    docs: {
      description: {
        story:
          'Compact density — smaller crests (`data-size="md"`), tighter padding, smaller scoreline. The stats slot is omitted entirely; the card collapses to head + score + footer.',
      },
    },
  },
};

export const Dark: Story = {
  args: { status: 'live', density: 'default' },
  render: () => html`
    <div data-theme="dark" style="background: var(--bg); padding: 24px; min-height: 360px;">
      <div style="max-width: 360px;">${liveCard()}</div>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Dark theme — the `data-theme="dark"` attribute on an ancestor element flips every token (background, borders, text, accents) without touching component CSS. Same DOM as Live.',
      },
    },
  },
};

export const Grid: Story = {
  args: { status: 'live', density: 'default' },
  render: () =>
    cardWrap(html`
      <div class="fv-match-card-grid">
        ${liveCard()}${upcomingCard()}${finalCard()}${compactCard()}
      </div>
    `),
  parameters: {
    docs: {
      description: {
        story:
          'Integration test for the subgrid wiring. The `.fv-match-card-grid` wrapper declares 4 row tracks (head | score | stats-fill | footer); each child card opts into `grid-template-rows: subgrid` so the head, score and footer rows align horizontally across cards even when the stats areas differ in height. The Compact card has no stats slot; its parent track is still claimed by the empty row, leaving the footer baseline-aligned with the others.',
      },
    },
  },
};

/* Behavioural test: footer click + Enter + Space all dispatch the
   fv-match-card-expand CustomEvent. */
export const FooterDispatchesExpandEvent: Story = {
  args: { status: 'live', density: 'default' },
  render: () => html`<div data-testid="card-host">${liveCard()}</div>`,
  play: async ({ canvasElement }) => {
    const card = canvasElement.querySelector<HTMLElement>('fv-match-card')!;
    const footer = card.querySelector<HTMLElement>('footer[data-role="more"]')!;

    expect(footer.getAttribute('role')).toBe('button');
    expect(footer.getAttribute('tabindex')).toBe('0');
    expect(card.getAttribute('aria-live')).toBe('polite');

    const handler = fn();
    card.addEventListener('fv-match-card-expand', handler as EventListener);

    footer.click();
    expect(handler).toHaveBeenCalledTimes(1);

    footer.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    expect(handler).toHaveBeenCalledTimes(2);

    footer.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
    expect(handler).toHaveBeenCalledTimes(3);

    card.removeEventListener('fv-match-card-expand', handler as EventListener);
  },
};
