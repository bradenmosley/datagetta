import * as React from 'react';
import { prisma } from '@/app/db';
import Box from "@mui/material/Box";
import RosterTable from '../components/RosterTable';
import BatterTable from '../components/BatterTable';
import { player_stats } from '../../../types';

export default async function TeamPage({ params }: { params: { teamTable: string } }) {
    // [0]: TeamName | [1]: table type to show
    const url = params.teamTable.split('~');
    
    switch (url[1]) {
        case 'roster':
            const players = await prisma.players.findMany({
                where: {
                    TeamName: url[0],
                },
            });
            return (
                <RosterTable players = {players}/>
            );
        
        case 'batter':
            const batters = await prisma.$queryRaw<player_stats[]>`SELECT * FROM player_stats_view WHERE "BatterTeam" = ${url[0]}`;
            return (
                <BatterTable players={JSON.parse(JSON.stringify(batters))}/>
            );

        case 'pitcher':
            return (
                <Box>
                    <h4>Pitcher</h4>
                    <h4>{url[0]}</h4>
                </Box>
            );
            
        default:
            return (
                <h4>Error: Invalid URL</h4>
            );
    };
}