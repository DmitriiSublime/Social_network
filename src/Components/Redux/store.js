import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            ],
            newMessageBody: '',
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

    dispatch(action) {

        this._state.profilePages = profileReducer(this._state.profilePages, action);
        this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
