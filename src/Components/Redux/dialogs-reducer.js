const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            break;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            break;
        default:
            break;
    }
    return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;