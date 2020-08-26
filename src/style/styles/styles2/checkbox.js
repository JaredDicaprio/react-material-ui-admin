import Checkbox from '@material-ui/core/Checkbox';
import { withStyles, fade } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles Checkbox
 */
const checkbox = {
  // CHECKBOX PRIMARY
  CheckboxPrimary: withStyles({
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
    checked: {
      '&$checked': {
        color: palette.primary,
        '&:hover': {
          backgroundColor: fade(palette.primary, 0.2),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })(Checkbox),
  // CHECKBOX SECONDARY
  CheckboxSecondary: withStyles({
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
    checked: {
      '&$checked': {
        color: palette.secondary,
        '&:hover': {
          backgroundColor: fade(palette.secondary, 0.2),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })(Checkbox),
  // CHECKBOX ERROR
  CheckboxError: withStyles({
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
    checked: {
      '&$checked': {
        color: palette.error,
        '&:hover': {
          backgroundColor: fade(palette.error, 0.2),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })(Checkbox),
  // CHECKBOX WARNING
  CheckboxWarning: withStyles({
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
    checked: {
      '&$checked': {
        color: palette.warning,
        '&:hover': {
          backgroundColor: fade(palette.warning, 0.2),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })(Checkbox),
  // CHECKBOX INFO
  CheckboxInfo: withStyles({
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
    checked: {
      '&$checked': {
        color: palette.info,
        '&:hover': {
          backgroundColor: fade(palette.info, 0.2),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })(Checkbox),
  // CHECKBOX SUCCESS
  CheckboxSuccess: withStyles({
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
    checked: {
      '&$checked': {
        color: palette.success,
        '&:hover': {
          backgroundColor: fade(palette.success, 0.2),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })(Checkbox),
  // CHECKBOX ACCENT
  CheckboxAccent: withStyles({
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
    checked: {
      '&$checked': {
        color: palette.accent,
        '&:hover': {
          backgroundColor: fade(palette.accent, 0.2),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })(Checkbox),
  // CHECKBOX NEUTRAL
  CheckboxNeutral: withStyles({
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
    checked: {
      '&$checked': {
        color: palette.neutral,
        '&:hover': {
          backgroundColor: fade(palette.neutral, 0.2),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
  })(Checkbox),
};

export default checkbox;
