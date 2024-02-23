import * as React from 'react';
import Box from "@mui/material/Box";
import PlayerInfo from '../components/PlayerInfo';
import ModelsBox from '../components/ModelsBox';
import { prisma } from '@/app/db';

export default async function PlayerPage({ params }: { params: { playerId: string } }) {
    const player = await prisma.player.findUnique({
        where: {
            id: params.playerId,
        }
    });

    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
        }}>
            <PlayerInfo
                name = {player?.name as string}
                team = {player?.team_name as string}
                bats = 'R'
                throws = 'L'
            />
            <ModelsBox />
        </Box>
        
    );
}