import Alert from '@material-ui/lab/Alert';
import { withStyles, fade } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles Alert
 */
const alert = {
  // ALERT PRIMARY
  AlertPrimary: withStyles(() => ({
    root: {
      '& $icon': {
        color: palette.primary,
      },
    },
    standardSuccess: {
      color: fade(palette.primary, 0.9),
      backgroundColor: fade(palette.primary, 0.2),
    },
    standardInfo: {
      color: fade(palette.primary, 0.9),
      backgroundColor: fade(palette.primary, 0.2),
    },
    standardWarning: {
      color: fade(palette.primary, 0.9),
      backgroundColor: fade(palette.primary, 0.2),
    },
    standardError: {
      color: fade(palette.primary, 0.9),
      backgroundColor: fade(palette.primary, 0.2),
    },
    outlinedSuccess: {
      color: fade(palette.primary, 0.9),
      border: `1px solid ${palette.primary}`,
    },
    outlinedInfo: {
      color: fade(palette.primary, 0.9),
      border: `1px solid ${palette.primary}`,
    },
    outlinedWarning: {
      color: fade(palette.primary, 0.9),
      border: `1px solid ${palette.primary}`,
    },
    outlinedError: {
      color: fade(palette.primary, 0.9),
      border: `1px solid ${palette.primary}`,
    },
    filledSuccess: {
      color: palette.contrastLight,
      backgroundColor: palette.primary,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledInfo: {
      color: palette.contrastLight,
      backgroundColor: palette.primary,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledWarning: {
      color: palette.contrastLight,
      backgroundColor: palette.primary,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledError: {
      color: palette.contrastLight,
      backgroundColor: palette.primary,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    icon: {
      color: palette.primary,
    },
  }))(Alert),
  // ALERT SECONDARY
  AlertSecondary: withStyles(() => ({
    root: {
      '& $icon': {
        color: palette.secondary,
      },
    },
    standardSuccess: {
      color: fade(palette.secondary, 0.9),
      backgroundColor: fade(palette.secondary, 0.2),
    },
    standardInfo: {
      color: fade(palette.secondary, 0.9),
      backgroundColor: fade(palette.secondary, 0.2),
    },
    standardWarning: {
      color: fade(palette.secondary, 0.9),
      backgroundColor: fade(palette.secondary, 0.2),
    },
    standardError: {
      color: fade(palette.secondary, 0.9),
      backgroundColor: fade(palette.secondary, 0.2),
    },
    outlinedSuccess: {
      color: fade(palette.secondary, 0.9),
      border: `1px solid ${palette.secondary}`,
    },
    outlinedInfo: {
      color: fade(palette.secondary, 0.9),
      border: `1px solid ${palette.secondary}`,
    },
    outlinedWarning: {
      color: fade(palette.secondary, 0.9),
      border: `1px solid ${palette.secondary}`,
    },
    outlinedError: {
      color: fade(palette.secondary, 0.9),
      border: `1px solid ${palette.secondary}`,
    },
    filledSuccess: {
      color: palette.contrastLight,
      backgroundColor: palette.secondary,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledInfo: {
      color: palette.contrastLight,
      backgroundColor: palette.secondary,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledWarning: {
      color: palette.contrastLight,
      backgroundColor: palette.secondary,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledError: {
      color: palette.contrastLight,
      backgroundColor: palette.secondary,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    icon: {
      color: palette.secondary,
    },
  }))(Alert),
  // ALERT ERROR
  AlertError: withStyles(() => ({
    root: {
      '& $icon': {
        color: palette.error,
      },
    },
    standardSuccess: {
      color: fade(palette.error, 0.9),
      backgroundColor: fade(palette.error, 0.2),
    },
    standardInfo: {
      color: fade(palette.error, 0.9),
      backgroundColor: fade(palette.error, 0.2),
    },
    standardWarning: {
      color: fade(palette.error, 0.9),
      backgroundColor: fade(palette.error, 0.2),
    },
    standardError: {
      color: fade(palette.error, 0.9),
      backgroundColor: fade(palette.error, 0.2),
    },
    outlinedSuccess: {
      color: fade(palette.error, 0.9),
      border: `1px solid ${palette.error}`,
    },
    outlinedInfo: {
      color: fade(palette.error, 0.9),
      border: `1px solid ${palette.error}`,
    },
    outlinedWarning: {
      color: fade(palette.error, 0.9),
      border: `1px solid ${palette.error}`,
    },
    outlinedError: {
      color: fade(palette.error, 0.9),
      border: `1px solid ${palette.error}`,
    },
    filledSuccess: {
      color: palette.contrastLight,
      backgroundColor: palette.error,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledInfo: {
      color: palette.contrastLight,
      backgroundColor: palette.error,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledWarning: {
      color: palette.contrastLight,
      backgroundColor: palette.error,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledError: {
      color: palette.contrastLight,
      backgroundColor: palette.error,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    icon: {
      color: palette.error,
    },
  }))(Alert),
  // ALERT WARNING
  AlertWarning: withStyles(() => ({
    root: {
      '& $icon': {
        color: palette.warning,
      },
    },
    standardSuccess: {
      color: fade(palette.warning, 0.9),
      backgroundColor: fade(palette.warning, 0.2),
    },
    standardInfo: {
      color: fade(palette.warning, 0.9),
      backgroundColor: fade(palette.warning, 0.2),
    },
    standardWarning: {
      color: fade(palette.warning, 0.9),
      backgroundColor: fade(palette.warning, 0.2),
    },
    standardError: {
      color: fade(palette.warning, 0.9),
      backgroundColor: fade(palette.warning, 0.2),
    },
    outlinedSuccess: {
      color: fade(palette.warning, 0.9),
      border: `1px solid ${palette.warning}`,
    },
    outlinedInfo: {
      color: fade(palette.warning, 0.9),
      border: `1px solid ${palette.warning}`,
    },
    outlinedWarning: {
      color: fade(palette.warning, 0.9),
      border: `1px solid ${palette.warning}`,
    },
    outlinedError: {
      color: fade(palette.warning, 0.9),
      border: `1px solid ${palette.warning}`,
    },
    filledSuccess: {
      color: palette.contrastLight,
      backgroundColor: palette.warning,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledInfo: {
      color: palette.contrastLight,
      backgroundColor: palette.warning,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledWarning: {
      color: palette.contrastLight,
      backgroundColor: palette.warning,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledError: {
      color: palette.contrastLight,
      backgroundColor: palette.warning,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    icon: {
      color: palette.warning,
    },
  }))(Alert),
  // ALERT INFO
  AlertInfo: withStyles(() => ({
    root: {
      '& $icon': {
        color: palette.info,
      },
    },
    standardSuccess: {
      color: fade(palette.info, 0.9),
      backgroundColor: fade(palette.info, 0.2),
    },
    standardInfo: {
      color: fade(palette.info, 0.9),
      backgroundColor: fade(palette.info, 0.2),
    },
    standardWarning: {
      color: fade(palette.info, 0.9),
      backgroundColor: fade(palette.info, 0.2),
    },
    standardError: {
      color: fade(palette.info, 0.9),
      backgroundColor: fade(palette.info, 0.2),
    },
    outlinedSuccess: {
      color: fade(palette.info, 0.9),
      border: `1px solid ${palette.info}`,
    },
    outlinedInfo: {
      color: fade(palette.info, 0.9),
      border: `1px solid ${palette.info}`,
    },
    outlinedWarning: {
      color: fade(palette.info, 0.9),
      border: `1px solid ${palette.info}`,
    },
    outlinedError: {
      color: fade(palette.info, 0.9),
      border: `1px solid ${palette.info}`,
    },
    filledSuccess: {
      color: palette.contrastLight,
      backgroundColor: palette.info,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledInfo: {
      color: palette.contrastLight,
      backgroundColor: palette.info,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledWarning: {
      color: palette.contrastLight,
      backgroundColor: palette.info,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledError: {
      color: palette.contrastLight,
      backgroundColor: palette.info,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    icon: {
      color: palette.info,
    },
  }))(Alert),
  // ALERT SUCCESS
  AlertSuccess: withStyles(() => ({
    root: {
      '& $icon': {
        color: palette.success,
      },
    },
    standardSuccess: {
      color: fade(palette.success, 0.9),
      backgroundColor: fade(palette.success, 0.2),
    },
    standardInfo: {
      color: fade(palette.success, 0.9),
      backgroundColor: fade(palette.success, 0.2),
    },
    standardWarning: {
      color: fade(palette.success, 0.9),
      backgroundColor: fade(palette.success, 0.2),
    },
    standardError: {
      color: fade(palette.success, 0.9),
      backgroundColor: fade(palette.success, 0.2),
    },
    outlinedSuccess: {
      color: fade(palette.success, 0.9),
      border: `1px solid ${palette.success}`,
    },
    outlinedInfo: {
      color: fade(palette.success, 0.9),
      border: `1px solid ${palette.success}`,
    },
    outlinedWarning: {
      color: fade(palette.success, 0.9),
      border: `1px solid ${palette.success}`,
    },
    outlinedError: {
      color: fade(palette.success, 0.9),
      border: `1px solid ${palette.success}`,
    },
    filledSuccess: {
      color: palette.contrastLight,
      backgroundColor: palette.success,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledInfo: {
      color: palette.contrastLight,
      backgroundColor: palette.success,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledWarning: {
      color: palette.contrastLight,
      backgroundColor: palette.success,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledError: {
      color: palette.contrastLight,
      backgroundColor: palette.success,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    icon: {
      color: palette.success,
    },
  }))(Alert),
  // ALERT ACCENT
  AlertAccent: withStyles(() => ({
    root: {
      '& $icon': {
        color: palette.accent,
      },
    },
    standardSuccess: {
      color: fade(palette.accent, 0.9),
      backgroundColor: fade(palette.accent, 0.2),
    },
    standardInfo: {
      color: fade(palette.accent, 0.9),
      backgroundColor: fade(palette.accent, 0.2),
    },
    standardWarning: {
      color: fade(palette.accent, 0.9),
      backgroundColor: fade(palette.accent, 0.2),
    },
    standardError: {
      color: fade(palette.accent, 0.9),
      backgroundColor: fade(palette.accent, 0.2),
    },
    outlinedSuccess: {
      color: fade(palette.accent, 0.9),
      border: `1px solid ${palette.accent}`,
    },
    outlinedInfo: {
      color: fade(palette.accent, 0.9),
      border: `1px solid ${palette.accent}`,
    },
    outlinedWarning: {
      color: fade(palette.accent, 0.9),
      border: `1px solid ${palette.accent}`,
    },
    outlinedError: {
      color: fade(palette.accent, 0.9),
      border: `1px solid ${palette.accent}`,
    },
    filledSuccess: {
      color: palette.contrastLight,
      backgroundColor: palette.accent,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledInfo: {
      color: palette.contrastLight,
      backgroundColor: palette.accent,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledWarning: {
      color: palette.contrastLight,
      backgroundColor: palette.accent,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledError: {
      color: palette.contrastLight,
      backgroundColor: palette.accent,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    icon: {
      color: palette.accent,
    },
  }))(Alert),
  // ALERT NEUTRAL
  AlertNeutral: withStyles(() => ({
    root: {
      '& $icon': {
        color: palette.neutral,
      },
    },
    standardSuccess: {
      color: fade(palette.neutral, 0.9),
      backgroundColor: fade(palette.neutral, 0.2),
    },
    standardInfo: {
      color: fade(palette.neutral, 0.9),
      backgroundColor: fade(palette.neutral, 0.2),
    },
    standardWarning: {
      color: fade(palette.neutral, 0.9),
      backgroundColor: fade(palette.neutral, 0.2),
    },
    standardError: {
      color: fade(palette.neutral, 0.9),
      backgroundColor: fade(palette.neutral, 0.2),
    },
    outlinedSuccess: {
      color: fade(palette.neutral, 0.9),
      border: `1px solid ${palette.neutral}`,
    },
    outlinedInfo: {
      color: fade(palette.neutral, 0.9),
      border: `1px solid ${palette.neutral}`,
    },
    outlinedWarning: {
      color: fade(palette.neutral, 0.9),
      border: `1px solid ${palette.neutral}`,
    },
    outlinedError: {
      color: fade(palette.neutral, 0.9),
      border: `1px solid ${palette.neutral}`,
    },
    filledSuccess: {
      color: palette.contrastLight,
      backgroundColor: palette.neutral,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledInfo: {
      color: palette.contrastLight,
      backgroundColor: palette.neutral,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledWarning: {
      color: palette.contrastLight,
      backgroundColor: palette.neutral,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    filledError: {
      color: palette.contrastLight,
      backgroundColor: palette.neutral,
      '& $icon': {
        color: palette.contrastLight,
      },
    },
    icon: {
      color: palette.neutral,
    },
  }))(Alert),
};

export default alert;
