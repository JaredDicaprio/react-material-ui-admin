import styled from 'styled-components';
import Link from '@material-ui/core/Link';
import palette from './palette';

const link = {
  // LINK PRIMARY
  LinkPrimary: styled(Link)`
    color: ${palette.primary};
  `,
  // LINK SECONDARY
  LinkSecondary: styled(Link)`
    color: ${palette.secondary};
  `,
  // LINK ERROR
  LinkError: styled(Link)`
    color: ${palette.error};
  `,
  // LINK WARNING
  LinkWarning: styled(Link)`
    color: ${palette.warning};
  `,
  // LINK INFO
  LinkInfo: styled(Link)`
    color: ${palette.info};
  `,
  // LINK SUCCESS
  LinkSuccess: styled(Link)`
    color: ${palette.success};
  `,
  // LINK ACCENT
  LinkAccent: styled(Link)`
    color: ${palette.accent};
  `,
  // LINK NEUTRAL
  LinkNeutral: styled(Link)`
    color: ${palette.neutral};
  `,
};

export default link;
