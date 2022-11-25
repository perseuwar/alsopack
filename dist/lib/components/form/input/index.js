import { jsx as _jsx } from "react/jsx-runtime";
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
export default ({ value, setValue, fullWidth }) => {
    const handleChange = event => {
        setValue(event.target.value);
    };
    return (_jsx(FormControl, { sx: { width: fullWidth ? '100%' : '320px' }, children: _jsx(TextField, { fullWidth: true, value: value, type: "text", onChange: handleChange, variant: "outlined" }) }));
};
