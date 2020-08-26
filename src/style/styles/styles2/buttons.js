import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { withStyles } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles Button
 */
const button = {
  // DEFALT
  Button: withStyles(() => ({
    root: {
      minWidth: 64,
    },
  }))(Button),
  // BUTTON PRIMARY
  ButtonPrimary: withStyles(() => ({
    root: {
      color: palette.primary,
    },
    outlined: {
      borderColor: palette.primaryLight,
    },
    contained: {
      color: palette.contrastLight,
      backgroundColor: palette.primary,
      '&:hover': {
        backgroundColor: palette.primaryDark,
      },
    },
  }))(Button),
  // BUTTON SECONDARY
  ButtonSecondary: withStyles(() => ({
    root: {
      color: palette.secondary,
    },
    outlined: {
      borderColor: palette.secondaryLight,
    },
    contained: {
      color: palette.contrastLight,
      backgroundColor: palette.secondary,
      '&:hover': {
        backgroundColor: palette.secondaryDark,
      },
    },
  }))(Button),
  // BUTTON ERROR
  ButtonError: withStyles(() => ({
    root: {
      color: palette.error,
    },
    outlined: {
      borderColor: palette.errorLight,
    },
    contained: {
      color: palette.contrastLight,
      backgroundColor: palette.error,
      '&:hover': {
        backgroundColor: palette.errorDark,
      },
    },
  }))(Button),
  // BUTTON WARNING
  ButtonWarning: withStyles(() => ({
    root: {
      color: palette.warning,
    },
    outlined: {
      borderColor: palette.warningLight,
    },
    contained: {
      color: palette.contrastLight,
      backgroundColor: palette.warning,
      '&:hover': {
        backgroundColor: palette.warningDark,
      },
    },
  }))(Button),
  // BUTTON INFO
  ButtonInfo: withStyles(() => ({
    root: {
      color: palette.info,
    },
    outlined: {
      borderColor: palette.infoLight,
    },
    contained: {
      color: palette.contrastLight,
      backgroundColor: palette.info,
      '&:hover': {
        backgroundColor: palette.infoDark,
      },
    },
  }))(Button),
  // BUTTON SUCCESS
  ButtonSuccess: withStyles(() => ({
    root: {
      color: palette.success,
    },
    outlined: {
      borderColor: palette.successLight,
    },
    contained: {
      color: palette.contrastLight,
      backgroundColor: palette.success,
      '&:hover': {
        backgroundColor: palette.successDark,
      },
    },
  }))(Button),
  // BUTTON ACCENT
  ButtonAccent: withStyles(() => ({
    root: {
      color: palette.accent,
    },
    outlined: {
      borderColor: palette.accentLight,
    },
    contained: {
      color: palette.contrastLight,
      backgroundColor: palette.accent,
      '&:hover': {
        backgroundColor: palette.accentDark,
      },
    },
  }))(Button),
  // BUTTON NEUTRAL
  ButtonNeutral: withStyles(() => ({
    root: {
      color: palette.neutral,
    },
    outlined: {
      borderColor: palette.neutralLight,
    },
    contained: {
      color: palette.contrastLight,
      backgroundColor: palette.neutral,
      '&:hover': {
        backgroundColor: palette.neutralDark,
      },
    },
  }))(Button),
};

/**
 * WithStyles ButtonGroup
 */
