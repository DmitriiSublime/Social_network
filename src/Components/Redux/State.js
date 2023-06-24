let store = {
    _state: {
        profilePages: {
            posts: [
                {id: 1, message: 'Hi how are you?', likesCount: 23},
                {id: 2, message: "I'm fine", likesCount: 0}
            ],
            newPostText: "redux-test",
        },

        dialogsPages: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Ilya'},
                {id: 3, name: 'Rinat'},
                {id: 4, name: 'Ramil'},
                {id: 5, name: 'Ruslan'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: "What's up"},
                {id: 3, message: "I'm busy today"},
                {id: 4, message: 'Have a nice day'},
                {id: 5, message: 'Where are you?'}
            ]
        },
        sidebar: {
            friends: [
                {id: 1, avatar: '', name: 'Dimych'},
                {id: 2, avatar: '', name: 'Ilya'},
                {id: 3, avatar: '', name: 'Rinat'}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 6,
            message: this._state.profilePages.newPostText,
            likesCount: 0
        };
        this._state.profilePages.posts.push(newPost);
        this._state.profilePages.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePages.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePages.newPostText,
                likesCount: 0
            };
            this._state.profilePages.posts.push(newPost);
            this._state.profilePages.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePages.newPostText = newText;
            this._callSubscriber(this._state);
        }
    }
}

export default store;
window.store = store;
