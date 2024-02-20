import * as React from 'react';
import Box from "@mui/material/Box";
// import { prisma } from '@/app/db';

export default async function PlayerPage({ params }: { params: { playerId: string } }) {
    // const player = await prisma.player.findUnique({
    //     where: {
    //         id: params.playerId,
    //     }
    // });
    
    return (

        <Box>
            {/* <h3>Player ID: {params.playerId}</h3>
            <h3>Player Name: {player?.name}</h3>
            <h3># At Bats: {player?.at_bats}</h3>
            <h3>K%: {player?.k_percentage}</h3> */}
        </Box>
        
    );
}