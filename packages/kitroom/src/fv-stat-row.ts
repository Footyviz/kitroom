/**
 * <fv-stat-row style="--home-pct: 67%; --away-pct: 33%"
 *              [data-featured]
 *              [data-density="default" | "compact"]
 *              [data-layout="form"]>
 *   <fv-text data-role="home-value" data-variant="stat-sm">1.84</fv-text>
 *   <fv-text data-role="label" data-variant="label" data-tone="muted">xG</fv-text>
 *   <fv-text data-role="away-value" data-variant="stat-sm">0.92</fv-text>
 * </fv-stat-row>
 *
 * A single-stat comparison row: a 5-column grid (value, bar, label, bar,
 * value) with mirrored proportion bars sized by `--home-pct` / `--away-pct`
 * inline custom properties. Pure-CSS layout — the host's `::before` and
 * `::after` are the bars and read those custom properties.
 *
 * Children are supplied by the consumer (per ARCHITECTURE.md composition
 * rule):
 *   - `[data-role="home-value"]`  — left value cell
 *   - `[data-role="label"]`       — center label
 *   - `[data-role="away-value"]`  — right value cell
 *
 * For the upcoming-match form layout, replace the value cells with
 * `<fv-series>` children carrying `data-role="home-form"` /
 * `data-role="away-form"`; setting `data-layout="form"` on the host
 * collapses the bars and lets the series fill the bar columns.
 *
 * JS responsibilities are minimal:
 *   - Stamp `role="row"` on the host and `role="cell"` on each child
 *     marked with a known data-role, for screen-reader semantics.
 *   - Build an `aria-label` like `"xG: 1.84 vs 0.92"` from child text and
 *     keep it in sync via a MutationObserver on subtree text changes.
 *
 * Light DOM only — no shadow root, no `innerHTML`, no markup generation.
 * The component reads existing children — it does not produce them.
 */

const VALUE_ROLES = ['home-value', 'away-value', 'home-form', 'away-form', 'label'] as const;

export class FvStatRow extends HTMLElement {
  #observer: MutationObserver | null = null;

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'row');
    this.#stampCellRoles();
    this.#syncAriaLabel();

    this.#observer = new MutationObserver(() => {
      this.#stampCellRoles();
      this.#syncAriaLabel();
    });
    this.#observer.observe(this, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  }

  disconnectedCallback(): void {
    this.#observer?.disconnect();
    this.#observer = null;
  }

  #stampCellRoles(): void {
    for (const role of VALUE_ROLES) {
      const child = this.querySelector<HTMLElement>(`:scope > [data-role="${role}"]`);
      if (child && !child.hasAttribute('role')) child.setAttribute('role', 'cell');
    }
  }

  #syncAriaLabel(): void {
    const label = this.#textOf('label');
    const home =
      this.#textOf('home-value') ||
      this.#textOf('home-form');
    const away =
      this.#textOf('away-value') ||
      this.#textOf('away-form');

    if (!label && !home && !away) return;

    const parts: string[] = [];
    if (label) parts.push(`${label}:`);
    if (home) parts.push(home);
    if (home && away) parts.push('vs');
    if (away) parts.push(away);

    const next = parts.join(' ').trim();
    if (next && this.getAttribute('aria-label') !== next) {
      this.setAttribute('aria-label', next);
    }
  }

  #textOf(role: (typeof VALUE_ROLES)[number]): string {
    const el = this.querySelector<HTMLElement>(`:scope > [data-role="${role}"]`);
    return (el?.textContent ?? '').trim();
  }
}

if (!customElements.get('fv-stat-row')) {
  customElements.define('fv-stat-row', FvStatRow);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-stat-row': FvStatRow;
  }
}
