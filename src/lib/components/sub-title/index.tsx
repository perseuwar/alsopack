import React from 'react'
import Box from '@mui/material/Box';
import { WrapperSubTitle } from './styles';

export default ({ icon, text }: { icon: any; text: string }) => {
  return (
    <WrapperSubTitle>
      {icon}
      <Box component="p" sx={{ margin: 0, fontSize: 20, fontWeight: 'bold', marginLeft: 1 }}>
        {text}
      </Box>
    </WrapperSubTitle>
  );
};
