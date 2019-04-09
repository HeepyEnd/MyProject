import React from 'react';
import c from './Post.module.css';

const Post = (props) => {
    return (
        <div className={c.item}>
         <img src= 'https://data.1freewallpapers.com/download/funny-anime-boy.jpg' alt='Ava post'/> 
         {props.message }
         <div> 
            <span>Good morning</span>
            <div>
            <span>like</span> {props.likesCount }
            </div>
        </div>
        </div> 
    )

}

export default Post;
