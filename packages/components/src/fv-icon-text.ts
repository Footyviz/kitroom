/**
 * <fv-icon-text [data-direction="column"|"row"]
 *               [data-align="center"|"start"|"end"]
 *               [data-gap="..."]>
 *   <svg data-role="icon" ...></svg>     (or any element marked data-role="icon")
 *   <span data-role="label">Live</span>  (or any text-bearing element marked data-role="label")
 * </fv-icon-text>
 *
 * A light-DOM layout primitive. Composes an icon and a text label into a
 * stack (default column, tabbar-style) or a row. Children appear as
 * normal HTML — the component does NOT generate them, and does NOT
 * import/depend on other components.
 *
 * The class is registered so the global :not(:defined) FOUC rule applies
 * and so consumers can rely on the element existing as a real custom
 * element. Behavior is intentionally minimal: layout is CSS-driven via
 * data-* attributes; no events are dispatched.
 */
export class FvIconText extends HTMLElement {
  // No listeners to wire today — CSS handles layout based on data-*
  // attributes targeted in the global stylesheet.
  connectedCallback(): void {}
  disconnectedCallback(): void {}
}

if (!customElements.get('fv-icon-text')) {
  customElements.define('fv-icon-text', FvIconText);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-icon-text': FvIconText;
  }
}
