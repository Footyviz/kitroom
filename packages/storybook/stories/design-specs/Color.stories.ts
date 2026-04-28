import type { Meta, StoryObj } from '@storybook/web-components';
import { previewIframe } from './_iframe';

const meta: Meta = {
  title: 'Design Specs/Color',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

export const Accent: Story    = { render: () => previewIframe('color-accent.html', 700) };
export const Modes: Story     = { render: () => previewIframe('color-modes.html', 600) };
export const Neutrals: Story  = { render: () => previewIframe('color-neutrals.html', 700) };
export const Semantic: Story  = { render: () => previewIframe('color-semantic.html', 800) };
export const Series: Story    = { render: () => previewIframe('color-series.html', 700) };
