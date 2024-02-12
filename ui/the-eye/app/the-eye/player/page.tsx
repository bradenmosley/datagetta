import * as React from 'react';
import Box from "@mui/material/Box";
import PlayerInfo from './components/PlayerInfo';
import ModelsBox from './components/ModelsBox';

export default function Page() {
    return (

        <Box>
            <PlayerInfo />
            <ModelsBox />
        </Box>
        
    );
}