const buttonGroup = {
  // BUTTONGROUP PRIMARY
  ButtonGroupPrimary: withStyles(() => ({
    groupedText: {
      color: palette.primary,
      '&:not(:last-child)': {
        borderColor: palette.primaryLight,
      },
    },
    groupedOutlined: {
      color: palette.primary,
      borderColor: palette.primaryLight,
    },
    groupedContained: {
      color: palette.contrastLight,
      backgroundColor: palette.primary,
      '&:not(:last-child)': {
        borderColor: palette.primaryDark,
      },
      '&:hover': {
        backgroundColor: palette.primaryDark,
      },
    },
  }))(ButtonGroup),
  // BUTTONGROUP SECONDARY
  ButtonGroupSecondary: withStyles(() => ({
    groupedText: {
      color: palette.secondary,
      '&:not(:last-child)': {
        borderColor: palette.secondaryLight,
      },
    },
    groupedOutlined: {
      color: palette.secondary,
      borderColor: palette.secondaryLight,
    },
    groupedContained: {
      color: palette.contrastLight,
      backgroundColor: palette.secondary,
      '&:not(:last-child)': {
        borderColor: palette.secondaryDark,
      },
      '&:hover': {
        backgroundColor: palette.secondaryDark,
      },
    },
  }))(ButtonGroup),
  // BUTTONGROUP ERROR
  ButtonGroupError: withStyles(() => ({
    groupedText: {
      color: palette.error,
      '&:not(:last-child)': {
        borderColor: palette.errorLight,
      },
    },
    groupedOutlined: {
      color: palette.error,
      borderColor: palette.errorLight,
    },
    groupedContained: {
      color: palette.contrastLight,
      backgroundColor: palette.error,
      '&:not(:last-child)': {
        borderColor: palette.errorDark,
      },
      '&:hover': {
        backgroundColor: palette.errorDark,
      },
    },
  }))(ButtonGroup),
  // BUTTONGROUP WARNING
  ButtonGroupWarning: withStyles(() => ({
    groupedText: {
      color: palette.warning,
      '&:not(:last-child)': {
        borderColor: palette.warningLight,
      },
    },
    groupedOutlined: {
      color: palette.warning,
      borderColor: palette.warningLight,
    },
    groupedContained: {
      color: palette.contrastLight,
      backgroundColor: palette.warning,
      '&:not(:last-child)': {
        borderColor: palette.warningDark,
      },
      '&:hover': {
        backgroundColor: palette.warningDark,
      },
    },
  }))(ButtonGroup),
  // BUTTONGROUP INFO
  ButtonGroupInfo: withStyles(() => ({
    groupedText: {
      color: palette.info,
      '&:not(:last-child)': {
        borderColor: palette.infoLight,
      },
    },
    groupedOutlined: {
      color: palette.info,
      borderColor: palette.infoLight,
    },
    groupedContained: {
      color: palette.contrastLight,
      backgroundColor: palette.info,
      '&:not(:last-child)': {
        borderColor: palette.infoDark,
      },
      '&:hover': {
        backgroundColor: palette.infoDark,
      },
    },
  }))(ButtonGroup),
  // BUTTON SUCCESS
  ButtonGroupSuccess: withStyles(() => ({
    groupedText: {
      color: palette.success,
      '&:not(:last-child)': {
        borderColor: palette.successLight,
      },
    },
    groupedOutlined: {
      color: palette.success,
      borderColor: palette.successLight,
    },
    groupedContained: {
      color: palette.contrastLight,
      backgroundColor: palette.success,
      '&:not(:last-child)': {
        borderColor: palette.successDark,
      },
      '&:hover': {
        backgroundColor: palette.successDark,
      },
    },
  }))(ButtonGroup),
  // BUTTON ACCENT
  ButtonGroupAccent: withStyles(() => ({
    groupedText: {
      color: palette.accent,
      '&:not(:last-child)': {
        borderColor: palette.accentLight,
      },
    },
    groupedOutlined: {
      color: palette.accent,
      borderColor: palette.accentLight,
    },
    groupedContained: {
      color: palette.contrastLight,
      backgroundColor: palette.accent,
      '&:not(:last-child)': {
        borderColor: palette.accentDark,
      },
      '&:hover': {
        backgroundColor: palette.accentDark,
      },
    },
  }))(ButtonGroup),
  // BUTTON NEUTRAL
  ButtonGroupNeutral: withStyles(() => ({
    groupedText: {
      color: palette.neutral,
      '&:not(:last-child)': {
        borderColor: palette.neutralLight,
      },
    },
    groupedOutlined: {
      color: palette.neutral,
      borderColor: palette.neutralLight,
    },
    groupedContained: {
      color: palette.contrastLight,
      backgroundColor: palette.neutral,
      '&:not(:last-child)': {
        borderColor: palette.neutralDark,
      },
      '&:hover': {
        backgroundColor: palette.neutralDark,
      },
    },
  }))(ButtonGroup),
};

const buttons = {
  ...button,
  ...buttonGroup,
};

export default buttons;
