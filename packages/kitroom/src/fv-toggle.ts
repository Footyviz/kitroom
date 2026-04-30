/**
 * <fv-toggle aria-checked="false|true"
 *            [data-variant="accent"|"ink"]
 *            [data-size="lg"]
 *            [aria-disabled="true"]>
 *   <span data-role="knob"></span>
 * </fv-toggle>
 *
 * Required child: <span data-role="knob"></span>.
 * State: aria-checked reflects on/off; aria-disabled disables interaction.
 * CSS custom props: none.
 * Dispatches: `change` { checked: boolean } on user toggle (click / Space / Enter).
 *             Does not fire when state is set programmatically.
 * Store keys: none.
 */
export class FvToggle extends HTMLElement {
  #onClick = (): void => this.#toggle();
  #onKeydown = (e: KeyboardEvent): void => {
    if ((e.key === ' ' || e.key === 'Enter') && !this.#disabled) {
      e.preventDefault();
      this.#toggle();
    }
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'switch');
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

if (!customElements.get('fv-toggle')) {
  customElements.define('fv-toggle', FvToggle);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-toggle': FvToggle;
  }
}
