import React, { useState, useEffect } from "react";
import Form from "./components/form";
import BookmarkListItem from "./components/bookmarkListItem";
import { createBookmark, deleteBookmark, getBookmarks, updateBookmark } from './dataLayer.js';
import "./styles/App.scss";

export const DataContext = React.createContext();

export default function App() {
    const [bookmarks, setBMs] = useState([]);

    const refreshBookmarks = async () => {
        try {
            const json = await getBookmarks();
            setBMs(json);

        } catch (err) {
            console.log(err);
        }
    }

    const saveBookmark = async (id, title, url) => {
        try {
            const json = await updateBookmark(id, title, url);
        } catch (err) {
            console.log(err);
        } finally {
            await refreshBookmarks();
        }
    }

    useEffect(async () => {
        await refreshBookmarks();
    }, [])

    return (
        <DataContext.Provider value={{
            createBookmark,
            deleteBookmark,
            refreshBookmarks,
            saveBookmark
        }}>
            <div id="App">
                {/* Add new bookmark */}
                <div id="add-new" className="card">
                    <h1>Book & Mark.</h1>
                    <label htmlFor="bm">Add a bookmark:</label>
                    <Form updateBookmarks={createBookmark} />
                </div>
                {/* List */}
                <div id="bmlist" className="card">
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