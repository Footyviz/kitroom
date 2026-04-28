import type { Meta, StoryObj } from '@storybook/web-components';
import { previewIframe } from './_iframe';

// This is the design-spec snapshot's token reference (from
// design_specs/preview/tokens-reference.html). For the live, package-driven
// token swatches see Foundations/Tokens.

const meta: Meta = {
  title: 'Design Specs/Tokens Reference',
  parameters: { layout: 'fullscreen' },
};
export default meta;

type Story = StoryObj;

export const Reference: Story = { render: () => previewIframe('tokens-reference.html', 1000) };
