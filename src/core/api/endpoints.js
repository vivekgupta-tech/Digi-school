// ─────────────────────────────────────────────────────────────
//  Endpoints — all Spring Boot API paths in one place
//  Usage: ENDPOINTS.DASHBOARD.STATS  →  "/dashboard/stats"
// ─────────────────────────────────────────────────────────────

export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH_TOKEN: '/auth/refresh',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    ME: '/auth/me',
  },

  STUDENTS: {
    LIST: '/students',
    CREATE: '/students',
    UPDATE: (id) => `/students/${id}`,
    DELETE: (id) => `/students/${id}`,
  },

  DASHBOARD: {
    STATS: '/dashboard/stats',
    ANNOUNCEMENTS: '/dashboard/announcements',
    RECENT_STUDENTS: '/dashboard/recent-students',
    OVERVIEW_CHART: '/dashboard/overview-chart',
  },
};