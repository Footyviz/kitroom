/**
 * <fv-button [data-variant="primary|cream|secondary|outline|ghost|destructive"]
 *            [data-size="xs|sm|lg"]
 *            [data-loading]
 *            [aria-disabled="true"]>
 *   ...children — typically <fv-icon name="..."/> and/or text...
 * </fv-button>
 *
 * Light-DOM button. The host IS the interactive element (role="button",
 * tabindex="0") — no inner <button>, no shadow root. Composition only:
 * any leading <fv-icon>, label text, and trailing <fv-button-badge> are
 * placed as children. CSS uses :has() to react (e.g. icon-only sizing).
 *
 * Default variant is "secondary" (white card on light); default size is
 * medium (no attribute).
 *
 * Behavior:
 * - Click on the host fires the native click event as you'd expect.
 * - Space and Enter on the focused host activate it (we forward to .click()).
 * - aria-disabled="true" and data-loading both block click + keyboard
 *   activation, and pin tabindex to -1 so the button is skipped in tab
 *   order.
 *
 * Dispatches: nothing custom — relies on the native `click` event.
 */
export class FvButton extends HTMLElement {
  static observedAttributes = ['aria-disabled', 'data-loading'];

  #onClick = (e: Event): void => {
    if (this.#blocked) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  };

  #onKeydown = (e: KeyboardEvent): void => {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    if (this.#blocked) return;
    e.preventDefault();
    this.click();
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'button');
    this.#syncTabindex();
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.#onClick);
    this.removeEventListener('keydown', this.#onKeydown);
  }

  attributeChangedCallback(): void {
    if (this.isConnected) this.#syncTabindex();
  }

  get #blocked(): boolean {
    return this.getAttribute('aria-disabled') === 'true' || this.hasAttribute('data-loading');
  }

  #syncTabindex(): void {
    this.setAttribute('tabindex', this.#blocked ? '-1' : '0');
  }
}

if (!customElements.get('fv-button')) {
  customElements.define('fv-button', FvButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-button': FvButton;
  }
}
