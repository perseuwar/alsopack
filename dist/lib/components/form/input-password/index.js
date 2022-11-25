import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default ({ value, setValue }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (_jsx(FormControl, { fullWidth: true, variant: "outlined", children: _jsx(OutlinedInput, { type: showPassword ? 'text' : 'password', value: value, onChange: handleChange, endAdornment: _jsx(InputAdornment, { position: "end", children: _jsx(IconButton, { onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword, edge: "end", children: showPassword ? _jsx(VisibilityOff, {}) : _jsx(Visibility, {}) }) }) }) }));
};
