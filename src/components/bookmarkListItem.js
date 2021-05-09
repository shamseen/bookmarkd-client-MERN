import React from "react";
import "../styles/App.scss";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';

export default function Bookmark({ bookmark, handleClick }) {
    return (
        <li>
            <span>{bookmark.title}</span>
            <a href={bookmark.url}>
                <LaunchIcon fontSize="large" />
            </a>

            <button onClick={() => handleClick()} className="edit">
                <EditIcon fontSize="small" />
            </button>

            <button onClick={() => handleClick()} className="delete">
                <DeleteIcon fontSize="small" />
            </button>
        </li>
    )
}