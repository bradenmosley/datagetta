import Box from "@mui/material/Box";
import TeamInfo from '../components/TeamInfo';
import { prisma } from '@/app/db';

export default async function Layout({ children, params }: { children: React.ReactNode, params: { teamName: string } }) {
    const team = await prisma.teams.findUnique({
        where: {
            TeamName: params.teamName,
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
            />
            { children }
        </Box>
    );
}