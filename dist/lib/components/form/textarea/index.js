import { jsx as _jsx } from "react/jsx-runtime";
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
export default ({ numberLimit, value, setValue }) => {
    const handleChange = event => {
        setValue(event.target.value);
    };
    return (_jsx(FormControl, { sx: { width: '320px' }, children: _jsx(TextField, { multiline: true, fullWidth: true, inputProps: {
                maxLength: numberLimit,
            }, value: value, helperText: `${(value && value.length) || 0}/${numberLimit}`, onChange: handleChange, variant: "outlined", rows: 4 }) }));
};
