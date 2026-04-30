/**
 * <fv-crest data-src="https://media.api-sports.io/football/teams/33.png"
 *           data-code="MUN" data-alt="Manchester Utd"></fv-crest>
 * <fv-crest data-code="HAR"></fv-crest>
 * <fv-crest data-code="KIN" data-size="lg"></fv-crest>
 *
 * Team identity badge. The team logo (data-src) is the primary content;
 * a 2-4 letter monogram (data-code) is the fallback when no image is
 * supplied or when the image fails to load. Always provide data-code so
 * the badge says something meaningful even without an asset.
 *
 * The host carries role="img" with an aria-label sourced from data-alt
 * (preferred) or data-code, so the badge announces a meaningful name
 * regardless of whether it ends up rendering image or text.
 *
 * In image mode the bordered-box chrome drops away so the logo renders
 * at its natural shape. In text mode the bordered monogram is shown.
 * The fallback render is the same path the no-src case takes, so there
 * is exactly one shape of DOM the CSS targets.
 *
 * Sizes: data-size="sm" (20px) | default (24px) | "lg" (32px). Borders,
 * radius, font, and background come from tokens — no per-instance values.
 */
export class FvCrest extends HTMLElement {
  static observedAttributes = ['data-code', 'data-src', 'data-alt'];

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'img');
    this.#render();
  }

  disconnectedCallback(): void {}

  attributeChangedCallback(): void {
    if (this.isConnected) this.#render();
  }

  #render(): void {
    const src = this.getAttribute('data-src');
    const code = (this.getAttribute('data-code') ?? '').toUpperCase();
    const alt = this.getAttribute('data-alt') ?? code;

    if (alt) {
      this.setAttribute('aria-label', alt);
    } else {
      this.removeAttribute('aria-label');
    }

    this.replaceChildren();

    if (src) {
      const img = document.createElement('img');
      img.alt = '';
      img.addEventListener(
        'error',
        () => {
          this.replaceChildren(document.createTextNode(code));
        },
        { once: true },
      );
      img.src = src;
      this.appendChild(img);
    } else {
      this.appendChild(document.createTextNode(code));
    }
  }
}

if (!customElements.get('fv-crest')) {
  customElements.define('fv-crest', FvCrest);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-crest': FvCrest;
  }
}
