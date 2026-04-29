/**
 * <fv-input [data-variant="search"]
 *           [data-size="sm"]
 *           [aria-disabled="true"]>
 *   <fv-icon name="search"/>            optional leading icon
 *   <input type="text" placeholder="Search…" />   required
 *   <kbd>⌘K</kbd>                       optional trailing hint
 *                                        (or kbd[data-variant="inverse"])
 * </fv-input>
 *
 * Light-DOM wrapper that styles a real <input> child. Form integration,
 * autofill, IME, and keyboard handling all work natively because the
 * inner element is a real <input>. The host adds the field "chrome"
 * (border, padding, focus ring via :focus-within) plus one tiny JS
 * convenience: clicking anywhere on the padded surface focuses the
 * inner input. Native `input` and `change` events bubble up through
 * the host as you'd expect.
 *
 * Dispatches: nothing custom — relies on the inner <input>'s native
 * `input` and `change` events.
 */
export class FvInput extends HTMLElement {
  #onClick = (e: MouseEvent): void => {
    if (e.target instanceof HTMLElement && e.target.closest('input, button, [data-action]')) return;
    this.querySelector('input')?.focus();
  };

  connectedCallback(): void {
    this.addEventListener('click', this.#onClick);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.#onClick);
  }
}

if (!customElements.get('fv-input')) {
  customElements.define('fv-input', FvInput);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-input': FvInput;
  }
}
