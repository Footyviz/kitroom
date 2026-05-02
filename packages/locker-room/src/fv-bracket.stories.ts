import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-bracket.js';

type Stage = 'r16' | 'qf' | 'sf' | 'final' | 'third-place';
type Status = 'final' | 'upcoming';

interface MatchTeam {
  code: string;
  name: string;
  score: number | null;
}

interface Match {
  status: Status;
  stage?: Stage;
  winner?: 'home' | 'away';
  home: MatchTeam | { placeholder: string };
  away: MatchTeam | { placeholder: string };
  date: string;
  venue?: string;
  annotation?: string;
}

interface Round {
  stage: Stage;
  side?: 'left' | 'right' | 'center';
  name: string;
  dates: string;
  matches: Match[];
}

const meta: Meta = {
  title: 'Locker Room/Bracket',
  component: 'fv-bracket',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '`<fv-bracket>` is the knockout-stage tournament view. It composes <fv-table>-based match cards into round columns. On desktop (≥1100px) the rounds become CSS-grid columns and each round\'s matches use `justify-content: space-around`, so a quarter-final card naturally lands centered between its two round-of-16 feeders. Below 1100px the rounds stack vertically; below 720px the matches inside each round collapse to a single column.',
      },
    },
  },
};
export default meta;

type Story = StoryObj;

/* ------------------------- helpers ------------------------- */

function isPlaceholder(t: MatchTeam | { placeholder: string }): t is { placeholder: string } {
  return 'placeholder' in t;
}

const renderTeamRow = (
  t: MatchTeam | { placeholder: string },
  isWinner: boolean,
  isLoser: boolean,
): TemplateResult => {
  const result = isWinner ? 'win' : isLoser ? 'loss' : nothing;
  if (isPlaceholder(t)) {
    return html`
      <div role="row" data-result="${result}">
        <fv-crest data-code="—" data-size="sm" role="cell"></fv-crest>
        <span role="cell" data-primary>${t.placeholder}</span>
        <span role="cell" data-strong></span>
        <span role="cell" data-numeric></span>
      </div>
    `;
  }
  return html`
    <div role="row" data-result="${result}">
      <fv-crest data-code="${t.code}" data-size="sm" role="cell"></fv-crest>
      <span role="cell" data-primary>${t.name}</span>
      <span role="cell" data-strong>${t.code}</span>
      <span
        role="cell"
        data-numeric
        ?data-strong=${isWinner}
        >${t.score ?? ''}</span
      >
    </div>
  `;
};

const renderMatchAriaLabel = (m: Match): string => {
  const homeName = isPlaceholder(m.home) ? m.home.placeholder : m.home.name;
  const awayName = isPlaceholder(m.away) ? m.away.placeholder : m.away.name;
  if (m.status === 'upcoming') return `${homeName} vs ${awayName}`;
  const homeScore = isPlaceholder(m.home) ? '' : m.home.score;
  const awayScore = isPlaceholder(m.away) ? '' : m.away.score;
  return `${homeName} ${homeScore}, ${awayName} ${awayScore}`;
};

const renderMatch = (m: Match, roundStage: Stage): TemplateResult => {
  const homeWin = m.winner === 'home';
  const awayWin = m.winner === 'away';
  const stage: Stage = m.stage ?? roundStage;
  const stageAttr = stage === 'final' || stage === 'third-place' ? stage : nothing;

  const trophy =
    stage === 'final'
      ? html`
          <header data-role="trophy">
            <span data-role="trophy-icon" aria-hidden="true">
              <fv-icon name="trophy" data-size="sm"></fv-icon>
            </span>
            <span data-role="trophy-label">Final</span>
          </header>
        `
      : nothing;

  const thirdPlaceHead =
    stage === 'third-place' ? html`<header data-role="third-place">3rd place</header>` : nothing;

  return html`
    <article
      data-role="match"
      data-stage="${stageAttr}"
      data-status="${m.status === 'upcoming' ? 'upcoming' : nothing}"
    >
      ${trophy}${thirdPlaceHead}
      <fv-table
        data-density="compact"
        data-columns="auto minmax(0, 1fr) auto auto"
        aria-label="${renderMatchAriaLabel(m)}"
      >
        <div role="rowgroup">
          ${renderTeamRow(m.home, homeWin, awayWin)}${renderTeamRow(m.away, awayWin, homeWin)}
        </div>
      </fv-table>
      <footer data-role="match-meta">
        <fv-text data-variant="caption" data-tone="muted">
          ${m.date}${m.venue ? html` · ${m.venue}` : nothing}
        </fv-text>
        ${m.annotation
          ? html`<span data-role="annotation">${m.annotation}</span>`
          : nothing}
      </footer>
    </article>
  `;
};

