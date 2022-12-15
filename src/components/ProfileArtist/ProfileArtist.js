import React from 'react';
import {Link, useLocation} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import {
    Button,
    Container,
    Paper,
    Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow,
    TextareaAutosize,
    TextField,
    Typography
} from "@material-ui/core";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";
import {posts} from "../layout/Layout";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
}));

const ProfileArtist = () => {
    const classes = useStyles();
    const location = useLocation();
    const post = location.state;
    const rows = posts;
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper className={classNames("bg-info", classes.paper)}><h2>{post.name}</h2></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}><img src={post.image}/></Paper>
                </Grid>
                <Grid item xs={12}>
                    <Container>
                        <Typography>{post.data}</Typography>
                        <Typography>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                            گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
                            فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
                            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                            افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
                            شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
                            پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
                            سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                            مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
                            متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                            آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
                            طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
                            می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و
                            زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی
                            اساسا مورد استفاده قرار گیرد.</Typography>
                    </Container>
                </Grid>
                <Grid item xs={12} style={{textAlign: "center",margin:"1rem"}} className={"bg-dark text-light"}>
                    <h3>موسیقی های این هنرمند</h3>
                </Grid>
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 650}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"right"}>اسم اهنگ ها</TableCell>
                                    <TableCell align="left">جزئیات</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => {
                                    if (row.id_Artist === post.id) {
                                        return (
                                            <TableRow
                                                key={row.title}
                                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            >
                                                <TableCell align={"right"} component="th" scope="row">
                                                    {row.title}
                                                </TableCell>
                                                <TableCell align="left"><Link to={'/posts'} state={row}>
                                                    <Button color={"primary"}>توضیحات و دانلود</Button>
                                                </Link></TableCell>
                                            </TableRow>
                                        )
                                    }
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} style={{textAlign: "center", padding: "1.5rem"}}>
                    <Link to={'/'}><Button variant="outlined" color="primary" type={"button"}>صفحه اصلی</Button></Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default ProfileArtist;