import type { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing, type TemplateResult } from 'lit-html';
import { expect, fn, userEvent } from 'storybook/test';
import './fv-chip.js';

type ChipVariant =
  | 'default'
  | 'mono'
  | 'strong'
  | 'accent'
  | 'info'
  | 'warn'
  | 'neg'
  | 'pos'
  | 'outline'
  | 'live';

type ChipArgs = {
  variant: ChipVariant;
  text: string;
};

const meta: Meta<ChipArgs> = {
  title: 'Components/Chip',
  component: 'fv-chip',
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'mono', 'strong', 'accent', 'info', 'warn', 'neg', 'pos', 'outline', 'live'],
      description: 'data-variant — chooses hue / typography / animation',
    },
    text: { control: 'text', description: 'Chip label text (text content)' },
  },
};
export default meta;

type Story = StoryObj<ChipArgs>;

const xIcon = html`
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor"
       stroke-width="1.4" aria-hidden="true">
    <path d="M1 1l6 6M7 1L1 7"></path>
  </svg>
`;

const row = 'display: flex; gap: 8px; flex-wrap: wrap; align-items: center;';

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

const xIconHtml = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
      <path d="M1 1l6 6M7 1L1 7"/>
    </svg>`;

const chipHtml = (args: ChipArgs): string => {
  if (args.variant === 'default') return `<fv-chip>${args.text}</fv-chip>`;
  return `<fv-chip data-variant="${args.variant}">${args.text}</fv-chip>`;
};

const renderChip = (args: ChipArgs): TemplateResult => html`
  <fv-chip data-variant="${args.variant !== 'default' ? args.variant : nothing}">
    ${args.text}
  </fv-chip>
`;

const dynamicSrc = () => ({
  docs: {
    source: {
      language: 'html' as const,
      transform: (_: string, ctx: { args: ChipArgs }) => chipHtml(ctx.args),
    },
  },
});

export const Default: Story = {
  args: { variant: 'default', text: 'Premier League' },
  render: renderChip,
  parameters: dynamicSrc(),
};

export const Playground: Story = {
  args: { variant: 'live', text: 'LIVE' },
  render: renderChip,
  parameters: dynamicSrc(),
};

export const StatusVariants: Story = {
  render: (): TemplateResult => html`
    <div style="${row}">
      <fv-chip data-variant="live">LIVE</fv-chip>
      <fv-chip data-variant="mono">73'</fv-chip>
      <fv-chip data-variant="mono">HT</fv-chip>
      <fv-chip data-variant="strong"><span data-role="dot"></span>FT</fv-chip>
      <fv-chip data-variant="info">VAR review</fv-chip>
      <fv-chip data-variant="warn"><span data-role="dot" style="background:#B88700"></span>Delay</fv-chip>
      <fv-chip data-variant="pos"><span data-role="dot" style="background:#3B7217"></span>Goal</fv-chip>
      <fv-chip data-variant="neg">Red card</fv-chip>
    </div>
  `,
  parameters: src(`<fv-chip data-variant="live">LIVE</fv-chip>
<fv-chip data-variant="mono">73'</fv-chip>
<fv-chip data-variant="strong"><span data-role="dot"></span>FT</fv-chip>
<fv-chip data-variant="info">VAR review</fv-chip>
<fv-chip data-variant="warn"><span data-role="dot" style="background:#B88700"></span>Delay</fv-chip>
<fv-chip data-variant="pos"><span data-role="dot" style="background:#3B7217"></span>Goal</fv-chip>
<fv-chip data-variant="neg">Red card</fv-chip>`),
};

export const Closable: Story = {
  render: (): TemplateResult => html`
    <div style="${row}">
      <fv-chip data-closable data-variant="accent" data-value="premier">
        Premier League
        <button data-action="close" aria-label="Remove Premier League">${xIcon}</button>
      </fv-chip>
      <fv-chip data-closable data-value="arsenal">
        Arsenal
        <button data-action="close" aria-label="Remove Arsenal">${xIcon}</button>
      </fv-chip>
      <fv-chip data-closable data-value="saka">
        Saka
        <button data-action="close" aria-label="Remove Saka">${xIcon}</button>
      </fv-chip>
      <fv-chip data-variant="outline">+ Add filter</fv-chip>
    </div>
  `,
  parameters: src(`<fv-chip data-closable data-variant="accent" data-value="premier">
  Premier League
  <button data-action="close" aria-label="Remove Premier League">
    ${xIconHtml}
  </button>
</fv-chip>

<fv-chip data-closable data-value="arsenal">
  Arsenal
  <button data-action="close" aria-label="Remove Arsenal">
    ${xIconHtml}
  </button>
</fv-chip>

<fv-chip data-variant="outline">+ Add filter</fv-chip>`),
};

export const Teams: Story = {
  render: (): TemplateResult => html`
    <div style="${row}">
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#DB0007">ARS</span>Arsenal
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#034694">CHE</span>Chelsea
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#6CABDD;color:#1C2C5B">MCI</span>Man City
      </fv-chip>
      <fv-chip data-variant="team">
        <span data-role="crest" style="background:#DA291C">LIV</span>Liverpool
      </fv-chip>
    </div>
  `,
  parameters: src(`<fv-chip data-variant="team">
  <span data-role="crest" style="background: #DB0007">ARS</span>
  Arsenal
</fv-chip>

<fv-chip data-variant="team">
  <span data-role="crest" style="background: #034694">CHE</span>
  Chelsea
