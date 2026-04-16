import dashboardRepository from '../repository/dashboard.repository';

// ─────────────────────────────────────────────────────────────
//  dashboard.service.js — business logic / data transforms
//  Sits between repository (data) and state (Redux).
//  Add formatting, filtering, derived data here.
// ─────────────────────────────────────────────────────────────

const dashboardService = {

  fetchStats: () => dashboardRepository.getStats(),

  fetchAnnouncements: () => dashboardRepository.getAnnouncements(),

  fetchOverviewChart: () => dashboardRepository.getOverviewChart(),

  fetchSubjectProgress: () => dashboardRepository.getSubjectProgress(),

  fetchRecentStudents: async () => {
    const result = await dashboardRepository.getRecentStudents();
    // Example transform: add score badge label
    const enriched = (result.data || []).map((s) => ({
      ...s,
      badgeVariant: scoreToBadge(s.score, s.maxScore),
    }));
    return { ...result, data: enriched };
  },
};

// ── Helpers ───────────────────────────────────────────────────
const scoreToBadge = (score, max) => {
  const pct = (score / max) * 100;
  if (pct >= 80) return 'success';
  if (pct >= 60) return 'warning';
  if (pct >= 40) return 'info';
  return 'error';
};

export default dashboardService;