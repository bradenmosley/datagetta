import { prisma } from '@/app/utils/db';
import { replacer } from '@/app/utils/replacer';
import Box from '@mui/material/Box';

export default async function Page({ params }: { params: { teamName: string } }) {    
    const decodedTeamName = decodeURIComponent(params.teamName);

    return (
        <Box>
            <h4>Pitcher</h4>
        </Box>
    );
}