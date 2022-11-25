import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export default ({ children }: any) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  );
};
