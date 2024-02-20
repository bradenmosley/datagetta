import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function createData(
  name: string,
  season_record: string,
  conf_record: string,
) {
  return { name, season_record, conf_record };
}

const rows = [
  createData('Auburn', '10-0', '4-0'),
  createData('Alabama', '9-0', '4-0'),
  createData('Vanderbilt', '8-0', '4-0'),
  createData('LSU', '7-0', '4-0'),
  createData('Florida', '6-0', '3-0'),
];

export default function BasicTable() {

  return (
    <TableContainer component={Paper}>
      
      <Typography>SEC</Typography>
      
      <Table sx={{ minWidth: 650 }} aria-label="simple table">

        <TableHead>
          <TableRow>
            <TableCell>Team</TableCell>
            <TableCell align='center'>Season Record</TableCell>
            <TableCell align='center'>Conference Record</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align='center'>{row.season_record}</TableCell>
              <TableCell align='center'>{row.conf_record}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}