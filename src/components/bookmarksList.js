import React, { useState } from "react";
import BookmarkItem from "./bookmarkItem";



export default function BookmarksList() {
    return (
        <div className="bmlist">
            <h2>Saved:</h2>
            <BookmarkItem />
            <BookmarkItem />
        </div>
    )
}