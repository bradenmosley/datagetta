import { prisma } from '@/app/utils/db';
import BatterTable from '../../../components/BatterTable';
import { batter_stats } from '../../../../utils/types';
import { batter_replacer } from '@/app/utils/replacer';

export default async function TeamPage({ params }: { params: { teamName: string } }) {    
    const decodedTeamName = decodeURIComponent(params.teamName);
    
    const batters = await prisma.$queryRaw<batter_stats[]>`SELECT * FROM batter_stats_view_2024 WHERE "BatterTeam" = ${decodedTeamName}`;

    return (
        <BatterTable players={JSON.parse(JSON.stringify(batters, batter_replacer))}/>
    );
}