/**
 * <fv-trend data-direction="up" data-delta="2"></fv-trend>     -> ▲+2
 * <fv-trend data-direction="down" data-delta="1"></fv-trend>   -> ▼-1
 * <fv-trend data-direction="flat"></fv-trend>                   -> ·
 *
 * A direction badge: an arrow glyph + signed numeric delta. Used to
 * indicate movement (e.g. league position change). The host carries
 * role="img" and an auto-generated aria-label like "up 2 positions" /
 * "down 1 position" / "no change". Consumers can override with their
 * own aria-label by setting the attribute before connect — the
 * component leaves a pre-existing label alone.
 *
 * Color is owned by CSS via data-direction:
 *   up   -> --positive
 *   down -> --negative
 *   flat -> --fg-muted
 *
 * data-delta is the magnitude (always non-negative). The component
 * emits a leading "+" for up, "-" for down, and omits the number for
 * flat. If data-delta is missing or non-numeric, only the arrow is
 * shown.
 */

type Direction = 'up' | 'down' | 'flat';

const isDirection = (v: string | null): v is Direction =>
  v === 'up' || v === 'down' || v === 'flat';

export class FvTrend extends HTMLElement {
  static observedAttributes = ['data-direction', 'data-delta'];

  #labelOwned = false;

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'img');
    this.#render();
  }

  disconnectedCallback(): void {}

  attributeChangedCallback(): void {
    if (this.isConnected) this.#render();
  }

  #render(): void {
    const dir = this.getAttribute('data-direction');
    const direction: Direction = isDirection(dir) ? dir : 'flat';
    const deltaRaw = this.getAttribute('data-delta');
    const delta = deltaRaw !== null && deltaRaw !== '' ? Number(deltaRaw) : NaN;
    const hasDelta = Number.isFinite(delta);
    const magnitude = hasDelta ? Math.abs(delta) : null;

    let visible: string;
    if (direction === 'up') {
      visible = magnitude !== null ? `▲+${magnitude}` : '▲';
    } else if (direction === 'down') {
      visible = magnitude !== null ? `▼-${magnitude}` : '▼';
    } else {
      visible = '·';
    }
    this.textContent = visible;

    if (this.#labelOwned || !this.hasAttribute('aria-label')) {
      let label: string;
      if (direction === 'up') {
        label = magnitude !== null
          ? `up ${magnitude} ${magnitude === 1 ? 'position' : 'positions'}`
          : 'up';
      } else if (direction === 'down') {
        label = magnitude !== null
          ? `down ${magnitude} ${magnitude === 1 ? 'position' : 'positions'}`
          : 'down';
      } else {
        label = 'no change';
      }
      this.setAttribute('aria-label', label);
      this.#labelOwned = true;
    }
  }
}

if (!customElements.get('fv-trend')) {
  customElements.define('fv-trend', FvTrend);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-trend': FvTrend;
  }
}
