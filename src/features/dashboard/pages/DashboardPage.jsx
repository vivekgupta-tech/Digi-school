import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDashboardStats,
  fetchAnnouncements,
  fetchOverviewChart,
  fetchSubjectProgress,
  fetchRecentStudents,
  selectStats,
  selectAnnouncements,
  selectOverviewChart,
  selectSubjectProgress,
  selectRecentStudents,
} from '../state/dashboard.store';
import StatCard           from '../components/StatCard';
import AnnouncementCard   from '../components/AnnouncementCard';
import OverviewChart      from '../components/OverviewChart';
import RecentStudentsTable from '../components/RecentStudentsTable';
import { ErrorState }     from '../../../core/components/ErrorState';
import { academicYear }   from '../../../core/utils/dateUtils';

// Subject progress bar sub-component (local, only used here)
const SubjectProgressBar = ({ subject, percent, color, loading }) => {
  if (loading) {
    return (
      <div className="space-y-1">
        <div className="h-3 w-32 bg-day-border dark:bg-night-border rounded animate-shimmer" />
        <div className="h-2 w-full bg-day-border dark:bg-night-border rounded-full animate-shimmer" />
      </div>
    );
  }
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-xs font-medium text-day-text-secondary dark:text-night-text-secondary">{subject}</span>
        <span className="text-xs font-semibold text-day-text-primary dark:text-night-text-primary">{percent}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-day-border dark:bg-night-border overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────
const DashboardPage = () => {
  const dispatch = useDispatch();

  const stats     = useSelector(selectStats);
  const announce  = useSelector(selectAnnouncements);
  const chart     = useSelector(selectOverviewChart);
  const progress  = useSelector(selectSubjectProgress);
  const students  = useSelector(selectRecentStudents);

  // Fetch all on mount
  useEffect(() => {
    dispatch(fetchDashboardStats());
    dispatch(fetchAnnouncements());
    dispatch(fetchOverviewChart());
    dispatch(fetchSubjectProgress());
    dispatch(fetchRecentStudents());
  }, [dispatch]);

  const statsLoading    = stats.status    === 'loading';
  const announceLoading = announce.status === 'loading';
  const chartLoading    = chart.status    === 'loading';
  const progressLoading = progress.status === 'loading';
  const studentsLoading = students.status === 'loading';

  return (
    <div className="space-y-5 max-w-6xl mx-auto">

      {/* ── Profile bar ──────────────────────────────── */}
      <div className="flex items-center justify-between gap-4 bg-white dark:bg-night-bg-surface rounded-2xl border border-day-stroke-card dark:border-night-stroke-card px-4 py-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-brand-primary/10 dark:bg-night-tile flex items-center justify-center text-brand-primary font-bold text-sm flex-shrink-0">
            SM
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-day-text-primary dark:text-night-text-primary truncate">Suresh Mohite</p>
            <p className="text-xs text-day-text-tertiary dark:text-night-text-tertiary truncate">Teacher · Mathematics</p>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-primary text-white flex-shrink-0">
          {academicYear()}
        </span>
      </div>

      {/* ── Stat cards ───────────────────────────────── */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <StatCard label="Students"   value={stats.data?.totalStudents     ?? '—'} icon="👨‍🎓" loading={statsLoading} />
        <StatCard label="Classes"    value={stats.data?.totalClasses      ?? '—'} icon="🏫" loading={statsLoading} />
        <StatCard label="Attendance" value={stats.data?.attendancePercent ? `${stats.data.attendancePercent}%` : '—'} icon="✅" loading={statsLoading} />
      </div>
      {stats.status === 'error' && <ErrorState message={stats.error} onRetry={() => dispatch(fetchDashboardStats())} />}

      {/* ── Announcements ────────────────────────────── */}
      <AnnouncementCard announcements={announce.data} loading={announceLoading} />

      {/* ── Chart + Subject Progress ─────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <OverviewChart data={chart.data} loading={chartLoading} />

        {/* Subject Progress */}
        <div className="bg-white dark:bg-night-bg-surface rounded-2xl border border-day-stroke-card dark:border-night-stroke-card p-4 md:p-5">
          <h3 className="text-sm font-semibold text-day-text-primary dark:text-night-text-primary mb-4">
            Subject Progress — Class 8A
          </h3>
          <div className="space-y-4">
            {progressLoading
              ? [1, 2, 3, 4].map((i) => <SubjectProgressBar key={i} loading />)
              : (progress.data || []).map((s) => (
                  <SubjectProgressBar
                    key={s.subject}
                    subject={s.subject}
                    percent={s.percent}
                    color={s.color}
                  />
                ))
            }
          </div>
          {progress.status === 'error' && (
            <ErrorState message={progress.error} onRetry={() => dispatch(fetchSubjectProgress())} />
          )}
        </div>
      </div>

      {/* ── Recent Students ──────────────────────────── */}
      <RecentStudentsTable students={students.data} loading={studentsLoading} />
      {students.status === 'error' && (
        <ErrorState message={students.error} onRetry={() => dispatch(fetchRecentStudents())} />
      )}

      {/* Bottom spacing for mobile */}
      <div className="h-4" />
    </div>
  );
};

export default DashboardPage;