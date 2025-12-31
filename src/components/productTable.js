import React, { useContext } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { UserContext } from '../context';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';

const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'price', label: 'Price', minWidth: 100 },
    {
        id: 'category',
        label: 'Category',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'stock',
        label: 'Stock',
        minWidth: 100,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'createdAt',
        label: 'CreatedAt',
        minWidth: 100,
        align: 'center',
        format: (value) => moment(value).format("MMM Do YY"),
    },
    {
        id: 'edit',
        label: 'Edit',
        //minWidth: 50,
        align: 'center',
        // format:(<EditIcon/>),
    },
];





export default function ProductTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const data = useContext(UserContext)
    const navigate = useNavigate()
    const rows = data.data
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const EditLink = (item) => {
        navigate('/add', { state: { linkdata: item } })

    }

    return (
        <Paper sx={{ width: '95%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 380 }} className='custom-scrollbar'>
                <Table stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}

                                </TableCell>

                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : column.id === 'edit' ? <div onClick={() => EditLink(row)}><EditIcon color="primary" /> </div> : value}


                                                </TableCell>
                                            );
                                        })}

                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
