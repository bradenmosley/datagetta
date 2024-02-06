import Drawer from '@mui/material/Drawer';
import Tabs from './Tabs'

export default function DesktopSideBar({ width }: { width: number }) {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', lg: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: width },
            }}
            open
            >
            <Tabs />
        </Drawer>
    );
}

