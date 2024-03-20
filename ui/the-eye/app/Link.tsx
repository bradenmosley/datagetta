import NextLink from 'next/link';
import MUI_Link from '@mui/material/Link';

export default function Link({href, name, fontWeight = 400}: {href: string, name: string, fontWeight: number}) {
    return (
        <NextLink href = {href} passHref legacyBehavior>
            <MUI_Link
                color = 'inherit'
                fontWeight = {fontWeight}
            >
                {name}
            </MUI_Link>
        </NextLink>
    )
}