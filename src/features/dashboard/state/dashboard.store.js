import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import dashboardService from '../services/dashboard.service';

// ─────────────────────────────────────────────────────────────
//  dashboard.store.js — Redux slice for dashboard feature
// ─────────────────────────────────────────────────────────────

// ── Thunks ────────────────────────────────────────────────────
export const fetchDashboardStats = createAsyncThunk(
  'dashboard/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const res = await dashboardService.fetchStats();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to load stats');
    }
  }
);

export const fetchAnnouncements = createAsyncThunk(
  'dashboard/fetchAnnouncements',
  async (_, { rejectWithValue }) => {
    try {
      const res = await dashboardService.fetchAnnouncements();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to load announcements');
    }
  }
);

export const fetchOverviewChart = createAsyncThunk(
  'dashboard/fetchOverviewChart',
  async (_, { rejectWithValue }) => {
    try {
      const res = await dashboardService.fetchOverviewChart();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to load chart');
    }
  }
);

export const fetchSubjectProgress = createAsyncThunk(
  'dashboard/fetchSubjectProgress',
  async (_, { rejectWithValue }) => {
    try {
      const res = await dashboardService.fetchSubjectProgress();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to load progress');
    }
  }
);

export const fetchRecentStudents = createAsyncThunk(
  'dashboard/fetchRecentStudents',
  async (_, { rejectWithValue }) => {
    try {
      const res = await dashboardService.fetchRecentStudents();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Failed to load students');
    }
  }
);

// ── Slice ──────────────────────────────────────────────────────
const STATUS = { IDLE: 'idle', LOADING: 'loading', SUCCESS: 'success', ERROR: 'error' };

const initialState = {
  stats:           { data: null,  status: STATUS.IDLE, error: null },
  announcements:   { data: [],    status: STATUS.IDLE, error: null },
  overviewChart:   { data: [],    status: STATUS.IDLE, error: null },
  subjectProgress: { data: [],    status: STATUS.IDLE, error: null },
  recentStudents:  { data: [],    status: STATUS.IDLE, error: null },
};

const buildAsyncHandlers = (key) => ({
  pending: (state) => {
    state[key].status = STATUS.LOADING;
    state[key].error  = null;
  },
  fulfilled: (state, { payload }) => {
    state[key].status = STATUS.SUCCESS;
    state[key].data   = payload;
  },
  rejected: (state, { payload }) => {
    state[key].status = STATUS.ERROR;
    state[key].error  = payload;
  },
});

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetDashboard: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardStats.pending,    buildAsyncHandlers('stats').pending)
      .addCase(fetchDashboardStats.fulfilled,  buildAsyncHandlers('stats').fulfilled)
      .addCase(fetchDashboardStats.rejected,   buildAsyncHandlers('stats').rejected)

      .addCase(fetchAnnouncements.pending,     buildAsyncHandlers('announcements').pending)
      .addCase(fetchAnnouncements.fulfilled,   buildAsyncHandlers('announcements').fulfilled)
      .addCase(fetchAnnouncements.rejected,    buildAsyncHandlers('announcements').rejected)

      .addCase(fetchOverviewChart.pending,     buildAsyncHandlers('overviewChart').pending)
      .addCase(fetchOverviewChart.fulfilled,   buildAsyncHandlers('overviewChart').fulfilled)
      .addCase(fetchOverviewChart.rejected,    buildAsyncHandlers('overviewChart').rejected)

      .addCase(fetchSubjectProgress.pending,   buildAsyncHandlers('subjectProgress').pending)
      .addCase(fetchSubjectProgress.fulfilled, buildAsyncHandlers('subjectProgress').fulfilled)
      .addCase(fetchSubjectProgress.rejected,  buildAsyncHandlers('subjectProgress').rejected)

      .addCase(fetchRecentStudents.pending,    buildAsyncHandlers('recentStudents').pending)
      .addCase(fetchRecentStudents.fulfilled,  buildAsyncHandlers('recentStudents').fulfilled)
      .addCase(fetchRecentStudents.rejected,   buildAsyncHandlers('recentStudents').rejected);
  },
});

export const { resetDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;

// ── Selectors ─────────────────────────────────────────────────
export const selectStats           = (s) => s.dashboard.stats;
export const selectAnnouncements   = (s) => s.dashboard.announcements;
export const selectOverviewChart   = (s) => s.dashboard.overviewChart;
export const selectSubjectProgress = (s) => s.dashboard.subjectProgress;
export const selectRecentStudents  = (s) => s.dashboard.recentStudents;