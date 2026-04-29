import type { Meta, StoryObj } from '@storybook/web-components';
import { html, type TemplateResult } from 'lit-html';
import './fv-button-badge.js';
import './fv-button.js';
import './fv-icon.js';

const meta: Meta = {
  title: 'Components/ButtonBadge',
  component: 'fv-button-badge',
};
export default meta;

type Story = StoryObj;

const src = (code: string) => ({
  docs: { source: { code, language: 'html' as const } },
});

export const InsideButton: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
      <fv-button data-variant="secondary">
        <fv-icon name="star"/>
        Follow
        <fv-button-badge>12.4k</fv-button-badge>
      </fv-button>
      <fv-button data-variant="primary">
        <fv-icon name="bell"/>
        Notifications
        <fv-button-badge>3</fv-button-badge>
      </fv-button>
      <fv-button data-variant="cream">
        Watch live
        <fv-button-badge>LIVE</fv-button-badge>
      </fv-button>
    </div>
  `,
  parameters: src(`<fv-button data-variant="secondary">
  <fv-icon name="star"></fv-icon>
  Follow
  <fv-button-badge>12.4k</fv-button-badge>
</fv-button>`),
};

export const Standalone: Story = {
  render: (): TemplateResult => html`
    <div style="display: flex; gap: 8px; align-items: center; font-size: 14px;">
      <fv-button-badge>12.4k</fv-button-badge>
      <fv-button-badge>NEW</fv-button-badge>
      <fv-button-badge>0</fv-button-badge>
    </div>
  `,
  parameters: src(`<fv-button-badge>12.4k</fv-button-badge>
<fv-button-badge>NEW</fv-button-badge>
<fv-button-badge>0</fv-button-badge>`),
};
