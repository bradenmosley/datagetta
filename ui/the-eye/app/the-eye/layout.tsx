import Box from "@mui/material/Box";
import UI_Layout from "./components/UI_Layout";

export default function Layout({ children }: { children: React.ReactNode }) {
    const sidebar_width: number = 240;
    
    return (
        <Box>
            <UI_Layout width = { sidebar_width } />

            <Box
                component='main'
                position='relative'
                left={{ lg: sidebar_width }}
            >
                { children }
            </Box>
        </Box>
    );
}