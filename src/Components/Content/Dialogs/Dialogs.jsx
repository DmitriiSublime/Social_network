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
    return (
        <div className={s.dialog_content}>
            <div className={s.dialogs_wrapper}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Ilya' id='2'/>
                <DialogItem name='Rinat' id='3'/>
                <DialogItem name='Ramil' id='4'/>
                <DialogItem name='Ruslan' id='5'/>
            </div>

            <div className={s.dialog_text}>
                <Message message='Hi'/>
                <Message message="What's up"/>
                <Message message="I'm busy today"/>
                <Message message='Have a nice day'/>
                <Message message='Where are you?'/>
            </div>
        </div>
    )
}

export default Dialogs;
