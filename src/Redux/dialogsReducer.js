const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state, action) => {
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