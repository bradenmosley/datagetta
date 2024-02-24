import Tabs from './Tabs'
import Box from "@mui/material/Box";
import Image from 'next/image';
import logo from './assets/TheEyeLogo.svg'

export default function TabGroup() {
    return (
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
    );
}

