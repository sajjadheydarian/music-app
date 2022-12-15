import {AppBar, IconButton, InputBase, Toolbar, Typography} from "@material-ui/core";
import {Menu as MenuIcon , Search as SearchIcon} from "@material-ui/icons";
import {useStyles} from "./Style";
import clsx from "clsx";
import QueueMusicIcon from '@material-ui/icons/QueueMusic';


const Header = ({open,handleDrawerOpen}) => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}>
                <Toolbar>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="open drawer"
                        aria-controls="simple-menu" aria-haspopup="true"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <QueueMusicIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        سایت موسیقی
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="جست وجو ..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;