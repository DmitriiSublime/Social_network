import React from 'react';
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts posts={props.profilePages.posts}
                   newPostText={props.profilePages.newPostText}
                   updateNewPostText={props.updateNewPostText}
                   addPost={props.addPost}
            />
        </div>
    )
}
export default Profile;