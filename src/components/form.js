import React, { useState, useContext } from "react";
import { DataContext } from '../App';
import "../styles/App.scss";

export default () => {
    const { createBookmark } = useContext(DataContext);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    // dynamically changing state with user input
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    // updating data after submit
    const handleSubmit = () => {
        if (title == '' || url == '') return;

        createBookmark(title, url);
        setTitle('');
        setUrl('');
    };

    return (
        <div>
            <label htmlFor="bm">Add a bookmark:</label>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} id="bmTitle" />
            <input type="text" placeholder="URL" value={url} onChange={handleUrlChange} id="bmUrl" />
            <button className="submit" onClick={handleSubmit}>Submit</button>
        </div>

    );
};