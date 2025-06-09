import React from 'react'
import Post from './Post';
import SearchPost from '../pages/SearchPost';

const PostSection = ({
  filteredPosts,
  setFilteredPosts,
  loading,
  handleDelete,
}) => {
  return (
    <div>
      <h3>Home Page</h3>
      <SearchPost setFilteredPosts={setFilteredPosts} />
      <h3>The following are the Posts</h3>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        filteredPosts.map((filteredPost) => (
          <Post
            key={filteredPost.id}
            filteredPost={filteredPost}
            handleDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default PostSection