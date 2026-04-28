/**
 * <fv-tabbar aria-label="Main navigation">
 *   <a href="/live" role="tab" data-value="live" aria-current="page">
 *     <svg data-role="icon" aria-hidden="true">...</svg>
 *     <span data-role="label">Live</span>
 *     <span data-role="indicator"></span>
 *   </a>
 *   <a href="/fixtures" role="tab" data-value="fixtures">...</a>
 *   ...
 * </fv-tabbar>
 *
 * Bottom-of-screen tab bar. The active tab carries `aria-current="page"`.
 * Clicking a tab sets aria-current on it and clears it on siblings,
 * then dispatches `change` with { value }.
 *
 * The tabs themselves are normal <a> links. The component does NOT
 * preventDefault — let navigation happen unless the consumer hooks
 * the `change` event with preventDefault on the underlying click. For
 * htmx-driven navigation, wire hx-* on the <a>s; the component still
 * updates aria-current visually before the swap arrives.
 */
export class FvTabbar extends HTMLElement {
  #onClick = (e: MouseEvent): void => {
    const tab = (e.target as HTMLElement | null)?.closest<HTMLElement>(
      'a[role="tab"], button[role="tab"]',
    );
    if (!tab || !this.contains(tab)) return;
    if (tab.hasAttribute('aria-disabled')) {
      e.preventDefault();
      return;
    }
    this.#setActive(tab);
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'tablist');
    this.addEventListener('click', this.#onClick);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.#onClick);
  }

  #setActive(target: HTMLElement): void {
    if (target.getAttribute('aria-current') === 'page') return;
    const tabs = this.querySelectorAll<HTMLElement>('[role="tab"]');
    tabs.forEach((tab) => {
      if (tab === target) {
        tab.setAttribute('aria-current', 'page');
      } else {
        tab.removeAttribute('aria-current');
      }
    });
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: target.getAttribute('data-value') ?? '' },
        bubbles: true,
      }),
    );
  }
}

if (!customElements.get('fv-tabbar')) {
  customElements.define('fv-tabbar', FvTabbar);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-tabbar': FvTabbar;
  }
}
