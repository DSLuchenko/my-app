import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return (
                    <MyPosts posts={state.profilePage.posts}
                             newPostText={state.profilePage.newPostText}
                             addPost={addPost}
                             onPostChange={onPostChange}/>
                )
            }
        }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;