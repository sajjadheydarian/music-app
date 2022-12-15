import React from 'react';
import {Button, Container, Paper, TextareaAutosize, TextField, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

import PropTypes from 'prop-types';
import {styled} from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import classNames from "classnames";
import MusicPlayer from "../musicPlayer/musicPlayer";
import {Link, useLocation} from "react-router-dom";
import ReactAudioPlayer from 'react-audio-player';

const StyledRating = styled(Rating)(({theme}) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error"/>,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error"/>,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning"/>,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success"/>,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success"/>,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const {value, ...other} = props;
    return <span {...other} >{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const FullPage = () => {
    const classes = useStyles();
    const location = useLocation();
    const post =location.state;
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classNames("bg-info", classes.paper)}><h3>{post.title}</h3><h6>{post.author}</h6></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><img src={post.image}/></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Container>
                        <Typography>{post.description}</Typography>
                        <Typography>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12}>
                    <Grid item style={{display: 'flex', justifyContent: 'center'}}>
                        <MusicPlayer post={post}/>
                        {/*<ReactAudioPlayer  src={post.address} autoPlay controls/>*/}
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Link to={post.address}><Paper className={classNames("bg-secondary ", classes.paper)}>دانلود با کیفیت 128</Paper></Link>
                </Grid>
                <Grid item xs={6}>
                <Link to={post.address}><Paper className={classNames("bg-info ", classes.paper)}>دانلود با کیفیت 320</Paper></Link>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper} elevation={3}>
                        <StyledRating
                            name="highlight-selected-only"
                            className={"ltr"}
                            defaultValue={post.star}
                            IconContainerComponent={IconContainer}
                            getLabelText={(value) => customIcons[value].label}
                            highlightSelectedOnly/>
                    </Paper>
                </Grid>
                <Grid item xs={12} style={{textAlign: "center", padding: "1.5rem"}}>
                    <Link to={'/'}><Button variant="outlined" color="primary" type={"button"} >صفحه اصلی</Button></Link>
                </Grid>
                <Grid item xs={12} style={{textAlign: "center", padding: "1.5rem"}} spacing={3}>
                    <Paper className={classNames("", classes.paper)} elevation={3}>
                        <Grid item xs={12} className={"bg-dark text-light "}>
                            <h4>ثبت نظرات:</h4>
                        </Grid>
                        <Grid item spacing={4}>
                            <TextField
                                id="outlined-password-input"
                                label="اسم"
                                type="name"
                                variant="outlined"
                                className={"m-3"}
                            />

                            <TextField
                                id="outlined-email-input"
                                label="ایمیل"
                                type="email"
                                variant="outlined"
                                className={"m-3"}
                            />

                        </Grid>
                        <Grid item xs={12}>
                            <TextareaAutosize className={"w-100 my-2"} style={{height: "20vh"}}
                                              placeholder={"نظر خود را وارد کنید..."}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" color="primary" type={"submit"}>ثبت</Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default FullPage;