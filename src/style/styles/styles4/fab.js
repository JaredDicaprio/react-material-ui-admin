//import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import palette from './palette';
/**
 * Styled Fab
 */
const fab = {
  // FAB PRIMARY
  FabPrimary: withStyles({
    root: {
      color: palette.contrastLight,
      backgroundColor: palette.primary,
      '&:hover': {
        backgroundColor: palette.primaryDark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.primary,
        },
      },
    },
  })(Fab),
  // FAB SECONDARY
  FabSecondary: withStyles({
    root: {
      color: palette.contrastLight,
      backgroundColor: palette.secondary,
      '&:hover': {
        backgroundColor: palette.secondaryDark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.secondary,
        },
      },
    },
  })(Fab),
  // FAB ERROR
  FabError: withStyles({
    root: {
      color: palette.contrastLight,
      backgroundColor: palette.error,
      '&:hover': {
        backgroundColor: palette.errorDark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.error,
        },
      },
    },
  })(Fab),
  // FAB WARNING
  FabWarning: withStyles({
    root: {
      color: palette.contrastLight,
      backgroundColor: palette.warning,
      '&:hover': {
        backgroundColor: palette.warningDark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.warning,
        },
      },
    },
  })(Fab),
  // FAB INFO
  FabInfo: withStyles({
    root: {
      color: palette.contrastLight,
      backgroundColor: palette.info,
      '&:hover': {
        backgroundColor: palette.infoDark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.info,
        },
      },
    },
  })(Fab),
  // FAB SUCCESS
  FabSuccess: withStyles({
    root: {
      color: palette.contrastLight,
      backgroundColor: palette.success,
      '&:hover': {
        backgroundColor: palette.successDark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.success,
        },
      },
    },
  })(Fab),
  // FAB ACCENT
  FabAccent: withStyles({
    root: {
      color: palette.contrastLight,
      backgroundColor: palette.accent,
      '&:hover': {
        backgroundColor: palette.accentDark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.accent,
        },
      },
    },
  })(Fab),
  // FAB NEUTRAL
  FabNeutral: withStyles({
    root: {
      color: palette.contrastLight,
      backgroundColor: palette.neutral,
      '&:hover': {
        backgroundColor: palette.neutralDark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: palette.neutral,
        },
      },
    },
  })(Fab),
};

/**
 * Styled Fab
 *
const fab = {
  // FAB PRIMARY
  FabPrimary: styled(Fab)`
    background-color: ${palette.primary};
    color: ${palette.contrastLight};
    padding: 6px 16px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${palette.primaryDark};
    }
  `,
  // FAB SECONDARY
  FabSecondary: styled(Fab)`
    color: ${palette.contrastLight};
    background-color: ${palette.secondary};
    padding: 6px 16px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${palette.secondaryDark};
    }
  `,
  // FAB ERROR
  FabError: styled(Fab)`
    color: ${palette.contrastLight};
    background-color: ${palette.error};
    padding: 6px 16px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${palette.errorDark};
    }
  `,
  // FAB WARNING
  FabWarning: styled(Fab)`
    color: ${palette.contrastLight};
    background-color: ${palette.warning};
    padding: 6px 16px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${palette.warningDark};
    }
  `,
  // FAB INFO
  FabInfo: styled(Fab)`
    color: ${palette.contrastLight};
    background-color: ${palette.info};
    padding: 6px 16px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${palette.infoDark};
    }
  `,
  // FAB SUCCESS
  FabSuccess: styled(Fab)`
    color: ${palette.contrastLight};
    background-color: ${palette.success};
    padding: 6px 16px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${palette.successDark};
    }
  `,
  // FAB ACCENT
  FabAccent: styled(Fab)`
    color: ${palette.contrastLight};
    background-color: ${palette.accent};
    padding: 6px 16px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${palette.accentDark};
    }
  `,
  // FAB NEUTRAL
  FabNeutral: styled(Fab)`
    color: ${palette.contrastLight};
    background-color: ${palette.neutral};
    padding: 6px 16px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
      0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
    &:hover {
      background-color: ${palette.neutralDark};
    }
  `,
};*/

export default fab;
