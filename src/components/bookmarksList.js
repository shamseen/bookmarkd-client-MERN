import React from "react";
import Bookmark from "./bookmarkListItem";

import "../styles/App.scss";


export default function BookmarksList({ bookmarks }) {

    const handleClick = () => {

    }

    return (
        <div className="bmlist">
            <h2>Your Bookmarks:</h2>
            <ul>
                {bookmarks.map((bm, i) => {
                    return <Bookmark key={i} bookmark={bm} handleClick={handleClick} />
                })}
            </ul>
        </div>
    )
}