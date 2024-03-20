'use client'

import Link from '@mui/material/Link';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Theme } from '@/app/utils/theme';
import { player_stats_forTable } from '../../../utils/types';

const playerURL : string = '/the-eye/player/';

const columns: GridColDef[] = [
    {
        field: 'Batter',
        headerName: 'Name',
        width: 200,
        renderCell: (params: GridRenderCellParams) =>
            <Link
                href = {playerURL.concat(params.row.BatterTeam + '~' + params.row.Batter)}
                color = 'inherit'
                fontWeight={500}
            >
                {params.row.Batter}
            </Link>
    },
    {
        field: 'hits',
        headerName: 'H',
        description: 'Hits',
        width: 80,
    },
    {
        field: 'at_bats',
        headerName: 'AB',
        description: 'At Bats',
        width: 80,
    },
    {
        field: 'strikes',
        headerName: 'Strikes',
        description: 'Strikes',
        width: 80,
    },
    {
        field: 'walks',
        headerName: 'BB',
        description: 'Walks',
        width: 80,
    },
    {
        field: 'strikeouts',
        headerName: 'K',
        description: 'At Bats',
        width: 80,
    },
    {
        field: 'homeruns',
        headerName: 'HR',
        description: 'Homeruns',
        width: 80,
    },
    {
        field: 'extra_base_hits',
        headerName: 'XBH',
        description: 'Extra Base Hits',
        width: 80,
    },
    {
        field: 'plate_appearances',
        headerName: 'PA',
        description: 'Plate Appearances',
        width: 80,
    },
    {
        field: 'hit_by_pitch',
        headerName: 'HBP',
        description: 'Hit by Pitch',
        width: 80,
    },
    {
        field: 'sacrifice',
        headerName: 'S',
        description: 'Sacrifice',
        width: 80,
    },
    {
        field: 'total_bases',
        headerName: 'TB',
        description: 'Total Bases',
        width: 80,
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
        field: 'games',
        headerName: 'Games',
        description: 'Games',
        width: 80,
    },
    {
        field: 'batting_average',
        headerName: 'AVG',
        description: 'Batting Average',
        width: 80,
    },
    {
        field: 'onbase_plus_slugging',
        headerName: 'OPS',
        description: 'On Base Plus Slugging',
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
];

export default function BatterTable({players}: {players: player_stats_forTable[]}) {
    return (
        <DataGrid
            rows = {players}
            getRowId = {(row) => row.Batter}
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
