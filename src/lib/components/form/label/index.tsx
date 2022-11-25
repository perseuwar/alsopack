import Box from '@mui/material/Box';

export default ({ text }: { text: string }) => {
  return (
    <Box
      component="p"
      sx={{ margin: '8px 0px', fontSize: 14, fontWeight: 400, color: 'rgba(0, 0, 0, 0.6)' }}
    >
      {text}
    </Box>
  );
};
