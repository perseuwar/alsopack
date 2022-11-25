import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
const options = [
    {
        label: 'Desconto',
        value: 'Desconto',
    },
    {
        label: 'Brinde',
        value: 'Brinde',
    },
];
export default () => {
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (_jsx(FormControl, { children: _jsx(RadioGroup, { row: true, value: value, onChange: handleChange, children: options.map(item => (_jsx(FormControlLabel, { value: item.value, control: _jsx(Radio, {}), label: item.label }))) }) }));
};
