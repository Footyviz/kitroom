/**
 * <fv-crest data-code="HAR"></fv-crest>
 * <fv-crest data-code="KIN" data-size="lg"></fv-crest>
 * <fv-crest data-src="/crests/har.svg" data-alt="Harringate Utd"></fv-crest>
 *
 * Team identity badge — a small monospace monogram in a bordered box, or
 * an inline raster/SVG when data-src is provided. The host carries
 * role="img" with an aria-label sourced from data-alt (preferred) or
 * data-code, so the badge announces a meaningful name regardless of
 * whether it renders text or an image.
 *
 * If data-src loads successfully the image is shown; if loading errors,
 * the component falls back to the monogram text from data-code. The
 * fallback path is the same render the no-src case takes, so there is
 * exactly one shape of DOM the CSS targets.
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
