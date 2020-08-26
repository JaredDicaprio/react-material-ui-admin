import Switch from '@material-ui/core/Switch';
import { withStyles, fade } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles Switch
 */
const switches = {
  // SWITCH PRIMARY
  SwitchPrimary: withStyles({
    switchBase: {
      color: palette.contrastLight,
      '&$checked': {
        color: palette.primary,
        '&:hover': {
          backgroundColor: fade(palette.primary, 0.2),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      '&$checked + $track': {
        backgroundColor: palette.primary,
      },
    },
    checked: {},
    track: {},
  })(Switch),
  // SWITCH SECONDARY
  SwitchSecondary: withStyles({
    switchBase: {
      color: palette.contrastLight,
      '&$checked': {
        color: palette.secondary,
        '&:hover': {
          backgroundColor: fade(palette.secondary, 0.2),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      '&$checked + $track': {
        backgroundColor: palette.secondary,
      },
    },
    checked: {},
    track: {},
  })(Switch),
  // SWITCH ERROR
  SwitchError: withStyles({
    switchBase: {
      color: palette.contrastLight,
      '&$checked': {
        color: palette.error,
        '&:hover': {
          backgroundColor: fade(palette.error, 0.2),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      '&$checked + $track': {
        backgroundColor: palette.error,
      },
    },
    checked: {},
    track: {},
  })(Switch),
  // SWITCH WARNING
  SwitchWarning: withStyles({
    switchBase: {
      color: palette.contrastLight,
      '&$checked': {
        color: palette.warning,
        '&:hover': {
          backgroundColor: fade(palette.warning, 0.2),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      '&$checked + $track': {
        backgroundColor: palette.warning,
      },
    },
    checked: {},
    track: {},
  })(Switch),
  // SWITCH INFO
  SwitchInfo: withStyles({
    switchBase: {
      color: palette.contrastLight,
      '&$checked': {
        color: palette.info,
        '&:hover': {
          backgroundColor: fade(palette.info, 0.2),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      '&$checked + $track': {
        backgroundColor: palette.info,
      },
    },
    checked: {},
    track: {},
  })(Switch),
  // SWITCH SUCCESS
  SwitchSuccess: withStyles({
    switchBase: {
      color: palette.contrastLight,
      '&$checked': {
        color: palette.success,
        '&:hover': {
          backgroundColor: fade(palette.success, 0.2),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      '&$checked + $track': {
        backgroundColor: palette.success,
      },
    },
    checked: {},
    track: {},
  })(Switch),
  // SWITCH ACCENT
  SwitchAccent: withStyles({
    switchBase: {
      color: palette.contrastLight,
      '&$checked': {
        color: palette.accent,
        '&:hover': {
          backgroundColor: fade(palette.accent, 0.2),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      '&$checked + $track': {
        backgroundColor: palette.accent,
      },
    },
    checked: {},
    track: {},
  })(Switch),
  // SWITCH NEUTRAL
  SwitchNeutral: withStyles({
    switchBase: {
      color: palette.contrastLight,
      '&$checked': {
        color: palette.neutral,
        '&:hover': {
          backgroundColor: fade(palette.neutral, 0.2),
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      '&$checked + $track': {
        backgroundColor: palette.neutral,
      },
    },
    checked: {},
    track: {},
  })(Switch),
};

export default switches;
