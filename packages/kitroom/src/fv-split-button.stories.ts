import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import './fv-split-button.js';
import './fv-button.js';
import './fv-icon.js';

const meta: Meta = {
  title: 'Kitroom/SplitButton',
  component: 'fv-split-button',
};
export default meta;

type Story = StoryObj;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

export const Default: Story = {
  render: (): TemplateResult => html`
    <fv-split-button data-variant="primary">
      <fv-button>Notify me</fv-button>
      <fv-button aria-label="More options"><fv-icon name="settings"></fv-icon></fv-button>
    </fv-split-button>
  `,
  parameters: src(`<fv-split-button data-variant="primary">
  <fv-button>Notify me</fv-button>
  <fv-button aria-label="More options"><fv-icon name="settings"></fv-icon></fv-button>
</fv-split-button>`),
};

export const Variants: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
      <fv-split-button data-variant="primary">
        <fv-button>Primary</fv-button>
        <fv-button aria-label="More"><fv-icon name="settings"></fv-icon></fv-button>
      </fv-split-button>
      <fv-split-button data-variant="cream">
        <fv-button>Cream</fv-button>
        <fv-button aria-label="More"><fv-icon name="settings"></fv-icon></fv-button>
      </fv-split-button>
      <fv-split-button data-variant="secondary">
        <fv-button>Secondary</fv-button>
        <fv-button aria-label="More"><fv-icon name="settings"></fv-icon></fv-button>
      </fv-split-button>
    </div>
  `,
  parameters: src(`<fv-split-button data-variant="primary">...</fv-split-button>
<fv-split-button data-variant="cream">...</fv-split-button>
<fv-split-button data-variant="secondary">...</fv-split-button>`),
};
