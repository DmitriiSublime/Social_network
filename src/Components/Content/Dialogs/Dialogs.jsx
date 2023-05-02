import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.dialog_content}>
            <div className={s.dialogs_wrapper}>
                <div className={s.dialog_name}>Dmitrii</div>
                <div className={s.dialog_name}>Ilya</div>
                <div className={s.dialog_name}>Rinat</div>
                <div className={s.dialog_name}>Ramil</div>
                <div className={s.dialog_name}>Ruslan</div>
            </div>
            <div className={s.dialog_text}>
                <div className={s.dialog_message}>Hi</div>
                <div className={s.dialog_message}>What's up</div>
                <div className={`${s.dialog_message} ${s.active}`}>I'm busy today</div>
                <div className={s.dialog_message}>Have a nice day</div>
                <div className={s.dialog_message}>Where are you?</div>
            </div>
        </div>
    )
}

export default Dialogs;