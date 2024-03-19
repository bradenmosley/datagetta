import Box from "@mui/material/Box";
import TeamInfo from '../components/TeamInfo';
import { prisma } from '@/app/db';

export default async function Layout({ children, params }: { children: React.ReactNode, params: { teamTable: string } }) {
    // [0]: TeamName | [1]: table type to show
    const tableId = params.teamTable.split('~');
    
    const team = await prisma.teams.findUnique({
        where: {
            TeamName: tableId[0],
        },
        include: {
            players: true,
        },
    });
    
    return (
        <Box>
            <TeamInfo 
                name = {team?.DisplayName as string}
                conference = {team?.Conference as string}
                wins = {0}
                losses = {0}
            />
            { children }
        </Box>
    );
}