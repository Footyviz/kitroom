/**
 * <fv-icon name="pitch"
 *          [data-size="sm" | "md" | "lg"]
 *          [data-tone="default" | "accent" | "muted"]
 *          [aria-label="..."]>
 *
 * Renders a reference to a <symbol id="icon-NAME"> defined elsewhere on
 * the page. The symbol sprite is shipped by @footyviz/kitroom/icons.js
 * (the iconSpriteHtml string) or @footyviz/tokens/icons.svg (the file).
 * The page is responsible for placing the sprite once near <body>; this
 * component does NOT inject the sprite.
 *
 * Architecture note: this is the one component that uses innerHTML in
 * connectedCallback. It only emits a small <svg><use> reference — the
 * sprite holds the actual paths. The transform is name -> #icon-${name},
 * a styling hook with no JS-resident content. See ARCHITECTURE.md for
 * the general rule this exception lives under.
 *
 * Accessibility: when neither aria-label nor aria-hidden is set, the
 * component marks itself aria-hidden="true" so the icon is treated as
 * decorative by default. Consumers that need a meaningful name supply
 * aria-label and the component leaves it alone.
 */
export class FvIcon extends HTMLElement {
  static observedAttributes = ['name'];

  connectedCallback(): void {
    if (!this.hasAttribute('aria-hidden') && !this.hasAttribute('aria-label')) {
      this.setAttribute('aria-hidden', 'true');
    }
    this.#render();
  }

  attributeChangedCallback(name: string): void {
    if (name === 'name' && this.isConnected) this.#render();
  }

  #render(): void {
    const name = this.getAttribute('name') ?? '';
    // Defensive: only allow [a-z0-9-] in the id reference.
    const safe = name.replace(/[^a-z0-9-]/g, '');
    this.innerHTML = safe
      ? `<svg viewBox="0 0 24 24" aria-hidden="true"><use href="#icon-${safe}"/></svg>`
      : '';
  }
}

if (!customElements.get('fv-icon')) {
  customElements.define('fv-icon', FvIcon);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-icon': FvIcon;
  }
}
