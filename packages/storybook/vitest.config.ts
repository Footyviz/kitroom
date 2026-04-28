import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const provider = playwright();

export default defineConfig({
  test: {
    // Two projects coexist:
    //   - "storybook"  runs every story with a play function as a test
    //   - "unit"       runs plain *.test.ts files (the store, future utils)
    // Both run in real Chromium via Playwright so behavior matches Storybook.
    projects: [
      {
        plugins: [storybookTest({ configDir: resolve(here, '.storybook') })],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            provider,
            headless: true,
            instances: [{ browser: 'chromium', name: 'storybook-chromium' }],
          },
          setupFiles: [resolve(here, '.storybook/vitest.setup.ts')],
          testTimeout: 30_000,
          hookTimeout: 30_000,
        },
      },
      {
        test: {
          name: 'unit',
          include: [resolve(here, '../components/src/**/*.test.ts')],
          browser: {
            enabled: true,
            provider,
            headless: true,
            instances: [{ browser: 'chromium', name: 'unit-chromium' }],
          },
          testTimeout: 30_000,
          hookTimeout: 30_000,
        },
      },
    ],
  },
});
