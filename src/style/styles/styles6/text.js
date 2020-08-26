import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import palette from './palette';
/**
 * Styled Text
 */
const text = {
  // TEXT PRIMARY
  TextPrimary: styled(Typography)`
    color: ${palette.primary};
  `,
  // TEXT SECONDARY
  TextSecondary: styled(Typography)`
    color: ${palette.secondary};
  `,
  // TEXT ERROR
  TextError: styled(Typography)`
    color: ${palette.error};
  `,
  // TEXT WARNING
  TextWarning: styled(Typography)`
    color: ${palette.warning};
  `,
  // TEXT INFO
  TextInfo: styled(Typography)`
    color: ${palette.info};
  `,
  // TEXT SUCCESS
  TextSuccess: styled(Typography)`
    color: ${palette.success};
  `,
  // TEXT ACCENT
  TextAccent: styled(Typography)`
    color: ${palette.accent};
  `,
  // TEXT NEUTRAL
  TextNeutral: styled(Typography)`
    color: ${palette.neutral};
  `,
};

/**
 * Styled Background
 */
const background = {
  // BG PRIMARY
  BgPrimary: styled(Typography)`
    background-color: ${palette.primary};
    color: ${palette.contrastLight};
  `,
  // BG SECONDARY
  BgSecondary: styled(Typography)`
    background-color: ${palette.secondary};
    color: ${palette.contrastLight};
  `,
  // BG ERROR
  BgError: styled(Typography)`
    background-color: ${palette.error};
    color: ${palette.contrastLight};
  `,
  // BG WARNING
  BgWarning: styled(Typography)`
    background-color: ${palette.warning};
    color: ${palette.contrastLight};
  `,
  // BG INFO
  BgInfo: styled(Typography)`
    background-color: ${palette.info};
    color: ${palette.contrastLight};
  `,
  // BG SUCCESS
  BgSuccess: styled(Typography)`
    background-color: ${palette.success};
    color: ${palette.contrastLight};
  `,
  // BG ACCENT
  BgAccent: styled(Typography)`
    background-color: ${palette.accent};
    color: ${palette.contrastLight};
  `,
  // BG NEUTRAL
  BgNeutral: styled(Typography)`
    background-color: ${palette.neutral};
    color: ${palette.contrastLight};
  `,
};

const txt = {
  ...text,
  ...background,
};

export default txt;
