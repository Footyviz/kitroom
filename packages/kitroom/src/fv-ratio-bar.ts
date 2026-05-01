/**
 * <fv-ratio-bar style="--pct: 67%"
 *               [data-direction="ltr" | "rtl"]
 *               [data-tone="default" | "accent"]>
 * </fv-ratio-bar>
 *
 * A pure visual primitive: a single horizontal bar with a hard-stop
 * gradient driven by an inline `--pct` custom property. Used inside
 * `<fv-stat-row>` (mirrored pair) and anywhere else a proportion or
 * mini progress indicator is needed.
 *
 * Host attributes:
 *   - `data-direction` — `ltr` (default) anchors the fill to the left;
 *     `rtl` mirrors it so the fill anchors to the right.
 *   - `data-tone` — `default` (neutral fill) or `accent` (straw accent).
 *
 * The percentage is read from the inline `--pct` custom property; there
 * is no `data-pct` attribute. Layout is fully CSS-driven.
 *
 * Light DOM only — no shadow root, no `innerHTML`, no markup generation.
 * The bar is decorative; its parent component carries the `aria-label`
 * describing what the bar represents.
 */
export class FvRatioBar extends HTMLElement {
  connectedCallback(): void {
    if (!this.hasAttribute('aria-hidden')) this.setAttribute('aria-hidden', 'true');
    if (!this.hasAttribute('role')) this.setAttribute('role', 'presentation');
  }

  disconnectedCallback(): void {}
}

if (!customElements.get('fv-ratio-bar')) {
  customElements.define('fv-ratio-bar', FvRatioBar);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-ratio-bar': FvRatioBar;
  }
}
