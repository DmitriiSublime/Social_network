import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={s.dialog_message}>{props.message}</div>
    )
}

export default Message;
