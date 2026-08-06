// state.js is a singleton module-level store. Every test that mutates
// state resets the fields it touches at the top of the test, so tests
// stay order-independent. We keep tests in one `describe` and use a
// `beforeEach` reset rather than dynamic imports so the module load
// cost is paid once.
import { describe, it, expect, beforeEach } from 'vitest';
import { getState, setState, setFilter, subscribe } from './state.js';

const DEFAULT_FILTERS = () => ({
  certification: 'all',
  size: 'all',
  language: 'all',
  maxPrice: null,
});

function resetState() {
  setState({
    clubs: [],
    sortKey: 'name',
    sortAsc: true,
    selectedClubId: null,
    locale: 'en',
    filters: DEFAULT_FILTERS(),
  });
}

describe('state store', () => {
  beforeEach(() => {
    resetState();
  });

  it('exposes the current state through getState', () => {
    const s = getState();
    expect(s.sortKey).toBe('name');
    expect(s.sortAsc).toBe(true);
    expect(s.selectedClubId).toBe(null);
  });

  it('setState merges a patch into the state without replacing untouched keys', () => {
    setState({ sortKey: 'price' });
    const s = getState();
    expect(s.sortKey).toBe('price');
    // sortAsc must survive a patch that did not mention it.
    expect(s.sortAsc).toBe(true);
    expect(s.filters.certification).toBe('all');
  });

  it('setFilter mutates one filter key without touching the others', () => {
    setFilter('certification', 'PADI');
    const s = getState();
    expect(s.filters.certification).toBe('PADI');
    expect(s.filters.size).toBe('all');
    expect(s.filters.language).toBe('all');
    expect(s.filters.maxPrice).toBe(null);
  });

  it('setFilter replaces the filters object rather than mutating the old one', () => {
    // Guards against a real bug in the pre-store `let` days: a
    // subscriber that snapshotted `state.filters` would see later
    // filter changes if the object was mutated in place.
    const beforeFilters = getState().filters;
    setFilter('size', 'small');
    const afterFilters = getState().filters;
    expect(afterFilters).not.toBe(beforeFilters);
    expect(beforeFilters.size).toBe('all'); // snapshot untouched
    expect(afterFilters.size).toBe('small');
  });

  it('subscribers are called after every setState, receiving the current state', () => {
    let calls = 0;
    let lastSeen = null;
    const unsubscribe = subscribe(s => {
      calls++;
      lastSeen = s.sortKey;
    });

    setState({ sortKey: 'city' });
    setState({ sortKey: 'size' });
    expect(calls).toBe(2);
    expect(lastSeen).toBe('size');

    unsubscribe();
  });

  it('subscribers fire once per setState call, including setFilter', () => {
    let calls = 0;
    const unsubscribe = subscribe(() => {
      calls++;
    });
    setFilter('certification', 'PADI');
    setFilter('size', 'small');
    expect(calls).toBe(2);
    unsubscribe();
  });

  it('unsubscribe stops delivering updates to that subscriber', () => {
    let calls = 0;
    const unsubscribe = subscribe(() => {
      calls++;
    });
    setState({ sortKey: 'city' });
    expect(calls).toBe(1);
    unsubscribe();
    setState({ sortKey: 'size' });
    expect(calls).toBe(1);
  });

  it('supports multiple independent subscribers', () => {
    let a = 0;
    let b = 0;
    const unA = subscribe(() => a++);
    const unB = subscribe(() => b++);
    setState({ sortKey: 'city' });
    expect(a).toBe(1);
    expect(b).toBe(1);
    unA();
    setState({ sortKey: 'size' });
    // Only B still active.
    expect(a).toBe(1);
    expect(b).toBe(2);
    unB();
  });

  it('setState with selectedClubId null clears the current selection', () => {
    setState({ selectedClubId: 7 });
    expect(getState().selectedClubId).toBe(7);
    setState({ selectedClubId: null });
    expect(getState().selectedClubId).toBe(null);
  });
});
