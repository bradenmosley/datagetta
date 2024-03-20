import Box from "@mui/material/Box";
import TeamInfo from '../components/TeamInfo';
import Link from "@/app/utils/Link";
import { prisma } from '@/app/utils/db';

export default async function Layout({ children, params }: { children: React.ReactNode, params: { teamName: string } }) {
    const team = await prisma.teams.findUnique({
        where: {
            TeamName: params.teamName,
        },
        include: {
            players: true,
        },
    });

    const currentURL = '/the-eye/team/';
    
    return (
        <Box>            
            <Box
                sx={{
                    display: 'flex',
                    columnGap: 8, rowGap: 2,
                    flexWrap: 'wrap',
                    backgroundColor: '#f5f5f5',
                    paddingLeft: 8,
                    paddingY: 2,
                    marginTop: '4px',
                }}
            >
                <Link 
                    href = {currentURL.concat(params.teamName).concat('/roster')}
                    name = 'Roster'
                    fontWeight = {600}
                    underline = 'hover'
                />
                <Link 
                    href = {currentURL.concat(params.teamName).concat('/batter')}
                    name = 'Batting'
                    fontWeight = {600}
                    underline = 'hover'
                />
                <Link 
                    href = {currentURL.concat(params.teamName).concat('/pitcher')}
                    name = 'Pitching'
                    fontWeight = {600}
                    underline = 'hover'
                />
                <Link 
                    href = {currentURL.concat(params.teamName).concat('/catcher')}
                    name = 'Catching'
                    fontWeight = {600}
                    underline = 'hover'
                />
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