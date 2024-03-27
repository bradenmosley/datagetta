import { prisma } from '@/app/utils/db';
import { pitcher_replacer } from '@/app/utils/replacer';
import { pitcher_stats } from '@/app/utils/types';
import PitcherTable from '../../../components/PitcherTable';

export default async function Page({ params }: { params: { teamName: string } }) {    
    const decodedTeamName = decodeURIComponent(params.teamName);
    
    const pitchers = await prisma.$queryRaw<pitcher_stats[]>`SELECT * FROM pitcher_stats_view WHERE "PitcherTeam" = ${decodedTeamName}`;

    return (
        <PitcherTable players={JSON.parse(JSON.stringify(pitchers, pitcher_replacer))}/>
    );
}