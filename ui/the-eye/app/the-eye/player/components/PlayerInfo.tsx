import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function PlayerInfo(
    { name, team, bats, throws }:
    { name: string, team: string, bats: string, throws: string })
    {
        return (

            <Box sx={{ paddingLeft: 4 }}>
                <Typography variant='h4' fontWeight={700}>{name}</Typography>
                <Typography variant='h6' fontWeight={600}>{team}</Typography>
                <Typography variant='h6'>Bats: {bats} | Throws: {throws}</Typography>
            </Box>
            
        );
    }