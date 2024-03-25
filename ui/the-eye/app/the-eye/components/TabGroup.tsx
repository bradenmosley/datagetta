import Tabs from './Tabs'
import Box from "@mui/material/Box";
import Image from 'next/image';
import logo from './assets/TheEyeLogo.svg';
import NextLink from 'next/link';

export default function TabGroup() {
    return (
        <Box sx={{textAlign: 'center'}}>
            <NextLink href='/the-eye'>
                <Image 
                    src = {logo}
                    width = { 134 }
                    height = { 200 }
                    alt = 'logo of a tiger eye'
                    priority = { true }
                />
            </NextLink>
            <Box sx={{paddingBottom: 2}}></Box>
            <Tabs />
        </Box>
    );
}

