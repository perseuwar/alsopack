import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Box, FormControl, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
export default function SelectHandler({ label, options }) {
    const [age, setAge] = React.useState(label);
    const handleChange = event => {
        setAge(event.target.value);
    };
    return (_jsx(Box, { sx: { maxWidth: 100 }, children: _jsx(FormControl, { fullWidth: true, children: _jsx(Select, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: age, label: "Age", onChange: handleChange, children: options.map((item, index) => (_jsx(MenuItem, { value: item, children: item }))) }) }) }));
}
