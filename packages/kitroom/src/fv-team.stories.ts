import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect } from 'storybook/test';
import './fv-team.js';
import './fv-crest.js';
import './fv-text.js';

type Side = 'home' | 'away';
type Density = 'default' | 'compact';
type CrestSize = 'default' | 'sm' | 'md' | 'lg';

type TeamArgs = {
  name: string;
  code: string;
  side: Side;
  density: Density;
  crestSize: CrestSize;
};

const meta: Meta<TeamArgs> = {
  title: 'Kitroom/Team',
  component: 'fv-team',
  argTypes: {
    name: { control: 'text', description: 'Team-name text content' },
    code: { control: 'text', description: 'data-code on the inner <fv-crest>' },
    side: {
      control: { type: 'inline-radio' },
      options: ['home', 'away'],
      description: 'data-side — home (default LTR) or away (visual mirror)',
    },
    density: {
      control: { type: 'inline-radio' },
      options: ['default', 'compact'],
      description: 'data-density — compact tightens the gap',
    },
    crestSize: {
      control: { type: 'inline-radio' },
      options: ['default', 'sm', 'md', 'lg'],
      description: 'data-size on the inner <fv-crest>',
    },
  },
  parameters: { controls: { disable: true } },
};
export default meta;

type Story = StoryObj<TeamArgs>;

const labelStyle = 'font-family: var(--font-mono); font-size: 11px; color: var(--fg-subtle);';

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const renderTeam = (args: TeamArgs): TemplateResult => html`
  <fv-team
    data-side="${args.side}"
    data-density="${args.density !== 'default' ? args.density : nothing}"
  >
    <fv-crest
      data-code="${args.code}"
      data-size="${args.crestSize !== 'default' ? args.crestSize : nothing}"
    ></fv-crest>
    <fv-text data-role="team-name" data-variant="body">${args.name}</fv-text>
  </fv-team>
`;

const teamHtml = (args: TeamArgs): string => {
  const teamAttrs: string[] = [`data-side="${args.side}"`];
  if (args.density !== 'default') teamAttrs.push(`data-density="${args.density}"`);
  const crestAttrs: string[] = [`data-code="${args.code}"`];
  if (args.crestSize !== 'default') crestAttrs.push(`data-size="${args.crestSize}"`);
  return `<fv-team ${teamAttrs.join(' ')}>
  <fv-crest ${crestAttrs.join(' ')}></fv-crest>
  <fv-text data-role="team-name" data-variant="body">${args.name}</fv-text>
</fv-team>`;
};

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: TeamArgs }) => teamHtml(ctx.args),
    },
  },
});

export const Playground: Story = {
  args: { name: 'Arsenal', code: 'ARS', side: 'home', density: 'default', crestSize: 'lg' },
  render: renderTeam,
  parameters: { ...dynamicSrc(), controls: { disable: false } },
};

export const Home: Story = {
  render: (): TemplateResult => html`
    <fv-team data-side="home">
      <fv-crest data-code="ARS" data-size="lg"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  `,
  parameters: src(`<fv-team data-side="home">
  <fv-crest data-code="ARS" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>`),
};

export const Away: Story = {
  render: (): TemplateResult => html`
    <fv-team data-side="away">
      <fv-crest data-code="CHE" data-size="lg"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
    </fv-team>
  `,
  parameters: src(`<fv-team data-side="away">
  <fv-crest data-code="CHE" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
</fv-team>`),
};

export const HomeAndAwayPair: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home">
        <fv-crest data-code="ARS" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
      </fv-team>
      <fv-team data-side="away">
        <fv-crest data-code="CHE" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
      </fv-team>
      <span style="${labelStyle}">home (LTR) / away (mirrored)</span>
    </div>
  `,
  parameters: src(`<fv-team data-side="home">
  <fv-crest data-code="ARS" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>
<fv-team data-side="away">
  <fv-crest data-code="CHE" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
</fv-team>`),
};

export const Compact: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home" data-density="compact">
        <fv-crest data-code="ARS" data-size="sm"></fv-crest>
        <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
      </fv-team>
      <fv-team data-side="home">
        <fv-crest data-code="ARS" data-size="sm"></fv-crest>
        <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
      </fv-team>
      <span style="${labelStyle}">compact (top, 8px gap) / default (bottom, 12px gap)</span>
    </div>
  `,
  parameters: src(`<fv-team data-side="home" data-density="compact">
  <fv-crest data-code="ARS" data-size="sm"></fv-crest>
  <fv-text data-role="team-name" data-variant="body-sm">Arsenal</fv-text>
</fv-team>`),
};

export const LongName: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 8px; max-width: 240px;">
      <div style="width: 200px; border: 1px dashed var(--border); padding: 8px;">
        <fv-team data-side="home" style="display: flex; max-width: 100%;">
          <fv-crest data-code="WLV" data-size="md"></fv-crest>
          <fv-text data-role="team-name" data-variant="body">
            Wolverhampton Wanderers Football Club
          </fv-text>
        </fv-team>
      </div>
      <span style="${labelStyle}">name overflows → ellipsis truncation</span>
    </div>
  `,
  parameters: src(`<div style="width: 200px;">
  <fv-team data-side="home" style="display: flex; max-width: 100%;">
    <fv-crest data-code="WLV" data-size="md"></fv-crest>
    <fv-text data-role="team-name" data-variant="body">
      Wolverhampton Wanderers Football Club
    </fv-text>
  </fv-team>
</div>`),
};

export const MonogramFallback: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <fv-team data-side="home">
        <fv-crest data-code="HAR" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Harringate Utd</fv-text>
      </fv-team>
      <fv-team data-side="away">
        <fv-crest data-code="KIN" data-size="lg"></fv-crest>
        <fv-text data-role="team-name" data-variant="body">Kingsmoor FC</fv-text>
      </fv-team>
      <span style="${labelStyle}">no data-src → monogram fallback (same shape)</span>
    </div>
  `,
  parameters: src(`<fv-team data-side="home">
  <fv-crest data-code="HAR" data-size="lg"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Harringate Utd</fv-text>
</fv-team>`),
};

/* ------------------------- behaviour tests ------------------------- */

export const SetsRoleAndAriaLabel: Story = {
  render: (): TemplateResult => html`
    <fv-team data-testid="t" data-side="home">
      <fv-crest data-code="ARS"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  `,
  parameters: src(`<fv-team data-side="home">
  <fv-crest data-code="ARS"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    expect(el.getAttribute('role')).toBe('group');
    expect(el.getAttribute('aria-label')).toBe('Arsenal');
  },
};

export const UpdatesAriaLabelOnTextChange: Story = {
  render: (): TemplateResult => html`
    <fv-team data-testid="t" data-side="home">
      <fv-crest data-code="ARS"></fv-crest>
      <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
    </fv-team>
  `,
  parameters: src(`<fv-team data-side="home">
  <fv-crest data-code="ARS"></fv-crest>
  <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
</fv-team>`),
  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector<HTMLElement>('[data-testid="t"]')!;
    const name = el.querySelector<HTMLElement>('[data-role="team-name"]')!;
    expect(el.getAttribute('aria-label')).toBe('Arsenal');

    name.textContent = 'Aston Villa';
    await new Promise((r) => setTimeout(r, 0));
    expect(el.getAttribute('aria-label')).toBe('Aston Villa');
  },
};
