/**
 * <fv-gap data-size="1|2|3|4|6|8|12|16|24"></fv-gap>
 *
 * Ad-hoc horizontal whitespace between two siblings, sized from the
 * design system's 9-step spacing scale (Design Specs / Spacing / Scale).
 * Inline-level, height: 0 — never adds vertical space. Zero JS.
 */
export class FvGap extends HTMLElement {
  connectedCallback(): void {}
  disconnectedCallback(): void {}
}

if (!customElements.get('fv-gap')) {
  customElements.define('fv-gap', FvGap);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-gap': FvGap;
  }
}
