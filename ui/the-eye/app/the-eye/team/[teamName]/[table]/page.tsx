import { prisma } from '@/app/utils/db';
import Box from "@mui/material/Box";
import RosterTable from '../../components/RosterTable';
import BatterTable from '../../components/BatterTable';
import { player_stats } from '../../../../utils/types';
import { replacer } from '@/app/utils/replacer';

export default async function TeamPage({ params }: { params: { teamName: string, table: string } }) {    
    switch (params.table) {
        case 'roster':
            const players = await prisma.players.findMany({
                where: {
                    TeamName: params.teamName,
                },
                orderBy: {
                    PlayerName: 'asc',
                },
            });
            return (
                <RosterTable players = {players}/>
            );
        
        case 'batter':
            const batters = await prisma.$queryRaw<player_stats[]>`SELECT * FROM batter_stats_view_2024 WHERE "BatterTeam" = ${params.teamName}`;
            // const batters2 = await prisma.$queryRaw<player_stats[]>`SELECT * FROM get_batter_stats('IrishIke', 'AUB_TIG', '3/16/24', '3/25/24')`;
            // console.log(batters2);
            return (
                <BatterTable players={JSON.parse(JSON.stringify(batters, replacer))}/>
            );

        case 'pitcher':
            return (
                <Box>
                    <h4>Pitcher</h4>
                </Box>
            );

        case 'catcher':
            return (
                <Box>
                    <h4>Catcher</h4>
                </Box>
            );
            
        default:
            return (
                <h4>Error: Invalid URL</h4>
            );
    };
}