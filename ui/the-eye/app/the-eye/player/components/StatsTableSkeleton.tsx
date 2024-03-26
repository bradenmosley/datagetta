import Skeleton from '@mui/material/Skeleton';

export default function StatsTableSkeleton() {
    return (
        <>
            <Skeleton variant = 'text' sx={{fontSize: '2.125rem'}} width = '200px' animation = 'wave' />
            <Skeleton variant = 'rounded' width = '100%' height = '110px' animation = 'wave' />
        </>
    )
}