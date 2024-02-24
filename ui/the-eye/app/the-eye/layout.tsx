import Box from "@mui/material/Box";
import UI_Layout from "./components/UI_Layout";
import Toolbar from '@mui/material/Toolbar';

export default function Layout({ children }: { children: React.ReactNode }) {
    const sidebar_width: number = 240;
    
    return (
        <Box sx = {{ display: 'block' }}>
            <UI_Layout width = { sidebar_width } />

            <Box
                component='main'
                sx={{
                    width: { lg: `calc(100% - ${sidebar_width}px)` },
                    ml: { lg: `${sidebar_width}px` },
                    paddingX: 8,
                    paddingY: 4,
                }}
            >
                <Toolbar></Toolbar>
                { children }
            </Box>
        </Box>
    );
}