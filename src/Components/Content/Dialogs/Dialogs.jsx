import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPages;

    let dialogsElements = state.dialogs.map( d => <DialogsItem name={d.name} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id} /> );
    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={s.dialog_content}>
            <div className={s.dialogs_wrapper}>
                { dialogsElements }
            </div>

            <div className={s.dialog_text}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                    <div><button onClick={ () => {onSendMessageClick()}}>Send</button></div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
