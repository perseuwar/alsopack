import { jsx as _jsx } from "react/jsx-runtime";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
export default ({ setValue, value, label }) => {
    const handleChange = (event) => {
        setValue(event.target.checked);
    };
    return (_jsx(FormControlLabel, { control: _jsx(Checkbox, { onChange: handleChange, value: value }), label: label }));
};
