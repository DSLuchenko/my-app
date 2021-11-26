import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 1},
            {id: 2, message: 'Its my first post', likesCount: 15}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dima'},
            {id: '2', name: 'Petya'},
            {id: '3', name: 'Valera'},
            {id: '4', name: 'Sasha'},
            {id: '5', name: 'Max'}
        ],
        messages: [
            {message: 'Hi'},
            {message: 'How are you'},
            {message: 'Next message'}
        ]
    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    }

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export default state;

