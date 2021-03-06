import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

const MyPosts = (props) => {

    let postItems = props.posts.map(p => {
        return <Post message={p.message} likesCount={p.likesCount}/>
    });

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postItems}
            </div>
        </div>
    );
}

export default MyPosts;