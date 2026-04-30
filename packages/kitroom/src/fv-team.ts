/**
 * <fv-team data-side="home">
 *   <fv-crest data-code="ARS" data-size="lg"></fv-crest>
 *   <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
 * </fv-team>
 *
 * <fv-team data-side="away" data-density="compact">
 *   <fv-crest data-code="CHE"></fv-crest>
 *   <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
 * </fv-team>
 *
 * A composite primitive: crest + team-name. Per ARCHITECTURE.md the
 * children are the content surface — the component does NOT generate
 * them. Author drops in any <fv-crest> and any element marked
 * data-role="team-name" (commonly <fv-text>). The component's only
 * responsibility is the surrounding flex shell and the a11y wrapper.
 *
 * Layout direction comes from CSS targeting data-side: home is the
 * default LTR pairing (crest then name); away mirrors the order via
 * flex-direction: row-reverse so authors don't have to swap children
 * when rendering an away team.
 *
 * data-density="compact" tightens the gap between crest and name. It
 * does NOT auto-resize the crest — consumers pick the crest size.
 *
 * The host carries role="group" with an aria-label synthesised from the
 * team-name's text content. A MutationObserver keeps the label in sync
 * if the team-name text changes (e.g. innerHTML swap, htmx swap, store
 * re-render).
 */
export class FvTeam extends HTMLElement {
  #observer: MutationObserver | null = null;

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'group');
    this.#syncLabel();

    this.#observer = new MutationObserver(() => this.#syncLabel());
    this.#observer.observe(this, {
      subtree: true,
      childList: true,
      characterData: true,
    });
  }

  disconnectedCallback(): void {
    this.#observer?.disconnect();
    this.#observer = null;
  }

  #syncLabel(): void {
    const nameEl = this.querySelector('[data-role="team-name"]');
    const label = nameEl?.textContent?.trim() ?? '';
    if (label) {
      this.setAttribute('aria-label', label);
    } else {
      this.removeAttribute('aria-label');
    }
  }
}

if (!customElements.get('fv-team')) {
  customElements.define('fv-team', FvTeam);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-team': FvTeam;
  }
}
