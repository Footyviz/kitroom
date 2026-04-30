/**
 * <fv-slider data-value="62"
 *            [data-min="0"]
 *            [data-max="100"]
 *            [data-step="1"]
 *            [aria-disabled="true"]
 *            [aria-label="..."]>
 *   <span data-role="track"></span>
 *   <span data-role="fill"></span>
 *   <span data-role="thumb"></span>
 * </fv-slider>
 *
 * Single-thumb horizontal slider. Drag the thumb, click anywhere on
 * the track to jump, or use Arrow / Home / End / PageUp / PageDown
 * for keyboard control.
 *
 * Required children: track, fill, thumb spans (light DOM). The
 * component positions fill width and thumb left as percentages of
 * (value - min) / (max - min).
 *
 * Dispatches: `input`  { value } continuously while dragging
 *             `change` { value } once on commit (pointerup / keyup)
 *
 * The aria-valuenow attribute mirrors data-value for assistive tech.
 */
export class FvSlider extends HTMLElement {
  #thumb: HTMLElement | null = null;
  #fill: HTMLElement | null = null;
  #pointerId: number | null = null;
  #dragValue: number | null = null;

  #onPointerdown = (e: PointerEvent): void => {
    if (this.#disabled || e.button !== 0) return;
    this.#pointerId = e.pointerId;
    this.setPointerCapture(e.pointerId);
    const value = this.#valueAtClientX(e.clientX);
    this.#setValue(value, { commit: false });
    e.preventDefault();
  };

  #onPointermove = (e: PointerEvent): void => {
    if (this.#pointerId !== e.pointerId) return;
    const value = this.#valueAtClientX(e.clientX);
    this.#setValue(value, { commit: false });
  };

  #onPointerup = (e: PointerEvent): void => {
    if (this.#pointerId !== e.pointerId) return;
    this.releasePointerCapture(e.pointerId);
    this.#pointerId = null;
    this.#commit();
  };

  #onKeydown = (e: KeyboardEvent): void => {
    if (this.#disabled) return;
    const step = this.#step;
    const range = this.#max - this.#min;
    let next: number | null = null;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        next = this.#value + step;
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        next = this.#value - step;
        break;
      case 'PageUp':
        next = this.#value + Math.max(step, range / 10);
        break;
      case 'PageDown':
        next = this.#value - Math.max(step, range / 10);
        break;
      case 'Home':
        next = this.#min;
        break;
      case 'End':
        next = this.#max;
        break;
    }
    if (next !== null) {
      e.preventDefault();
      this.#setValue(next, { commit: true });
    }
  };

  connectedCallback(): void {
    this.#thumb = this.querySelector<HTMLElement>('[data-role="thumb"]');
    this.#fill = this.querySelector<HTMLElement>('[data-role="fill"]');

    if (!this.hasAttribute('role')) this.setAttribute('role', 'slider');
    if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', this.#disabled ? '-1' : '0');
    }
    this.#syncAria();
    this.#paint(this.#value);

    this.addEventListener('pointerdown', this.#onPointerdown);
    this.addEventListener('pointermove', this.#onPointermove);
    this.addEventListener('pointerup', this.#onPointerup);
    this.addEventListener('pointercancel', this.#onPointerup);
    this.addEventListener('keydown', this.#onKeydown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('pointerdown', this.#onPointerdown);
    this.removeEventListener('pointermove', this.#onPointermove);
    this.removeEventListener('pointerup', this.#onPointerup);
    this.removeEventListener('pointercancel', this.#onPointerup);
    this.removeEventListener('keydown', this.#onKeydown);
    this.#thumb = null;
    this.#fill = null;
  }

  get #disabled(): boolean {
    return this.getAttribute('aria-disabled') === 'true';
  }

  get #min(): number {
    return Number(this.getAttribute('data-min') ?? 0);
  }

  get #max(): number {
    const raw = Number(this.getAttribute('data-max') ?? 100);
    return raw > this.#min ? raw : this.#min + 1;
  }

  get #step(): number {
    const raw = Number(this.getAttribute('data-step') ?? 1);
    return raw > 0 ? raw : 1;
  }

  get #value(): number {
    return this.#clamp(Number(this.getAttribute('data-value') ?? this.#min));
  }

  #clamp(v: number): number {
    return Math.max(this.#min, Math.min(this.#max, v));
  }

  #snap(v: number): number {
    const step = this.#step;
    const min = this.#min;
    return min + Math.round((v - min) / step) * step;
  }

  #valueAtClientX(clientX: number): number {
    const rect = this.getBoundingClientRect();
    if (rect.width === 0) return this.#value;
    const pct = (clientX - rect.left) / rect.width;
    return this.#min + pct * (this.#max - this.#min);
  }

  #setValue(raw: number, opts: { commit: boolean }): void {
    const next = this.#clamp(this.#snap(raw));
    if (next === this.#value && this.#dragValue === null) {
      if (opts.commit) this.#commit();
      return;
    }
    this.setAttribute('data-value', String(next));
    this.#syncAria();
    this.#paint(next);
    this.#dragValue = next;
    this.dispatchEvent(
      new CustomEvent('input', { detail: { value: next }, bubbles: true }),
    );
    if (opts.commit) this.#commit();
  }

  #commit(): void {
    if (this.#dragValue === null) return;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: this.#dragValue },
        bubbles: true,
      }),
    );
    this.#dragValue = null;
  }

  #paint(value: number): void {
    const pct = ((value - this.#min) / (this.#max - this.#min)) * 100;
    if (this.#fill) this.#fill.style.width = `${pct}%`;
    if (this.#thumb) this.#thumb.style.left = `${pct}%`;
  }

  #syncAria(): void {
    this.setAttribute('aria-valuemin', String(this.#min));
    this.setAttribute('aria-valuemax', String(this.#max));
    this.setAttribute('aria-valuenow', String(this.#value));
  }
}

if (!customElements.get('fv-slider')) {
  customElements.define('fv-slider', FvSlider);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-slider': FvSlider;
  }
}
