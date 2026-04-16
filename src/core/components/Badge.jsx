import { clsx } from 'clsx';

const variantMap = {
  success: 'bg-success-light text-success-dark dark:bg-[#1A4A2E] dark:text-[#4AE89A]',
  warning: 'bg-warning-light text-warning-dark dark:bg-[#3A2A10] dark:text-[#F59E0B]',
  error:   'bg-error-light   text-error-dark   dark:bg-[#3A1010] dark:text-[#F87171]',
  info:    'bg-info-light    text-info-dark    dark:bg-[#1A2A4A] dark:text-[#6B9BFF]',
  primary: 'bg-day-tile      text-brand-primary dark:bg-night-tile dark:text-brand-primary-lt',
  new:     'bg-[#EF4444] text-white',
  hot:     'bg-[#F97316] text-white',
};

/**
 * Badge — inline status/label chip
 */
const Badge = ({ label, variant = 'primary', className = '' }) => (
  <span
    className={clsx(
      'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold',
      variantMap[variant] || variantMap.primary,
      className,
    )}
  >
    {label}
  </span>
);

export default Badge;
