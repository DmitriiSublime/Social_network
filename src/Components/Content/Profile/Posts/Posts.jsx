import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = () => {

    let posts = [
        {id: 1, message: 'Hi how are you?', likesCount: 23},
        {id: 2, message: "I'm fine", likesCount: 0}
    ]

    let postsElements = posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

    // let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );


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
                    { postsElements }
                    {/*<Post message={postData[0].message} id={postData[0].id} likesCount={postData[0].likesCount} />*/}
                    {/*<Post message={postData[1].message} id={postData[0].id} likesCount={postData[1].likesCount} />*/}
                </div>
            </div>
        </div>
    )
}

export default Posts;