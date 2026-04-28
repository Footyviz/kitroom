import type { Meta, StoryObj } from '@storybook/web-components';
import { previewIframe } from './_iframe';

const meta: Meta = {
  title: 'Design Specs/Type',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

export const Display: Story    = { render: () => previewIframe('type-display.html', 500) };
export const Headings: Story   = { render: () => previewIframe('type-headings.html', 500) };
export const Body: Story       = { render: () => previewIframe('type-body.html', 500) };
export const Editorial: Story  = { render: () => previewIframe('type-editorial.html', 500) };
export const Stats: Story      = { render: () => previewIframe('type-stats.html', 500) };
