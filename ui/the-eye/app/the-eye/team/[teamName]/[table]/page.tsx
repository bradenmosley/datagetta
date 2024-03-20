import * as React from 'react';
import { prisma } from '@/app/db';
import Box from "@mui/material/Box";
import RosterTable from '../../components/RosterTable';
import BatterTable from '../../components/BatterTable';
import { player_stats } from '../../../../types';
import { replacer } from '@/app/bigInt';

export default async function TeamPage({ params }: { params: { teamName: string, table: string } }) {    
    switch (params.table) {
        case 'roster':
            const players = await prisma.players.findMany({
                where: {
                    TeamName: params.teamName,
                },
            });
            return (
                <RosterTable players = {players}/>
            );
        
        case 'batter':
            const batters = await prisma.$queryRaw<player_stats[]>`SELECT * FROM player_stats_view WHERE "BatterTeam" = ${params.teamName}`;
            console.log("**** START ***");
            console.log(JSON.parse(JSON.stringify(batters, replacer)));
            return (
                <BatterTable players={JSON.parse(JSON.stringify(batters, replacer))}/>
            );

        case 'pitcher':
            return (
                <Box>
                    <h4>Pitcher</h4>
                </Box>
            );
            
        default:
            return (
                <h4>Error: Invalid URL</h4>
            );
    };
}