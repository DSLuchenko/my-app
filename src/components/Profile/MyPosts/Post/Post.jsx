import React from "react";
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="data:image/jpeg;base64,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" alt="avatar" />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>

        </div>
    );
}

export default Post;