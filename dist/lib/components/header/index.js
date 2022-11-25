import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import ExpandMore from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../../assets/icons/logo';
import { Toolbar } from '@mui/material';
export default function MenuAppBar({ auth = true }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (_jsx(AppBar, { position: "fixed", sx: { zIndex: theme => theme.zIndex.drawer + 1 }, children: _jsx(Toolbar, { children: _jsxs(Grid, { container: true, justifyContent: "space-between", alignItems: "center", children: [_jsx(Logo, {}), auth && (_jsxs("div", { children: [_jsxs(Grid, { container: true, justifyContent: "center", alignItems: "center", children: [_jsx(Typography, { variant: "h6", children: "John Doe" }), _jsx(IconButton, { "aria-controls": "menu-appbar", "aria-haspopup": "true", onClick: handleMenu, color: "inherit", children: _jsx(ExpandMore, {}) })] }), _jsxs(Menu, { id: "menu-appbar", anchorEl: anchorEl, anchorOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                }, keepMounted: true, transformOrigin: {
                                    vertical: 'top',
                                    horizontal: 'right',
                                }, open: open, onClose: handleClose, children: [_jsx(MenuItem, { onClick: handleClose, children: "Profile" }), _jsx(MenuItem, { onClick: handleClose, children: "My account" })] })] }))] }) }) }));
}
