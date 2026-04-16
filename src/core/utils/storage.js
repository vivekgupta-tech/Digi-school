export const storage = {

  set(key, value) {
    try {
      const serialized = typeof value === 'string' ? value : JSON.stringify(value);
      localStorage.setItem(key, serialized);
    } catch (e) {
      console.warn(`[storage.set] Failed for key "${key}"`, e);
    }
  },

  get(key) {
    try {
      const item = localStorage.getItem(key);
      if (item === null) return null;
      try { return JSON.parse(item); } catch { return item; }
    } catch (e) {
      console.warn(`[storage.get] Failed for key "${key}"`, e);
      return null;
    }
  },

  remove(key) {
    try { localStorage.removeItem(key); }
    catch (e) { console.warn(`[storage.remove] Failed for key "${key}"`, e); }
  },

  clearKeys(keys = []) { keys.forEach((k) => this.remove(k)); },

  clearAll() {
    try { localStorage.clear(); }
    catch (e) { console.warn('[storage.clearAll] Failed', e); }
  },

  has(key) { return this.get(key) !== null; },
};