import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const descRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let description = descRef.current.value;
        axios
          .post("http://127.0.0.1:8000/api/posts", {
            title,
            description
          })
          .then(() => {
            alert("Post Created Successfully");
            setTitle("");
            description = "";

            navigate("/home");
            // fetchPosts();
          })
          .catch((err) => {
            alert("Error creating post: " + err.message);
          });
        
    } 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Post Title</label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="description">Post Description</label>
          <input
            id="description"
            name="description"
            ref={descRef}
            required
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}

export default CreatePost