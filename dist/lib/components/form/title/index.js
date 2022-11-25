import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
export default ({ text }) => {
    return (_jsx(Box, { component: "h4", sx: { margin: '20px 0 0 0', fontSize: 20, fontWeight: 400 }, children: text }));
};
