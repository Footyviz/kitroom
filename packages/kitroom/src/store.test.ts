import { describe, it, expect, vi, afterEach } from 'vitest';
import { store } from './store.js';

// store is a module-level singleton — every test must clean up the keys
// it touches, otherwise state leaks into the next test.
const SCRATCH_KEYS = ['t1', 't2', 't3', 'count', 'list', 'flag'] as const;

afterEach(() => {
  for (const key of SCRATCH_KEYS) {
    // setting to undefined is fine — `get` will return undefined for unset keys
    store.set(key, undefined);
  }
});

describe('store.set', () => {
  it('stores values retrievable via get', () => {
    store.set('t1', 'hello');
    expect(store.get('t1')).toBe('hello');
  });

  it('returns undefined for unset keys', () => {
    expect(store.get('never-set')).toBeUndefined();
  });

  it('emits change:<key> with { value, prev }', () => {
    const handler = vi.fn();
    store.addEventListener('change:t1', handler);
    store.set('t1', 'first');
    store.set('t1', 'second');

    expect(handler).toHaveBeenCalledTimes(2);
    const first = handler.mock.calls[0]![0] as CustomEvent;
    const second = handler.mock.calls[1]![0] as CustomEvent;
    expect(first.detail).toEqual({ value: 'first', prev: undefined });
    expect(second.detail).toEqual({ value: 'second', prev: 'first' });

    store.removeEventListener('change:t1', handler);
  });

  it('emits a generic `change` event with { key, value, prev }', () => {
    const handler = vi.fn();
    store.addEventListener('change', handler);
    store.set('t2', 42);
    expect(handler).toHaveBeenCalledOnce();
    const evt = handler.mock.calls[0]![0] as CustomEvent;
    expect(evt.detail).toEqual({ key: 't2', value: 42, prev: undefined });
    store.removeEventListener('change', handler);
  });

  it('does not emit when set is called with the same value', () => {
    store.set('t1', 'same');
    const handler = vi.fn();
    store.addEventListener('change:t1', handler);
    store.set('t1', 'same');
    expect(handler).not.toHaveBeenCalled();
    store.removeEventListener('change:t1', handler);
  });
});

describe('store.update', () => {
  it('applies a function to the previous value', () => {
    store.set('count', 1);
    store.update<number>('count', (prev) => (prev ?? 0) + 1);
    expect(store.get('count')).toBe(2);
  });

  it('handles missing keys (prev is undefined)', () => {
    store.update<string[]>('list', (prev) => prev ?? []);
    expect(store.get<string[]>('list')).toEqual([]);
  });

  it('emits change events like set', () => {
    store.set('count', 0);
    const handler = vi.fn();
    store.addEventListener('change:count', handler);
    store.update<number>('count', (prev) => (prev ?? 0) + 5);
    expect(handler).toHaveBeenCalledOnce();
    const evt = handler.mock.calls[0]![0] as CustomEvent;
    expect(evt.detail).toEqual({ value: 5, prev: 0 });
    store.removeEventListener('change:count', handler);
  });
});

describe('store listener cleanup', () => {
  it('does not call removed listeners', () => {
    const handler = vi.fn();
    store.addEventListener('change:flag', handler);
    store.removeEventListener('change:flag', handler);
    store.set('flag', true);
    expect(handler).not.toHaveBeenCalled();
  });
});
