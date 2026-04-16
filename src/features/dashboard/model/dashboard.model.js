// ─────────────────────────────────────────────────────────────
//  dashboard.model.js — data shapes for dashboard feature
//  These mirror the Spring Boot response DTOs exactly.
//  When real API is connected, only the mock changes — not these.
// ─────────────────────────────────────────────────────────────

/**
 * @typedef {Object} DashboardStats
 * @property {number} totalStudents
 * @property {number} totalClasses
 * @property {number} attendancePercent
 * @property {string} academicYear
 */

/**
 * @typedef {Object} Announcement
 * @property {string} id
 * @property {string} text
 * @property {string} date
 */

/**
 * @typedef {Object} RecentStudent
 * @property {string}  id
 * @property {string}  name
 * @property {string}  class
 * @property {string}  subject
 * @property {number}  score
 * @property {number}  maxScore
 * @property {string}  date
 */

/**
 * @typedef {Object} ChartPoint
 * @property {string} month
 * @property {number} present
 * @property {number} absent
 */

/**
 * @typedef {Object} SubjectProgress
 * @property {string} subject
 * @property {number} percent
 * @property {string} color   — hex color for progress bar
 */

/**
 * createDashboardStats — factory for consistent shape
 */
export const createDashboardStats = (raw = {}) => ({
  totalStudents:     raw.totalStudents     ?? 0,
  totalClasses:      raw.totalClasses      ?? 0,
  attendancePercent: raw.attendancePercent ?? 0,
  academicYear:      raw.academicYear      ?? '',
});