'use client'

import Link from '@mui/material/Link';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Theme } from '@/app/theme';

const playerURL : string = '/the-eye/player/';

const columns: GridColDef[] = [
    {
        field: 'PlayerName',
        headerName: 'Name',
        width: 200,
        renderCell: (params: GridRenderCellParams) =>
            <Link
                href = {playerURL.concat(params.row.TeamName + '~' + params.row.PlayerName)}
                color = 'inherit'
                fontWeight={500}
            >
                {params.row.PlayerName}
            </Link>
    },
];

export default function RosterTable({players}: {players: {PlayerName: String, TeamName: String}[]}) {
    return (
        <DataGrid
            rows = {players}
            getRowId = {(row) => row.PlayerName}
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
