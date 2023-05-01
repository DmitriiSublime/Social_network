import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div>
            <textarea></textarea>
            <button>Add post</button>
            <button>Delete</button>
            <Post message='Hi how are you?' likesCount='23' />
            <Post message="I'm fine" likesCount='0'/>
        </div>
    )
}

export default Posts;