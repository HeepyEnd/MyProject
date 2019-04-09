import React from 'react';
import c from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from  "../../../Redux/state";

const MyPosts = (props) => {
    let postsElements = 
    props.posts.map( p => <Post message={p.message} likesCount={p.likesCount} />);
     
    let newPostElement = React.createRef();

    let addPost = () => {
     props.dispatch (addPostActionCreator());
    }

    let onPostChange = () => {
     let text = newPostElement.current.value;
     let action = updateNewPostTextActionCreator(text);
     props.dispatch(action);
    }

    return (
      <div className={c.postsBlock}>
           <h3>Мои посты</h3>
      <div >
        <div>
        <div>
        <textarea  on onChange = {onPostChange} ref={newPostElement} value={props.newPostText} />
        </div>
        <div><button onClick = { addPost}> Новый пост</button>
        </div>  
        </div>
        </div>
        <div className={c.posts}>
            { postsElements }
      </div>
      </div>
    );
}

export default MyPosts;
