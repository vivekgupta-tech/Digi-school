import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { ROUTES } from '../config/appConstants';

const PAGE_TITLES = {
  [ROUTES.DASHBOARD]:  'Dashboard',
  [ROUTES.STUDENTS]:   'Students',
  [ROUTES.ATTENDANCE]: 'Attendance',
  [ROUTES.GRADES]:     'Grades',
  [ROUTES.FEES]:       'Fees',
  [ROUTES.NOTICES]:    'Notices',
  [ROUTES.TIMETABLE]:  'Timetable',
  [ROUTES.PROFILE]:    'Profile',
};

const AppLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const title = PAGE_TITLES[pathname] || 'DigiSchool';

  return (
    <div className="flex h-screen overflow-hidden bg-day-bg-primary dark:bg-night-bg-primary">
      {/* Sidebar */}
      <Sidebar
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      {/* Main content area */}
      <div className="flex flex-col flex-1 min-w-0 lg:ml-60 transition-all duration-250">
        <Topbar
          onMenuClick={() => setMobileOpen(true)}
          title={title}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6 animate-fadeIn">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;