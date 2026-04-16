import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

/**
 * useTheme — consume theme anywhere in the app
 * @returns {{ theme, isDark, toggleTheme }}
 */
const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside <ThemeProvider>');
  return ctx;
};

export default useTheme;