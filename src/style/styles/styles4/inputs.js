import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { withStyles } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles Input
 */
const input = {
  // INPUT PRIMARY
  InputPrimary: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.primary}`,
      },
    },
  })(Input),
  // INPUT SECONDARY
  InputSecondary: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.secondary}`,
      },
    },
  })(Input),
  // INPUT ERROR
  InputError: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.error}`,
      },
    },
  })(Input),
  // INPUT WARNING
  InputWarning: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.warning}`,
      },
    },
  })(Input),
  // INPUT INFO
  InputInfo: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.info}`,
      },
    },
  })(Input),
  // INPUT SUCCESS
  InputSuccess: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.success}`,
      },
    },
  })(Input),
  // INPUT ACCENT
  InputAccent: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.accent}`,
      },
    },
  })(Input),
  // INPUT NEUTRAL
  InputNeutral: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.neutral}`,
      },
    },
  })(Input),
};

/**
 * WithStyles TextField
 */
const textField = {
  // TEXTFIELD PRIMARY
  TextFieldPrimary: withStyles({
    root: {
      '& label.Mui-focused': {
        color: palette.primary,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: palette.primary,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: palette.primary,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(0, 0, 0, 0.23)',
        },
        '&:hover fieldset': {
          borderColor: palette.primaryDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: palette.primary,
        },
      },
    },
  })(TextField),
  // TEXTFIELD SECONDARY
  TextFieldSecondary: withStyles({
    root: {
      '& label.Mui-focused': {
        color: palette.secondary,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: palette.secondary,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: palette.secondary,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(0, 0, 0, 0.23)',
        },
        '&:hover fieldset': {
          borderColor: palette.secondaryDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: palette.secondary,
        },
      },
    },
  })(TextField),
  // TEXTFIELD ERROR
  TextFieldError: withStyles({
    root: {
      '& label.Mui-focused': {
        color: palette.error,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: palette.error,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: palette.error,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(0, 0, 0, 0.23)',
        },
        '&:hover fieldset': {
          borderColor: palette.errorDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: palette.error,
        },
      },
    },
  })(TextField),
  // TEXTFIELD WARNING
  TextFieldWarning: withStyles({
    root: {
      '& label.Mui-focused': {
        color: palette.warning,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: palette.warning,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: palette.warning,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(0, 0, 0, 0.23)',
        },
        '&:hover fieldset': {
          borderColor: palette.warningDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: palette.warning,
        },
      },
    },
  })(TextField),
  // TEXTFIELD INFO
  TextFieldInfo: withStyles({
    root: {
      '& label.Mui-focused': {
        color: palette.info,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: palette.info,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: palette.info,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(0, 0, 0, 0.23)',
        },
        '&:hover fieldset': {
          borderColor: palette.infoDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: palette.info,
        },
      },
    },
  })(TextField),
  // TEXTFIELD SUCCESS
  TextFieldSuccess: withStyles({
    root: {
      '& label.Mui-focused': {
        color: palette.success,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: palette.success,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: palette.success,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(0, 0, 0, 0.23)',
        },
        '&:hover fieldset': {
          borderColor: palette.successDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: palette.success,
        },
      },
    },
  })(TextField),
  // TEXTFIELD ACCENT
  TextFieldAccent: withStyles({
    root: {
      '& label.Mui-focused': {
        color: palette.accent,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: palette.accent,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: palette.accent,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(0, 0, 0, 0.23)',
        },
        '&:hover fieldset': {
          borderColor: palette.accentDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: palette.accent,
        },
      },
    },
  })(TextField),
  // TEXTFIELD NEUTRAL
  TextFieldNeutral: withStyles({
    root: {
      '& label.Mui-focused': {
        color: palette.neutral,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: palette.neutral,
      },
      '& .MuiFilledInput-underline:after': {
        borderBottomColor: palette.neutral,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'rgb(0, 0, 0, 0.23)',
        },
        '&:hover fieldset': {
          borderColor: palette.neutralDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: palette.neutral,
        },
      },
    },
  })(TextField),
};

/**
 * WithStyles FilledInput
 */
const filledInput = {
  // FILLEDINPUT PRIMARY
  FilledInputPrimary: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.primary}`,
      },
    },
  })(FilledInput),
  // FILLEDINPUT SECONDARY
  FilledInputSecondary: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.secondary}`,
      },
    },
  })(FilledInput),
  // FILLEDINPUT ERROR
  FilledInputError: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.error}`,
      },
    },
  })(FilledInput),
  // FILLEDINPUT WARNING
  FilledInputWarning: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.warning}`,
      },
    },
  })(FilledInput),
  // FILLEDINPUT INFO
  FilledInputInfo: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.info}`,
      },
    },
  })(FilledInput),
  // FILLEDINPUT SUCCESS
  FilledInputSuccess: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.success}`,
      },
    },
  })(FilledInput),
  // FILLEDINPUT ACCENT
  FilledInputAccent: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.accent}`,
      },
    },
  })(FilledInput),
  // FILLEDINPUT NEUTRAL
  FilledInputNeutral: withStyles({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${palette.neutral}`,
      },
    },
  })(FilledInput),
};

/**
 * WithStyles OutlinedInput
 */
const outlinedInput = {
  // FILLEDINPUT PRIMARY
  OutlinedInputPrimary: withStyles({
    root: {
      '&.MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: palette.primary,
      },
    },
  })(OutlinedInput),
  // FILLEDINPUT SECONDARY
  OutlinedInputSecondary: withStyles({
    root: {
      '&.MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: palette.secondary,
      },
    },
  })(OutlinedInput),
  // FILLEDINPUT ERROR
  OutlinedInputError: withStyles({
    root: {
      '&.MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: palette.error,
      },
    },
  })(OutlinedInput),
  // FILLEDINPUT WARNING
  OutlinedInputWarning: withStyles({
    root: {
      '&.MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: palette.warning,
      },
    },
  })(OutlinedInput),
  // FILLEDINPUT INFO
  OutlinedInputInfo: withStyles({
    root: {
      '&.MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: palette.info,
      },
    },
  })(OutlinedInput),
  // FILLEDINPUT SUCCESS
  OutlinedInputSuccess: withStyles({
    root: {
      '&.MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: palette.success,
      },
    },
  })(OutlinedInput),
  // FILLEDINPUT ACCENT
  OutlinedInputAccent: withStyles({
    root: {
      '&.MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: palette.accent,
      },
    },
  })(OutlinedInput),
  // FILLEDINPUT NEUTRAL
  OutlinedInputNeutral: withStyles({
    root: {
      '&.MuiOutlinedInput-root.Mui-focused fieldset': {
        borderColor: palette.neutral,
      },
    },
  })(OutlinedInput),
};

const inputs = {
  ...input,
  ...textField,
  ...filledInput,
  ...outlinedInput,
};

export default inputs;
