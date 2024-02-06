import Box from "@mui/material/Box";
import UI_Layout from "./components/UI_Layout";
import { Toolbar } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
    const sidebar_width: number = 240;
    
    return (
        <Box sx = {{ display: 'flex' }}>
            <UI_Layout width = { sidebar_width } />

            <Box
                component='main'
                sx = {{ flexGrow: 1,
                        pl: 3,
                        pr: 3,
                        width: { lg: `calc(100% - ${sidebar_width}px)` } }}
            >
                <Toolbar />
                { children }
            </Box>
        </Box>
    );
}