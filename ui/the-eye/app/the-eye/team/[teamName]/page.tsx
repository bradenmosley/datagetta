import * as React from 'react';
import Box from "@mui/material/Box";
import { prisma } from '@/app/db';
import TeamInfo from '../components/TeamInfo';
import RosterTable from '../components/RosterTable';
import CircularProgress from '@mui/material/CircularProgress';

export default async function TeamPage({ params }: { params: { teamName: string } }) {
    const team = await prisma.teams.findUnique({
        where: {
            TeamName: params.teamName,
        },
        include: {
            players: true,
        },
    });

    if (team?.players === undefined) {
        return (
            <h6>Error: No players found for {team?.TeamName}</h6>
        );
    }

    return (
        <Box >
            <TeamInfo 
                name = {team.DisplayName ? team.DisplayName : team.TeamName}
                conference = {team.Conference ? team.Conference : '** Error: Conference is Unassigned **'}
                // wins = {team?.number_wins as number}
                // losses = {team?.number_losses as number}
                wins = {100}
                losses = {100}
            />
            <React.Suspense fallback = {<CircularProgress />}>
                <RosterTable players = {team.players}/>
            </React.Suspense>
        </Box>
    );
}