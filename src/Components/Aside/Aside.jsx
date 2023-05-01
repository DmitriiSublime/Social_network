import React from 'react';
import './Aside.css';

const Aside = () => {
    return (
        <div className='aside__content'>
            <ul>
                <li><a className='item' href=''>Profile</a></li>
                <li><a className='item' href=''>Music</a></li>
                <li><a className='item' href=''>My Messages</a></li>
                <li><a className='item' href=''>Communities</a></li>
            </ul>
        </div>
    )
}

export default Aside;