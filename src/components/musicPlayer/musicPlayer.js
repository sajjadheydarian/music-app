import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

export default function MusicPlayer({post}) {

    return (
        <Card sx={{display: 'flex', direction: 'ltr'}} elevation={5}>
            <Box sx={{display: 'flex', flexDirection: 'column', background: '#FDF5CA'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {post.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {post.author}
                    </Typography>
                </CardContent>
                <Box sx={{display: 'flex', alignItems: 'center', pl: 1, pb: 1, direction: 'ltr'}}>

                    <audio id={"aud"} src={post.address} controls style={{background: '#FDF5CA'}}></audio>

                    {/*<IconButton aria-label="previous">*/}
                    {/*    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}*/}
                    {/*</IconButton>*/}
                    {/*<IconButton aria-label="play/pause">*/}
                    {/*    <PlayArrowIcon sx={{ height: 38, width: 38 }} />*/}
                    {/*</IconButton>*/}
                    {/*<IconButton aria-label="next">*/}
                    {/*    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}*/}
                    {/*</IconButton>*/}
                </Box>
            </Box>
            <CardMedia
                component="img"
                sx={{width: 151}}
                image={post.image}
                alt="Live from space album cover"
            />
        </Card>
    );
}