</fv-chip>`),
};

export const Counts: Story = {
  render: (): TemplateResult => html`
    <div style="${row}">
      <fv-chip data-variant="count"><span>Followers</span><b data-role="count">12.4k</b></fv-chip>
      <fv-chip data-variant="count"><span>xG</span><b data-role="count">1.84</b></fv-chip>
      <fv-chip data-variant="count"><span>Possession</span><b data-role="count">63%</b></fv-chip>
    </div>
  `,
  parameters: src(`<fv-chip data-variant="count">
  <span>Followers</span>
  <b data-role="count">12.4k</b>
</fv-chip>

<fv-chip data-variant="count">
  <span>xG</span>
  <b data-role="count">1.84</b>
</fv-chip>`),
};

export const CloseDispatchesEvent: Story = {
  render: (): TemplateResult => html`
    <fv-chip data-closable data-value="arsenal" data-testid="chip">
      Arsenal
      <button data-action="close" aria-label="Remove Arsenal">${xIcon}</button>
    </fv-chip>
  `,
  play: async ({ canvasElement }) => {
    const chip = canvasElement.querySelector<HTMLElement>('[data-testid="chip"]')!;
    const closeBtn = chip.querySelector<HTMLButtonElement>('[data-action="close"]')!;

    let lastValue: string | undefined;
    chip.addEventListener('close', (e) => {
      lastValue = (e as CustomEvent<{ value: string }>).detail.value;
    });

    await userEvent.click(closeBtn);
    expect(lastValue).toBe('arsenal');
  },
};

export const CloseEventBubbles: Story = {
  render: (): TemplateResult => html`
    <div data-testid="parent">
      <fv-chip data-closable data-value="bubbles">
        Filter
        <button data-action="close" aria-label="Remove">${xIcon}</button>
      </fv-chip>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const handler = fn();
    document.body.addEventListener('close', handler);

    const closeBtn = canvasElement.querySelector<HTMLButtonElement>(
      '[data-action="close"]',
    )!;
    await userEvent.click(closeBtn);

    expect(handler).toHaveBeenCalledOnce();
    const event = handler.mock.calls[0]![0] as CustomEvent<{ value: string }>;
    expect(event.detail).toEqual({ value: 'bubbles' });
    expect(event.bubbles).toBe(true);

    document.body.removeEventListener('close', handler);
  },
};

export const NonClosableChipDoesNotDispatchClose: Story = {
  render: (): TemplateResult => html`
    <fv-chip data-testid="chip">Status</fv-chip>
  `,
  play: async ({ canvasElement }) => {
    // A chip without a [data-action="close"] child must not throw at
    // connect time and must not dispatch close on its own click.
    const chip = canvasElement.querySelector<HTMLElement>('[data-testid="chip"]')!;
    const spy = fn();
    document.addEventListener('close', spy);
    await userEvent.click(chip);
    expect(spy).not.toHaveBeenCalled();
    document.removeEventListener('close', spy);
  },
};

export const ClosableWithoutCloseButtonDoesNotCrash: Story = {
  render: (): TemplateResult => html`
    <!-- Marked closable but the server forgot the close button.
         The component must not throw — it just dispatches no close events. -->
    <fv-chip data-closable data-value="orphan" data-testid="chip">No X here</fv-chip>
  `,
  play: async ({ canvasElement }) => {
    const chip = canvasElement.querySelector<HTMLElement>('[data-testid="chip"]')!;
    const spy = fn();
    document.addEventListener('close', spy);
    await userEvent.click(chip);
    expect(spy).not.toHaveBeenCalled();
    document.removeEventListener('close', spy);
  },
};

export const CleansUpOnDisconnect: Story = {
  render: (): TemplateResult => html`
    <div data-testid="host">
      <fv-chip data-closable data-value="cleanup">
        Filter
        <button data-action="close" aria-label="Remove">${xIcon}</button>
      </fv-chip>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const host = canvasElement.querySelector<HTMLElement>('[data-testid="host"]')!;
    const chip = host.querySelector<HTMLElement>('fv-chip')!;
    const closeBtn = chip.querySelector<HTMLButtonElement>('[data-action="close"]')!;

    // Sanity while connected.
    let dispatched = 0;
    chip.addEventListener('close', () => dispatched++);
    expect(dispatched).toBe(0);
    await userEvent.click(closeBtn);
    expect(dispatched).toBe(1);

    // Disconnect; clicking the now-detached close button should not
    // re-fire (the component's internal listener is removed).
    host.removeChild(chip);
    closeBtn.click();
    // Counter must be UNCHANGED — proves disconnectedCallback removed
    // the click listener on the close button.
    expect(dispatched).toBe(1);
  },
};

export const SurvivesHtmxSwap: Story = {
  render: (): TemplateResult => html`
    <div data-testid="container">
      <fv-chip data-closable data-value="initial">
        Initial
        <button data-action="close" aria-label="Remove">${xIcon}</button>
      </fv-chip>
    </div>
  `,
  play: async ({ canvasElement }) => {
    const container = canvasElement.querySelector<HTMLElement>('[data-testid="container"]')!;
    container.innerHTML = `
      <fv-chip data-closable data-value="swapped">
        Swapped
        <button data-action="close" aria-label="Remove"><svg width="8" height="8" viewBox="0 0 8 8" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M1 1l6 6M7 1L1 7"/></svg></button>
      </fv-chip>
    `;
    const chip = container.querySelector<HTMLElement>('fv-chip')!;
    const closeBtn = chip.querySelector<HTMLButtonElement>('[data-action="close"]')!;
    let lastValue: string | undefined;
    chip.addEventListener('close', (e) => {
      lastValue = (e as CustomEvent<{ value: string }>).detail.value;
    });
    expect(lastValue).toBeUndefined();
    await userEvent.click(closeBtn);
    expect(lastValue).toBe('swapped');
  },
};
