import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://klike.net/uploads/posts/2020-01/1579682553_2.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + descriptiom
            </div>
        </div>
    );
}

export default ProfileInfo;
