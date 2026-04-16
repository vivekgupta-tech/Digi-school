import { APP_NAME } from '../config/appConstants';

const Topbar = ({ onMenuClick, title = 'Dashboard' }) => (
  <header className="h-16 flex items-center justify-between px-4 md:px-6
    bg-white dark:bg-night-bg-surface
    border-b border-day-border dark:border-night-border
    sticky top-0 z-10"
  >
    {/* Left: mobile hamburger + page title */}
    <div className="flex items-center gap-3">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2 transition-colors"
      >
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <line x1="3" y1="6"  x2="21" y2="6"/>
          <line x1="3" y1="12" x2="21" y2="12"/>
          <line x1="3" y1="18" x2="21" y2="18"/>
        </svg>
      </button>
      <h1 className="text-base font-semibold text-day-text-primary dark:text-night-text-primary">
        {title}
      </h1>
    </div>

    {/* Right: app name badge */}
    <div className="flex items-center gap-3">
      <span className="hidden sm:inline text-xs font-medium px-2.5 py-1 rounded-lg
        bg-day-tile dark:bg-night-tile text-brand-primary">
        {APP_NAME}
      </span>
    </div>
  </header>
);

export default Topbar;