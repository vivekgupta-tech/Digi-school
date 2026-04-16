import { clsx } from 'clsx';

/**
 * Card — 4 variants: default | glass | stat | tile
 */
const Card = ({
  children,
  variant   = 'default',
  className = '',
  onClick,
  padding   = true,
  ...rest
}) => {
  const base = clsx(
    'rounded-2xl transition-all duration-200',
    onClick && 'cursor-pointer hover:scale-[1.01] active:scale-[0.99]',
    padding && 'p-4',
  );

  const variants = {
    default:
      'bg-white dark:bg-night-bg-surface border border-day-stroke-card dark:border-night-stroke-card shadow-card dark:shadow-card-dark',
    glass:
      'backdrop-blur-glass bg-white/80 dark:bg-night-bg-glass/80 border border-glass-stroke-day dark:border-glass-stroke-night shadow-glass dark:shadow-glass-dark',
    stat:
      'bg-white dark:bg-night-stat-card-bg border border-day-stroke-card dark:border-night-stroke-card shadow-card dark:shadow-card-dark',
    tile:
      'bg-day-tile dark:bg-night-tile border-0 shadow-none',
  };

  return (
    <div
      className={clsx(base, variants[variant], className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;