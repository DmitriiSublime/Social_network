import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Rinat'},
        {id: 4, name: 'Ramil'},
        {id: 5, name: 'Ruslan'}
    ]

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: "What's up"},
        {id: 3, message: "I'm busy today"},
        {id: 4, message: 'Have a nice day'},
        {id: 5, message: 'Where are you?'}
    ]

    let dialogsElements = dialogs.map( d => <DialogsItem name={d.name} id={d.id} /> );
    let messagesElements = messages.map ( m => <Message message={m.message} id={m.id} /> );

    return (
        <div className={s.dialog_content}>
            <div className={s.dialogs_wrapper}>
                { dialogsElements }
            </div>

            <div className={s.dialog_text}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;
