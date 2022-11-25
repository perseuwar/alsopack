import React from 'react';
import { Box, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';

export default function SelectHandler({ label, options }) {
  const [age, setAge] = React.useState(label);

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 100 }}>
      <FormControl fullWidth>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {options.map((item, index) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
