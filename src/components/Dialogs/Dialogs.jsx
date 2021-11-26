import React from "react";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesItems = props.state.messages.map(m => <MessageItem message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
            </div>
        </div>
    );
}

export default Dialogs;
