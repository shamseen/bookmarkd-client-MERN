import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        {/* <div style={{ color: "black" }}>wassup</div> */}
        <App />
    </React.StrictMode >,
    rootElement
);