import React from 'react';
import {Avatar, ListItem, ListItemAvatar, ListItemText, styled, Typography} from "@material-ui/core";
import List from "@material-ui/core/List";
import PersonIcon from '@material-ui/icons/Person';
import {Link} from "react-router-dom";


const Demo = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
}));
const Sidebar = ({posts}) => {
    return (
        <>
            <Typography sx={{mt: 4, mb: 2}} variant="h5" component="div" className={"mx-3"}>
                جدید ترین آهنگ ها:
            </Typography>
            <Demo>
                <List dense={true}>
                    {posts.map((item)=> {
                        return(
                            <Link to={"/posts"} state={item} className={"text-decoration-none"}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PersonIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.title}
                                        secondary={item.author}
                                    />
                                </ListItem></Link>
                        )}
                    )}
                </List>
            </Demo>
        </>
    );
};

export default Sidebar;