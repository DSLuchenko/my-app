import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();
                let onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator())
                }

                let onNewMessageBodyChange = (body) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body));
                }
                return (
                    <Dialogs state={state.dialogsPage}
                             onSendMessageClick={onSendMessageClick}
                             onNewMessageBodyChange={onNewMessageBodyChange}
                    />
                )
            }
        }
        </StoreContext.Consumer>

    );
}

export default DialogsContainer;
