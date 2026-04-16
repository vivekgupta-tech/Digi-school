import { Routes, Route, Navigate } from 'react-router-dom';
import { ROUTES } from '../config/appConstants';
import AppLayout from '../layout/AppLayout';
import ProtectedRoute from '../layout/ProtectedRoute';
import DashboardPage from '../../features/dashboard/pages/DashboardPage';

// ── Placeholder pages (add real pages as features are built) ──
const ComingSoon = ({ name }) => (
  <div className="flex items-center justify-center h-full">
    <div className="text-center">
      <div className="text-4xl mb-3">🚧</div>
      <p className="text-lg font-semibold text-day-text-primary dark:text-night-text-primary">{name}</p>
      <p className="text-sm text-day-text-tertiary dark:text-night-text-tertiary mt-1">Coming soon</p>
    </div>
  </div>
);

const AppRoutes = () => (
  <Routes>
    {/* Public */}
    <Route path={ROUTES.LOGIN} element={<LoginBypass />} />

    {/* Protected app shell */}
    <Route
      element={
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<Navigate to={ROUTES.DASHBOARD} replace />} />
      <Route path={ROUTES.DASHBOARD}  element={<DashboardPage />} />
      <Route path={ROUTES.STUDENTS}   element={<ComingSoon name="Students" />} />
      <Route path={ROUTES.ATTENDANCE} element={<ComingSoon name="Attendance" />} />
      <Route path={ROUTES.GRADES}     element={<ComingSoon name="Grades" />} />
      <Route path={ROUTES.FEES}       element={<ComingSoon name="Fees" />} />
      <Route path={ROUTES.NOTICES}    element={<ComingSoon name="Notices" />} />
      <Route path={ROUTES.TIMETABLE}  element={<ComingSoon name="Timetable" />} />
      <Route path={ROUTES.PROFILE}    element={<ComingSoon name="Profile" />} />
    </Route>

    {/* Fallback */}
    <Route path="*" element={<Navigate to={ROUTES.DASHBOARD} replace />} />
  </Routes>
);

// ── Temp bypass: auto-injects a mock token so ProtectedRoute passes ──
// Remove this when real auth is wired up
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../utils/storage';
import { STORAGE_KEYS, ROUTES as R } from '../config/appConstants';

const LoginBypass = () => {
  const nav = useNavigate();
  useEffect(() => {
    storage.set(STORAGE_KEYS.AUTH_TOKEN, 'mock-token-dev');
    nav(R.DASHBOARD, { replace: true });
  }, [nav]);
  return null;
};

export default AppRoutes;