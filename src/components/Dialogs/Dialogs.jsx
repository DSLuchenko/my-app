import React from "react";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsItems = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesItems = props.state.messages.map(m => <MessageItem message={m.message}/>)

    let onSendMessageClick = () => {
        props.onSendMessageClick();

    }

    let onNewMessageBodyChange = (e) => {
        let body = e.target.value;
        props.onNewMessageBodyChange(body);
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
