import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import './fv-table.js';
import './fv-table-pinned.js';

type Pin = '1' | '2' | '3';

type PinnedArgs = {
  pin: Pin;
  minWidth: string;
  viewport: number;
  zebra: boolean;
};

const meta: Meta<PinnedArgs> = {
  title: 'Locker Room/Table pinned',
  component: 'fv-table-pinned',
  argTypes: {
    pin: {
      control: { type: 'inline-radio' },
      options: ['1', '2', '3'],
      description: 'data-pin — how many lead columns stick to the left edge',
    },
    minWidth: {
      control: 'text',
      description: 'data-min-width — the inner table never gets narrower than this',
    },
    viewport: {
      control: { type: 'range', min: 280, max: 900, step: 10 },
      description: 'Demo-only: width of the container the table is squeezed into',
    },
    zebra: { control: 'boolean', description: 'data-zebra on the inner table' },
  },
};
export default meta;

type Story = StoryObj<PinnedArgs>;

type Pip = 'pos' | 'warn' | 'neg';
type Zone = 'champions' | 'continental' | 'conference' | 'relegation' | undefined;

interface Team {
  pos: number;
  code: string;
  name: string;
  p: number;
  w: number;
  d: number;
  l: number;
  gf: number;
  ga: number;
  form: Pip[];
  pts: number;
  zone?: Zone;
}

const TEAMS: Team[] = [
  { pos: 1,  code: 'HAR', name: 'Harringate United',   p: 38, w: 28, d: 5,  l: 5,  gf: 93, ga: 29, form: ['pos','pos','pos','pos','pos'],   pts: 89, zone: 'champions' },
  { pos: 2,  code: 'KIN', name: 'Kingsmoor FC',        p: 38, w: 28, d: 5,  l: 5,  gf: 89, ga: 33, form: ['pos','pos','neg','warn','pos'],  pts: 89, zone: 'champions' },
  { pos: 3,  code: 'WLD', name: 'Wildwood Town',       p: 38, w: 21, d: 7,  l: 10, gf: 74, ga: 49, form: ['pos','warn','warn','warn','neg'], pts: 70, zone: 'continental' },
  { pos: 4,  code: 'BRY', name: 'Bryeford Athletic',   p: 38, w: 20, d: 9,  l: 9,  gf: 66, ga: 41, form: ['pos','warn','pos','pos','neg'],  pts: 69, zone: 'continental' },
  { pos: 5,  code: 'NMP', name: 'Northampton Rovers',  p: 38, w: 19, d: 8,  l: 11, gf: 56, ga: 51, form: ['neg','neg','neg','neg','pos'],   pts: 65, zone: 'conference' },
  { pos: 6,  code: 'OAK', name: 'Oakhill City',        p: 38, w: 18, d: 10, l: 10, gf: 65, ga: 46, form: ['pos','neg','neg','pos','warn'],  pts: 64 },
  { pos: 7,  code: 'CDR', name: 'Cedar Park Wanderers', p: 38, w: 15, d: 11, l: 12, gf: 50, ga: 40, form: ['pos','warn','warn','pos','warn'], pts: 56 },
  { pos: 8,  code: 'STM', name: 'Stormont Albion',     p: 38, w: 14, d: 10, l: 14, gf: 47, ga: 40, form: ['neg','neg','pos','neg','pos'],   pts: 52 },
  { pos: 9,  code: 'BLM', name: 'Bellmore County',     p: 38, w: 14, d: 10, l: 14, gf: 48, ga: 51, form: ['neg','pos','pos','neg','pos'],   pts: 52, zone: 'relegation' },
  { pos: 10, code: 'WTH', name: 'Witherton AFC',       p: 38, w: 10, d: 8,  l: 20, gf: 34, ga: 61, form: ['neg','neg','warn','neg','neg'],  pts: 38, zone: 'relegation' },
];

const formLabel = (form: Pip[]): string => {
  const word = (p: Pip) => (p === 'pos' ? 'W' : p === 'warn' ? 'D' : 'L');
  return `Last 5: ${form.map(word).join(' ')}`;
};

// The narrow-viewport standings case this formation exists for: a
// rank + team column pair that must stay legible while the stat
// columns scroll beneath them.
const renderPinned = (args: PinnedArgs): TemplateResult => html`
  <div style="max-width: ${args.viewport}px;">
    <fv-table-pinned data-pin=${args.pin} data-min-width=${args.minWidth}>
      <fv-table
        ?data-zebra=${args.zebra}
        data-columns="36px minmax(140px,1.4fr) 44px 44px 44px 44px 48px 48px 100px 56px"
        aria-label="League table"
      >
        <header role="rowgroup">
          <div role="row" class="fv-table-head">
            <span role="columnheader">#</span>
            <span role="columnheader" data-primary>Team</span>
            <span role="columnheader" data-numeric>P</span>
            <span role="columnheader" data-numeric>W</span>
            <span role="columnheader" data-numeric>D</span>
            <span role="columnheader" data-numeric>L</span>
            <span role="columnheader" data-numeric>GF</span>
            <span role="columnheader" data-numeric>GA</span>
            <span role="columnheader">Form</span>
            <span role="columnheader" data-numeric data-primary>Pts</span>
          </div>
        </header>
        <div role="rowgroup">
          ${TEAMS.map(
            (t) => html`
              <a role="row" href="#" data-zone=${t.zone ?? ''}>
                <span role="cell">${t.pos}</span>
                <span role="cell" data-primary>
                  <fv-crest data-code=${t.code}></fv-crest>
                  <fv-text>${t.name}</fv-text>
                </span>
                <span role="cell" data-numeric>${t.p}</span>
                <span role="cell" data-numeric>${t.w}</span>
                <span role="cell" data-numeric>${t.d}</span>
                <span role="cell" data-numeric>${t.l}</span>
                <span role="cell" data-numeric>${t.gf}</span>
                <span role="cell" data-numeric>${t.ga}</span>
                <span role="cell">
                  <fv-series aria-label=${formLabel(t.form)}>
                    ${t.form.map((p) => html`<span data-pip=${p}></span>`)}
                  </fv-series>
                </span>
                <span role="cell" data-numeric data-strong>${t.pts}</span>
              </a>
            `,
          )}
        </div>
      </fv-table>
    </fv-table-pinned>
  </div>
`;

export const NarrowViewport: Story = {
  args: { pin: '2', minWidth: '640px', viewport: 380, zebra: false },
  render: (args) => renderPinned(args),
};

export const SinglePinnedColumn: Story = {
  args: { pin: '1', minWidth: '640px', viewport: 380, zebra: true },
  render: (args) => renderPinned(args),
};

export const WideNoScroll: Story = {
  args: { pin: '2', minWidth: '640px', viewport: 900, zebra: false },
  render: (args) => renderPinned(args),
};
