import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const descRef = useRef();
  const navigate = useNavigate();
  const { postId } = useParams();

  // Fetch post data when component mounts
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/posts/${postId}`
        );
        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (err) {
        alert("Error fetching post: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  const handleEdit = (e) => {
    e.preventDefault();
    let description = descRef.current.value;

    axios
      .put(`http://127.0.0.1:8000/api/posts/${postId}`, {
        title,
        description,
      })
      .then(() => {
        alert(`post has been updated successfully`);
        setTitle("");
        description = "";
        navigate("/home");
      })
      .catch((err) => {
        alert("Error Editing Post: ", err.message);
      });
  };
  return (
    <>
      <form onSubmit={handleEdit}>
        <div>
          <label htmlFor="title">Post Title</label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={title}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Post Description</label>
          <input id="description" name="description" ref={descRef} defaultValue={description} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default EditPost;
