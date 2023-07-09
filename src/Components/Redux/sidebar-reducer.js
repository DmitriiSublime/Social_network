let initialState = {
    friends: [
        {id: 1, avatar: '', name: 'Dimych'},
        {id: 2, avatar: '', name: 'Ilya'},
        {id: 3, avatar: '', name: 'Rinat'}
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;