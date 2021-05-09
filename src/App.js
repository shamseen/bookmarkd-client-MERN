import React, { useState, useEffect } from "react";
import Form from "./components/form";
import BookmarksList from "./components/bookmarksList";
import { getBookmarks, deleteBookmark } from './dataLayer.js';
import "./styles/App.scss";

export const DataContext = React.createContext();

export default function App() {
    const [bookmarks, setBMs] = useState([]);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    useEffect(async () => {
        try {
            const json = await getBookmarks();
            setBMs(json);

        } catch (err) {
            console.log(err);
        }
    }, [])

    const handleSubmit = (bm) => {
        // CREATE
    }
    return (
        <DataContext.Provider value={{
            deleteBookmark
        }}>
            <div className="App">
                <h1>Book & Mark.</h1>
                <Form handleSubmit={handleSubmit} />
                <BookmarksList bookmarks={bookmarks} />
            </div>
        </DataContext.Provider>
    );
}