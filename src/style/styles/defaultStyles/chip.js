import Chip from '@material-ui/core/Chip';
import { withStyles } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles Chip
 */
const chip = {
  // CHIP PRIMARY
  ChipPrimary: withStyles({
    root: {
      backgroundColor: palette.primary,
      color: palette.contrastLight,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: palette.primary,
      border: `1px solid ${palette.primary}`,
    },
  })(Chip),
  // CHIP SECONDARY
  ChipSecondary: withStyles({
    root: {
      backgroundColor: palette.secondary,
      color: palette.contrastLight,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: palette.secondary,
      border: `1px solid ${palette.secondary}`,
    },
  })(Chip),
  // CHIP ERROR
  ChipError: withStyles({
    root: {
      backgroundColor: palette.error,
      color: palette.contrastLight,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: palette.error,
      border: `1px solid ${palette.error}`,
    },
  })(Chip),
  // CHIP WARNING
  ChipWarning: withStyles({
    root: {
      backgroundColor: palette.warning,
      color: palette.contrastLight,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: palette.warning,
      border: `1px solid ${palette.warning}`,
    },
  })(Chip),
  // CHIP INFO
  ChipInfo: withStyles({
    root: {
      backgroundColor: palette.info,
      color: palette.contrastLight,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: palette.info,
      border: `1px solid ${palette.info}`,
    },
  })(Chip),
  // CHIP SUCCESS
  ChipSuccess: withStyles({
    root: {
      backgroundColor: palette.success,
      color: palette.contrastLight,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: palette.success,
      border: `1px solid ${palette.success}`,
    },
  })(Chip),
  // CHIP ACCENT
  ChipAccent: withStyles({
    root: {
      backgroundColor: palette.accent,
      color: palette.contrastLight,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: palette.accent,
      border: `1px solid ${palette.accent}`,
    },
  })(Chip),
  // CHIP NEUTRAL
  ChipNeutral: withStyles({
    root: {
      backgroundColor: palette.neutral,
      color: palette.contrastLight,
    },
    outlined: {
      backgroundColor: 'transparent',
      color: palette.neutral,
      border: `1px solid ${palette.neutral}`,
    },
  })(Chip),
};

export default chip;
