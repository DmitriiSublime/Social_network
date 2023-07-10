import React from 'react';
import s from './Posts.module.css';
import Post from "./Post/Post";


const Posts = (props) => {
    let postsElements = props.posts.map( p => <Post message={p.message} id={p.id} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.posts_block}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
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