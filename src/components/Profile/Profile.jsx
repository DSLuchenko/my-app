import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2020-01/1579682553_2.jpg"></img>
                <div>ava + descriptiom</div>
            </div>
            <MyPosts/>
        </div>);
}

export default Profile;
