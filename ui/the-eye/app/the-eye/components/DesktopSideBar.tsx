import Drawer from '@mui/material/Drawer';
import Tabs from './Tabs'
import { Theme } from '@/app/theme';
import { common } from '@mui/material/colors';

export default function DesktopSideBar({ width }: { width: number }) {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', lg: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: width,
                    backgroundColor: Theme.palette.primary.main,
                    color: common.white,
                },
            }}
            open
            >
            <Tabs />
        </Drawer>
    );
}

