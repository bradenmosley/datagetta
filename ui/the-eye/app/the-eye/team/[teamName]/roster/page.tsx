import { prisma } from '@/app/utils/db';
import RosterTable from '../../components/RosterTable';

export default async function Page({ params }: { params: { teamName: string } }) {    
    const decodedTeamName = decodeURIComponent(params.teamName);
    
    const players = await prisma.players.findMany({
        where: {
            TeamName: decodedTeamName,
        },
        orderBy: {
            PlayerName: 'asc',
        },
    });

    return (
        <RosterTable players = {players}/>
    );
}