import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function createData(name: string, season_record: string, conf_record: string) {
    return { name, season_record, conf_record };
};

const rows = [
    createData('Auburn', '10-0', '4-0'),
    createData('Alabama', '9-0', '4-0'),
    createData('Vanderbilt', '8-0', '4-0'),
    createData('LSU', '7-0', '4-0'),
    createData('Florida', '6-0', '3-0'),
];

export default function ConferenceTable() {
    return (
        <Paper 
            elevation={3}
            sx={{
                paddingX: 1,
                paddingY: 1,
            }}
        >
            <Typography variant='h6' fontWeight={700} paddingLeft={1.5}>SEC</Typography>

            <TableContainer>
                <Table sx={{ minWidth: 300 }}>

                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 600}}>Team</TableCell>
                            <TableCell align='center' sx={{fontWeight: 600}}>Season Record</TableCell>
                            <TableCell align='center' sx={{fontWeight: 600}}>Conference Record</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" sx={{fontWeight: 500}}>{row.name}</TableCell>
                                <TableCell align='center'>{row.season_record}</TableCell>
                                <TableCell align='center'>{row.conf_record}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}