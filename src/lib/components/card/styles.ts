import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export const WrapperCard = styled(Grid).attrs({
  container: true,
  alignItems: 'center',
})`
  width: 360px;
  padding: 24px 16px;
  margin-top: 24px;
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

export const TextNumber = styled(Typography)`
  line-height: 38px;
`;

export const InfosCard = styled(Grid)`
  margin-left: 16px;
`