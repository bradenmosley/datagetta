import Box from "@mui/material/Box";
import ModelsBox from '../../../components/ModelsBox';
import { prisma } from '@/app/utils/db';

export default async function PlayerPage(
    { params }:
    { params: { teamName: string, playerName: string, model: string } }
) {
    return (
        <ModelsBox />
    );
}