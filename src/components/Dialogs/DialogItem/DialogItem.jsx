import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;
