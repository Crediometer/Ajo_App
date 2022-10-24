import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import './DashboardTable.css';
const DashboardTable = ({open}) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return ( 
        <div className="dashboard-table">
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell className='tablecell-head'>Recipient</TableCell>
                            <TableCell className='tablecell-head'>Date</TableCell>
                            <TableCell className='tablecell-head'>Transaction Id</TableCell>
                            <TableCell className='tablecell-head'>Amount</TableCell>
                            <TableCell className='tablecell-head'>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return ( */}
                            <TableRow hover role="checkbox" tabIndex={-1}>
                                <TableCell className='tablecell-body'>
                                    <div className="recipient" >
                                        <img></img>
                                        <div className="recipient-text" onClick={()=> open(true)}>
                                            <p className="recipient-name" >Olalekan Mercy</p>
                                            <p className="recipient-title">Recipient</p>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className='tablecell-body'>
                                    <div className="transaction-data" onClick={()=> open(true)}>
                                        <p className="date">May 15, 2022</p>
                                        <p className="time">02:15 PM</p>
                                    </div>
                                </TableCell>
                                <TableCell className='tablecell-body' onClick={()=> open(true)}>
                                    <p className='transaction-text'>EFTOOM1271</p>
                                </TableCell>
                                <TableCell className='tablecell-body' onClick={()=> open(true)}>
                                    <p className='transaction-text'>N20,000.00</p>
                                </TableCell>
                                <TableCell className='tablecell-body'>
                                    <div className="status-button">
                                        <button onClick={()=> open(true)}>Successful</button>
                                    </div>
                                </TableCell>
                            </TableRow>
                            {/* );
                        })} */}
                    </TableBody>
                    </Table>
                </TableContainer>
    </Paper>
        </div>
     );
}
 
export default DashboardTable;
