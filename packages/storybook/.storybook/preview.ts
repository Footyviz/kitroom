import type { Preview } from '@storybook/web-components';
import '@footyviz/tokens/tokens.css';
import '@footyviz/tokens/fonts.css';
import '@footyviz/styles/base.css';
import '@footyviz/styles/components.css';
import '@footyviz/components';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
