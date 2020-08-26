import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles Badge
 */
const badge = {
  // BADGE PRIMARY
  BadgePrimary: withStyles(() => ({
    badge: {
      backgroundColor: palette.primary,
      color: palette.contrastLight,
    },
  }))(Badge),
  // BADGE SECONDARY
  BadgeSecondary: withStyles(() => ({
    badge: {
      backgroundColor: palette.secondary,
      color: palette.contrastLight,
    },
  }))(Badge),
  // BADGE ERROR
  BadgeError: withStyles(() => ({
    badge: {
      backgroundColor: palette.error,
      color: palette.contrastLight,
    },
  }))(Badge),
  // BADGE WARNING
  BadgeWarning: withStyles(() => ({
    badge: {
      backgroundColor: palette.warning,
      color: palette.contrastLight,
    },
  }))(Badge),
  // BADGE INFO
  BadgeInfo: withStyles(() => ({
    badge: {
      backgroundColor: palette.info,
      color: palette.contrastLight,
    },
  }))(Badge),
  // BADGE SUCCESS
  BadgeSuccess: withStyles(() => ({
    badge: {
      backgroundColor: palette.success,
      color: palette.contrastLight,
    },
  }))(Badge),
  // BADGE ACCENT
  BadgeAccent: withStyles(() => ({
    badge: {
      backgroundColor: palette.accent,
      color: palette.contrastLight,
    },
  }))(Badge),
  // BADGE NEUTRAL
  BadgeNeutral: withStyles(() => ({
    badge: {
      backgroundColor: palette.neutral,
      color: palette.contrastLight,
    },
  }))(Badge),
};

export default badge;
