import React from 'react';
// import s from './Profile.module.css';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import posts from "./Posts/Posts";
import post from "./Posts/Post/Post";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.posts}/>
        </div>

    )
}

export default Profile;