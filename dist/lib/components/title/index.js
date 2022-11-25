import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Box from '@mui/material/Box';
import { WrapperTitle } from './styles';
export default ({ text, icon = true }) => {
    return (_jsxs(WrapperTitle, { children: [icon && _jsx(ChevronLeftIcon, {}), _jsx(Box, { component: "p", sx: { margin: 0, fontSize: 25, fontWeight: 'bold' }, children: text })] }));
};
