/**
 * <fv-table data-density="compact|default|comfortable"
 *           [data-zebra]
 *           [data-outline]
 *           [data-sticky-head]
 *           data-columns="36px minmax(0,1fr) 52px 48px 48px 88px 40px">
 *   <header role="rowgroup">
 *     <div role="row" class="fv-table-row fv-table-head">
 *       <span role="columnheader">#</span>
 *       <span role="columnheader" data-primary>Team</span>
 *       <span role="columnheader" data-numeric data-sort="none" data-sort-key="pts">Pts</span>
 *       ...
 *     </div>
 *   </header>
 *   <div role="rowgroup">
 *     <a role="row" class="fv-table-row" href="/team/har" data-zone="champions">
 *       <span role="cell">1</span>
 *       <span role="cell" data-primary>Harringate Utd</span>
 *       <span role="cell" data-numeric data-strong>42</span>
 *       ...
 *     </a>
 *     ...
 *   </div>
 * </fv-table>
 *
 * Light-DOM CSS-grid table organism. The host provides ARIA role="table"
 * and broadcasts the column template to all descendant rows via the
 * --fv-table-cols custom property. Each [role="row"] is itself a CSS
 * grid container that consumes that property, so the whole table aligns
 * without subgrid.
 *
 * Composition rule (per ARCHITECTURE.md):
 *   - host attributes are limited to behaviour/variant: density, zebra,
 *     outline, sticky-head, columns.
 *   - everything else (column headers, row contents, zone accents,
 *     highlight, selected, expanded, sort state, sign coloring) is
 *     expressed via child markup + data-attributes the stylesheet
 *     reacts to.
 *
 * Coordination:
 *   - parent → children: data-columns broadcasts to --fv-table-cols
 *     on the host; descendant rows inherit it via CSS.
 *   - children → parent: column headers carrying data-sort are toggled
 *     none → asc → desc → asc on click. The host emits a bubbling
 *     `sort` CustomEvent with { key, direction } so consumers can
 *     re-render rows. The component does NOT sort row data — it only
 *     reports user intent.
 *
 * Accessibility:
 *   - host gets role="table" if not already set.
 *   - rows, columnheaders, cells must be marked by the consumer with
 *     the appropriate role on the corresponding element. We do not
 *     synthesize roles silently because doing so would mask consumer
 *     mistakes from screen readers.
 *   - sortable headers are wired with aria-sort kept in sync with
 *     data-sort (none|ascending|descending). Activation works on
 *     click and on Space/Enter when the header is focusable; consumers
 *     should mark sortable headers with tabindex="0" so keyboard users
 *     reach them.
 */
export class FvTable extends HTMLElement {
  static observedAttributes = ['data-columns'];

  #onClick = (e: Event): void => {
    const target = e.target as HTMLElement | null;
    const header = target?.closest<HTMLElement>('[role="columnheader"][data-sort]');
    if (!header || !this.contains(header)) return;
    this.#cycleSort(header);
  };

  #onKeydown = (e: KeyboardEvent): void => {
    if (e.key !== ' ' && e.key !== 'Enter') return;
    const target = e.target as HTMLElement | null;
    const header = target?.closest<HTMLElement>('[role="columnheader"][data-sort]');
    if (!header || !this.contains(header)) return;
    e.preventDefault();
    this.#cycleSort(header);
  };

  connectedCallback(): void {
    if (!this.hasAttribute('role')) this.setAttribute('role', 'table');
    this.#syncColumns();
    this.#syncAriaSortAll();
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeydown);
  }

  disconnectedCallback(): void {
    this.removeEventListener('click', this.#onClick);
    this.removeEventListener('keydown', this.#onKeydown);
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    if (name !== 'data-columns') return;
    if (oldValue === newValue) return;
    if (this.isConnected) this.#syncColumns();
  }

  #syncColumns(): void {
    const cols = this.getAttribute('data-columns');
    if (cols) this.style.setProperty('--fv-table-cols', cols);
    else this.style.removeProperty('--fv-table-cols');
  }

  #cycleSort(header: HTMLElement): void {
    const current = header.getAttribute('data-sort') ?? 'none';
    const next: SortDirection = current === 'asc' ? 'desc' : 'asc';
    // Clear sort on every other sortable header — only one column sorted at a time.
    const headers = this.querySelectorAll<HTMLElement>('[role="columnheader"][data-sort]');
    for (const h of headers) {
      if (h !== header) {
        h.setAttribute('data-sort', 'none');
        h.setAttribute('aria-sort', 'none');
      }
    }
    header.setAttribute('data-sort', next);
    header.setAttribute('aria-sort', next === 'asc' ? 'ascending' : 'descending');
    const key = header.getAttribute('data-sort-key') ?? header.textContent?.trim() ?? '';
    this.dispatchEvent(
      new CustomEvent<SortEventDetail>('sort', {
        detail: { key, direction: next },
        bubbles: true,
      }),
    );
  }

  #syncAriaSortAll(): void {
    const headers = this.querySelectorAll<HTMLElement>('[role="columnheader"][data-sort]');
    for (const h of headers) {
      const v = h.getAttribute('data-sort') ?? 'none';
      h.setAttribute('aria-sort', v === 'asc' ? 'ascending' : v === 'desc' ? 'descending' : 'none');
    }
  }
}

export type SortDirection = 'asc' | 'desc' | 'none';

export interface SortEventDetail {
  key: string;
  direction: SortDirection;
}

if (!customElements.get('fv-table')) {
  customElements.define('fv-table', FvTable);
}

declare global {
  interface HTMLElementTagNameMap {
    'fv-table': FvTable;
  }
  interface HTMLElementEventMap {
    sort: CustomEvent<SortEventDetail>;
  }
}
