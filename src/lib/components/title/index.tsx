import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import { WrapperTitle } from './styles';

export default ({ text, icon = true }: { text: string; icon?: boolean }) => {
  return (
    <WrapperTitle>
      {icon && <ChevronLeftIcon />}
      <Box component="p" sx={{ margin: 0, fontSize: 25, fontWeight: 'bold' }}>
        {text}
      </Box>
    </WrapperTitle>
  );
};
