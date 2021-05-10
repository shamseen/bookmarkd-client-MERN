import React, { useState, useEffect } from "react";
import Form from "./components/form";
import BookmarksList from "./components/bookmarksList";
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

    return (
        <DataContext.Provider value={{
            createBookmark,
            deleteBookmark
        }}>
            <div className="App">
                <h1>Book & Mark.</h1>
                <Form />
                <BookmarksList bookmarks={bookmarks} />
            </div>
        </DataContext.Provider>
    );
}