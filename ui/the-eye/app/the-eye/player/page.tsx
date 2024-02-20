import * as React from 'react';
import Box from "@mui/material/Box";
import PlayerInfo from './components/PlayerInfo';
import ModelsBox from './components/ModelsBox';
import { prisma } from '@/app/db';

import Link from 'next/link'
 
export default function Page() {
  return <Link href="/the-eye/player/139a94fc-5fd9-4835-ae7e-37123b9b2d8f">Player</Link>
}