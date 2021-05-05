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
            <label htmlFor="bm">Add a bookmark:</label>
            <input type="text" placeholder="Title" value={bm.title} onChange={handleChange} id="bmTitle" />
            <input type="text" placeholder="URL" value={bm.url} onChange={handleChange} id="bmUrl" />
        </form>
    );
};