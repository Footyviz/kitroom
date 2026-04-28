import type { Meta, StoryObj } from '@storybook/web-components';

interface ButtonArgs {
  label: string;
  variant: 'default' | 'primary';
  disabled: boolean;
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'primary'],
    },
    disabled: { control: 'boolean' },
  },
  args: {
    label: 'Click me',
    variant: 'default',
    disabled: false,
  },
  render: ({ label, variant, disabled }) => {
    const el = document.createElement('fv-button');
    el.textContent = label;
    if (variant !== 'default') el.setAttribute('variant', variant);
    if (disabled) el.setAttribute('disabled', '');
    return el;
  },
};

export default meta;

type Story = StoryObj<ButtonArgs>;

export const Default: Story = {};

export const Primary: Story = {
  args: { variant: 'primary' },
};

export const Disabled: Story = {
  args: { disabled: true },
};
