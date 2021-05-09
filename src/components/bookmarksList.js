import React, { useContext } from "react";
import { DataContext } from '../App';
import "../styles/App.scss";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';


export default function BookmarksList({ bookmarks }) {

    const { deleteBookmark } = useContext(DataContext);

    return (
        <div className="bmlist">
            <h2>Your Bookmarks:</h2>
            <ul>
                {bookmarks.map((bm, i) => {
                    return (
                        <li key={i}>
                            <span>{bm.title}</span>

                            <a href={bm.url}>
                                <LaunchIcon fontSize="large" />
                            </a>

                            <button className="edit">
                                <EditIcon fontSize="small" />
                            </button>

                            <button onClick={() => { deleteBookmark('_id', bm._id) }} className="delete">
                                <DeleteIcon fontSize="small" />
                            </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}