import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className='aside__content'>
            <ul>
                <li><NavLink className = { navData => navData.isActive ? s.active : s.item } to='/Profile'>Profile</NavLink></li>
                <li><NavLink className={ navData => navData.isActive ? s.active : s.item } to='/Dialogs'>Messages</NavLink></li>
                <li><NavLink className={ navData => navData.isActive ? s.active : s.item } to='/Music'>Music</NavLink></li>
                <li><NavLink className={ navData => navData.isActive ? s.active : s.item } to='/Communities'>Communities</NavLink></li>

                <div>
                    <h3><NavLink className={ navData => navData.isActive ? s.active : s.item }>Friends</NavLink></h3>
                </div>

            </ul>
        </div>
    )
}

export default Navbar;