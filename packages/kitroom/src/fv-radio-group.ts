/**
 * <fv-radio-group data-selected-value="all"
 *                 [aria-label="..."]>
 *   <fv-radio data-value="all"      aria-checked="true"><span data-role="dot"></span></fv-radio>
 *   <fv-radio data-value="followed" aria-checked="false"><span data-role="dot"></span></fv-radio>
 *   <fv-radio data-value="domestic" aria-checked="false"><span data-role="dot"></span></fv-radio>
 * </fv-radio-group>
 *
 * A thin coordinator on top of <fv-radio>. Owns `data-selected-value`;
 * keeps each child fv-radio's `aria-checked` in sync.
 *
 * Coordination model (per the composition brief):
 *   - parent → children: attribute broadcast. When data-selected-value
 *     changes (server-rendered or set programmatically), the group
 *     updates aria-checked on each direct-descendant [data-value] child.
 *   - children → parent: bubbling events. fv-radio dispatches `change`
 *     with { value }; the group listens, updates its own
 *     data-selected-value, and lets the original event continue bubbling.
 *
 * fv-radio-group does NOT import fv-radio. They upgrade independently.
 * The group identifies its children by querying `[data-value]` direct
 * descendants — same selector works for any tag, so a future radio
 * variant won't require changes here.
 *
 * Events:
 *   - The child's bubbling `change` event is the canonical source for
 *     consumers reacting to user clicks. It carries { value } from the
 *     specific radio that was clicked.
 *   - When `data-selected-value` is set PROGRAMMATICALLY (not from a
 *     child click), the group emits a bubbling `change` with { value }
 *     so external listeners still see the selection move. The group
 *     suppresses this self-emit when the attribute change came from
 *     handling a child click, to avoid double-dispatch.
 */
export class FvRadioGroup extends HTMLElement {
  static observedAttributes = ['data-selected-value'];

  #suppressSelfEmit = false;

  #onChildChange = (e: Event): void => {
    const target = e.target as HTMLElement | null;
    if (!target || target === this) return;
    // Only react to children we own (direct descendants matching the
    // contract). Bubbling events from anywhere else are ignored.
    if (!this.#children().includes(target)) return;
    const value = target.getAttribute('data-value') ?? '';
    if (this.getAttribute('data-selected-value') === value) return;

    this.#suppressSelfEmit = true;
    this.setAttribute('data-selected-value', value);
    this.#suppressSelfEmit = false;
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'radiogroup');
    this.#syncChildren();
    this.addEventListener('change', this.#onChildChange);
  }

  disconnectedCallback(): void {
    this.removeEventListener('change', this.#onChildChange);
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name !== 'data-selected-value') return;
    if (oldValue === newValue) return;
    this.#syncChildren();
    if (this.#suppressSelfEmit) return;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: newValue ?? '' },
        bubbles: true,
      }),
    );
  }

  #children(): HTMLElement[] {
    // Find all [data-value] descendants, but only ones whose nearest
    // fv-radio-group ancestor is THIS group. That keeps nested groups
    // isolated AND tolerates the conventional `<label>` wrapper around
    // each radio for accessible-name association.
    return Array.from(this.querySelectorAll<HTMLElement>('[data-value]')).filter(
      (el) => el.closest('fv-radio-group') === this,
    );
  }

  #syncChildren(): void {
    const selected = this.getAttribute('data-selected-value');
    for (const child of this.#children()) {
      const isSelected = child.getAttribute('data-value') === selected;
      child.setAttribute('aria-checked', String(isSelected));
    }
  }
}

if (!customElements.get('fv-radio-group')) {
  customElements.define('fv-radio-group', FvRadioGroup);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-radio-group': FvRadioGroup;
  }
}
