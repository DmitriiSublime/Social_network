import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";


const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return ( <Posts
        updateNewPostText={onPostChange}
        addPost={addPost}
        post={state.profilePages.posts}
        newPostText={state.profilePages.newPostText} /> )
}

export default PostsContainer;