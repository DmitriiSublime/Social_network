import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Delete</button>
            <Post message='Hi how are you?' />
            <Post message="I'm fine" />
        </div>
    )
}

export default Posts;