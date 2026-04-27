# Changesets

This directory holds [changeset](https://github.com/changesets/changesets) markdown files — one per pending change. Each file declares which packages changed and the bump type (major/minor/patch).

## Adding a changeset

When you make a change worth recording, run:

```bash
npx changeset
```

The interactive prompt asks which packages changed, the bump type, and a summary. It writes a markdown file in this directory — commit that file alongside your change.

`@footyviz/storybook` is intentionally excluded from versioning (see `config.json`) — it's an internal showcase, not a release artifact.

## Bumping versions

When ready to release:

```bash
npm run version-packages
```

This consumes the pending changeset markdowns, bumps `package.json` versions, and updates each package's `CHANGELOG.md`. Commit the result.

## Publishing

Not wired up yet — every package is `private: true`. When a package flips public, a `release` script and CI step that runs `changeset publish` will land separately.
