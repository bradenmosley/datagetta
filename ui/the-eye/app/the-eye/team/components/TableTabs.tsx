'use client'

import Box from "@mui/material/Box";
import Link from "@/app/utils/Link";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function TableTabs ({team}: {team: string}) {
    const currentURL = '/the-eye/team/';
    
    const params = useParams<{ table: string }>();
    const pathName = usePathname();

    const [rosterUnderline, setRosterUnderline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    const [batterUnderline, setBatterUnderline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    const [pitcherUnderline, setPitcherUnderline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    const [catcherUnderline, setCatcherUnderline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    
    useEffect(() => {
        if (params.table === 'roster') {
            setRosterUnderline('always');
            setBatterUnderline('hover');
            setPitcherUnderline('hover');
            setCatcherUnderline('hover');
        } else if (params.table === 'batter') {
            setRosterUnderline('hover');
            setBatterUnderline('always');
            setPitcherUnderline('hover');
            setCatcherUnderline('hover');
        } else if (params.table === 'pitcher') {
            setRosterUnderline('hover');
            setBatterUnderline('hover');
            setPitcherUnderline('always');
            setCatcherUnderline('hover');
        } else if (params.table === 'catcher') {
            setRosterUnderline('hover');
            setBatterUnderline('hover');
            setPitcherUnderline('hover');
            setCatcherUnderline('always');
        } else {
            setRosterUnderline('hover');
            setBatterUnderline('hover');
            setPitcherUnderline('hover');
            setCatcherUnderline('hover');
        }
    }, [params, pathName])
    
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
            <Link 
                href = {currentURL.concat(team).concat('/catcher')}
                name = 'Catching'
                fontWeight = {600}
                underline = {catcherUnderline}
            />
        </Box>
    )
}