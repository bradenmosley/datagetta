'use client'

import * as React from 'react';
import Link from '@mui/material/Link';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Theme } from '@/app/theme';

type playerType = {
    PlayerName : string;
    TeamName : string;
}

type playerTypeWithID = {
    id : number;
    PlayerName : string;
    TeamName : string;
}

const playerURL : string = '/the-eye/player/';

const columns: GridColDef[] = [
    {
        field: 'PlayerName',
        headerName: 'Name',
        width: 200,
        renderCell: (params: GridRenderCellParams) =>
            <Link
                href = {playerURL.concat(params.row.TeamName + '-' + params.row.PlayerName)}
                color = 'inherit'
                fontWeight={500}
            >
                {params.row.PlayerName}
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

export default function RosterTable({players}: {players: playerType[]}) {    
    const playerRows : playerTypeWithID[] = players.map((player, index) => ({ ...player, id: index }));
    
    return (
        <DataGrid
            rows = {playerRows}
            columns = {columns}
            autoHeight = {true}
            hideFooter = {true}
            sx={{
                '& .MuiDataGrid-columnHeaders': {backgroundColor: Theme.palette.secondary.main},
                '& .MuiDataGrid-columnHeaderTitle': {fontWeight: 700},
            }}
        />
    );
}
