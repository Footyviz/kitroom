import type { Meta, StoryObj } from '@storybook/web-components';
import { previewIframe } from './_iframe';

const meta: Meta = {
  title: 'Design Specs/Components',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

export const Buttons: Story    = { render: () => previewIframe('component-buttons.html', 1100) };
export const Chips: Story      = { render: () => previewIframe('component-chips.html', 950) };
export const Inputs: Story     = { render: () => previewIframe('component-inputs.html', 1050) };
export const Events: Story     = { render: () => previewIframe('component-events.html', 700) };
export const Tabbar: Story     = { render: () => previewIframe('component-tabbar.html', 950) };
export const StatRow: Story    = { render: () => previewIframe('component-stat-row.html', 800) };
export const MatchCard: Story  = { render: () => previewIframe('component-match-card.html', 1300) };
export const VizFrame: Story   = { render: () => previewIframe('component-viz-frame.html', 600) };
