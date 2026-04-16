// ─────────────────────────────────────────────────────────────
//  Endpoints — all Spring Boot API paths in one place
//  Usage: ENDPOINTS.DASHBOARD.STATS  →  "/dashboard/stats"
// ─────────────────────────────────────────────────────────────

export const ENDPOINTS = {

  // ── Auth ───────────────────────────────────────────────────
  AUTH: {
    LOGIN:          '/auth/login',
    LOGOUT:         '/auth/logout',
    REFRESH_TOKEN:  '/auth/refresh',
    FORGOT_PASSWORD:'/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    ME:             '/auth/me',
  },

  // ── Dashboard ──────────────────────────────────────────────
  DASHBOARD: {
    STATS:             '/dashboard/stats',
    ANNOUNCEMENTS:     '/dashboard/announcements',
    RECENT_STUDENTS:   '/dashboard/recent-students',
    OVERVIEW_CHART:    '/dashboard/overview-chart',
  },

  // ── Students ───────────────────────────────────────────────
  STUDENTS: {
    LIST:   '/students',
    DETAIL: (id) => `/students/${id}`,
    CREATE: '/students',
    UPDATE: (id) => `/students/${id}`,
    DELETE: (id) => `/students/${id}`,
    AVATAR: (id) => `/students/${id}/avatar`,
  },

  // ── Attendance ─────────────────────────────────────────────
  ATTENDANCE: {
    LIST:   '/attendance',
    MARK:   '/attendance/mark',
    REPORT: '/attendance/report',
  },

  // ── Grades ─────────────────────────────────────────────────
  GRADES: {
    LIST:   '/grades',
    DETAIL: (id) => `/grades/${id}`,
    CREATE: '/grades',
    UPDATE: (id) => `/grades/${id}`,
  },

  // ── Fees ───────────────────────────────────────────────────
  FEES: {
    LIST:    '/fees',
    DETAIL:  (id) => `/fees/${id}`,
    PAY:     '/fees/pay',
    RECEIPT: (id) => `/fees/${id}/receipt`,
  },

  // ── Notices ────────────────────────────────────────────────
  NOTICES: {
    LIST:   '/notices',
    DETAIL: (id) => `/notices/${id}`,
    CREATE: '/notices',
  },

  // ── Timetable ──────────────────────────────────────────────
  TIMETABLE: {
    LIST:   '/timetable',
    DETAIL: (id) => `/timetable/${id}`,
  },

  // ── Profile ────────────────────────────────────────────────
  PROFILE: {
    GET:    '/profile',
    UPDATE: '/profile',
    AVATAR: '/profile/avatar',
  },

};