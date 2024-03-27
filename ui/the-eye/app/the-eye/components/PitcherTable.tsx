'use client'

import Link from '@/app/utils/Link'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Theme } from '@/app/utils/theme';
import { pitcher_stats_forTable } from '../../utils/types';

const playerURL : string = '/the-eye/player/';

const columns: GridColDef[] = [
    {
        field: 'Pitcher',
        headerName: 'Name',
        width: 200,
        renderCell: (params: GridRenderCellParams) => {
            const name = params.row.Pitcher.split(/(?=[A-Z])/);

            return (
                <Link 
                    href = {playerURL.concat(params.row.PitcherTeam + '/' + params.row.Pitcher + '/stats')}
                    name = {name[1] + ' ' + name[0]}
                    fontWeight = {500}
                    underline = 'always'
                />
            )
        }
    },
    {
        field: 'total_strikeouts_pitcher',
        headerName: 'K',
        description: 'Total Strikeouts',
        width: 80,
    },
    {
        field: 'total_walks_pitcher',
        headerName: 'BB',
        description: 'Total Walks',
        width: 80,
    },
    {
        field: 'total_out_of_zone_pitches',
        headerName: 'OoZ',
        description: 'Total Out of Zone Pitches',
        width: 80,
    },
    {
        field: 'misses_in_zone',
        headerName: 'MiZ',
        description: 'Misses in Zone',
        width: 80,
    },
    {
        field: 'swings_in_zone',
        headerName: 'SiZ',
        description: 'Swings in Zone',
        width: 80,
    },
    {
        field: 'total_num_chases',
        headerName: 'Chases',
        description: 'Total Number of Chases',
        width: 80,
    },
    {
        field: 'pitches',
        headerName: 'P',
        description: 'Pitches',
        width: 80,
    },
    {
        field: 'games',
        headerName: 'G',
        description: 'Games',
        width: 80,
    },
    {
        field: 'games_started',
        headerName: 'GS',
        description: 'Games Started',
        width: 80,
    },
    {
        field: 'total_innings_pitched',
        headerName: 'IP',
        description: 'Total Innings Pitched',
        width: 80,
    },
    {
        field: 'total_batters_faced',
        headerName: 'BF',
        description: 'Total Batters Faced',
        width: 80,
    },
];

export default function BatterTable({players}: {players: pitcher_stats_forTable[]}) {
    return (
        <DataGrid
            rows = {players}
            getRowId = {(row) => row.Pitcher}
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
