import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GroupsIcon from '@mui/icons-material/Groups';
import UploadIcon from '@mui/icons-material/Upload';
import { common } from "@mui/material/colors";

import Image from 'next/image';
import logo from './assets/au_logo_onecolor_white.svg'

export default function Tabs() {
    return (
        <List
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
            }}
        >

            <ListItem disablePadding>
                <ListItemButton sx = {{ display: 'flex', gap: 2 }}>
                    <ListItemIcon sx = {{ minWidth: 'auto' }}>
                        <Image
                            src = {logo}
                            width = {24}
                            height = {24}
                            alt = "auburn logo"
                        />
                    </ListItemIcon>
                    <ListItemText sx = {{ '& .MuiTypography-root': { fontWeight: 'bold' } }}>Auburn</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton sx = {{ display: 'flex', gap: 2 }}>
                    <ListItemIcon sx = {{ minWidth: 'auto' }}>
                        <GroupsIcon sx = {{ color: common.white }}/>
                    </ListItemIcon>
                    <ListItemText sx = {{ '& .MuiTypography-root': { fontWeight: 'bold' } }}>Teams</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton sx = {{ display: 'flex', gap: 2 }}>
                    <ListItemIcon sx = {{ minWidth: 'auto' }}>
                        <UploadIcon sx = {{ color: common.white }}/>
                    </ListItemIcon>
                    <ListItemText sx = {{ '& .MuiTypography-root': { fontWeight: 'bold' } }}>Upload</ListItemText>
                </ListItemButton>
            </ListItem>

        </List>
    );
}