// Helper for the "Design Specs" stories.
//
// Each story embeds one of the static HTML pages from /design_specs/preview/
// in an iframe. The directory is exposed via Storybook's `staticDirs` config
// in .storybook/main.ts.
//
// `import.meta.env.BASE_URL` resolves to `/` in local dev and `/kitroom/` in
// the GitHub Pages build, so the iframe src works in both environments
// without manual path rewriting.

export const previewIframe = (file: string, height = 800): HTMLElement => {
  const frame = document.createElement('iframe');
  frame.src = `${import.meta.env.BASE_URL}design_specs/preview/${file}`;
  frame.title = file;
  frame.loading = 'lazy';
  frame.style.cssText = [
    'display: block',
    'width: 100%',
    `height: ${height}px`,
    'border: 1px solid var(--border)',
    'border-radius: var(--radius-md)',
    'background: var(--bg)',
  ].join(';');
  return frame;
};
