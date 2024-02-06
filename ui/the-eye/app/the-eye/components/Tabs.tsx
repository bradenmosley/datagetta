import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PersonIcon from '@mui/icons-material/Person';
import UploadIcon from '@mui/icons-material/Upload';

export default function Tabs() {
    return (
        <List>
            
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText>Auburn</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText>Teams</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon><UploadIcon /></ListItemIcon>
                    <ListItemText>Upload</ListItemText>
                </ListItemButton>
            </ListItem>

        </List>
    );
}