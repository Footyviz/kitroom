/**
 * <fv-radio aria-checked="false|true"
 *           data-group="..."
 *           data-value="..."
 *           [aria-disabled="true"]>
 *   <span data-role="dot"></span>
 * </fv-radio>
 *
 * Single radio control. Multiple radios sharing a `data-group` value
 * form a single-select group: clicking one unsets aria-checked on all
 * other fv-radio[data-group="X"] elements within the same root, then
 * sets self.
 *
 * Required child: <span data-role="dot"></span> (the inner filled dot).
 *
 * Dispatches: `change` { value: string } on the newly-selected radio
 *             after a user click / Space. Bubbles, so a parent group
 *             container can listen at one level.
 */
export class FvRadio extends HTMLElement {
  #onClick = (): void => this.#select();
  #onKeydown = (e: KeyboardEvent): void => {
    if (e.key === ' ' && !this.#disabled) {
      e.preventDefault();
      this.#select();
    }
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'radio');
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

  #select(): void {
    if (this.#disabled) return;
    if (this.getAttribute('aria-checked') === 'true') return;

    const group = this.getAttribute('data-group');
    if (group) {
      const root = this.getRootNode() as Document | ShadowRoot;
      const peers = root.querySelectorAll<HTMLElement>(
        `fv-radio[data-group="${CSS.escape(group)}"]`,
      );
      peers.forEach((peer) => {
        if (peer !== this) peer.setAttribute('aria-checked', 'false');
      });
    }

    this.setAttribute('aria-checked', 'true');
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.getAttribute('data-value') ?? '' },
        bubbles: true,
      }),
    );
  }
}

if (!customElements.get('fv-radio')) {
  customElements.define('fv-radio', FvRadio);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-radio': FvRadio;
  }
}
