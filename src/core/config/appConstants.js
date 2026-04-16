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
  FORGOT_PWD: '/forgot-password',

  // App
  DASHBOARD:  '/dashboard',
  STUDENTS:   '/students',
  ATTENDANCE: '/attendance',
  GRADES:     '/grades',
  FEES:       '/fees',
  NOTICES:    '/notices',
  TIMETABLE:  '/timetable',
  PROFILE:    '/profile',
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



// ── API Endpoints ─────────────────────────────────────────────
export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REFRESH_TOKEN: '/auth/refresh',
    LOGOUT: '/auth/logout',
  },

  STUDENTS: {
    LIST: '/students',
    CREATE: '/students',
    UPDATE: (id) => `/students/${id}`,
    DELETE: (id) => `/students/${id}`,
  },

  DASHBOARD: {
    STATS: '/dashboard/stats',
  },
};