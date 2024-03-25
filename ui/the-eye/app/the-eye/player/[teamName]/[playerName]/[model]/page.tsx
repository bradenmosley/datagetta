import Box from "@mui/material/Box";
import { prisma } from '@/app/utils/db';

export default async function PlayerPage(
    { params }:
    { params: { teamName: string, playerName: string, model: string } }
) {
    switch(params.model) {
        case 'stats':
            return(
                <Box>
                    <h4>Stats</h4>
                </Box>
            );

        case 'model1':
            return(
                <Box>
                    <h4>Model 1</h4>
                </Box>
            );

        case 'model2':
            return(
                <Box>
                    <h4>Model 2</h4>
                </Box>
            );

        case 'model3':
            return(
                <Box>
                    <h4>Model 3</h4>
                </Box>
            );
    }
}