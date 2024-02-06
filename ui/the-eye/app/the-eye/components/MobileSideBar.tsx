import Drawer from '@mui/material/Drawer';
import Tabs from './Tabs'

export default function MobileSideBar({ open, onTransitionEnd, onClose, width}: 
    {open: boolean, onTransitionEnd: any, onClose: any, width: number}) {
    return (
        <Drawer
            variant="temporary"
            open={open}
            onTransitionEnd={ onTransitionEnd }
            onClose={ onClose }
            ModalProps={{ keepMounted: true }}
            sx={{
                display: { xs: 'block', lg: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: width },
            }}
            >
            <Tabs />
        </Drawer>
    );
}