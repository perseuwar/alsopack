import { jsx as _jsx } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
export default ({ value, setValue, label }) => {
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (_jsx(TimePicker, { label: label, value: value, onChange: handleChange, renderInput: params => _jsx(TextField, { ...params }) }));
};
