import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItemText from "@material-ui/core/ListItemText";
import {useStyles} from "./Style";
import {Drawer} from "@material-ui/core";
import AlbumIcon from '@material-ui/icons/Album';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
const DrawerRight = ({open,handleDrawerClose}) => {
    const classes=useStyles();
    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                         <ChevronRightIcon/>
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {['موسیقی شاد', 'موسیقی سنتی', 'موسیقی محلی', 'رپ فارسی', 'موسیقی بی کلام'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text} style={{textAlign:'right'}} />
                            <ListItemIcon style={{minWidth:"unset"}}>{index % 2 === 0 ? <MusicNoteIcon /> : <MusicNoteRoundedIcon />}</ListItemIcon>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['آلبوم ها', 'درباره ما', 'کنسرت ها', 'تماس با ما'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}  style={{textAlign:'right'}}/>
                            <ListItemIcon style={{minWidth:"unset"}}>{index % 2 === 0 ? <AlbumIcon /> : <MailIcon />}</ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </Drawer>

        </>
    );
};

export default DrawerRight;