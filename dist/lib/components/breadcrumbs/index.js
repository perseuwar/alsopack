import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
function handleClick(event) {
    event.preventDefault();
}
export default ({ links, textActive, }) => {
    return (_jsxs(Breadcrumbs, { separator: _jsx(NavigateNextIcon, { fontSize: "small" }), "aria-label": "breadcrumb", children: [links.map((item, index) => (_jsx(Link, { href: item.link, onClick: handleClick, children: item.text }, index))), _jsx(Typography, { color: "textPrimary", children: textActive })] }));
};
