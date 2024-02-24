'use client'

import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import { Theme } from '@/app/theme';
import { common, grey } from '@mui/material/colors';

const filters = [
    { name: 'Filter 1' },
    { name: 'Filter 2', },
    { name: 'Filter 3', },
    { name: 'Filter 4', },
]

export default function FilterBar() {
    return (
        <Autocomplete
            multiple
            options = { filters }
            getOptionLabel = { ( option ) => option.name }
            filterSelectedOptions
            renderInput={ ( params ) => (
                <TextField
                    { ...params }
                    placeholder = 'Filters'
                />
            )}
            sx={{
                '& .MuiInputBase-root': {
                    flexDirection: 'row-reverse'
                },
                '& .MuiAutocomplete-tag': {
                    backgroundColor: Theme.palette.secondary.main,
                    color: common.white,
                },
                '& .MuiChip-root .MuiChip-deleteIcon': {
                    color: common.white,
                },
            }}
        />
    );
}