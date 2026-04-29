/**
 * <fv-split-button [data-variant="primary|cream|secondary|outline|ghost|destructive"]>
 *   <fv-button>Notify me</fv-button>
 *   <fv-button><fv-icon name="chevron-down"/></fv-button>
 * </fv-split-button>
 *
 * Visual wrapper that fuses two adjacent <fv-button> children into a
 * single split-action control. Zero JS — the inner buttons keep their
 * own behavior (click events, keyboard activation, disabled, loading);
 * this element just supplies the shared border and the divider line via
 * CSS.
 *
 * data-variant on the wrapper cascades down to the inner buttons via
 * descendant CSS selectors, so the consumer only needs to set the
 * variant once.
 */
export class FvSplitButton extends HTMLElement {
  connectedCallback(): void {}
  disconnectedCallback(): void {}
}

if (!customElements.get('fv-split-button')) {
  customElements.define('fv-split-button', FvSplitButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-split-button': FvSplitButton;
  }
}
