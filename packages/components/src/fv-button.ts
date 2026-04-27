const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host { display: inline-block; }
    button {
      font: inherit;
      padding: 0.5rem 1rem;
      border: 1px solid currentColor;
      border-radius: 0.375rem;
      background: transparent;
      color: inherit;
      cursor: pointer;
    }
    button:hover { background: rgba(0, 0, 0, 0.05); }
    :host([variant="primary"]) button {
      background: #2563eb;
      color: white;
      border-color: #2563eb;
    }
    :host([variant="primary"]) button:hover { background: #1d4ed8; }
    :host([disabled]) button { opacity: 0.5; cursor: not-allowed; }
  </style>
  <button><slot></slot></button>
`;

export class FvButton extends HTMLElement {
  static observedAttributes = ['disabled'];

  constructor() {
    super();
    const root = this.attachShadow({ mode: 'open' });
    root.appendChild(template.content.cloneNode(true));
  }

  attributeChangedCallback(name: string) {
    if (name === 'disabled') {
      const btn = this.shadowRoot?.querySelector('button');
      if (btn) btn.disabled = this.hasAttribute('disabled');
    }
  }
}

if (!customElements.get('fv-button')) {
  customElements.define('fv-button', FvButton);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-button': FvButton;
  }
}
