// Minimal centralized state container.
//
// A single source of truth for app state, updated only through setState(),
// with subscribers notified after every change. This replaces the loose
// `let` globals that used to live in main.js so that new features (filters,
// a detail drawer, URL-synced state, etc.) can react to state changes
// without main.js having to manually call every renderer in the right order.

const state = {
  clubs: [],          // raw rows loaded from the database, never mutated after load
  sortKey: 'name',
  sortAsc: true,
  selectedClubId: null,
  filters: {
    certification: 'all',   // 'all' | one certification name
    size: 'all',            // 'all' | 'small' | 'medium' | 'large'
    language: 'all',        // 'all' | one language name
    maxPrice: null           // null (no cap) | number in KRW
  }
};

const subscribers = new Set();

export function getState() {
  return state;
}

export function setState(patch) {
  Object.assign(state, patch);
  subscribers.forEach(fn => fn(state));
}

export function setFilter(key, value) {
  setState({ filters: { ...state.filters, [key]: value } });
}

export function subscribe(fn) {
  subscribers.add(fn);
  return () => subscribers.delete(fn);
}
