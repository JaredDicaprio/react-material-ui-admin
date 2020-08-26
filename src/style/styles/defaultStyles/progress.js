import LinearProgress from '@material-ui/core/LinearProgress';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles, fade } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles LinearProgress
 */
const linearProgress = {
  // LINEARPROGRESS PRIMARY
  LinearProgressPrimary: withStyles({
    root: {
      backgroundColor: fade(palette.primary, 0.2),
    },
    barColorPrimary: {
      backgroundColor: palette.primary,
    },
  })(LinearProgress),
  // LINEARPROGRESS SECONDARY
  LinearProgressSecondary: withStyles({
    root: {
      backgroundColor: fade(palette.secondary, 0.2),
    },
    barColorPrimary: {
      backgroundColor: palette.secondary,
    },
  })(LinearProgress),
  // LINEARPROGRESS ERROR
  LinearProgressError: withStyles({
    root: {
      backgroundColor: fade(palette.error, 0.2),
    },
    barColorPrimary: {
      backgroundColor: palette.error,
    },
  })(LinearProgress),
  // LINEARPROGRESS WARNING
  LinearProgressWarning: withStyles({
    root: {
      backgroundColor: fade(palette.warning, 0.2),
    },
    barColorPrimary: {
      backgroundColor: palette.warning,
    },
  })(LinearProgress),
  // LINEARPROGRESS INFO
  LinearProgressInfo: withStyles({
    root: {
      backgroundColor: fade(palette.info, 0.2),
    },
    barColorPrimary: {
      backgroundColor: palette.info,
    },
  })(LinearProgress),
  // LINEARPROGRESS SUCCESS
  LinearProgressSuccess: withStyles({
    root: {
      backgroundColor: fade(palette.success, 0.2),
    },
    barColorPrimary: {
      backgroundColor: palette.success,
    },
  })(LinearProgress),
  // LINEARPROGRESS ACCENT
  LinearProgressAccent: withStyles({
    root: {
      backgroundColor: fade(palette.accent, 0.2),
    },
    barColorPrimary: {
      backgroundColor: palette.accent,
    },
  })(LinearProgress),
  // LINEARPROGRESS NEUTRAL
  LinearProgressNeutral: withStyles({
    root: {
      backgroundColor: fade(palette.neutral, 0.2),
    },
    barColorPrimary: {
      backgroundColor: palette.neutral,
    },
  })(LinearProgress),
};

/**
 * WithStyles LinearProgress
 */
const circularProgress = {
  // CIRCULARPROGRESS PRIMARY
  CircularProgressPrimary: withStyles({
    root: {
      color: palette.primary,
    },
  })(CircularProgress),
  // CIRCULARPROGRESS SECONDARY
  CircularProgressSecondary: withStyles({
    root: {
      color: palette.secondary,
    },
  })(CircularProgress),
  // CIRCULARPROGRESS ERROR
  CircularProgressError: withStyles({
    root: {
      color: palette.error,
    },
  })(CircularProgress),
  // CIRCULARPROGRESS WARNING
  CircularProgressWarning: withStyles({
    root: {
      color: palette.warning,
    },
  })(CircularProgress),
  // CIRCULARPROGRESS INFO
  CircularProgressInfo: withStyles({
    root: {
      color: palette.info,
    },
  })(CircularProgress),
  // CIRCULARPROGRESS SUCCESS
  CircularProgressSuccess: withStyles({
    root: {
      color: palette.success,
    },
  })(CircularProgress),
  // CIRCULARPROGRESS ACCENT
  CircularProgressAccent: withStyles({
    root: {
      color: palette.accent,
    },
  })(CircularProgress),
  // CIRCULARPROGRESS NEUTRAL
  CircularProgressNeutral: withStyles({
    root: {
      color: palette.neutral,
    },
  })(CircularProgress),
};

const progress = {
  ...linearProgress,
  ...circularProgress,
};

export default progress;
