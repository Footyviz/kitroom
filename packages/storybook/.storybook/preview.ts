import type { Preview } from '@storybook/web-components';
import '@footyviz/tokens/tokens.css';
import '@footyviz/tokens/fonts.css';
import '@footyviz/styles/base.css';
import '@footyviz/styles/components.css';
import '@footyviz/kitroom';
import '@footyviz/locker-room';
import { iconSpriteHtml } from '@footyviz/kitroom/icons.js';

// The <fv-icon> component renders <svg><use href="#icon-NAME"/></svg>
// references — the symbol sprite must already be on the page. Inject
// it once on first story render. Idempotent: re-checks for the marker
// element, so HMR / multiple decorator passes stay no-ops.
const SPRITE_ID = 'fv-icon-sprite';
const injectSprite = (): void => {
  if (document.getElementById(SPRITE_ID)) return;
  const wrap = document.createElement('div');
  wrap.innerHTML = iconSpriteHtml.replace('<svg ', `<svg id="${SPRITE_ID}" `);
  const sprite = wrap.firstElementChild;
  if (sprite) document.body.append(sprite);
};

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['Overview', 'Foundations', 'Components', 'Formations', 'Design Specs'],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      injectSprite();
      return story();
    },
  ],
};

export default preview;
