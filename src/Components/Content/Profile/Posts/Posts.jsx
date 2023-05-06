import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
                <div className={s.posts_message}>
                    <Post message='Hi how are you?' likesCount='23'/>
                    <Post message="I'm fine" likesCount='0'/>
                </div>
            </div>
        </div>
    )
}

export default Posts;