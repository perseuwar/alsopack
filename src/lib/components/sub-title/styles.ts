import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export const WrapperSubTitle = styled(Grid).attrs({
  container: true,
  alignItems: 'center'
})`
  margin: 24px 0;
`;

export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  margin-left: 8px;
`