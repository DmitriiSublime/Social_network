import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";

const Posts = (props) => {

    let postsElements = props.posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
                <div>
                    <button>Delete</button>
                </div>
                <div className={s.posts_message}>
                    { postsElements }
                </div>
            </div>
        </div>
    )
}

export default Posts;