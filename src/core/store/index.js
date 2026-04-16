import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from '../../features/dashboard/state/dashboard.store';

// ─────────────────────────────────────────────────────────────
//  Root Store — add new feature slices here only
//  Feature slices live in features/<name>/state/<name>.store.js
// ─────────────────────────────────────────────────────────────
const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    // attendance: attendanceReducer,  ← add here when feature is ready
    // students:   studentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;