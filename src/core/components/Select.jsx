import { clsx } from 'clsx';

/**
 * Select — dropdown with label, error
 * options: [{ value, label }]
 */
const Select = ({ label, options = [], error, className = '', id, ...rest }) => {
  const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={selectId} className="text-xs font-medium text-day-text-secondary dark:text-night-text-secondary">
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={clsx(
          'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 appearance-none',
          'bg-white dark:bg-night-bg-surface',
          'text-day-text-primary dark:text-night-text-primary',
          error
            ? 'border-error-main focus:ring-2 focus:ring-error-main/30'
            : 'border-day-border dark:border-night-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20',
          className,
        )}
        {...rest}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
      {error && <p className="text-xs text-error-main">{error}</p>}
    </div>
  );
};

export default Select;