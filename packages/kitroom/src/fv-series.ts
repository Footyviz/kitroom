/**
 * <fv-series aria-label="Last 5: W W D W W"
 *            [data-max-visible="5"]>
 *   <span data-pip="pos"></span>
 *   <span data-pip="pos"></span>
 *   <span data-pip="warn"></span>
 *   <span data-pip="pos"></span>
 *   <span data-pip="pos"></span>
 * </fv-series>
 *
 * A horizontal row of form pips representing recent results. The host is
 * role="img" with a consumer-supplied aria-label describing the
 * sequence — color is never the only signal.
 *
 * Children are bare `<span data-pip="pos|warn|neg">` (or other
 * consumer-defined values). The component does not validate child
 * markup; styling for the documented pip values lives in the global
 * stylesheet.
 *
 * data-max-visible="N" hides all but the last N children, implemented
 * declaratively in CSS via :nth-last-child. The component itself is
 * zero-JS for layout — it only sets role="img" once on connect.
 */
export class FvSeries extends HTMLElement {
  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'img');
  }

  disconnectedCallback(): void {}
}

if (!customElements.get('fv-series')) {
  customElements.define('fv-series', FvSeries);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-series': FvSeries;
  }
}
