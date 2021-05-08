import React from "react";
import "../styles/App.scss";
// import { DeleteIcon, EditIcon } from '@material-ui/icons';
// import { Button, ButtonGroup } from '@material-ui/core';

export default function BookmarksList({ data }) {

    return (
        <div className="bmlist">
            <h2>Your Bookmarks:</h2>
            <div className="bookmarks">
                {data.map((bm, i) => {
                    return <a href={bm.url} key={i} className="btn">{bm.title}</a>
                })}
            </div>
        </div>
    )
}