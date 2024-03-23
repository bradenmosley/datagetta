import Box from "@mui/material/Box";
import PlayerInfo from '../../components/PlayerInfo';
import ModelTabs from "../../components/ModelTabs";
import { prisma } from '@/app/utils/db';

export default async function Layout(
    { children, params }:
    { children: React.ReactNode, params: { teamName: string, playerName: string } }
) {
    const player = await prisma.players.findUnique({
        where: {
            PlayerName_TeamName: {PlayerName: params.playerName, TeamName: params.teamName},
        },
        include: {
            teams: true,
        }
    });

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
                <ModelTabs team = {params.teamName} player = {params.playerName}/>
            </Box>

            <Box sx={{paddingX: 8, paddingY: 4}}>
                <PlayerInfo 
                    name = {player?.PlayerName as string}
                    team = {player?.teams.DisplayName as string}
                />
                { children }
            </Box>
            
        </Box>
    );
}