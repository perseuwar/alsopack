import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';

import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Box from '@mui/material/Box';

export default ({ value, setValue, label }) => {
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <DesktopDatePicker
      label={label}
      inputFormat="DD/MM/YYYY"
      value={value}
      onChange={handleChange}
      renderInput={params => <TextField {...params} />}
    />
  );
};
