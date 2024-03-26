import Box from "@mui/material/Box";
import { Suspense } from 'react';
import DateSelector from "@/app/the-eye/player/components/DateSelector";
import CreateStatsTables from "@/app/the-eye/player/components/CreateStatsTables";
import StatsTableSkeleton from "@/app/the-eye/player/components/StatsTableSkeleton";

export default function Page (
    { params }:
    { params: { teamName: string, playerName: string, startDate: string, endDate: string } })
{
    const decodedTeamName = decodeURIComponent(params.teamName);
    
    return(
        <Box sx={{paddingY: 2}}>
            <DateSelector
                start = {params.startDate}
                end = {params.endDate}
            />

            <Box sx={{paddingTop: 2}}>
                <Suspense fallback={<StatsTableSkeleton />}>
                    <CreateStatsTables
                        player = {params.playerName}
                        team = {decodedTeamName}
                        startDate = {params.startDate}
                        endDate = {params.endDate}
                    />
                </Suspense>
            </Box>
            
        </Box>
    );

}