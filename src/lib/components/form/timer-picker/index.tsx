import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';

import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default ({ value, setValue, label }) => {
  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <TimePicker
      label={label}
      value={value}
      onChange={handleChange}
      renderInput={params => <TextField {...params} />}
    />
  );
};
