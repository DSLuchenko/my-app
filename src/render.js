import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";
import {addPost} from "./Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <App state={state} addPost={addPost}/>
        </Router>,
        document.getElementById('root')
    )
};