const renderRound = (r: Round): TemplateResult => html`
  <section
    data-role="round"
    data-stage="${r.stage}"
    data-side="${r.side ?? nothing}"
  >
    <header>
      <fv-text data-variant="caption">${r.name}</fv-text>
      <fv-text data-variant="mono" data-tone="muted">${r.dates}</fv-text>
    </header>
    <div data-role="matches">
      ${r.matches.map((m) => renderMatch(m, r.stage))}
    </div>
  </section>
`;

const renderBracket = (rounds: Round[]): TemplateResult => html`
  <fv-bracket data-label="Albion Cup 2026">
    <header data-role="head">
      <fv-text data-role="eyebrow" data-variant="caption" data-tone="muted">
        Knockout stage · Quarter-finals · Day 12 of 18
      </fv-text>
      <h1 data-role="title">
        <fv-text data-variant="display">Albion Cup</fv-text>
        <fv-text data-variant="display" data-tone="muted">2026</fv-text>
      </h1>
      <fv-text data-role="meta" data-tone="muted">
        Hosted in Westport · 32 teams · 8 groups
      </fv-text>
      <fv-chip data-role="live" data-variant="live">Bracket live</fv-chip>
    </header>

    <div data-role="rounds">
      ${rounds.map(renderRound)}
    </div>
  </fv-bracket>
`;

/* ------------------------- demo data ------------------------- */

const albionCup: Round[] = [
  {
    stage: 'r16',
    side: 'left',
    name: 'Round of 16',
    dates: 'Jun 28 – Jul 01',
    matches: [
      {
        status: 'final',
        winner: 'home',
        home: { code: 'HAR', name: 'Harringate Utd', score: 3 },
        away: { code: 'WCK', name: 'Wickenden FC', score: 0 },
        date: 'Jun 28',
        venue: 'Westport',
      },
      {
        status: 'final',
        winner: 'home',
        home: { code: 'BRC', name: 'Brackenmoor R.', score: 2 },
        away: { code: 'MIL', name: 'Millhaven Ath.', score: 1 },
        date: 'Jun 28',
        venue: 'Harringate',
      },
      {
        status: 'final',
        winner: 'home',
        home: { code: 'ASH', name: 'Ashbourne FC', score: 1 },
        away: { code: 'MRY', name: 'Marlbridge R.', score: 0 },
        date: 'Jun 29',
        venue: 'Westport',
      },
      {
        status: 'final',
        winner: 'home',
        home: { code: 'WST', name: 'Westport City', score: 2 },
        away: { code: 'OAK', name: 'Oakvale City', score: 1 },
        date: 'Jun 29',
        venue: 'Ashbourne',
        annotation: 'AET',
      },
    ],
  },
  {
    stage: 'qf',
    side: 'left',
    name: 'Quarter-finals',
    dates: 'Jul 04 – 05',
    matches: [
      {
        status: 'final',
        winner: 'home',
        home: { code: 'HAR', name: 'Harringate Utd', score: 2 },
        away: { code: 'BRC', name: 'Brackenmoor R.', score: 1 },
        date: 'Jul 04',
        venue: 'Westport',
      },
      {
        status: 'final',
        winner: 'away',
        home: { code: 'ASH', name: 'Ashbourne FC', score: 0 },
        away: { code: 'WST', name: 'Westport City', score: 1 },
        date: 'Jul 04',
        venue: 'Westport',
      },
    ],
  },
  {
    stage: 'sf',
    side: 'left',
    name: 'Semi-finals',
    dates: 'Jul 09 – 10',
    matches: [
      {
        status: 'upcoming',
        home: { code: 'HAR', name: 'Harringate Utd', score: null },
        away: { code: 'WST', name: 'Westport City', score: null },
        date: 'Jul 09 · 20:00',
        venue: 'Westport',
      },
    ],
  },
  {
    stage: 'final',
    side: 'center',
    name: 'Final',
    dates: 'Jul 14',
    matches: [
      {
        status: 'upcoming',
        home: { placeholder: 'Winner SF1' },
        away: { placeholder: 'Winner SF2' },
        date: 'Jul 14 · 20:00',
        venue: 'Westport',
      },
      {
        status: 'upcoming',
        stage: 'third-place',
        home: { placeholder: 'Loser SF1' },
        away: { placeholder: 'Loser SF2' },
        date: 'Jul 13 · 16:00',
        venue: 'Westport',
      },
    ],
  },
  {
    stage: 'sf',
    side: 'right',
    name: 'Semi-finals',
    dates: 'Jul 09 – 10',
    matches: [
      {
        status: 'upcoming',
        home: { code: 'ELM', name: 'Elmsworth FC', score: null },
        away: { code: 'KIN', name: 'Kingsmere AFC', score: null },
        date: 'Jul 05 · 17:00',
        venue: 'Westport',
      },
    ],
  },
  {
    stage: 'qf',
    side: 'right',
    name: 'Quarter-finals',
    dates: 'Jul 04 – 05',
    matches: [
      {
        status: 'upcoming',
        home: { placeholder: 'Winner QF3' },
        away: { placeholder: 'Winner QF4' },
        date: 'Jul 10 · 20:00',
        venue: 'Westport',
      },
      {
        status: 'final',
        winner: 'home',
        home: { code: 'MCT', name: 'Moorcroft Town', score: 3 },
        away: { code: 'SVR', name: 'Severnford', score: 1 },
        date: 'Jul 05 · 20:00',
        venue: 'Westport',
      },
    ],
  },
  {
    stage: 'r16',
    side: 'right',
    name: 'Round of 16',
    dates: 'Jun 28 – Jul 01',
    matches: [
      {
        status: 'final',
        winner: 'home',
        home: { code: 'ELM', name: 'Elmsworth FC', score: 1 },
        away: { code: 'HVN', name: 'Havenport', score: 1 },
        date: 'Jun 30',
        venue: 'Westport',
        annotation: 'PENS 4-3',
      },
      {
        status: 'final',
        winner: 'home',
        home: { code: 'KIN', name: 'Kingsmere AFC', score: 2 },
        away: { code: 'RAV', name: 'Ravenshaw', score: 0 },
        date: 'Jun 30',
        venue: 'Kingsmere',
      },
      {
        status: 'final',
        winner: 'home',
        home: { code: 'MCT', name: 'Moorcroft Town', score: 3 },
        away: { code: 'EDG', name: 'Edgbarton', score: 1 },
        date: 'Jul 01',
        venue: 'Westport',
      },
      {
        status: 'final',
        winner: 'home',
        home: { code: 'SVR', name: 'Severnford', score: 2 },
        away: { code: 'HOL', name: 'Hollybrook', score: 0 },
        date: 'Jul 01',
        venue: 'Severnford',
      },
    ],
  },
];

