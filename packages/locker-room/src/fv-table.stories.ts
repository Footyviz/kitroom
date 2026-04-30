import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-table.js';

type Density = 'default' | 'compact' | 'comfortable';

type TableArgs = {
  density: Density;
  zebra: boolean;
  stickyHead: boolean;
};

const meta: Meta<TableArgs> = {
  title: 'Formations/Table',
  component: 'fv-table',
  argTypes: {
    density: {
      control: { type: 'inline-radio' },
      options: ['compact', 'default', 'comfortable'],
      description: 'data-density — row height + horizontal padding scale',
    },
    zebra: { control: 'boolean', description: 'data-zebra — alternating row tint' },
    stickyHead: { control: 'boolean', description: 'data-sticky-head — header sticks to scroll container top' },
  },
  parameters: {
    // Make the bubbling `sort` CustomEvent visible in the Actions panel.
    // Storybook's actions addon installs a listener at the canvas root for
    // each event name in `handles` and logs every dispatch.
    actions: { handles: ['sort'] },
  },
};
export default meta;

type Story = StoryObj<TableArgs>;

type Trend = 'up' | 'down' | 'flat';
type Pip = 'pos' | 'warn' | 'neg';
type Zone = 'champions' | 'continental' | 'conference' | 'relegation' | undefined;

interface Team {
  pos: number;
  trend: Trend;
  delta: number;
  code: string;
  name: string;
  gd: number;
  gf: number;
  ga: number;
  form: Pip[];
  pts: number;
  zone?: Zone;
  highlight?: boolean;
}

const TEAMS: Team[] = [
  { pos: 1,  trend: 'up',   delta: 2, code: 'HAR', name: 'Harringate Utd',  gd: 18, gf: 32, ga: 14, form: ['pos','pos','warn','pos','pos'], pts: 42, zone: 'champions', highlight: true },
  { pos: 2,  trend: 'flat', delta: 0, code: 'KIN', name: 'Kingsmoor FC',    gd: 14, gf: 28, ga: 14, form: ['pos','pos','pos','warn','pos'], pts: 38, zone: 'champions' },
  { pos: 3,  trend: 'up',   delta: 1, code: 'WLD', name: 'Wildwood Town',   gd: 11, gf: 25, ga: 14, form: ['pos','warn','pos','pos','warn'], pts: 35, zone: 'continental' },
  { pos: 4,  trend: 'down', delta: 2, code: 'BRY', name: 'Bryeford',        gd:  6, gf: 22, ga: 16, form: ['warn','pos','warn','pos','pos'], pts: 33, zone: 'continental' },
  { pos: 5,  trend: 'flat', delta: 0, code: 'NMP', name: 'Northampton Rvrs',gd:  3, gf: 19, ga: 16, form: ['pos','warn','warn','pos','warn'], pts: 30, zone: 'conference' },
  { pos: 6,  trend: 'up',   delta: 3, code: 'OAK', name: 'Oakhill City',    gd:  1, gf: 18, ga: 17, form: ['warn','pos','pos','warn','pos'], pts: 28 },
  { pos: 7,  trend: 'down', delta: 1, code: 'CDR', name: 'Cedar Park',      gd: -2, gf: 15, ga: 17, form: ['warn','warn','pos','neg','pos'], pts: 25 },
  { pos: 8,  trend: 'flat', delta: 0, code: 'STM', name: 'Stormont',        gd: -5, gf: 13, ga: 18, form: ['neg','warn','pos','warn','warn'], pts: 22 },
  { pos: 9,  trend: 'up',   delta: 1, code: 'BLM', name: 'Bellmore',        gd: -8, gf: 12, ga: 20, form: ['warn','neg','pos','neg','warn'], pts: 19, zone: 'relegation' },
  { pos: 10, trend: 'down', delta: 2, code: 'WTH', name: 'Witherton AFC',   gd: -12,gf: 10, ga: 22, form: ['neg','warn','neg','warn','neg'], pts: 14, zone: 'relegation' },
];

const trendLabel = (t: Trend, delta: number): string => {
  if (t === 'up') return `▲+${delta}`;
  if (t === 'down') return `▼-${delta}`;
  return '·';
};

const sign = (n: number): 'pos' | 'neg' | 'zero' => (n > 0 ? 'pos' : n < 0 ? 'neg' : 'zero');
const fmtSigned = (n: number): string => (n > 0 ? `+${n}` : `${n}`);

