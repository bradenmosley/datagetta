'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

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
        <Box sx={{ display: 'flex' }}>
        
            <AppBar component='header' position='relative'>
                
                <Toolbar>
                    <IconButton onClick={ handleDrawerToggle }>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            
            </AppBar>
        
            <Box
                component='nav'
                sx={{ width: { lg: drawerWidth }}}
            >
                <MobileSideBar
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    width={drawerWidth}
                />

                <DesktopSideBar width={drawerWidth} />
            
            </Box>
        
        </Box>
    );
}
