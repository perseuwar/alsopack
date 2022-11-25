import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default ({ options, value, setValue }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 300 }}>
      <Select value={value} onChange={handleChange}>
        {options.map((item, index) => {
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};
