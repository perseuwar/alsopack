import { Typography, Box } from '@mui/material';
import GiftCard from '../../assets/icons/gift-card';
import { WrapperCard, TextNumber, InfosCard } from './styles';

export default ({ number, text, icon }: { number: string; text: string; icon: any }) => {
  return (
    <WrapperCard>
      {icon || <GiftCard />}
      <InfosCard>
        <TextNumber>
          <Box sx={{ fontWeight: '700', fontSize: '32px' }}>{number}</Box>
        </TextNumber>
        <Typography variant="subtitle1">{text}</Typography>
      </InfosCard>
    </WrapperCard>
  );
};
