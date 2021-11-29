import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
/*
* connect перерисовывает только если изменяется объект
* (т.е. у объекта другая ссылка, а не свойства в объекте)
* в функции mapStateToProps указываем объект стейта от которого зависит перерисовка
* */

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
