'use client'

import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const players = [
    { name: 'Player 1' },
    { name: 'Player 2' },
];

export default function MatchupBar() {
    return (
        <Autocomplete
            freeSolo
            disableClearable
            options = { players.map( (option) => option.name) }
            renderInput={ ( params ) => (
                <TextField
                    { ...params }
                    label = "Matchup"
                    InputProps = {{
                    ...params.InputProps,
                    type: 'search',
                    }}
                />
            )}
        />
    );
}
