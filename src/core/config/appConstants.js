// ─────────────────────────────────────────────────────────────
//  AppConstants — single source of truth for all app-wide config
// ─────────────────────────────────────────────────────────────

export const APP_NAME = import.meta.env.VITE_APP_NAME || 'DigiSchool';

export const BASE_URL = import.meta.env.VITE_BASE_URL || 'https://api.digi-school.com/api/v1';

/** Set VITE_MOCK_MODE=false in .env when real API is ready */
export const IS_MOCK_MODE = import.meta.env.VITE_MOCK_MODE === 'true';

// ── Request config ────────────────────────────────────────────
export const API_TIMEOUT = 15000; // 15 seconds

// ── Storage keys (never hardcode strings elsewhere) ──────────
export const STORAGE_KEYS = {
  AUTH_TOKEN:    'digi_auth_token',
  REFRESH_TOKEN: 'digi_refresh_token',
  USER:          'digi_user',
  THEME:         'digi_theme',
};

// ── App routes ────────────────────────────────────────────────
export const ROUTES = {
  // Auth
  LOGIN:      '/login',
  // App
  DASHBOARD:  '/dashboard',
};

// ── Pagination defaults ───────────────────────────────────────
export const PAGE_SIZE = 10;

// ── API response codes ────────────────────────────────────────
export const HTTP_STATUS = {
  OK:                    200,
  CREATED:               201,
  NO_CONTENT:            204,
  BAD_REQUEST:           400,
  UNAUTHORIZED:          401,
  FORBIDDEN:             403,
  NOT_FOUND:             404,
  UNPROCESSABLE_ENTITY:  422,
  INTERNAL_SERVER_ERROR: 500,
};