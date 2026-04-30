/**
 * <fv-match-card data-status="live|upcoming|final"
 *                [data-density="default" | "compact"]>
 *   <header data-role="head">
 *     <fv-chip data-variant="live">LIVE</fv-chip>
 *     <fv-text data-role="time" data-variant="mono">73'</fv-text>
 *     <fv-text data-role="meta" data-variant="caption" data-tone="muted">
 *       Premier League · Emirates
 *     </fv-text>
 *   </header>
 *
 *   <div data-role="score">
 *     <fv-team data-side="home">
 *       <fv-crest data-code="ARS" data-size="lg"></fv-crest>
 *       <fv-text data-role="team-name" data-variant="body">Arsenal</fv-text>
 *     </fv-team>
 *     <div data-role="result">
 *       <fv-text data-variant="stat-lg">2</fv-text>
 *       <fv-text data-role="sep" data-variant="stat-lg" data-tone="subtle">–</fv-text>
 *       <fv-text data-variant="stat-lg">1</fv-text>
 *     </div>
 *     <fv-team data-side="away">
 *       <fv-crest data-code="CHE" data-size="lg"></fv-crest>
 *       <fv-text data-role="team-name" data-variant="body">Chelsea</fv-text>
 *     </fv-team>
 *   </div>
 *
 *   <div data-role="stats" role="group" aria-label="Match stats">
 *     <fv-stat-row ...>...</fv-stat-row>
 *     <fv-stat-row ...>...</fv-stat-row>
 *   </div>
 *
 *   <footer data-role="more">
 *     <fv-text data-variant="body-sm">View all stats</fv-text>
 *     <fv-button-badge>32</fv-button-badge>
 *     <fv-icon name="chevron-right"></fv-icon>
 *   </footer>
 * </fv-match-card>
 *
 * Light-DOM formation that composes <fv-team>, <fv-stat-row>,
 * <fv-chip> and other primitives into a match summary card.
 *
 * Layout strategy:
 *   - The host claims a 4-row grid: head | score | stats | footer.
 *   - When placed inside .fv-match-card-grid, the host opts into
 *     `grid-template-rows: subgrid` so multiple cards align their
 *     head/score/footer rows horizontally — the stats area absorbs
 *     row-height variability via the parent's `1fr` track.
 *   - Standalone (no .fv-match-card-grid parent), the host falls
 *     back to its own row tracks via `:not(.fv-match-card-grid > *)`.
 *
 * Composition rule (per ARCHITECTURE.md):
 *   - host attributes are limited to behaviour/variant: data-status,
 *     data-density.
 *   - everything else (chips, time, meta, teams, scores, stats,
 *     footer) is supplied as direct children. The component does
 *     not generate content.
 *
 * JS responsibilities:
 *   - Stamp role="article" on the host and aria-labelledby pointing
 *     at the home + away team-name elements (assigning stable ids
 *     where missing) so screen readers announce the matchup.
 *   - For data-status="live", set aria-live="polite" so live score
 *     swaps are announced.
 *   - Make <footer data-role="more"> behave as a button: role,
 *     tabindex, click + keydown(Enter/Space) → dispatch a bubbling
 *     `fv-match-card-expand` CustomEvent. Consumers wire the rest
 *     (htmx attribute, server fetch, drawer open) on that event or
 *     directly on the footer element.
 *
 * Light DOM only — no shadow root, no `innerHTML` for primary content.
 */

let footerIdCounter = 0;
const nextId = (prefix: string): string => `${prefix}-${++footerIdCounter}`;

export class FvMatchCard extends HTMLElement {
  static observedAttributes = ['data-status'];

  #footer: HTMLElement | null = null;

  #onFooterClick = (e: Event): void => {
    const target = e.target as HTMLElement | null;
    if (!this.#footer || !target || !this.#footer.contains(target)) return;
    this.#dispatchExpand();
  };

  #onFooterKeydown = (e: KeyboardEvent): void => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const target = e.target as HTMLElement | null;
    if (!this.#footer || target !== this.#footer) return;
    e.preventDefault();
    this.#dispatchExpand();
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'article');
    this.#syncLiveRegion();
    this.#syncLabelledBy();
    this.#wireFooter();
  }

  disconnectedCallback(): void {
    if (this.#footer) {
      this.#footer.removeEventListener('click', this.#onFooterClick);
      this.#footer.removeEventListener('keydown', this.#onFooterKeydown);
      this.#footer = null;
    }
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name !== 'data-status') return;
    if (oldValue === newValue) return;
    if (this.isConnected) this.#syncLiveRegion();
  }

  #syncLiveRegion(): void {
    if (this.getAttribute('data-status') === 'live') {
      if (!this.hasAttribute('aria-live')) this.setAttribute('aria-live', 'polite');
    } else {
      if (this.getAttribute('aria-live') === 'polite') this.removeAttribute('aria-live');
    }
  }

  #syncLabelledBy(): void {
    const home = this.querySelector<HTMLElement>(
      'fv-team[data-side="home"] [data-role="team-name"]',
    );
    const away = this.querySelector<HTMLElement>(
      'fv-team[data-side="away"] [data-role="team-name"]',
    );
    if (!home && !away) return;

    const ids: string[] = [];
    if (home) {
      if (!home.id) home.id = nextId('fv-match-card-home');
      ids.push(home.id);
    }
    if (away) {
      if (!away.id) away.id = nextId('fv-match-card-away');
      ids.push(away.id);
    }
    if (ids.length > 0) this.setAttribute('aria-labelledby', ids.join(' '));
  }

  #wireFooter(): void {
    const footer = this.querySelector<HTMLElement>(':scope > footer[data-role="more"]');
    if (!footer) return;
    this.#footer = footer;
    if (!footer.hasAttribute('role')) footer.setAttribute('role', 'button');
    if (!footer.hasAttribute('tabindex')) footer.setAttribute('tabindex', '0');
    footer.addEventListener('click', this.#onFooterClick);
    footer.addEventListener('keydown', this.#onFooterKeydown);
  }

  #dispatchExpand(): void {
    this.dispatchEvent(
      new CustomEvent<FvMatchCardExpandDetail>('fv-match-card-expand', {
        detail: {},
        bubbles: true,
        composed: false,
      }),
    );
  }
}

export interface FvMatchCardExpandDetail {
  // Reserved for future expansion. Intentionally empty today —
  // consumers pass identifiers via htmx attributes on the footer
  // or by reading the host's own data-* attributes.
}

if (!customElements.get('fv-match-card')) {
  customElements.define('fv-match-card', FvMatchCard);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-match-card': FvMatchCard;
  }
  interface HTMLElementEventMap {
    'fv-match-card-expand': CustomEvent<FvMatchCardExpandDetail>;
  }
}
