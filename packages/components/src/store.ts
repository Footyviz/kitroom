/**
 * Tiny EventTarget-based store for client-only UI state shared
 * between components (selections, view modes, expand/collapse).
 *
 * Per ARCHITECTURE.md:
 *   - Server-fetched data does NOT belong here. Re-fetch via htmx.
 *   - If state should survive reload, it belongs on the server.
 *   - Components subscribe in connectedCallback and unsubscribe in
 *     disconnectedCallback via store.removeEventListener.
 *
 * Events dispatched per .set():
 *   - `change:${key}` with detail { value, prev }
 *   - `change`         with detail { key, value, prev }
 */
class Store extends EventTarget {
  #state: Record<string, unknown> = {};

  get<T = unknown>(key: string): T | undefined {
    return this.#state[key] as T | undefined;
  }

  set<T = unknown>(key: string, value: T): void {
    const prev = this.#state[key];
    if (prev === value) return;
    this.#state[key] = value;
    this.dispatchEvent(new CustomEvent(`change:${key}`, { detail: { value, prev } }));
    this.dispatchEvent(new CustomEvent('change', { detail: { key, value, prev } }));
  }

  update<T = unknown>(key: string, fn: (prev: T | undefined) => T): void {
    this.set(key, fn(this.#state[key] as T | undefined));
  }
}

export const store = new Store();
export type { Store };
