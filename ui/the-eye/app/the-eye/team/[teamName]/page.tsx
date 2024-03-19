import * as React from 'react';
import Box from "@mui/material/Box";
import { prisma } from '@/app/db';
import TeamInfo from '../components/TeamInfo';
import RosterTable from '../components/RosterTable';
import CircularProgress from '@mui/material/CircularProgress';
import { player_stats} from '../../../types';

export default async function TeamPage({ params }: { params: { teamName: string } }) {
    const team = await prisma.teams.findUnique({
        where: {
            TeamName: params.teamName,
        },
    });
    
    const players = await prisma.$queryRaw<player_stats[]>`SELECT * FROM player_stats_view WHERE "BatterTeam" = ${params.teamName}`;

    return (
        <Box >
            <TeamInfo 
                name = {team?.DisplayName as string}
                conference = {team?.Conference as string}
                wins = {101}
                losses = {100}
            />
            <React.Suspense fallback = {<CircularProgress />}>
                <RosterTable players = {JSON.parse(JSON.stringify(players))}/>
            </React.Suspense>
        </Box>
    );
}