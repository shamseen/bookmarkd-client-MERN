import React, { useState, useEffect } from "react";
import Form from "./components/form";
import BookmarkListItem from "./components/bookmarkListItem";
import { createBookmark, deleteBookmark, getBookmarks } from './dataLayer.js';
import "./styles/App.scss";

export const DataContext = React.createContext();

export default function App() {
    const [bookmarks, setBMs] = useState([]);

    useEffect(async () => {
        try {
            const json = await getBookmarks();
            setBMs(json);

        } catch (err) {
            console.log(err);
        }
    }, [])

    const updateBookmark = (title, url) => {
        console.log('updated: ');
        console.log(title, url);
    }

    return (
        <DataContext.Provider value={{
            createBookmark,
            deleteBookmark,
            updateBookmark
        }}>
            <div className="App">
                <h1>Book & Mark.</h1>
                {/* Add new */}
                <label htmlFor="bm">Add a bookmark:</label>
                <Form updateBookmarks={createBookmark} />
                {/* List */}
                <div className="bmlist">
                    <h2>Your Bookmarks:</h2>
                    <ul>
                        {bookmarks.map((bm, i) => {
                            return <BookmarkListItem bm={bm} key={i} />
                        })}
                    </ul>
                </div>
            </div>
        </DataContext.Provider>
    );
}