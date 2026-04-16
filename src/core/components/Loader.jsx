// ─── Loader ───────────────────────────────────────────────────
export const Loader = ({ size = 'md', className = '' }) => {
  const sizes = { sm: 'w-5 h-5', md: 'w-8 h-8', lg: 'w-12 h-12' };
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <div className={`${sizes[size]} border-3 border-day-border dark:border-night-border border-t-brand-primary rounded-full animate-spin`} />
    </div>
  );
};

// ─── ErrorState ───────────────────────────────────────────────
export const ErrorState = ({ message = 'Something went wrong.', onRetry, className = '' }) => (
  <div className={`flex flex-col items-center justify-center py-12 px-4 text-center gap-3 ${className}`}>
    <div className="w-14 h-14 rounded-full bg-error-light dark:bg-[#3A1010] flex items-center justify-center text-2xl">⚠️</div>
    <p className="text-sm text-day-text-secondary dark:text-night-text-secondary max-w-xs">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="text-sm font-semibold text-brand-primary hover:underline"
      >
        Try again
      </button>
    )}
  </div>
);

// ─── EmptyState ───────────────────────────────────────────────
export const EmptyState = ({ title = 'No data found', description = '', icon = '📭', action, className = '' }) => (
  <div className={`flex flex-col items-center justify-center py-12 px-4 text-center gap-3 ${className}`}>
    <div className="text-4xl">{icon}</div>
    <div>
      <p className="font-semibold text-day-text-primary dark:text-night-text-primary">{title}</p>
      {description && <p className="text-sm text-day-text-secondary dark:text-night-text-secondary mt-1">{description}</p>}
    </div>
    {action}
  </div>
);

// ─── Skeleton ─────────────────────────────────────────────────
export const Skeleton = ({ className = '', rounded = 'rounded-lg' }) => (
  <div
    className={`bg-gradient-to-r from-day-border via-day-bg-surface2 to-day-border
    dark:from-night-border dark:via-night-bg-surface2 dark:to-night-border
    bg-[length:200%_100%] animate-shimmer ${rounded} ${className}`}
  />
);

export const SkeletonCard = () => (
  <div className="bg-white dark:bg-night-bg-surface rounded-2xl border border-day-stroke-card dark:border-night-stroke-card p-4 space-y-3">
    <div className="flex items-center gap-3">
      <Skeleton className="w-10 h-10" rounded="rounded-xl" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-3 w-1/2" />
        <Skeleton className="h-2 w-1/3" />
      </div>
    </div>
    <Skeleton className="h-3 w-full" />
    <Skeleton className="h-3 w-4/5" />
  </div>
);

// ─── Pagination ───────────────────────────────────────────────
export const Pagination = ({ page, totalPages, onNext, onPrev, onGoTo, className = '' }) => {
  if (totalPages <= 1) return null;
  return (
    <div className={`flex items-center justify-center gap-2 flex-wrap ${className}`}>
      <button
        onClick={onPrev}
        disabled={page === 0}
        className="px-3 py-1.5 text-sm rounded-lg border border-day-border dark:border-night-border
          disabled:opacity-40 text-day-text-primary dark:text-night-text-primary
          hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2 transition-colors"
      >
        ← Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onGoTo(i)}
          className={`w-8 h-8 text-sm rounded-lg transition-colors ${
            i === page
              ? 'bg-brand-primary text-white font-semibold'
              : 'text-day-text-secondary dark:text-night-text-secondary hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2'
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={onNext}
        disabled={page >= totalPages - 1}
        className="px-3 py-1.5 text-sm rounded-lg border border-day-border dark:border-night-border
          disabled:opacity-40 text-day-text-primary dark:text-night-text-primary
          hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2 transition-colors"
      >
        Next →
      </button>
    </div>
  );
};

// ─── SearchInput ──────────────────────────────────────────────
export const SearchInput = ({ value, onChange, placeholder = 'Search...', className = '' }) => (
  <div className={`relative flex items-center ${className}`}>
    <span className="absolute left-3 text-day-text-tertiary dark:text-night-text-tertiary">
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    </span>
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border
        border-day-border dark:border-night-border
        bg-white dark:bg-night-bg-surface
        text-day-text-primary dark:text-night-text-primary
        placeholder:text-day-text-tertiary dark:placeholder:text-night-text-tertiary
        focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20
        transition-all duration-200"
    />
  </div>
);