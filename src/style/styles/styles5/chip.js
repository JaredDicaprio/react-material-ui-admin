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
  })(Chip),
  // CHIP SECONDARY
  ChipSecondary: withStyles({
    root: {
      backgroundColor: palette.secondary,
      color: palette.contrastLight,
    },
  })(Chip),
  // CHIP ERROR
  ChipError: withStyles({
    root: {
      backgroundColor: palette.error,
      color: palette.contrastLight,
    },
  })(Chip),
  // CHIP WARNING
  ChipWarning: withStyles({
    root: {
      backgroundColor: palette.warning,
      color: palette.contrastLight,
    },
  })(Chip),
  // CHIP INFO
  ChipInfo: withStyles({
    root: {
      backgroundColor: palette.info,
      color: palette.contrastLight,
    },
  })(Chip),
  // CHIP SUCCESS
  ChipSuccess: withStyles({
    root: {
      backgroundColor: palette.success,
      color: palette.contrastLight,
    },
  })(Chip),
  // CHIP ACCENT
  ChipAccent: withStyles({
    root: {
      backgroundColor: palette.accent,
      color: palette.contrastLight,
    },
  })(Chip),
  // CHIP NEUTRAL
  ChipNeutral: withStyles({
    root: {
      backgroundColor: palette.neutral,
      color: palette.contrastLight,
    },
  })(Chip),
};

export default chip;
