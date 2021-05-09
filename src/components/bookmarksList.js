import React from "react";
import Bookmark from "./bookmarkListItem";
import { List } from '@material-ui/core';
import "../styles/App.scss";


export default function BookmarksList({ bookmarks }) {
    return (
        <div className="bmlist">
            <h2>Your Bookmarks:</h2>
            <List className="bookmarks">
                {bookmarks.map((bm, i) => {
                    return <Bookmark key={i} bookmark={bm}></Bookmark>
                })}

            </List>
        </div>
    )
}