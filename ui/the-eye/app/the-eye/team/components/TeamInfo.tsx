import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function TeamInfo(
    { name, conference, wins, losses }:
    { name: string, conference: string, wins: number, losses: number })
    {
        return (

            <Box sx={{ paddingLeft: 4, paddingBottom: 2 }}>
                <Typography variant='h4' fontWeight={700}>{name}</Typography>
                <Typography variant='h6' fontWeight={600}>{conference}</Typography>
                <Typography variant='h6'>{wins}-{losses}</Typography>
            </Box>
            
        );
    }