import React from 'react'
import { NavLink } from 'react-router-dom';

const Post = ({ filteredPost, handleDelete }) => {
  return (
    <div>
      <h4>Post Title - {filteredPost.title}</h4>
      <p>Post Id - {filteredPost.id}</p>
      <p>Post Description - {filteredPost.description}</p>
      <button>
        <NavLink to={`/edit-post/${filteredPost.id}`}>Edit</NavLink>
      </button>
      <button onClick={() => handleDelete(filteredPost.id)}>Delete</button>
      <hr></hr>
    </div>
  );
};

export default Post