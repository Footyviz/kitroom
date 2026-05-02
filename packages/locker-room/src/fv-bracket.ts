/**
 * <fv-bracket data-label="Albion Cup 2026">
 *   <header data-role="head">
 *     <fv-text data-variant="caption" data-tone="muted">Knockout stage · Quarter-finals · Day 12 of 18</fv-text>
 *     <h1 data-role="title">
 *       <fv-text data-variant="display">Albion Cup</fv-text>
 *       <fv-text data-variant="display" data-tone="muted">2026</fv-text>
 *     </h1>
 *     <fv-text data-tone="muted">Hosted in Westport · 32 teams · 8 groups</fv-text>
 *     <fv-chip data-variant="live" data-role="live">Bracket live</fv-chip>
 *   </header>
 *
 *   <div data-role="rounds">
 *     <section data-role="round" data-stage="r16" data-side="left">
 *       <header>
 *         <fv-text data-variant="caption">Round of 16</fv-text>
 *         <fv-text data-variant="mono" data-tone="muted">Jun 28 – Jul 01</fv-text>
 *       </header>
 *       <div data-role="matches">
 *         <article data-role="match">
 *           <fv-table data-density="compact"
 *                     data-columns="auto minmax(0,1fr) auto auto"
 *                     aria-label="Harringate Utd 3, Wickenden FC 0">
 *             <div role="rowgroup">
 *               <div role="row" data-result="win">
 *                 <fv-crest data-code="HAR" data-size="sm" role="cell"></fv-crest>
 *                 <span role="cell" data-primary>Harringate Utd</span>
 *                 <span role="cell" data-strong>HAR</span>
 *                 <span role="cell" data-numeric data-strong>3</span>
 *               </div>
 *               <div role="row">
 *                 <fv-crest data-code="WCK" data-size="sm" role="cell"></fv-crest>
 *                 <span role="cell">Wickenden FC</span>
 *                 <span role="cell">WCK</span>
 *                 <span role="cell" data-numeric>0</span>
 *               </div>
 *             </div>
 *           </fv-table>
 *           <footer data-role="match-meta">
 *             <fv-text data-variant="caption" data-tone="muted">Jun 28 · Westport</fv-text>
 *           </footer>
 *         </article>
 *         …
 *       </div>
 *     </section>
 *     …more rounds…
 *   </div>
 * </fv-bracket>
 *
 * Light-DOM tournament bracket formation. Composes <fv-table> as the
 * unit of a single match (two team rows + score), wraps each table in
 * an <article data-role="match"> so the date/venue footer hangs below
 * inside the same border, and groups matches into round columns.
 *
 * Layout responsibility lives entirely in CSS:
 *   - mobile (<720px): rounds stack vertically; matches within each
 *     round stack 1-col.
 *   - tablet (720–1099px): rounds stack vertically; matches within
 *     each round flow 2-col so the round of 16 reads as a 2×N grid.
 *   - desktop (≥1100px): rounds become CSS-grid columns left-to-right;
 *     each round is a flex column with `justify-content: space-around`
 *     so quarter-final matches naturally sit between their pair of
 *     round-of-16 feeders, semis between their pair of QFs, and the
 *     final lands on the centerline.
 *
 * The component itself does no rendering and very little JS. It exists
 * to:
 *   1. stamp role="region" on the host and wire aria-label from
 *      data-label, so the whole bracket is a landmark for assistive
 *      tech;
 *   2. promote each round's <header> to role="heading" if missing so
 *      screen readers can navigate by round;
 *   3. promote each match's parent <article> to role="article" if
 *      missing.
 *
 * No content is generated. No <style> is injected. All visuals come
 * from packages/kitroom/styles/fv-bracket.css.
 */
export class FvBracket extends HTMLElement {
  static observedAttributes = ['data-label'];

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'region');
    this.#syncLabel();
    this.#enhanceRounds();
    this.#enhanceMatches();
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name !== 'data-label') return;
    if (oldValue === newValue) return;
    if (this.isConnected) this.#syncLabel();
  }

  #syncLabel(): void {
    const label = this.getAttribute('data-label');
    if (label) this.setAttribute('aria-label', label);
    else this.removeAttribute('aria-label');
  }

  #enhanceRounds(): void {
    const rounds = this.querySelectorAll<HTMLElement>(':scope > [data-role="rounds"] > [data-role="round"]');
    for (const round of rounds) {
      if (!round.hasAttribute('role')) round.setAttribute('role', 'group');
    }
  }

  #enhanceMatches(): void {
    const matches = this.querySelectorAll<HTMLElement>('[data-role="match"]');
    for (const match of matches) {
      if (!match.hasAttribute('role')) match.setAttribute('role', 'article');
    }
  }
}

if (!customElements.get('fv-bracket')) {
  customElements.define('fv-bracket', FvBracket);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-bracket': FvBracket;
  }
}
