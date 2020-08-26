import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import palette from './palette';
/**
 * WithStyles Avatar
 */
const avatar = {
  // AVATAR PRIMARY
  AvatarPrimary: withStyles(() => ({
    root: {
      backgroundColor: palette.primary,
      color: palette.contrastLight,
    },
  }))(Avatar),
  // AVATAR SECONDARY
  AvatarSecondary: withStyles(() => ({
    root: {
      backgroundColor: palette.secondary,
      color: palette.contrastLight,
    },
  }))(Avatar),
  // AVATAR ERROR
  AvatarError: withStyles(() => ({
    root: {
      backgroundColor: palette.error,
      color: palette.contrastLight,
    },
  }))(Avatar),
  // AVATAR WARNING
  AvatarWarning: withStyles(() => ({
    root: {
      backgroundColor: palette.warning,
      color: palette.contrastLight,
    },
  }))(Avatar),
  // AVATAR INFO
  AvatarInfo: withStyles(() => ({
    root: {
      backgroundColor: palette.info,
      color: palette.contrastLight,
    },
  }))(Avatar),
  // AVATAR SUCCESS
  AvatarSuccess: withStyles(() => ({
    root: {
      backgroundColor: palette.success,
      color: palette.contrastLight,
    },
  }))(Avatar),
  // AVATAR ACCENT
  AvatarAccent: withStyles(() => ({
    root: {
      backgroundColor: palette.accent,
      color: palette.contrastLight,
    },
  }))(Avatar),
  // AVATAR NEUTRAL
  AvatarNeutral: withStyles(() => ({
    root: {
      backgroundColor: palette.neutral,
      color: palette.contrastLight,
    },
  }))(Avatar),
};

export default avatar;
