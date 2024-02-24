import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ConferenceTable from './components/ConferenceTable';

export default function Page() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                gap: 2
            }}
        >
            <Typography variant='h4' fontWeight={700}>Conferences</Typography>

            <Grid container spacing={2}>
                <Grid sm={12} md={6} xl={4}>
                    <ConferenceTable />
                </Grid>

                <Grid sm={12} md={6} xl={4}>
                    <ConferenceTable />
                </Grid>

                <Grid sm={12} md={6} xl={4}>
                    <ConferenceTable />
                </Grid>
            </Grid>
        </Box>
    );
}