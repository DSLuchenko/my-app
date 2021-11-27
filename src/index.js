import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";
import store from "./Redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Router>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
            />
        </Router>,
        document.getElementById('root')
    )
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);







