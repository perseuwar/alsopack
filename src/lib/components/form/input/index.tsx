import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

export default ({ value, setValue, fullWidth }) => {
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: fullWidth ? '100%' : '320px' }}>
      <TextField fullWidth value={value} type="text" onChange={handleChange} variant="outlined" />
    </FormControl>
  );
};
