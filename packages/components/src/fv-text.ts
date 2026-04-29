/**
 * <fv-text [data-variant="body" | "body-sm" | "caption" | "label" |
 *                         "h1" | "h2" | "h3" | "display" | "display-serif" |
 *                         "stat-xl" | "stat-lg" | "stat-md" | "stat-sm" |
 *                         "mono" | "editorial"]
 *          [data-tone="default" | "muted" | "subtle" | "inverse" | "accent"]
 *          [data-max-width="<length>"]>
 *   Saka advanced 11m before releasing the pass.
 * </fv-text>
 *
 * A light-DOM styling primitive over the typography utility classes in
 * @footyviz/tokens (.fv-display .. .fv-editorial). data-variant picks the
 * type style; data-tone overrides the foreground colour; data-max-width
 * turns on single-line ellipsis truncation at the given CSS length.
 *
 * The component does not impose semantics: data-variant="h1" styles like
 * an H1 but does not set role="heading". Wrap with the appropriate
 * semantic element when one is needed.
 *
 * The only attribute that needs JS is data-max-width — its value is
 * reflected to inline `style.max-width` so the matching CSS rules
 * (display: inline-block; overflow: hidden; text-overflow: ellipsis;
 * white-space: nowrap) can pick the value up via the cascade. Variant and
 * tone are pure-CSS hooks targeted in the global stylesheet.
 */
export class FvText extends HTMLElement {
  static observedAttributes = ['data-max-width'];

  connectedCallback(): void {
    this.#syncMaxWidth();
  }

  disconnectedCallback(): void {}

  attributeChangedCallback(name: string): void {
    if (name === 'data-max-width' && this.isConnected) this.#syncMaxWidth();
  }

  #syncMaxWidth(): void {
    const value = this.getAttribute('data-max-width');
    if (value) {
      this.style.maxWidth = value;
    } else {
      this.style.removeProperty('max-width');
    }
  }
}

if (!customElements.get('fv-text')) {
  customElements.define('fv-text', FvText);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-text': FvText;
  }
}
