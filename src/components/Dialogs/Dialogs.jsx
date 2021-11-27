import React from "react";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/state";

const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesItems = props.state.messages.map(m => <MessageItem message={m.message}/>)

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator())
    }

    let onNewMessageBodyChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyActionCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsItems}
            </div>
            <div className={s.messages}>
                {messagesItems}
                <div>
                    <div>
                        <textarea placeholder='Enter your message' onChange={onNewMessageBodyChange} value={props.state.newMessageBody}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
