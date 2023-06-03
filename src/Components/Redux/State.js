let state = {
    profilePages : {
        posts : [
            {id: 1, message: 'Hi how are you?', likesCount: 23},
            {id: 2, message: "I'm fine", likesCount: 0}
        ]
    },
    dialogsPages : {
        dialogs : [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Ilya'},
            {id: 3, name: 'Rinat'},
            {id: 4, name: 'Ramil'},
            {id: 5, name: 'Ruslan'}
        ],
        messages : [
            {id: 1, message: 'Hi'},
            {id: 2, message: "What's up"},
            {id: 3, message: "I'm busy today"},
            {id: 4, message: 'Have a nice day'},
            {id: 5, message: 'Where are you?'}
        ]
    },
    sidebar : {
        friends : [
            {id: 1, avatar: '', name: 'Dimych'},
            {id: 2, avatar: '', name: 'Ilya'},
            {id: 3, avatar: '', name: 'Rinat'}
        ]
    }
}
export default state;

