import dayjs from 'dayjs';
import { permanentRedirect } from 'next/navigation';

export default function Page (
    { params }:
    { params: { teamName: string, playerName: string } })
{
    const decodedTeamName = decodeURIComponent(params.teamName);
    
    // Will have to change to the start of the current season
    const startOfSeason = '2024-02-16';
    
    const currentDate = dayjs().format('YYYY-MM-DD');

    const baseURL = '/the-eye/player/'
    
    // A redirect is used to make it easier to route to a player's page
    // then from here the dynamic routes will be filled out to query the database and populate the stats tables
    permanentRedirect(baseURL.concat(decodedTeamName + '/' + params.playerName + '/' + 'stats' + '/' + startOfSeason + '/' + currentDate))

}