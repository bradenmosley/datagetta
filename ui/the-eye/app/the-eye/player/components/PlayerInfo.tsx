import * as React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

export default function PlayerInfo(
    { name, team }:
    { name: string, team: string }) {
        
        return (
            <Box sx={{ paddingLeft: 4 }}>
                <Typography variant='h4' fontWeight={700}>{name}</Typography>
                <Typography variant='h6' fontWeight={600}>{team}</Typography>
            </Box>
            
        );
    }