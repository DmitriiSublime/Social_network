import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog_name + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog_message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Ilya'},
        {id: 3, name: 'Rinat'},
        {id: 4, name: 'Ramil'},
        {id: 5, name: 'Ruslan'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: "What's up"},
        {id: 3, message: "I'm busy today"},
        {id: 4, message: 'Have a nice day'},
        {id: 5, message: 'Where are you?'}
    ]


    return (
        <div className={s.dialog_content}>
            <div className={s.dialogs_wrapper}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Ilya' id='2'/>
                <DialogItem name='Rinat' id='3'/>
                <DialogItem name='Ramil' id='4'/>
                <DialogItem name='Ruslan' id='5'/>
            </div>

            <div className={s.dialog_text}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message='Hi'/>
                <Message message="What's up"/>
                <Message message="I'm busy today"/>
                <Message message='Where are you?'/>
                <Message message='Have a nice day'/>
            </div>
        </div>
    )
}

export default Dialogs;
