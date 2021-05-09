import React from "react";
import "../styles/App.scss";
// import { Button, IconButton, ButtonGroup, ListItem, ListItemText } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';
import { ListItem, ListItemText } from '@material-ui/core';

export default function Bookmark({ bookmark }) {
    return (
        <ListItem>
            {/* <ListItemText primary={bookmark.title} /> */}

            <a href={bookmark.url}>
                {bookmark.title}
                <LaunchIcon fontSize="small" />
            </a>
            {/* <DeleteIcon color="secondary" />
            <IconButton>
                <EditIcon color="secondary" />
            </IconButton>
            <Button variant="outlined" color="secondary">
                <DeleteIcon color="secondary" />
            </Button> */}
        </ListItem>
    )
}