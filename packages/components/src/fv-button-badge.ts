/**
 * <fv-button-badge>12.4k</fv-button-badge>
 *
 * A small inline pill, sized in em-units so it scales with the parent's
 * font-size. Intended as a trailing child inside <fv-button> for the
 * count pattern (e.g. "Follow 12.4k"), but it's just a styled element —
 * works anywhere a count chip fits. Zero JS.
 */
export class FvButtonBadge extends HTMLElement {
  connectedCallback(): void {}
  disconnectedCallback(): void {}
}

if (!customElements.get('fv-button-badge')) {
  customElements.define('fv-button-badge', FvButtonBadge);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-button-badge': FvButtonBadge;
  }
}
