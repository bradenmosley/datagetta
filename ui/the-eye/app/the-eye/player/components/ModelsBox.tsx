import * as React from 'react';
import Box from "@mui/material/Box";
import FilterBar from './FilterBar';
import MatchupBar from './MatchupBar';
import { grey } from '@mui/material/colors';

import Image from 'next/image';
import model from '@/public/model-mockup.png'

// Temporary - remove when the model mockup is no longer used
const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
}

export default function ModelsBox() {
    return (

        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                borderWidth: 2,
                borderStyle: 'solid',
                borderColor: grey[400],
                borderRadius: 8,
                p: 4,
                gap: 4,
            }}
        >
            <FilterBar />
            <MatchupBar />
            
            {/* Temporary */}
            <Image 
                src = {model}
                width = { 919 }
                height = { 288 }
                alt = 'model mockup'
                style = {imageStyle}
            />
        </Box>
        
    );
}