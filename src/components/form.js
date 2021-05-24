import React, { useContext, useState } from "react";
import { DataContext } from '../App';
import "../styles/form.scss";

export default ({ updateBookmarks, bookmark = { title: '', url: '' } }) => {
    const { refreshBookmarks } = useContext(DataContext);
    const [title, setTitle] = useState(bookmark.title);
    const [url, setUrl] = useState(bookmark.url);

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
        updateBookmarks(title, url);
        refreshBookmarks();
        setTitle('');
        setUrl('');
    };

    return (
        <div>
            <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} id="bmTitle" />
            <input type="url" placeholder="URL" value={url} onChange={handleUrlChange} id="bmUrl" />
            <button className="submit" onClick={handleSubmit}>
                {bookmark.title === '' ? 'Submit' : 'Save'}
            </button>
        </div>

    );
};