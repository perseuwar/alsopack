import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

export default ({ numberLimit, value, setValue }) => {
  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ width: '320px' }}>
      <TextField
        multiline
        fullWidth
        inputProps={{
          maxLength: numberLimit,
        }}
        value={value}
        helperText={`${(value && value.length) || 0}/${numberLimit}`}
        onChange={handleChange}
        variant="outlined"
        rows={4}
      />
    </FormControl>
  );
};
