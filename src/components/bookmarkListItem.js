import React, { useState, useContext } from "react";
import { DataContext } from '../App';
import Form from "./form";
import { Delete, Edit, Launch } from '@material-ui/icons';
import "../styles/bookmarkListItem.scss";


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
                <div id="btns">
                    <a href={bm.url} target="_blank">
                        <Launch fontSize="large" />
                    </a>
                    <button onClick={editBM} className="edit">
                        <Edit fontSize="small" />
                    </button>
                    <button onClick={deleteBM} className="delete">
                        <Delete fontSize="small" />
                    </button>
                </div>
            </div>

            {isEditing ? <Form updateBookmarks={saveEdit} bookmark={bm} /> : null}
        </li>
    )
}