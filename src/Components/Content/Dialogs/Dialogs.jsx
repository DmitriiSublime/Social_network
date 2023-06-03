import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogsItem name={d.name} id={d.id} /> );
    let messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id} /> );

    let newMessage = React.createRef();

    let addMessage = () => {
        let textMessage = newMessage.current.value;
        alert(textMessage);
    }

    return (
        <div className={s.dialog_content}>
            <div className={s.dialogs_wrapper}>
                { dialogsElements }
            </div>

            <div className={s.dialog_text}>
                { messagesElements }
            </div>
            <div>
                <textarea ref={ newMessage }></textarea>
            </div>
            <div>
                <button onClick={ addMessage }>Send</button>
                <button onClick={ addMessage }>Delete</button>
            </div>
        </div>
    )
}

export default Dialogs;
