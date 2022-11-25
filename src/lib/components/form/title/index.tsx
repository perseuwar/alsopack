import Box from '@mui/material/Box';

export default ({ text }: { text: string }) => {
  return (
    <Box component="h4" sx={{ margin: '20px 0 0 0', fontSize: 20, fontWeight: 400 }}>
      {text}
    </Box>
  );
};
