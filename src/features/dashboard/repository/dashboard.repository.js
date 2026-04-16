import { IS_MOCK_MODE } from '../../../core/config/appConstants';
import { mockSuccess } from '../../../core/utils/responseHandler';
import {
  MOCK_STATS,
  MOCK_ANNOUNCEMENTS,
  MOCK_OVERVIEW_CHART,
  MOCK_RECENT_STUDENTS,
  MOCK_SUBJECT_PROGRESS,
  mockDelay,
} from '../mock/dashboard.mock';
import dashboardApi from '../api/dashboard.api';

// ─────────────────────────────────────────────────────────────
//  dashboard.repository.js
//
//  🔑 THIS IS THE ONLY FILE YOU CHANGE when switching to real API.
//
//  MOCK_MODE=true  → returns mock data (no network call)
//  MOCK_MODE=false → calls dashboardApi (Spring Boot)
//
//  Everything above (service, state, components) stays identical.
// ─────────────────────────────────────────────────────────────

const dashboardRepository = {

  getStats: async () => {
    if (IS_MOCK_MODE) {
      await mockDelay(500);
      return mockSuccess(MOCK_STATS);
    }
    return dashboardApi.getStats();
  },

  getAnnouncements: async () => {
    if (IS_MOCK_MODE) {
      await mockDelay(400);
      return mockSuccess(MOCK_ANNOUNCEMENTS);
    }
    return dashboardApi.getAnnouncements();
  },

  getOverviewChart: async () => {
    if (IS_MOCK_MODE) {
      await mockDelay(600);
      return mockSuccess(MOCK_OVERVIEW_CHART);
    }
    return dashboardApi.getOverviewChart();
  },

  getSubjectProgress: async () => {
    if (IS_MOCK_MODE) {
      await mockDelay(300);
      return mockSuccess(MOCK_SUBJECT_PROGRESS);
    }
    // Real endpoint: add to dashboardApi when backend is ready
    return dashboardApi.getOverviewChart(); // replace with real call
  },

  getRecentStudents: async () => {
    if (IS_MOCK_MODE) {
      await mockDelay(500);
      return mockSuccess(MOCK_RECENT_STUDENTS);
    }
    return dashboardApi.getRecentStudents();
  },
};

export default dashboardRepository;