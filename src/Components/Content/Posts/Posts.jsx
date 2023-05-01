import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Delete</button>
            <Post />
            <Post />
        </div>
    )
}

export default Posts;