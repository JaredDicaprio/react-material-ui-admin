import styled from 'styled-components';
import Slider from '@material-ui/core/Slider';
import palette from './palette';
/**
 * Styled Slider
 */
const slider = {
  // SLIDER PRIMARY
  SliderPrimary: styled(Slider)`
    color: ${palette.primary};
  `,
  // SLIDER SECONDARY
  SliderSecondary: styled(Slider)`
    color: ${palette.secondary};
  `,
  // SLIDER ERROR
  SliderError: styled(Slider)`
    color: ${palette.error};
  `,
  // SLIDER WARNING
  SliderWarning: styled(Slider)`
    color: ${palette.warning};
  `,
  // SLIDER INFO
  SliderInfo: styled(Slider)`
    color: ${palette.info};
  `,
  // SLIDER SUCCESS
  SliderSuccess: styled(Slider)`
    color: ${palette.success};
  `,
  // SLIDER ACCENT
  SliderAccent: styled(Slider)`
    color: ${palette.accent};
  `,
  // SLIDER NEUTRAL
  SliderNeutral: styled(Slider)`
    color: ${palette.neutral};
  `,
};

export default slider;
