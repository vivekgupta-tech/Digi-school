import { clsx } from 'clsx';

/**
 * Input — text/email/password/number with label, error, helper
 */
const Input = ({
  label,
  error,
  helper,
  leftIcon,
  rightIcon,
  className = '',
  id,
  ...rest
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-day-text-secondary dark:text-night-text-secondary"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {leftIcon && (
          <span className="absolute left-3 text-day-text-tertiary dark:text-night-text-tertiary">
            {leftIcon}
          </span>
        )}
        <input
          id={inputId}
          className={clsx(
            'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200',
            'bg-white dark:bg-night-bg-surface',
            'text-day-text-primary dark:text-night-text-primary',
            'placeholder:text-day-text-tertiary dark:placeholder:text-night-text-tertiary',
            error
              ? 'border-error-main focus:ring-2 focus:ring-error-main/30'
              : 'border-day-border dark:border-night-border focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20',
            leftIcon  && 'pl-10',
            rightIcon && 'pr-10',
            className,
          )}
          {...rest}
        />
        {rightIcon && (
          <span className="absolute right-3 text-day-text-tertiary dark:text-night-text-tertiary">
            {rightIcon}
          </span>
        )}
      </div>
      {error  && <p className="text-xs text-error-main">{error}</p>}
      {helper && !error && <p className="text-xs text-day-text-tertiary dark:text-night-text-tertiary">{helper}</p>}
    </div>
  );
};

export default Input;
