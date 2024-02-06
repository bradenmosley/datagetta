'use client'

import * as React from 'react';
import Box from '@mui/material/Box';

import TopBar from './TopBar';
import MobileSideBar from './MobileSideBar';
import DesktopSideBar from './DesktopSideBar';

export default function UI_Layout({ width }: { width: number }) {
    const drawerWidth = width;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
        setMobileOpen(!mobileOpen);
        }
    };

    return (
        <>

            <TopBar drawerToggle={ handleDrawerToggle } width={drawerWidth}/>
        
            <Box
                component='nav'
                sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 }}}
            >
                <MobileSideBar
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    width={drawerWidth}
                />

                <DesktopSideBar width={drawerWidth} />
            
            </Box>
        
        </>
    );
}
