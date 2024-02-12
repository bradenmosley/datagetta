import Drawer from '@mui/material/Drawer';
import Tabs from './Tabs'
import Box from "@mui/material/Box";
import { Theme } from '@/app/theme';
import { common } from '@mui/material/colors';

import Image from 'next/image';
import logo from './assets/TheEyeLogo.svg'

export default function DesktopSideBar({ width }: { width: number }) {
    return (
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', lg: 'block' },
                '& .MuiDrawer-paper': {
                    boxSizing: 'border-box',
                    width: width,
                    paddingTop: 6,
                    backgroundColor: Theme.palette.primary.main,
                    color: common.white,
                }
            }}
            open
        >
            <Box
                sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                }}
            >
                <Image 
                    src = {logo}
                    width = { 134 }
                    height = { 200 }
                    alt = 'logo of a tiger eye'
                    priority = { true }
                />
                <Tabs />
            </Box>
            
        </Drawer>
    );
}

