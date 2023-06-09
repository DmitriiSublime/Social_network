import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={1}>
            <div><img className={s.Posts__img} src='https://kartinkof.club/uploads/posts/2022-04/1649622949_11-kartinkof-club-p-ugarnie-kartinki-dlya-diskorda-dlya-patsan-11.jpg'/></div>
            <div className={2}>
                { props.message }
            </div>
            <span>Like</span> { props.likesCount }
        </div>
    )
}

export default Post;