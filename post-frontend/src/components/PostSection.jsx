import React from 'react'
import Post from './Post';

const PostSection = ({posts, loading, handleDelete}) => {
  return (
    <div>
      <h3>Home Page</h3>
      <h3>The following are the Posts</h3>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        posts.map((post) => (
          <Post key={post.id} post={post} handleDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default PostSection