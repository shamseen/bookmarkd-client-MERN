// import { useState } from "react";
import React from "react";
import Form from "./components/form";
import BookmarksList from "./components/bookmarksList";
import "./styles/App.scss";

export default function App() {
    console.log("app.js");

    const handleSubmit = (bm) => {
        // POST / PUT
    }
    return (
        <div className="App">
            <h1>Book & Mark.</h1>
            <Form handleSubmit={handleSubmit} />
            <BookmarksList />
        </div>
    );
}