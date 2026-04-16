import { colors } from './colors';

// ─────────────────────────────────────────────────────────────
//  theme.js — resolved token maps for light and dark mode
//  Components use these via useTheme() hook — never raw colors
// ─────────────────────────────────────────────────────────────

export const lightTheme = {
  mode: 'light',

  bg: {
    primary:  colors.day.bgPrimary,
    surface:  colors.day.bgSurface,
    surface2: colors.day.bgSurface2,
    elevated: colors.day.bgElevated,
    glass:    colors.day.bgGlass,
  },

  text: {
    primary:   colors.day.textPrimary,
    secondary: colors.day.textSecondary,
    tertiary:  colors.day.textTertiary,
    link:      colors.day.textLink,
    onPrimary: colors.white,
  },

  border: {
    default:    colors.day.border,
    divider:    colors.day.divider,
    card:       colors.day.strokeCard,
    glass:      colors.day.glassStroke,
  },

  brand:   colors.brand,
  success: colors.success,
  warning: colors.warning,
  error:   colors.error,
  info:    colors.info,
  icon:    colors.icon,

  tile: {
    default: colors.day.tile,
    purple:  colors.day.tilePurple,
    green:   colors.day.tileGreen,
    orange:  colors.day.tileOrange,
    pink:    colors.day.tilePink,
    teal:    colors.day.tileTeal,
    red:     colors.day.tileRed,
    yellow:  colors.day.tileYellow,
  },

  stat: {
    cardBg: colors.day.statCardBg,
    number: colors.day.statNumber,
    label:  colors.day.statLabel,
  },

  score: {
    bg:   colors.day.scoreBgs,
    text: colors.day.scoreText,
  },

  announcement: {
    bg:     colors.day.announcementBg,
    border: colors.day.announcementBorder,
  },

  profile: {
    cardBg: colors.day.profileCardBg,
    avatarBg: colors.day.avatarBg,
  },

  progress: {
    track: colors.day.progressTrack,
    math:    '#4A7EE8',
    science: '#22C78A',
    english: '#A855F7',
    history: '#F59E0B',
  },

  glass: {
    fill:    colors.day.glassFill,
    stroke:  colors.day.glassStroke,
    shimmer: colors.day.glassShimmer,
  },
};

export const darkTheme = {
  mode: 'dark',

  bg: {
    primary:  colors.night.bgPrimary,
    surface:  colors.night.bgSurface,
    surface2: colors.night.bgSurface2,
    elevated: colors.night.bgElevated,
    glass:    colors.night.bgGlass,
  },

  text: {
    primary:   colors.night.textPrimary,
    secondary: colors.night.textSecondary,
    tertiary:  colors.night.textTertiary,
    link:      colors.night.textLink,
    onPrimary: colors.white,
  },

  border: {
    default: colors.night.border,
    divider: colors.night.divider,
    card:    colors.night.strokeCard,
    glass:   colors.night.glassStroke,
  },

  brand:   colors.brand,
  success: colors.success,
  warning: colors.warning,
  error:   colors.error,
  info:    colors.info,
  icon:    colors.icon,

  tile: {
    default: colors.night.tile,
    purple:  colors.night.tilePurple,
    green:   colors.night.tileGreen,
    orange:  colors.night.tileOrange,
    pink:    colors.night.tilePink,
    teal:    colors.night.tileTeal,
    red:     colors.night.tileRed,
    yellow:  colors.night.tileYellow,
  },

  stat: {
    cardBg: colors.night.statCardBg,
    number: colors.night.statNumber,
    label:  colors.night.statLabel,
  },

  score: {
    bg:   colors.night.scoreBgs,
    text: colors.night.scoreText,
  },

  announcement: {
    bg:     colors.night.announcementBg,
    border: colors.night.announcementBorder,
  },

  profile: {
    cardBg:   colors.night.profileCardBg,
    avatarBg: colors.night.avatarBg,
  },

  progress: {
    track:   colors.night.progressTrack,
    math:    '#4A7EE8',
    science: '#22C78A',
    english: '#A855F7',
    history: '#F59E0B',
  },

  glass: {
    fill:    colors.night.glassFill,
    stroke:  colors.night.glassStroke,
    shimmer: colors.night.glassShimmer,
  },
};