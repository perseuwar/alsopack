import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
export default ({ text }) => {
    return (_jsx(Box, { component: "p", sx: { margin: '8px 0px', fontSize: 14, fontWeight: 400, color: 'rgba(0, 0, 0, 0.6)' }, children: text }));
};
