import { createContext, useState, useEffect, useMemo } from 'react';
import { lightTheme, darkTheme } from './theme';
import { storage } from '../utils/storage';
import { STORAGE_KEYS } from '../config/appConstants';

export const ThemeContext = createContext(null);

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const saved = storage.get(STORAGE_KEYS.THEME);
    if (saved !== null) return saved === 'dark';
    // Respect OS preference on first load
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Sync <html> class for Tailwind darkMode: 'class'
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    storage.set(STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const value = useMemo(() => ({
    theme:       isDark ? darkTheme : lightTheme,
    isDark,
    toggleTheme,
  }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;