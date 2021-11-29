import React from "react";
import s from './Dialogs.module.css';
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsItems = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} name={d.name} key={d.id}/>)
    let messagesItems = props.dialogsPage.messages.map(m => <MessageItem message={m.message} key={m.id}/>)

    let onSendMessageClick = () => {
        props.sendMessage();

    }

    let onNewMessageBodyChange = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body);
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
                        <textarea placeholder='Enter your message' onChange={onNewMessageBodyChange} value={props.dialogsPage.newMessageBody}/>
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
