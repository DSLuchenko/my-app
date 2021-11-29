import {combineReducers, createStore} from "redux";
import profileRecuder from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers(
    {
        profilePage:profileRecuder,
        dialogsPage:dialogsReducer
    }
);

let store = createStore(reducers);

export default store;