const renderTable = (args: TableArgs, teams: Team[] = TEAMS): TemplateResult => html`
  <fv-table
    data-density=${args.density}
    ?data-zebra=${args.zebra}
    ?data-sticky-head=${args.stickyHead}
    data-columns="36px minmax(0,1fr) 56px 48px 48px 100px 48px"
    aria-label="League table"
  >
    <header role="rowgroup">
      <div role="row" class="fv-table-head">
        <span role="columnheader">#</span>
        <span role="columnheader" data-primary>Team</span>
        <span role="columnheader" data-numeric>GD</span>
        <span role="columnheader" data-numeric>GF</span>
        <span role="columnheader" data-numeric>GA</span>
        <span role="columnheader">Form</span>
        <span role="columnheader" data-numeric data-primary data-sort="desc" data-sort-key="pts" tabindex="0">Pts</span>
      </div>
    </header>
    <div role="rowgroup">
      ${teams.map(
        (t) => html`
          <a
            role="row"
            href="#"
            data-zone=${t.zone ?? ''}
            ?data-highlight=${!!t.highlight}
          >
            <span role="cell">
              <span data-role="trend" data-direction=${t.trend}>${trendLabel(t.trend, t.delta)}</span>
              ${t.pos}
            </span>
            <span role="cell" data-primary>
              <span data-role="crest" aria-hidden="true">${t.code}</span>
              <fv-text>${t.name}</fv-text>
            </span>
            <span role="cell" data-numeric data-sign=${sign(t.gd)}>${fmtSigned(t.gd)}</span>
            <span role="cell" data-numeric>${t.gf}</span>
            <span role="cell" data-numeric>${t.ga}</span>
            <span role="cell">
              <span data-role="series" aria-label=${`Last 5: ${t.form.join(', ')}`}>
                ${t.form.map((p) => html`<span data-pip=${p}></span>`)}
              </span>
            </span>
            <span role="cell" data-numeric data-strong>${t.pts}</span>
          </a>
        `,
      )}
    </div>
  </fv-table>
`;

export const Standings: Story = {
  args: { density: 'default', zebra: false, stickyHead: false },
  render: (args) => renderTable(args),
};

export const Compact: Story = {
  args: { density: 'compact', zebra: true, stickyHead: false },
  render: (args) => renderTable(args),
};

export const Comfortable: Story = {
  args: { density: 'comfortable', zebra: false, stickyHead: false },
  render: (args) => renderTable(args),
};

