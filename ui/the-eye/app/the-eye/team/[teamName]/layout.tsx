import Box from "@mui/material/Box";
import TeamInfo from '../components/TeamInfo';
import TableTabs from "../components/TableTabs";
import { prisma } from '@/app/utils/db';

export default async function Layout({ children, params }: { children: React.ReactNode, params: { teamName: string } }) {
    const decodedTeamName = decodeURIComponent(params.teamName);
    const team = await prisma.teams.findUnique({
        where: {
            TeamName: decodedTeamName,
        },
    });

    const currentURL = '/the-eye/team/';
    
    return (
        <Box>            
            <Box
                sx={{
                    backgroundColor: '#f5f5f5',
                    paddingLeft: 8,
                    paddingY: 2,
                    marginTop: '4px',
                }}
            >    
                <TableTabs team = {decodedTeamName}/>
            </Box>

            <Box sx={{paddingX: 8, paddingY: 4}}>
                <TeamInfo 
                    name = {team?.DisplayName as string}
                    conference = {team?.Conference as string}
                />
                { children }
            </Box>
            
        </Box>
    );
}