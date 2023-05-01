import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header__content}>
            <div className={s.header__content_wrapper}>
                <a href="" ><img className={s.header__img_icon} src="https://cdn4.iconfinder.com/data/icons/is_beta_accounting/png/400/basket.png" /></a>
                <ul className={s.header__nav}>
                    <li className={s.header__nav_text}><a className={`${s.header__nav_link} ${s.active}`} href={1}>Home</a></li>
                    <li className={s.header__nav_text}><a className={s.header__nav_link} href={2}>News</a></li>
                    <li className={s.header__nav_text}><a className={s.header__nav_link} href={3}>Messages</a></li>
                    <li className={s.header__nav_text}><a className={s.header__nav_link} href={4}>Settings</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;