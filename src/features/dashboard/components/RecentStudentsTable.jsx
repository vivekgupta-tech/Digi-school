import Badge from '../../../core/components/Badge';
import { SkeletonCard } from '../../../core/components/Skeleton';
import { formatDate } from '../../../core/utils/dateUtils';
import { EmptyState } from '../../../core/components/Loader';

const RecentStudentsTable = ({ students = [], loading }) => {
  if (loading) {
    return (
      <div className="space-y-2">
        {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (!students.length) {
    return <EmptyState title="No recent tests" icon="📋" />;
  }

  return (
    <div className="bg-white dark:bg-night-bg-surface rounded-2xl border border-day-stroke-card dark:border-night-stroke-card overflow-hidden">
      <div className="px-4 md:px-5 py-4 border-b border-day-divider dark:border-night-divider">
        <h3 className="text-sm font-semibold text-day-text-primary dark:text-night-text-primary">
          Recent Tests
        </h3>
      </div>

      {/* Desktop */}
      <table className="w-full text-sm hidden md:table">
        <thead>
          <tr className="border-b border-day-divider dark:border-night-divider">
            {['Student', 'Class', 'Subject', 'Date', 'Score'].map((h) => (
              <th key={h} className="text-left px-5 py-3 text-xs font-semibold uppercase tracking-wider text-day-text-tertiary dark:text-night-text-tertiary">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="border-b border-day-divider dark:border-night-divider last:border-0 hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2 transition-colors">
              <td className="px-5 py-3 font-medium text-day-text-primary dark:text-night-text-primary">{s.name}</td>
              <td className="px-5 py-3 text-day-text-secondary dark:text-night-text-secondary">{s.class}</td>
              <td className="px-5 py-3 text-day-text-secondary dark:text-night-text-secondary">{s.subject}</td>
              <td className="px-5 py-3 text-day-text-tertiary dark:text-night-text-tertiary">{formatDate(s.date, 'short')}</td>
              <td className="px-5 py-3">
                <Badge label={`${s.score}/${s.maxScore}`} variant={s.badgeVariant || 'primary'} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile */}
      <div className="md:hidden divide-y divide-day-divider dark:divide-night-divider">
        {students.map((s) => (
          <div key={s.id} className="px-4 py-3 flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-medium text-day-text-primary dark:text-night-text-primary truncate">{s.name}</p>
              <p className="text-xs text-day-text-tertiary dark:text-night-text-tertiary mt-0.5">
                {s.subject} · {s.class} · {formatDate(s.date, 'short')}
              </p>
            </div>
            <Badge label={`${s.score}/${s.maxScore}`} variant={s.badgeVariant || 'primary'} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentStudentsTable;