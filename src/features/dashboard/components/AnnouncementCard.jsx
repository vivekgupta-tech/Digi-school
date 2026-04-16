import { Skeleton } from '../../../core/components/Skeleton';
import { formatDate } from '../../../core/utils/dateUtils';

const AnnouncementCard = ({ announcements = [], loading }) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-day-announcementBorder dark:border-night-border bg-day-announcementBg dark:bg-night-announcementBg p-4 space-y-2">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5" />
      </div>
    );
  }

  if (!announcements.length) return null;

  return (
    <div className="space-y-2">
      {announcements.map((a) => (
        <div
          key={a.id}
          className="flex items-start gap-3 rounded-2xl border
            border-[#BDD0FA] dark:border-night-border
            bg-[#EEF3FE] dark:bg-[#141D30]
            px-4 py-3"
        >
          <span className="mt-1 w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-sm text-day-text-primary dark:text-night-text-primary leading-relaxed">
              {a.text}
            </p>
            <p className="text-xs text-day-text-tertiary dark:text-night-text-tertiary mt-1">
              {formatDate(a.date)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnouncementCard;