/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class', // class-based dark mode
  theme: {
    extend: {
      colors: {
        // ── Brand ──────────────────────────────────
        brand: {
          primary:      '#4A7EE8',
          'primary-dk': '#3366CC',
          'primary-lt': '#6B9BFF',
          secondary:    '#6C5CE7',
          'secondary-lt':'#8B7FF0',
        },

        // ── Day (Light) Backgrounds ─────────────────
        day: {
          'bg-primary':  '#F2F4F8',
          'bg-surface':  '#FFFFFF',
          'bg-surface2': '#F7F9FC',
          'bg-elevated': '#FFFFFF',
          'bg-glass':    '#E8EDF6',
          border:        '#DDE3ED',
          divider:       '#EAEEf5',
          'stroke-card': '#D4DCF0',
          // Tiles
          'tile':        '#EDF1FB',
          'tile-purple': '#EDE9FB',
          'tile-green':  '#E4F6EE',
          'tile-orange': '#FEF0E3',
          'tile-pink':   '#FCE8F3',
          'tile-teal':   '#E2F5F5',
          'tile-red':    '#FDEAEA',
          'tile-yellow': '#FEF8E1',
          // Text
          'text-primary':   '#0D1B3E',
          'text-secondary': '#4A5568',
          'text-tertiary':  '#8898AA',
          'text-link':      '#4A7EE8',
        },

        // ── Night (Dark) Backgrounds ─────────────────
        night: {
          'bg-primary':  '#080D1A',
          'bg-surface':  '#111827',
          'bg-surface2': '#141D2E',
          'bg-elevated': '#1A2438',
          'bg-glass':    '#1C2840',
          border:        '#1E2D4A',
          divider:       '#182236',
          'stroke-card': '#1E2E4E',
          // Tiles
          'tile':        '#1A2440',
          'tile-purple': '#1F1A3D',
          'tile-green':  '#0F2821',
          'tile-orange': '#291A0A',
          'tile-pink':   '#2A1020',
          'tile-teal':   '#0F2428',
          'tile-red':    '#2A1010',
          'tile-yellow': '#291F0A',
          // Text
          'text-primary':   '#EDF2FF',
          'text-secondary': '#8898B8',
          'text-tertiary':  '#4A5F80',
          'text-link':      '#6B9BFF',
        },

        // ── Semantic ────────────────────────────────
        success: { main: '#22C78A', light: '#D4F7EC', dark: '#0F9E6A' },
        warning: { main: '#F59E0B', light: '#FEF3C7', dark: '#D97706' },
        error:   { main: '#EF4444', light: '#FEE2E2', dark: '#DC2626' },
        info:    { main: '#3B82F6', light: '#DBEAFE', dark: '#2563EB' },

        // ── Icon accents ────────────────────────────
        icon: {
          blue:   '#4A7EE8',
          purple: '#8B5CF6',
          green:  '#10B981',
          orange: '#F97316',
          pink:   '#EC4899',
          teal:   '#14B8A6',
          red:    '#EF4444',
          yellow: '#EAB308',
          amber:  '#F59E0B',
          indigo: '#6366F1',
        },

        // ── Glass helpers ────────────────────────────
        glass: {
          'stroke-day':   '#C0CCE0',
          'stroke-night': '#243050',
        },
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

      borderRadius: {
        sm:  '8px',
        md:  '12px',
        lg:  '16px',
        xl:  '20px',
        '2xl': '24px',
      },

      boxShadow: {
        card:       '0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.05)',
        'card-dark':'0 1px 3px 0 rgba(0,0,0,0.4)',
        glass:      '0 4px 24px 0 rgba(74,126,232,0.08)',
        'glass-dark':'0 4px 24px 0 rgba(0,0,0,0.4)',
      },

      backdropBlur: {
        glass: '12px',
      },

      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(8px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.5s infinite linear',
        fadeIn:  'fadeIn 0.3s ease-out',
      },
    },
  },
  plugins: [],
};