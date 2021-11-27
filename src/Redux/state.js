const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 1},
                {id: 2, message: 'Its my first post', likesCount: 15}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        }
    },
    _callSubscriber() {
        console.log("state changed");
    },
    _addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    _updateNewMessageBody(newText) {
        this._state.dialogsPage.newMessageBody = newText;
        this._callSubscriber(this._state);
    },
    _sendMessage() {
        debugger;
        let message = {
            id: 4,
            message: this._state.dialogsPage.newMessageBody
        }
        this._state.dialogsPage.messages.push(message);
        this._state.dialogsPage.newMessageBody = '';
        this._callSubscriber(this._state);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost();
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._updateNewMessageBody(action.newText)
        } else if (action.type === SEND_MESSAGE) {
            this._sendMessage();
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
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

export default store;

window.store = store;

