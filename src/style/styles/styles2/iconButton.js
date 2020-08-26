import IconButton from '@material-ui/core/IconButton';
import { withStyles, fade } from '@material-ui/core/styles';
import palette from './palette';
/**
 * Styled IconButton
 */
const iconButton = {
  // ICONBUTTON PRIMARY
  IconButtonPrimary: withStyles({
    root: {
      color: palette.primary,
      '&:hover': {
        backgroundColor: fade(palette.primary, 0.1),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  })(IconButton),
  // ICONBUTTON SECONDARY
  IconButtonSecondary: withStyles({
    root: {
      color: palette.secondary,
      '&:hover': {
        backgroundColor: fade(palette.secondary, 0.1),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  })(IconButton),
  // ICONBUTTON ERROR
  IconButtonError: withStyles({
    root: {
      color: palette.error,
      '&:hover': {
        backgroundColor: fade(palette.error, 0.1),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  })(IconButton),
  // ICONBUTTON WARNING
  IconButtonWarning: withStyles({
    root: {
      color: palette.warning,
      '&:hover': {
        backgroundColor: fade(palette.warning, 0.1),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  })(IconButton),
  // ICONBUTTON INFO
  IconButtonInfo: withStyles({
    root: {
      color: palette.info,
      '&:hover': {
        backgroundColor: fade(palette.info, 0.1),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  })(IconButton),
  // ICONBUTTON SUCCESS
  IconButtonSuccess: withStyles({
    root: {
      color: palette.success,
      '&:hover': {
        backgroundColor: fade(palette.success, 0.1),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  })(IconButton),
  // ICONBUTTON ACCENT
  IconButtonAccent: withStyles({
    root: {
      color: palette.accent,
      '&:hover': {
        backgroundColor: fade(palette.accent, 0.1),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  })(IconButton),
  // ICONBUTTON NEUTRAL
  IconButtonNeutral: withStyles({
    root: {
      color: palette.neutral,
      '&:hover': {
        backgroundColor: fade(palette.neutral, 0.1),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent',
        },
      },
    },
  })(IconButton),
};

export default iconButton;
