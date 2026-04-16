// ─────────────────────────────────────────────────────────────
//  colors.js — mirrors your Android colors.xml exactly
//  Consumed by theme.js, ThemeProvider, and Tailwind config
// ─────────────────────────────────────────────────────────────

export const colors = {

  // ── Brand ────────────────────────────────────────────────
  brand: {
    primary:      '#4A7EE8',
    primaryDark:  '#3366CC',
    primaryLight: '#6B9BFF',
    secondary:    '#6C5CE7',
    secondaryLight:'#8B7FF0',
  },

  // ── Day mode ─────────────────────────────────────────────
  day: {
    bgPrimary:  '#F2F4F8',
    bgSurface:  '#FFFFFF',
    bgSurface2: '#F7F9FC',
    bgElevated: '#FFFFFF',
    bgGlass:    '#E8EDF6',
    border:     '#DDE3ED',
    divider:    '#EAEEf5',
    strokeCard: '#D4DCF0',

    tile:       '#EDF1FB',
    tilePurple: '#EDE9FB',
    tileGreen:  '#E4F6EE',
    tileOrange: '#FEF0E3',
    tilePink:   '#FCE8F3',
    tileTeal:   '#E2F5F5',
    tileRed:    '#FDEAEA',
    tileYellow: '#FEF8E1',

    textPrimary:   '#0D1B3E',
    textSecondary: '#4A5568',
    textTertiary:  '#8898AA',
    textLink:      '#4A7EE8',

    statCardBg:  '#FFFFFF',
    statNumber:  '#0D1B3E',
    statLabel:   '#8898AA',

    announcementBg:     '#EEF3FE',
    announcementBorder: '#BDD0FA',

    profileCardBg: '#FFFFFF',
    avatarBg:      '#E8EDF6',

    progressTrack: '#E2E8F0',

    glassStroke:  '#C0CCE0',
    glassFill:    'rgba(255,255,255,0.8)',
    glassShimmer: 'rgba(255,255,255,0.2)',

    scoreBgs:  { excellent:'#D1FAE5', good:'#FEF3C7', average:'#DBEAFE', low:'#FEE2E2' },
    scoreText: { excellent:'#065F46', good:'#92400E', average:'#1E40AF', low:'#991B1B' },
  },

  // ── Night mode ───────────────────────────────────────────
  night: {
    bgPrimary:  '#080D1A',
    bgSurface:  '#111827',
    bgSurface2: '#141D2E',
    bgElevated: '#1A2438',
    bgGlass:    '#1C2840',
    border:     '#1E2D4A',
    divider:    '#182236',
    strokeCard: '#1E2E4E',

    tile:       '#1A2440',
    tilePurple: '#1F1A3D',
    tileGreen:  '#0F2821',
    tileOrange: '#291A0A',
    tilePink:   '#2A1020',
    tileTeal:   '#0F2428',
    tileRed:    '#2A1010',
    tileYellow: '#291F0A',

    textPrimary:   '#EDF2FF',
    textSecondary: '#8898B8',
    textTertiary:  '#4A5F80',
    textLink:      '#6B9BFF',

    statCardBg:  '#141D2E',
    statNumber:  '#EDF2FF',
    statLabel:   '#4A5F80',

    announcementBg:     '#141D30',
    announcementBorder: '#1E2D4A',

    profileCardBg: '#111827',
    avatarBg:      '#1A2438',

    progressTrack: '#1E2D4A',

    glassStroke:  '#243050',
    glassFill:    'rgba(20,29,46,0.8)',
    glassShimmer: 'rgba(255,255,255,0.05)',

    scoreBgs:  { excellent:'#1A4A2E', good:'#3A2A10', average:'#1A2A4A', low:'#3A1010' },
    scoreText: { excellent:'#4AE89A', good:'#F59E0B', average:'#6B9BFF', low:'#F87171' },
  },

  // ── Semantic ─────────────────────────────────────────────
  success: { main:'#22C78A', light:'#D4F7EC', dark:'#0F9E6A' },
  warning: { main:'#F59E0B', light:'#FEF3C7', dark:'#D97706' },
  error:   { main:'#EF4444', light:'#FEE2E2', dark:'#DC2626' },
  info:    { main:'#3B82F6', light:'#DBEAFE', dark:'#2563EB' },

  // ── Icon accents ─────────────────────────────────────────
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

  white: '#FFFFFF',
  black: '#000000',
};