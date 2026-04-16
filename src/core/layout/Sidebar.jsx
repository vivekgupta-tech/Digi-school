import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import { ROUTES, APP_NAME } from '../config/appConstants';
import useTheme from '../theme/useTheme';

// ── Nav items (add more features here later) ──────────────────
const NAV_ITEMS = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    route: ROUTES.DASHBOARD,
    icon: (
      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
        <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
  },
  // ← future features will be added here
];

// ── Mock user (will come from auth store later) ───────────────
const MOCK_USER = {
  name:        'Suresh Mohite',
  designation: 'Teacher · Mathematics',
  avatarInitials: 'SM',
};

const Sidebar = ({ mobileOpen, onMobileClose }) => {
  const [expanded, setExpanded] = useState(true);
  const { isDark, toggleTheme } = useTheme();

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={clsx(
          'fixed top-0 left-0 h-full z-30 flex flex-col',
          'bg-white dark:bg-night-bg-surface',
          'border-r border-day-border dark:border-night-border',
          'sidebar-transition overflow-hidden',
          // Desktop: expand/collapse
          'hidden lg:flex',
          expanded ? 'w-60' : 'w-[68px]',
          // Mobile: slide in/out
          mobileOpen
            ? 'flex w-72 lg:hidden shadow-2xl'
            : 'hidden',
          // Always show on lg
          'lg:flex',
        )}
      >
        {/* ── Logo + collapse btn ─────────────────────── */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-day-divider dark:border-night-divider min-h-[64px]">
          {(expanded || mobileOpen) && (
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="w-8 h-8 rounded-xl bg-brand-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                D
              </div>
              <span className="font-bold text-sm text-day-text-primary dark:text-night-text-primary truncate">
                {APP_NAME}
              </span>
            </div>
          )}
          {!expanded && !mobileOpen && (
            <div className="w-8 h-8 rounded-xl bg-brand-primary flex items-center justify-center text-white font-bold text-sm mx-auto">
              D
            </div>
          )}
          <button
            onClick={() => setExpanded((p) => !p)}
            className="hidden lg:flex p-1.5 rounded-lg hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2 text-day-text-tertiary dark:text-night-text-tertiary transition-colors flex-shrink-0"
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {expanded
                ? <path d="M15 18l-6-6 6-6"/>
                : <path d="M9 18l6-6-6-6"/>}
            </svg>
          </button>
        </div>

        {/* ── User info ───────────────────────────────── */}
        <div className={clsx(
          'flex items-center gap-3 px-4 py-4 border-b border-day-divider dark:border-night-divider',
          !expanded && !mobileOpen && 'justify-center px-2',
        )}>
          <div className="w-9 h-9 rounded-full bg-brand-primary/10 dark:bg-night-tile flex items-center justify-center text-brand-primary font-semibold text-sm flex-shrink-0">
            {MOCK_USER.avatarInitials}
          </div>
          {(expanded || mobileOpen) && (
            <div className="overflow-hidden">
              <p className="text-sm font-semibold text-day-text-primary dark:text-night-text-primary truncate">
                {MOCK_USER.name}
              </p>
              <p className="text-xs text-day-text-tertiary dark:text-night-text-tertiary truncate">
                {MOCK_USER.designation}
              </p>
            </div>
          )}
        </div>

        {/* ── Nav items ───────────────────────────────── */}
        <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.key}
              to={item.route}
              onClick={onMobileClose}
              className={({ isActive }) =>
                clsx(
                  'flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group',
                  !expanded && !mobileOpen && 'justify-center px-0',
                  isActive
                    ? 'bg-brand-primary text-white shadow-sm'
                    : 'text-day-text-secondary dark:text-night-text-secondary hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2',
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className={clsx('flex-shrink-0', isActive ? 'text-white' : 'text-day-text-tertiary dark:text-night-text-tertiary group-hover:text-brand-primary')}>
                    {item.icon}
                  </span>
                  {(expanded || mobileOpen) && (
                    <span className="text-sm font-medium truncate">{item.label}</span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── Theme toggle + logout ───────────────────── */}
        <div className="px-2 py-3 border-t border-day-divider dark:border-night-divider space-y-1">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className={clsx(
              'flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all',
              'text-day-text-secondary dark:text-night-text-secondary',
              'hover:bg-day-bg-surface2 dark:hover:bg-night-bg-surface2',
              !expanded && !mobileOpen && 'justify-center px-0',
            )}
          >
            <span className="flex-shrink-0 text-lg">{isDark ? '☀️' : '🌙'}</span>
            {(expanded || mobileOpen) && (
              <span className="text-sm font-medium">{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            )}
          </button>

          {/* Logout */}
          <button
            className={clsx(
              'flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all',
              'text-error-main hover:bg-error-light dark:hover:bg-[#3A1010]',
              !expanded && !mobileOpen && 'justify-center px-0',
            )}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            {(expanded || mobileOpen) && <span className="text-sm font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;