/**
 * <fv-table-pinned data-pin="1|2|3" data-min-width="640px">
 *   <fv-table data-columns="36px minmax(0,1.5fr) 44px ...">...</fv-table>
 * </fv-table-pinned>
 *
 * Horizontal-scroll formation for wide tables on narrow viewports.
 * Without it, a grid table squeezes its column tracks until content
 * overlaps. Wrapped in this element, the inner <fv-table> keeps a
 * minimum width (data-min-width) and the wrapper scrolls horizontally
 * instead, while the first data-pin columns (default 2 — e.g. rank +
 * team) stick to the left edge and ride over the columns scrolling
 * beneath them.
 *
 * Host attributes (behavior only, per ARCHITECTURE.md):
 *   - data-pin="1|2|3"    how many lead columns stick (default 2; the
 *                          component stamps the default onto the host
 *                          so the stylesheet can key off the value)
 *   - data-min-width      any CSS length; the inner table never gets
 *                          narrower than this, e.g. "640px"
 *
 * Enhancement only: the component measures the pinned columns on the
 * first row and publishes each column's left offset as
 * --fv-table-pinned-left-N custom properties; the stylesheet does the
 * rest. A ResizeObserver keeps the offsets true through font loading,
 * density changes, and container resizes. No content is generated.
 */
export class FvTablePinned extends HTMLElement {
  static observedAttributes = ['data-pin', 'data-min-width'];

  #ro: ResizeObserver | null = null;

  connectedCallback(): void {
    if (!this.hasAttribute('data-pin')) this.setAttribute('data-pin', '2');
    this.#syncMinWidth();
    this.#measure();
    // This element connects before the inner <fv-table> broadcasts its
    // column template — measure again next frame once layout settles.
    requestAnimationFrame(() => this.#measure());
    const row = this.#firstRow();
    if (row && typeof ResizeObserver !== 'undefined') {
      this.#ro = new ResizeObserver(() => this.#measure());
      this.#ro.observe(row);
    }
  }

  disconnectedCallback(): void {
    this.#ro?.disconnect();
    this.#ro = null;
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue === newValue) return;
    if (!this.isConnected) return;
    this.#syncMinWidth();
    this.#measure();
  }

  #pin(): number {
    const n = Number(this.getAttribute('data-pin'));
    return Number.isInteger(n) && n >= 1 && n <= 3 ? n : 2;
  }

  #firstRow(): HTMLElement | null {
    return this.querySelector('fv-table [role="row"]');
  }

  #measure(): void {
    const row = this.#firstRow();
    if (!row) return;
    // Compute each pinned column's natural left edge from the row's
    // RESOLVED grid template (+ padding + gap). Never measure the
    // pinned cells themselves: offsetLeft of a stuck sticky element
    // includes its displacement, which would feed back into the next
    // measurement and drift the offsets.
    const cs = getComputedStyle(row);
    const tracks = cs.gridTemplateColumns.split(' ').map(parseFloat);
    if (tracks.length === 0 || Number.isNaN(tracks[0])) return; // template not applied yet
    const gap = parseFloat(cs.columnGap) || 0;
    let left = parseFloat(cs.paddingLeft) || 0;
    for (let i = 0; i < this.#pin(); i++) {
      this.style.setProperty(`--fv-table-pinned-left-${i + 1}`, `${left}px`);
      left += (tracks[i] ?? 0) + gap;
    }
  }

  #syncMinWidth(): void {
    const min = this.getAttribute('data-min-width');
    if (min) this.style.setProperty('--fv-table-pinned-min', min);
    else this.style.removeProperty('--fv-table-pinned-min');
  }
}

if (!customElements.get('fv-table-pinned')) {
  customElements.define('fv-table-pinned', FvTablePinned);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-table-pinned': FvTablePinned;
  }
}
