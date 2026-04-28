/**
 * <fv-chip [data-variant="default|strong|accent|info|warn|neg|pos|outline|live"]
 *          [data-closable]
 *          [data-value="..."]>
 *   ...content (text, dot span, crest span, count <b>, etc.)...
 *   [<button data-action="close" aria-label="Remove">...</button>]
 * </fv-chip>
 *
 * A label / badge / token. Visual only by default — no JS needed unless
 * the chip is closable. When the close button is clicked, dispatches a
 * bubbling `close` event with { value }; the consumer decides whether
 * to remove the chip from the DOM (typically via htmx swap or store).
 *
 * The "live" variant has a pulsing dot animation driven entirely by CSS.
 */
export class FvChip extends HTMLElement {
  #closeBtn: HTMLElement | null = null;
  #onClose = (e: Event): void => {
    e.stopPropagation();
    this.dispatchEvent(
      new CustomEvent('close', {
        detail: { value: this.getAttribute('data-value') ?? '' },
        bubbles: true,
      }),
    );
  };

  connectedCallback(): void {
    this.#closeBtn = this.querySelector<HTMLElement>('[data-action="close"]');
    this.#closeBtn?.addEventListener('click', this.#onClose);
  }

  disconnectedCallback(): void {
    this.#closeBtn?.removeEventListener('click', this.#onClose);
    this.#closeBtn = null;
  }
}

if (!customElements.get('fv-chip')) {
  customElements.define('fv-chip', FvChip);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-chip': FvChip;
  }
}
