import React, {useState} from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import * as PropTypes from "prop-types";
import Pagination from '@mui/material/Pagination';
import {Link} from "react-router-dom";
import {posts} from "../layout/Layout";
import MusicPlayer from "../musicPlayer/musicPlayer";

Pagination.propTypes = {
    count: PropTypes.number,
    showFirstButton: PropTypes.bool,
    showLastButton: PropTypes.bool
};
const Home = () => {
    const [page, setPage] = useState(1);
    const lenPage = ((posts.length) / 4).toPrecision(1);
    return (
        <Grid container spacing={2}>
            {
                posts.map((item, index) => {
                    if ((page - 1)*4 <= index && index <= ((page* 4) - 1)) {
                        return (
                            <Grid item xs={6}>
                                <Card elevation={3}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="400px"
                                            image={item.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary "
                                                        style={{height: "100px"}}>
                                                {item.description}
                                            </Typography>
                                            <audio src={item.address} controls style={{width: '100%'}}/>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link to={'/posts'} state={item}><Button size="small" color="inherit"
                                                                                 className={"bg-info text-light "}>
                                            ادامه مطلب و دانلود
                                        </Button></Link>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                })
            }
            <Grid item xs={12} className={"bg-danger text-light"}>
                <Pagination page={page} onChange={event => setPage(event.target.innerText)} count={lenPage}  hideNextButton hidePrevButton  className={'d-flex justify-content-center ltr'} />
            </Grid>
        </Grid>
    );
};

export default Home;