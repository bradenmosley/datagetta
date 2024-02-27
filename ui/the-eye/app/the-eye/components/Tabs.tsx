import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupsIcon from '@mui/icons-material/Groups';
import UploadIcon from '@mui/icons-material/Upload';
import { common } from "@mui/material/colors";
import { Theme } from '@/app/theme';

import Image from 'next/image';
import logo from './assets/au_logo_onecolor_white.svg'

export default function Tabs() {
    return (
        <List>

            <ListItem disablePadding sx={{paddingBottom: 2}}>
                <ListItemButton
                    sx={{
                        gap: 2,
                        justifyContent: 'center',
                        ':hover': {bgcolor: Theme.palette.primary.light,}
                    }}
                    href="/the-eye/team/Auburn"
                >
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <Image
                            src = {logo}
                            width = {24}
                            height = {24}
                            alt = "auburn logo"
                        />
                    </ListItemIcon>
                    <ListItemText sx={{'& .MuiTypography-root':{fontWeight: 'bold'}, flexGrow: 0}}>Auburn</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{paddingBottom: 2}}>
                <ListItemButton
                    sx={{
                        gap: 2,
                        justifyContent: 'center',
                        ':hover': {bgcolor: Theme.palette.primary.light,}
                    }}
                    href="/the-eye"
                    >
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <GroupsIcon sx = {{ color: common.white }}/>
                    </ListItemIcon>
                    <ListItemText sx={{'& .MuiTypography-root':{fontWeight: 'bold'}, flexGrow: 0}}>Teams</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{paddingBottom: 2}}>
                <ListItemButton
                    sx={{
                        gap: 2,
                        justifyContent: 'center',
                        ':hover': {bgcolor: Theme.palette.primary.light,}
                    }}
                    href="#"
                >
                    <ListItemIcon sx={{minWidth: 'auto'}}>
                        <UploadIcon sx = {{ color: common.white }}/>
                    </ListItemIcon>
                    <ListItemText sx={{'& .MuiTypography-root':{fontWeight: 'bold'}, flexGrow: 0}}>Upload</ListItemText>
                </ListItemButton>
            </ListItem>

        </List>
    );
}