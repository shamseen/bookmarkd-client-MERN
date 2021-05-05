import React, { useState } from "react";

export default ({ handleSubmit }) => {
    const [bm, updatebm] = useState("");

    const handleChange = (e) => {
        updatebm(e.target.value);
    };

    const handleForm = (e) => {
        e.preventDefault();
        handleSubmit(bm);
        updatebm("");
    };
    return (
        <form onSubmit={handleForm}>
            <label htmlFor="bm">New Bookmark</label>
            <input type="text" placeholder="Title" value={bm.title} onChange={handleChange} id="bmTitle" />
            <input type="text" placeholder="URLk" value={bm.url} onChange={handleChange} id="bmUrl" />
        </form>
    );
};