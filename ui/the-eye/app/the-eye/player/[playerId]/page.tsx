import Box from "@mui/material/Box";
import PlayerInfo from '../components/PlayerInfo';
import ModelsBox from '../components/ModelsBox';
import { prisma } from '@/app/db';

export default async function PlayerPage({ params }: { params: { playerId: string } }) {
    const id = params.playerId.split('~');
    //id[1] = id[1].replace(/%20/g, ' ');
    
    const player = await prisma.players.findUnique({
        where: {
            PlayerName_TeamName: {PlayerName: id[1], TeamName: id[0]},
        },
        include: {
            teams: true,
        }
    });

    return (

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
        }}>
            <PlayerInfo
                name = {player?.PlayerName as string}
                team = {player?.teams.DisplayName ? player?.teams.DisplayName : player?.TeamName as string}
            />
            <ModelsBox />
        </Box>
        
    );
}