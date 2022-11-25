import { jsx as _jsx } from "react/jsx-runtime";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export default ({ options, value, setValue }) => {
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (_jsx(FormControl, { sx: { minWidth: 300 }, children: _jsx(Select, { value: value, onChange: handleChange, children: options.map((item, index) => {
                _jsx(MenuItem, { value: item.value, children: item.label }, index);
            }) }) }));
};
