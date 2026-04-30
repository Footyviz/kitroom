/**
 * <fv-checkbox aria-checked="false|true"
 *              [data-variant="ink"|"accent"]   (default "ink")
 *              [aria-disabled="true"]>
 *   <svg data-role="check" viewBox="0 0 16 16" aria-hidden="true">
 *     <polyline points="3 8 7 12 13 4"
 *               fill="none" stroke="currentColor"
 *               stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
 *   </svg>
 * </fv-checkbox>
 *
 * Required child: <svg data-role="check"> with the checkmark path. The SVG
 * is always in the DOM; CSS hides it when aria-checked="false".
 *
 * Dispatches: `change` { checked: boolean } on user toggle (click / Space).
 */
export class FvCheckbox extends HTMLElement {
  #onClick = (): void => this.#toggle();
  #onKeydown = (e: KeyboardEvent): void => {
    if (e.key === ' ' && !this.#disabled) {
      e.preventDefault();
      this.#toggle();
    }
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'checkbox');
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', this.#disabled ? '-1' : '0');
    }
    if (!this.hasAttribute('aria-checked')) {
      this.setAttribute('aria-checked', 'false');
    }
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.#onClick);
    this.removeEventListener('keydown', this.#onKeydown);
  }

  get #disabled(): boolean {
    return this.getAttribute('aria-disabled') === 'true';
  }

  #toggle(): void {
    if (this.#disabled) return;
    const next = this.getAttribute('aria-checked') !== 'true';
    this.setAttribute('aria-checked', String(next));
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { checked: next },
        bubbles: true,
      }),
    );
  }
}

if (!customElements.get('fv-checkbox')) {
  customElements.define('fv-checkbox', FvCheckbox);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-checkbox': FvCheckbox;
  }
}
