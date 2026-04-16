// ─────────────────────────────────────────────────────────────
//  dateUtils — lightweight date helpers (no external lib needed)
// ─────────────────────────────────────────────────────────────

/**
 * Format a date string or Date object
 * @param {string|Date} date
 * @param {'short'|'long'|'time'|'datetime'} style
 */
export const formatDate = (date, style = 'short') => {
  if (!date) return '—';
  const d = new Date(date);
  if (isNaN(d)) return '—';

  const options = {
    short:    { day: '2-digit', month: 'short', year: 'numeric' },
    long:     { day: '2-digit', month: 'long',  year: 'numeric' },
    time:     { hour: '2-digit', minute: '2-digit', hour12: true },
    datetime: { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true },
    month:    { month: 'long', year: 'numeric' },
  };

  return d.toLocaleDateString('en-IN', options[style] || options.short);
};

/**
 * Returns "2 hours ago", "3 days ago" etc.
 */
export const timeAgo = (date) => {
  if (!date) return '';
  const d    = new Date(date);
  const now  = new Date();
  const diff = Math.floor((now - d) / 1000); // seconds

  if (diff < 60)         return 'just now';
  if (diff < 3600)       return `${Math.floor(diff / 60)} min ago`;
  if (diff < 86400)      return `${Math.floor(diff / 3600)} hr ago`;
  if (diff < 2592000)    return `${Math.floor(diff / 86400)} days ago`;
  if (diff < 31536000)   return `${Math.floor(diff / 2592000)} months ago`;
  return                        `${Math.floor(diff / 31536000)} years ago`;
};

/**
 * Difference in days between two dates (positive = future)
 */
export const daysDiff = (from, to = new Date()) => {
  const a = new Date(from);
  const b = new Date(to);
  return Math.round((b - a) / 86400000);
};

/**
 * Returns today's date as "YYYY-MM-DD" (useful for API query params)
 */
export const todayISO = () => new Date().toISOString().split('T')[0];

/**
 * Check if a date is today
 */
export const isToday = (date) => {
  const d = new Date(date);
  const n = new Date();
  return d.getDate() === n.getDate() &&
         d.getMonth() === n.getMonth() &&
         d.getFullYear() === n.getFullYear();
};

/**
 * Get current academic year string e.g. "2025–26"
 */
export const academicYear = () => {
  const now   = new Date();
  const month = now.getMonth(); // 0-indexed
  const year  = now.getFullYear();
  // Academic year starts in June (month 5)
  const startYear = month >= 5 ? year : year - 1;
  return `${startYear}–${String(startYear + 1).slice(2)}`;
};