const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 1},
        {id: 2, message: 'Its my first post', likesCount: 15}
    ],
    newPostText: ''
};

const profileRecuder = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts:[...state.posts,{id: 5, message: state.newPostText, likesCount: 0}],
                newPostText:''
            };
        };
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText};
        };
        default: {
            return state;
        } ;
    }
    ;
};

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

export default profileRecuder;