import type { Meta, StoryObj } from '@storybook/web-components';
import { previewIframe } from './_iframe';

const meta: Meta = {
  title: 'Design Specs/Spacing',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

export const Scale: Story    = { render: () => previewIframe('spacing-scale.html', 600) };
export const Borders: Story  = { render: () => previewIframe('spacing-borders.html', 600) };
export const Radii: Story    = { render: () => previewIframe('spacing-radii.html', 600) };
export const Shadows: Story  = { render: () => previewIframe('spacing-shadows.html', 700) };
