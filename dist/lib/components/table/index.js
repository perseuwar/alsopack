import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}
function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}
// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}
function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, cells } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };
    const headCells = cells;
    return (_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { padding: "checkbox", children: _jsx(Checkbox, { color: "primary", indeterminate: numSelected > 0 && numSelected < rowCount, checked: rowCount > 0 && numSelected === rowCount, onChange: onSelectAllClick, inputProps: {
                            'aria-label': 'select all desserts',
                        } }) }), headCells.map((headCell) => (_jsx(TableCell, { align: headCell.numeric ? 'center' : 'left', padding: headCell.disablePadding ? 'none' : 'normal', style: { paddingRight: 0 }, sortDirection: orderBy === headCell.id ? order : false, children: _jsxs(TableSortLabel, { active: orderBy === headCell.id, direction: orderBy === headCell.id ? order : 'asc', onClick: createSortHandler(headCell.id), children: [headCell.label, orderBy === headCell.id ? (_jsx(Box, { component: "span", sx: visuallyHidden, children: order === 'desc' ? 'sorted descending' : 'sorted ascending' })) : null] }) }, headCell.id)))] }) }));
}
EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};
function EnhancedTableToolbar(props) {
    const { numSelected } = props;
    return (_jsxs(Toolbar, { sx: {
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
            ...(numSelected > 0 && {
                bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
            }),
        }, children: [numSelected > 0 ? (_jsxs(Typography, { sx: { flex: '1 1 100%' }, color: "inherit", variant: "subtitle1", component: "div", children: [numSelected, " selected"] })) : (_jsx(Typography, { sx: { flex: '1 1 100%' }, variant: "h6", id: "tableTitle", component: "div" })), numSelected > 0 ? (_jsx(Tooltip, { title: "Delete", children: _jsx(IconButton, { children: _jsx(DeleteIcon, {}) }) })) : (_jsx(Tooltip, { title: "Filter list", children: _jsx(IconButton, { children: _jsx(FilterListIcon, {}) }) }))] }));
}
EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};
export default function EnhancedTable(data, column) {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };
    const rows = data.data;
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        }
        else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        }
        else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        }
        else if (selectedIndex > 0) {
            newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
        }
        setSelected(newSelected);
    };
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const handleChangeDense = (event) => {
        setDense(event.target.checked);
    };
    const isSelected = (name) => selected.indexOf(name) !== -1;
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
    return (_jsx(Box, { sx: { width: '100%' }, children: _jsxs(Paper, { sx: { width: '100%', mb: 2 }, children: [_jsx(EnhancedTableToolbar, { numSelected: selected.length }), _jsx(TableContainer, { children: _jsxs(Table, { sx: { minWidth: 750 }, "aria-labelledby": "tableTitle", size: dense ? 'small' : 'medium', children: [_jsx(EnhancedTableHead, { numSelected: selected.length, order: order, orderBy: orderBy, onSelectAllClick: handleSelectAllClick, onRequestSort: handleRequestSort, rowCount: rows.length, cells: data.column }), _jsxs(TableBody, { children: [stableSort(rows, getComparator(order, orderBy))
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row, index) => {
                                        const isItemSelected = isSelected(row.id);
                                        const labelId = `enhanced-table-checkbox-${index}`;
                                        const keys = Object.values(row);
                                        delete keys[0];
                                        delete keys[1];
                                        return (_jsxs(TableRow, { hover: true, onClick: (event) => handleClick(event, row.id), role: "checkbox", "aria-checked": isItemSelected, tabIndex: -1, selected: isItemSelected, children: [_jsx(TableCell, { padding: "checkbox", children: _jsx(Checkbox, { color: "primary", checked: isItemSelected, inputProps: {
                                                            'aria-labelledby': labelId,
                                                        } }) }), _jsx(TableCell, { component: "th", id: labelId, scope: "row", padding: "10", children: row.title }), keys.map((item, index) => {
                                                    if (item != null) {
                                                        if (typeof item == 'object') {
                                                            return _jsx(TableCell, { align: "center", children: item }, item.type + '-' + index);
                                                        }
                                                        return _jsx(TableCell, { align: "center", children: item }, item);
                                                    }
                                                })] }, row.id));
                                    }), emptyRows > 0 && (_jsx(TableRow, { style: {
                                            height: (dense ? 33 : 53) * emptyRows,
                                        }, children: _jsx(TableCell, { colSpan: 6 }) }))] })] }) }), _jsx(TablePagination, { rowsPerPageOptions: [5, 10, 25], component: "div", count: rows.length, rowsPerPage: rowsPerPage, page: page, onPageChange: handleChangePage, onRowsPerPageChange: handleChangeRowsPerPage })] }) }));
}
