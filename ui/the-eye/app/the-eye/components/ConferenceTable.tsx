import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export default function ConferenceTable({name, teams}: {name: string, teams: { team_name: string }[]}) {
    const teamURL : string = '/the-eye/team/';
    
    return (
        <Paper 
            elevation={3}
            sx={{
                paddingX: 1,
                paddingY: 1,
            }}
        >
            <Typography variant='h6' fontWeight={700} paddingLeft={1.5}>{name}</Typography>

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
                        { teams.map((team, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link
                                        href = {teamURL.concat(team.team_name)}
                                        color = 'inherit'
                                        fontWeight={500}
                                    >
                                        {team.team_name}
                                    </Link>
                                </TableCell>
                                <TableCell align='center'>N/A</TableCell>
                                <TableCell align='center'>N/A</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}