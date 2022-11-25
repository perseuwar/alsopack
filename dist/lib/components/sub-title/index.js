import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import { WrapperSubTitle } from './styles';
export default ({ icon, text }) => {
    return (_jsxs(WrapperSubTitle, { children: [icon, _jsx(Box, { component: "p", sx: { margin: 0, fontSize: 20, fontWeight: 'bold', marginLeft: 1 }, children: text })] }));
};
