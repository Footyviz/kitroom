import type { StorybookConfig } from '@storybook/web-components-vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import remarkGfm from 'remark-gfm';

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: [
    // Foundations (tokens, type, spacing) live in the storybook package.
    '../stories/**/*.stories.ts',
    '../stories/**/*.docs.mdx',
    // Component stories and docs live next to the component source.
    '../../kitroom/src/**/*.stories.ts',
    '../../kitroom/src/**/*.docs.mdx',
    // Formation stories and docs live next to the formation source.
    '../../locker-room/src/**/*.stories.ts',
    '../../locker-room/src/**/*.docs.mdx',
  ],
  addons: [
    {
      // GFM tables (the | pipe | dash |---|---| variety) aren't enabled by
      // default in @storybook/addon-docs's MDX pipeline. Without remark-gfm,
      // tables in our .docs.mdx files render as raw text.
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  staticDirs: [
    // Serve the raw design-spec HTML pages so the "Design Specs" stories can
    // embed them in iframes. Path is relative to this file.
    { from: '../../../design_specs', to: '/design_specs' },
  ],
  viteFinal: async (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }
    // Resolve workspace packages directly to their TypeScript sources so
    // Storybook never depends on a built dist/ directory. Without this,
    // Vite resolves @footyviz/kitroom via the package's exports map
    // (./dist/index.js) and fails with "Failed to resolve import" on a
    // fresh clone or any time dist/ is stale.
    config.resolve = config.resolve ?? {};
    // Use the array form (over the object form) so we can pin the bare
    // `@footyviz/kitroom` alias to the exact specifier with a regex —
    // otherwise prefix matching gobbles subpath imports like
    // `/styles/...` and resolves them against `src/index.ts/...`.
    const existingAlias = config.resolve.alias;
    const existingArray = Array.isArray(existingAlias)
      ? existingAlias
      : existingAlias
        ? Object.entries(existingAlias as Record<string, string>).map(
            ([find, replacement]) => ({ find, replacement }),
          )
        : [];
    config.resolve.alias = [
      { find: '@footyviz/kitroom/styles.css', replacement: resolve(__dirname, '../../kitroom/styles/components.css') },
      { find: '@footyviz/kitroom/styles/', replacement: resolve(__dirname, '../../kitroom/styles/') },
      { find: '@footyviz/kitroom/icons.js', replacement: resolve(__dirname, '../../kitroom/src/icons.ts') },
      { find: /^@footyviz\/kitroom$/, replacement: resolve(__dirname, '../../kitroom/src/index.ts') },
      { find: /^@footyviz\/locker-room$/, replacement: resolve(__dirname, '../../locker-room/src/index.ts') },
      ...existingArray,
    ];
    return config;
  },
};

export default config;
