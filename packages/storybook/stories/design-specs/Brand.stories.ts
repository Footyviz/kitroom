import type { Meta, StoryObj } from '@storybook/web-components';
import { previewIframe } from './_iframe';

const meta: Meta = {
  title: 'Design Specs/Brand',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

export const Glyph: Story = { render: () => previewIframe('brand-glyph.html', 900) };
export const Icons: Story = { render: () => previewIframe('brand-icons.html', 1300) };
export const Pitch: Story = { render: () => previewIframe('brand-pitch.html', 700) };
export const Voice: Story = { render: () => previewIframe('brand-voice.html', 600) };
