import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { common } from '@mui/material/colors';
import { Theme } from '@/app/utils/theme';

export default function TopBar({ drawerToggle, width }: { drawerToggle: any, width: number }) {
    return (
        
        <AppBar
            component='header'
            position='fixed'
            sx = {{
                width: { lg: `calc(100% - ${width}px)` },
                ml: { lg: `${width}px` },
                backgroundColor: common.white,
            }}
        >
            
            <Toolbar>
                <IconButton
                    onClick = { drawerToggle }
                    sx = {{
                        mr: 2,
                        display: { lg: 'none' },
                        color: Theme.palette.primary.main, }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        
        </AppBar>

    );
}