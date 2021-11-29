import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postItems = props.posts.map(p => {
        return <Post message={p.message} likesCount={p.likesCount} key={p.id}/>
    });

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        debugger;
        let text = e.target.value;
        props.onPostChange(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
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