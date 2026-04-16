import apiClient from '../../../core/api/apiClient';
import { ENDPOINTS } from '../../../core/api/endpoints';
import { handleSuccess } from '../../../core/utils/responseHandler';

// ─────────────────────────────────────────────────────────────
//  dashboard.api.js — raw API calls to Spring Boot
//  Called ONLY by dashboard.repository.js (never by components)
// ─────────────────────────────────────────────────────────────

const dashboardApi = {
  getStats: async () => {
    const res = await apiClient.get(ENDPOINTS.DASHBOARD.STATS);
    return handleSuccess(res);
  },

  getAnnouncements: async () => {
    const res = await apiClient.get(ENDPOINTS.DASHBOARD.ANNOUNCEMENTS);
    return handleSuccess(res);
  },

  getOverviewChart: async () => {
    const res = await apiClient.get(ENDPOINTS.DASHBOARD.OVERVIEW_CHART);
    return handleSuccess(res);
  },

  getRecentStudents: async () => {
    const res = await apiClient.get(ENDPOINTS.DASHBOARD.RECENT_STUDENTS);
    return handleSuccess(res);
  },
};

export default dashboardApi;