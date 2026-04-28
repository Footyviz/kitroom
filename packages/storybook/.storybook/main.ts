import type { StorybookConfig } from '@storybook/web-components-vite';

const config: StorybookConfig = {
  stories: [
    // Foundations (tokens, type, spacing) live in the storybook package.
    '../stories/**/*.stories.ts',
    // Component stories and docs live next to the component source.
    '../../components/src/**/*.stories.ts',
    '../../components/src/**/*.docs.mdx',
  ],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  viteFinal: async (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }
    return config;
  },
};

export default config;
