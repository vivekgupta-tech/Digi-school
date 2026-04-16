import { clsx } from 'clsx';

/**
 * Button — 5 variants: primary | secondary | outlined | ghost | danger
 * Sizes: sm | md | lg
 */
const Button = ({
  children,
  variant  = 'primary',
  size     = 'md',
  loading  = false,
  disabled = false,
  fullWidth= false,
  leftIcon = null,
  rightIcon= null,
  className= '',
  onClick,
  type     = 'button',
  ...rest
}) => {
  const base = clsx(
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl',
    'transition-all duration-200 select-none outline-none',
    'focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    fullWidth && 'w-full',
  );

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variants = {
    primary:
      'bg-brand-primary text-white hover:bg-brand-primary-dk active:scale-[0.98] shadow-sm',
    secondary:
      'bg-brand-secondary text-white hover:opacity-90 active:scale-[0.98] shadow-sm',
    outlined:
      'border border-brand-primary text-brand-primary bg-transparent hover:bg-brand-primary hover:text-white active:scale-[0.98]',
    ghost:
      'bg-transparent text-brand-primary hover:bg-day-tile dark:hover:bg-night-tile active:scale-[0.98]',
    danger:
      'bg-error-main text-white hover:bg-error-dark active:scale-[0.98] shadow-sm',
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      ) : (
        leftIcon
      )}
      {children}
      {!loading && rightIcon}
    </button>
  );
};

export default Button;