import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Typography, Box } from '@mui/material';
import GiftCard from '../../assets/icons/gift-card';
import { WrapperCard, TextNumber, InfosCard } from './styles';
export default ({ number, text, icon }) => {
    return (_jsxs(WrapperCard, { children: [icon || _jsx(GiftCard, {}), _jsxs(InfosCard, { children: [_jsx(TextNumber, { children: _jsx(Box, { sx: { fontWeight: '700', fontSize: '32px' }, children: number }) }), _jsx(Typography, { variant: "subtitle1", children: text })] })] }));
};