export const StickyHead: Story = {
  args: { density: 'default', zebra: false, stickyHead: true },
  render: (args) => html`
    <div
      style="height: 320px; overflow: auto; border: 1px solid var(--border); border-radius: var(--radius-md);"
      aria-label="Scrollable league table viewport"
    >
      ${renderTable(
        { ...args, stickyHead: true },
        // Duplicate the dataset so the body overflows the 320px viewport
        // and the user can scroll to confirm the header stays pinned.
        [...TEAMS, ...TEAMS.map((t) => ({ ...t, pos: t.pos + TEAMS.length }))],
      )}
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story:
          'When `data-sticky-head` is set, the column header row pins to the top of the nearest scrolling ancestor. Wrap the table in a fixed-height scroll container (the consumer owns the scroll boundary; the component just handles the sticky behaviour). The dataset here is doubled so you can scroll to see it stick.',
      },
    },
  },
};

export const Zones: Story = {
  args: { density: 'default', zebra: false, stickyHead: false },
  render: (args) => renderTable(args),
  parameters: {
    docs: {
      description: {
        story:
          'Zone accents live on `data-zone` on each row. Champions = straw, continental = info blue, conference = positive green, relegation = negative red. Color is paired with row position so the meaning is never carried by hue alone.',
      },
    },
  },
};

export const Selected: Story = {
  args: { density: 'default', zebra: false, stickyHead: false },
  render: (args) => html`
    <fv-table
      data-density=${args.density}
      data-columns="36px minmax(0,1fr) 56px 48px 48px 100px 48px"
      aria-label="League table — Cedar Park selected"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader" data-primary>Team</span>
          <span role="columnheader" data-numeric>GD</span>
          <span role="columnheader" data-numeric>GF</span>
          <span role="columnheader" data-numeric>GA</span>
          <span role="columnheader">Form</span>
          <span role="columnheader" data-numeric data-primary data-sort="desc" data-sort-key="pts" tabindex="0">Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        ${TEAMS.map(
          (t) => html`
            <a
              role="row"
              href="#"
              data-zone=${t.zone ?? ''}
              ?data-selected=${t.code === 'CDR'}
              aria-selected=${t.code === 'CDR' ? 'true' : 'false'}
            >
              <span role="cell">
                <span data-role="trend" data-direction=${t.trend}>${trendLabel(t.trend, t.delta)}</span>
                ${t.pos}
              </span>
              <span role="cell" data-primary>
                <span data-role="crest" aria-hidden="true">${t.code}</span>
                <fv-text>${t.name}</fv-text>
              </span>
              <span role="cell" data-numeric data-sign=${sign(t.gd)}>${fmtSigned(t.gd)}</span>
              <span role="cell" data-numeric>${t.gf}</span>
              <span role="cell" data-numeric>${t.ga}</span>
              <span role="cell">
                <span data-role="series" aria-label=${`Last 5: ${t.form.join(', ')}`}>
                  ${t.form.map((p) => html`<span data-pip=${p}></span>`)}
                </span>
              </span>
              <span role="cell" data-numeric data-strong>${t.pts}</span>
            </a>
          `,
        )}
      </div>
    </fv-table>
  `,
};

// Behavioural test — sortable header click cycles state and emits sort event.
export const SortHeaderEmitsEvent: Story = {
  args: { density: 'default', zebra: false, stickyHead: false },
  render: () => html`
    <fv-table
      data-testid="t"
      data-columns="60px 1fr 80px"
      aria-label="Sortable test"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader" data-primary>Team</span>
          <span role="columnheader" data-numeric data-sort="none" data-sort-key="pts" tabindex="0">Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        <a role="row" href="#"><span role="cell">1</span><span role="cell">A</span><span role="cell" data-numeric>10</span></a>
      </div>
    </fv-table>
  `,
  play: async ({ canvasElement }) => {
    const tbl = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    const ptsHeader = tbl.querySelectorAll<HTMLElement>('[role="columnheader"]')[2]!;

    const handler = fn();
    tbl.addEventListener('sort', handler as EventListener);

    expect(ptsHeader.getAttribute('data-sort')).toBe('none');
    expect(ptsHeader.getAttribute('aria-sort')).toBe('none');

    await userEvent.click(ptsHeader);

    expect(ptsHeader.getAttribute('data-sort')).toBe('asc');
    expect(ptsHeader.getAttribute('aria-sort')).toBe('ascending');

    await userEvent.click(ptsHeader);

    expect(ptsHeader.getAttribute('data-sort')).toBe('desc');
    expect(ptsHeader.getAttribute('aria-sort')).toBe('descending');

    expect(handler).toHaveBeenCalledTimes(2);
    const ev = handler.mock.calls.at(-1)?.[0] as CustomEvent<{ key: string; direction: string }>;
    expect(ev.detail.key).toBe('pts');
    expect(ev.detail.direction).toBe('desc');

    tbl.removeEventListener('sort', handler as EventListener);
  },
};

export const ColumnsAttributeBroadcasts: Story = {
  args: { density: 'default', zebra: false, stickyHead: false },
  render: () => html`
    <fv-table
      data-testid="t"
      data-columns="40px 1fr 60px"
      aria-label="Columns broadcast test"
    >
      <header role="rowgroup">
        <div role="row" class="fv-table-head">
          <span role="columnheader">#</span>
          <span role="columnheader">Team</span>
          <span role="columnheader" data-numeric>Pts</span>
        </div>
      </header>
      <div role="rowgroup">
        <div role="row"><span role="cell">1</span><span role="cell">Alpha</span><span role="cell" data-numeric>42</span></div>
      </div>
    </fv-table>
  `,
  play: async ({ canvasElement }) => {
    const tbl = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;

    expect(tbl.style.getPropertyValue('--fv-table-cols')).toBe('40px 1fr 60px');

    tbl.setAttribute('data-columns', '50px 1fr 80px');
    expect(tbl.style.getPropertyValue('--fv-table-cols')).toBe('50px 1fr 80px');
  },
};
