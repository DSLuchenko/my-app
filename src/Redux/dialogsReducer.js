const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Petya'},
        {id: 3, name: 'Valera'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Max'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Next message'}
    ],
    newMessageBody: ''
};

export const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.newText;
            return state;
        };
        case SEND_MESSAGE: {
            let message = {
                id: 5,
                message: state.newMessageBody
            }
            state.messages.push(message);
            state.newMessageBody = '';
            return state;
        } ;
        default: {
            return state;
        };
    };
};



export const updateNewMessageBodyActionCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: body
    }
};
export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export default dialogsReducer;