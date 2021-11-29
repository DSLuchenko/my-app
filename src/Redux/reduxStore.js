import {combineReducers, createStore} from "redux";
import profileRecuder from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers(
    {
        profilePage:profileRecuder,
        dialogsPage:dialogsReducer,
        usersPage:usersReducer
    }
);

let store = createStore(reducers);

export default store;
