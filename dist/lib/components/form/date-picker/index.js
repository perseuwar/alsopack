import { jsx as _jsx } from "react/jsx-runtime";
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
export default ({ value, setValue, label }) => {
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    return (_jsx(DesktopDatePicker, { label: label, inputFormat: "DD/MM/YYYY", value: value, onChange: handleChange, renderInput: params => _jsx(TextField, { ...params }) }));
};
