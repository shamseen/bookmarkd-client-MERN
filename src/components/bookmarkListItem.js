import React, { useState, useContext } from "react";
import { DataContext } from '../App';
import Form from "./form";
import "../styles/App.scss";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';

export default function Bookmark({ bm }) {

    const { saveBookmark, deleteBookmark, refreshBookmarks } = useContext(DataContext);

    const [isEditing, setEdit] = useState(false);

    const deleteBM = () => {
        deleteBookmark('_id', bm._id);
        refreshBookmarks();
    }

    const editBM = () => {
        setEdit(!isEditing); // toggling form visibility
    }
    const saveEdit = (title, url) => {
        setEdit(false);                     // hiding form
        saveBookmark(bm._id, title, url);   // updating db
        refreshBookmarks();
    }

    return (
        <li>
            <div className="bm">
                <span>{bm.title}</span>
                <a href={bm.url} target="_blank">
                    <LaunchIcon fontSize="large" />
                </a>
                <button onClick={editBM} className="edit">
                    <EditIcon fontSize="small" />
                </button>
                <button onClick={deleteBM} className="delete">
                    <DeleteIcon fontSize="small" />
                </button>
            </div>

            {isEditing ? <Form updateBookmarks={saveEdit} bookmark={bm} /> : null}
        </li>
    )
}