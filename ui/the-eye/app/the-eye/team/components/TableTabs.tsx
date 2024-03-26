'use client'

import Box from "@mui/material/Box";
import Link from "@/app/utils/Link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TableTabs ({team}: {team: string}) {
    const currentURL = '/the-eye/team/';
    
    const pathName = usePathname();

    const [rosterUnderline, setRosterUnderline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    const [batterUnderline, setBatterUnderline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    const [pitcherUnderline, setPitcherUnderline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    
    useEffect(() => {
        if (pathName.includes('/roster')) {
            setRosterUnderline('always');
            setBatterUnderline('hover');
            setPitcherUnderline('hover');
        } else if (pathName.includes('/batter')) {
            setRosterUnderline('hover');
            setBatterUnderline('always');
            setPitcherUnderline('hover');
        } else if (pathName.includes('/pitcher')) {
            setRosterUnderline('hover');
            setBatterUnderline('hover');
            setPitcherUnderline('always');
        } else {
            setRosterUnderline('hover');
            setBatterUnderline('hover');
            setPitcherUnderline('hover');
        }
    }, [pathName])
    
    return (
        <Box
            sx={{
                display: 'flex',
                columnGap: 8, rowGap: 2,
                flexWrap: 'wrap',
            }}
        >
            <Link 
                href = {currentURL.concat(team).concat('/roster')}
                name = 'Roster'
                fontWeight = {600}
                underline = {rosterUnderline}
            />
            <Link 
                href = {currentURL.concat(team).concat('/batter')}
                name = 'Batting'
                fontWeight = {600}
                underline = {batterUnderline}
            />
            <Link 
                href = {currentURL.concat(team).concat('/pitcher')}
                name = 'Pitching'
                fontWeight = {600}
                underline = {pitcherUnderline}
            />
        </Box>
    )
}