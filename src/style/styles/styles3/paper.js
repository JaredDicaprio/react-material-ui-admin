import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import palette from './palette';
/**
 * Styled Paper
 */
const paper = {
  // PAPER PRIMARY
  PaperPrimary: styled(Paper)`
    background-color: ${palette.primary};
    color: ${palette.contrastLight};
  `,
  // PAPER SECONDARY
  PaperSecondary: styled(Paper)`
    background-color: ${palette.secondary};
    color: ${palette.contrastLight};
  `,
  // PAPER ERROR
  PaperError: styled(Paper)`
    background-color: ${palette.error};
    color: ${palette.contrastLight};
  `,
  // PAPER WARNING
  PaperWarning: styled(Paper)`
    background-color: ${palette.warning};
    color: ${palette.contrastLight};
  `,
  // PAPER INFO
  PaperInfo: styled(Paper)`
    background-color: ${palette.info};
    color: ${palette.contrastLight};
  `,
  // PAPER SUCCESS
  PaperSuccess: styled(Paper)`
    background-color: ${palette.success};
    color: ${palette.contrastLight};
  `,
  // PAPER ACCENT
  PaperAccent: styled(Paper)`
    background-color: ${palette.accent};
    color: ${palette.contrastLight};
  `,
  // PAPER NEUTRAL
  PaperNeutral: styled(Paper)`
    background-color: ${palette.neutral};
    color: ${palette.contrastLight};
  `,
};

export default paper;
