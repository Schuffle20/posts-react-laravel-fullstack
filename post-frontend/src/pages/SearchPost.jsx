import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

const SearchPost = ({ setFilteredPosts }) => {
  // const [post, setPost] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { postId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call API endpoint for search (e.g., `/api/posts/search?q=keyword`)
      const response = await axios.get(
        `http://127.0.0.1:8000/api/posts/search`,
        {
          params: { q: keyword },
        }
      );

    //   const postsData = response.data.data || response.data;
        const postsData = response.data;
      setFilteredPosts(Array.isArray(postsData) ? postsData : []);
    } catch (err) {
      alert(
        `Error searching posts: ${err.response?.data?.message || err.message}`
      );
      setFilteredPosts([]); // Reset to empty array on error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={keyword}
          name="search"
          id="search"
          placeholder="Search Here..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Search</button>

        <button
          type="button"
          onClick={() => {
            setKeyword("");
            axios
              .get("http://127.0.0.1:8000/api/posts")
              .then((res) => setFilteredPosts(res.data))
              .catch((err) => alert("Error resetting search:", err));
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default SearchPost