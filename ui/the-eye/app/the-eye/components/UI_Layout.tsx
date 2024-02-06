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
        <>
        
            <AppBar
                component='header'
                position='fixed'
                sx = {{
                    width: { lg: `calc(100% - ${drawerWidth}px)` },
                    ml: { lg: `${drawerWidth}px` },
                }}
            >
                
                <Toolbar>
                    <IconButton
                        onClick = { handleDrawerToggle }
                        sx = {{ mr: 2, display: { lg: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            
            </AppBar>
        
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
