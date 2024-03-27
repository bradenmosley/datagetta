import { prisma } from '@/app/utils/db';
import { batter_stats } from "@/app/utils/types";
import BatterTable from '../../components/BatterTable';
import { batter_replacer } from '@/app/utils/replacer';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default async function CreateStatsTables(
    {player, team, startDate, endDate}: {player: string, team: string, startDate: string, endDate: string})
{    
    // https://www.prisma.io/docs/orm/more/upgrade-guides/upgrading-versions/upgrading-to-prisma-4#raw-query-mapping-postgresql-type-casts
    // In SQL function, get_batter_stats takes the params (text, text, date, date)
    // ::date explicitly casts the startDate and endDate strings to a SQL date type
    const batters = await prisma.$queryRaw<batter_stats[]>`SELECT * FROM get_batter_stats(${player}, ${team}, ${startDate}::date, ${endDate}::date)`;
    
    return (
        <Box>
            <Typography variant='h6' fontWeight={600}>Batting</Typography>
            <BatterTable players = {JSON.parse(JSON.stringify(batters, batter_replacer))}/>
        </Box>
    );
}