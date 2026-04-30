/**
 * <fv-segmented role="radiogroup" aria-label="...">
 *   <button role="radio" data-value="..." aria-checked="true">Live</button>
 *   <button role="radio" data-value="..." aria-checked="false">Today</button>
 *   <button role="radio" data-value="..." aria-checked="false">Upcoming</button>
 * </fv-segmented>
 *
 * Single-select pill group. Clicking a child <button role="radio"> sets
 * aria-checked="true" on it and "false" on all sibling radio buttons,
 * then dispatches `change` with the new value.
 *
 * The server must render every <button> with a data-value and an
 * initial aria-checked. The component does not generate buttons.
 */
export class FvSegmented extends HTMLElement {
  #onClick = (e: MouseEvent): void => {
    const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
      'button[role="radio"]',
    );
    if (!target || !this.contains(target)) return;
    this.#select(target);
  };

  #onKeydown = (e: KeyboardEvent): void => {
    const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
      'button[role="radio"]',
    );
    if (!target || !this.contains(target)) return;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      this.#focusSibling(target, 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      this.#focusSibling(target, -1);
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this.#select(target);
    }
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'radiogroup');
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.#onClick);
    this.removeEventListener('keydown', this.#onKeydown);
  }

  #buttons(): HTMLElement[] {
    return Array.from(this.querySelectorAll<HTMLElement>('button[role="radio"]'));
  }

  #select(target: HTMLElement): void {
    if (target.getAttribute('aria-checked') === 'true') return;
    if (target.hasAttribute('disabled')) return;

    for (const btn of this.#buttons()) {
      btn.setAttribute('aria-checked', btn === target ? 'true' : 'false');
    }
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: target.getAttribute('data-value') ?? '' },
        bubbles: true,
      }),
    );
  }

  #focusSibling(current: HTMLElement, direction: 1 | -1): void {
    const buttons = this.#buttons().filter((b) => !b.hasAttribute('disabled'));
    const i = buttons.indexOf(current);
    if (i === -1) return;
    const next = buttons[(i + direction + buttons.length) % buttons.length];
    next?.focus();
  }
}

if (!customElements.get('fv-segmented')) {
  customElements.define('fv-segmented', FvSegmented);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-segmented': FvSegmented;
  }
}
