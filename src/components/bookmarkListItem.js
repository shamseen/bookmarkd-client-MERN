import React, { useContext } from "react";
import { DataContext } from '../App';
import "../styles/App.scss";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';

export default function Bookmark({ bookmark }) {

    const { deleteBookmark } = useContext(DataContext);

    return (
        <li>
            <span>{bookmark.title}</span>
            <a href={bookmark.url}>
                <LaunchIcon fontSize="large" />
            </a>

            <button onClick={() => handleClick()} className="edit">
                <EditIcon fontSize="small" />
            </button>

            <button onClick={deleteBookmark(bookmark._id)} className="delete">
                <DeleteIcon fontSize="small" />
            </button>
        </li>
    )
}