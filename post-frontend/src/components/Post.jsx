import React from 'react'
import { NavLink } from 'react-router-dom';

const Post = ({post, handleDelete}) => {
  return (
    <div>
      <h4>Post Title - {post.title}</h4>
      <p>Post Id - {post.id}</p>
      <p>Post Description - {post.description}</p>
      <button>
        <NavLink to={`/edit-post/${post.id}`}>Edit</NavLink>
      </button>
      <button onClick={() => handleDelete(post.id)}>Delete</button>
      <hr></hr>
    </div>
  );
}

export default Post