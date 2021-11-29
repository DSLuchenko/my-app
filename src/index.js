import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

import App from "./App";
import store from "./Redux/reduxStore";
import {Provider} from "./StoreContext";

export let rerenderEntireTree = () => {
    ReactDOM.render(
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>,
        document.getElementById('root')
    )
};

rerenderEntireTree();

store.subscribe(rerenderEntireTree);







