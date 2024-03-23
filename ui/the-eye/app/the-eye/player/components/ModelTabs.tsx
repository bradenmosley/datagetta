'use client'

import Box from "@mui/material/Box";
import Link from "@/app/utils/Link";
import { useParams, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function ModelTabs ({team, player}: {team: string, player: string}) {
    const currentURL = '/the-eye/player/';
    
    const params = useParams<{ model: string }>();
    const pathName = usePathname();

    const [statsUnderline, setStatsUnderline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    const [model1Underline, setModel1Underline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    const [model2Underline, setModel2Underline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    const [model3Underline, setModel3Underline] = useState<'none' | 'hover' | 'always' | undefined>('hover');
    
    useEffect(() => {
        if (params.model === 'stats') {
            setStatsUnderline('always');
            setModel1Underline('hover');
            setModel2Underline('hover');
            setModel3Underline('hover');
        } else if (params.model === 'model1') {
            setStatsUnderline('hover');
            setModel1Underline('always');
            setModel2Underline('hover');
            setModel3Underline('hover');
        } else if (params.model === 'model2') {
            setStatsUnderline('hover');
            setModel1Underline('hover');
            setModel2Underline('always');
            setModel3Underline('hover');
        } else if (params.model === 'model3') {
            setStatsUnderline('hover');
            setModel1Underline('hover');
            setModel2Underline('hover');
            setModel3Underline('always');
        } else {
            setStatsUnderline('hover');
            setModel1Underline('hover');
            setModel2Underline('hover');
            setModel3Underline('hover');
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
                href = {currentURL.concat(team + '/' + player).concat('/stats')}
                name = 'Stats'
                fontWeight = {600}
                underline = {statsUnderline}
            />
            <Link 
                href = {currentURL.concat(team + '/' + player).concat('/model1')}
                name = 'Model 1'
                fontWeight = {600}
                underline = {model1Underline}
            />
            <Link 
                href = {currentURL.concat(team + '/' + player).concat('/model2')}
                name = 'Model 2'
                fontWeight = {600}
                underline = {model2Underline}
            />
            <Link 
                href = {currentURL.concat(team + '/' + player).concat('/model3')}
                name = 'Model 3'
                fontWeight = {600}
                underline = {model3Underline}
            />
        </Box>
    )
}