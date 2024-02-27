'use client'

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Link from '@mui/material/Link';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Theme } from '@/app/theme';

type player = {
    id : string;
    name : string;
    team_name : string;
    at_bats : number;
    batting_average : number;
    on_base_percentage : number;
    slugging_percentage : number;
    ops : number;
    isolated_power : number;
    k_percentage : number;
    base_on_balls_percentage : number;
    in_zone_whiff_percentage : number;
    chase_percentage : number;
}

const playerURL : string = '/the-eye/player/';

const columns: GridColDef[] = [
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        renderCell: (params: GridRenderCellParams) =>
            <Link
                href = {playerURL.concat(params.row.id)}
                color = 'inherit'
                fontWeight={500}
            >
                {params.row.name}
            </Link>
    },
    {
        field: 'at_bats',
        headerName: 'AB',
        description: 'At Bats',
        width: 80,
    },
    {
        field: 'batting_average',
        headerName: 'BA',
        description: 'Batting Average',
        width: 100,
    },
    {
        field: 'on_base_percentage',
        headerName: 'OBP',
        description: 'On Base Percentage',
        width: 80,
    },
    {
        field: 'slugging_percentage',
        headerName: 'SLUG',
        description: 'Slugging Percentage',
        width: 80,
    },
    {
        field: 'ops',
        headerName: 'OPS',
        description: 'On-Base Plus Slugging Percentage',
        width: 80,
    },
    {
        field: 'isolated_power',
        headerName: 'ISO',
        description: 'Isolated Power',
        width: 80,
    },
    {
        field: 'k_percentage',
        headerName: 'K%',
        description: 'K Percentage',
        width: 80,
    },
    {
        field: 'base_on_balls_percentage',
        headerName: 'BoB',
        description: 'Base on Balls Percentage',
        width: 80,
    },
    {
        field: 'in_zone_whiff_percentage',
        headerName: 'IZW',
        description: 'In Zone Whiff Percentage',
        width: 80,
    },
    {
        field: 'chase_percentage',
        headerName: 'CHASE',
        description: 'Chase Percentage',
        width: 80,
    },
];

export default function RosterTable({players}: {players: player[]}) {
    return (
        <React.Suspense fallback = {<CircularProgress />}>
            <DataGrid
                rows = {players}
                columns = {columns}
                autoHeight = {true}
                hideFooter = {true}
                sx={{
                    '& .MuiDataGrid-columnHeaders': {backgroundColor: Theme.palette.secondary.main},
                    '& .MuiDataGrid-columnHeaderTitle': {fontWeight: 700},
                }}
            />
        </React.Suspense>
    );
}
