import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
export default ({ children }) => {
    return (_jsxs(Box, { component: "main", sx: { flexGrow: 1, p: 3 }, children: [_jsx(Toolbar, {}), children] }));
};