/* ------------------------- stories ------------------------- */

export const AlbionCup: Story = {
  render: () => html`
    <div style="background: var(--bg); padding: var(--space-6); min-height: 100vh;">
      ${renderBracket(albionCup)}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Full 7-round bracket (RO16 → Final ← RO16) with mixed final/upcoming matches, "AET" + "PENS 4-3" annotations, the trophy-headed Final card, and the 3rd-place playoff stub. Resize the viewport to see the layout collapse: ≥1100px shows the bracket tree, 720–1099px shows rounds stacked with 2-col matches, <720px stacks everything.',
      },
    },
  },
};

export const Mobile: Story = {
  render: () => html`
    <div style="background: var(--bg); padding: var(--space-4); min-height: 100vh;">
      ${renderBracket(albionCup.slice(0, 2))}
    </div>
  `,
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
    docs: {
      description: {
        story:
          'Mobile layout — rounds stack vertically and matches inside each round are a single column. Trimmed to RO16 + QF for clarity in the small viewport.',
      },
    },
  },
};

export const Dark: Story = {
  render: () => html`
    <div data-theme="dark" style="background: var(--bg); padding: var(--space-6); min-height: 100vh;">
      ${renderBracket(albionCup)}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'Dark theme — every visual is token-driven, so flipping `data-theme="dark"` on an ancestor swaps backgrounds, borders, accents, and the Final-card tinted surface without touching component CSS.',
      },
    },
  },
};

export const RolePropagation: Story = {
  render: () => html`<div data-testid="bracket-host">${renderBracket(albionCup.slice(0, 1))}</div>`,
  play: async ({ canvasElement }) => {
    const bracket = canvasElement.querySelector<HTMLElement>('fv-bracket')!;
    const round = bracket.querySelector<HTMLElement>('[data-role="round"]')!;
    const match = bracket.querySelector<HTMLElement>('[data-role="match"]')!;

    expect(bracket.getAttribute('role')).toBe('region');
    expect(bracket.getAttribute('aria-label')).toBe('Albion Cup 2026');
    expect(round.getAttribute('role')).toBe('group');
    expect(match.getAttribute('role')).toBe('article');
  },
};
