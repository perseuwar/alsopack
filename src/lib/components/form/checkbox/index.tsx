import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default ({ setValue, value, label }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.checked);
  };

  return (
    <FormControlLabel control={<Checkbox onChange={handleChange} value={value} />} label={label} />
  );
};
