import { Skeleton } from '../../../core/components/Skeleton';

const StatCard = ({ label, value, icon, loading }) => {
  if (loading) {
    return (
      <div className="flex-1 min-w-0 rounded-2xl border border-day-stroke-card dark:border-night-stroke-card bg-white dark:bg-night-bg-surface p-4">
        <Skeleton className="h-3 w-16 mb-3" />
        <Skeleton className="h-8 w-12" />
      </div>
    );
  }

  return (
    <div className="flex-1 min-w-0 rounded-2xl border border-day-stroke-card dark:border-night-stroke-card
      bg-white dark:bg-night-bg-surface p-4 flex flex-col gap-1
      hover:shadow-card dark:hover:shadow-card-dark transition-shadow duration-200">
      <p className="text-xs font-semibold uppercase tracking-wider text-day-text-tertiary dark:text-night-text-tertiary">
        {label}
      </p>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-bold text-day-text-primary dark:text-night-text-primary">
          {value}
        </p>
        {icon && <span className="text-2xl opacity-80">{icon}</span>}
      </div>
    </div>
  );
};

export default StatCard;