import React, { useEffect, useState } from 'react'
import PostSection from '../components/PostSection'
import axios from 'axios'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // axios
    //   .get("http://127.0.0.1:8000/api/posts")
    //   .then((response) => {
    //     setPosts(response.data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.log("Error catching posts:", err);
    //     setLoading(false);
    //   });

    
    const fetchPosts = async()=> {
        // setLoading(true)
        try{
            const response = await axios.get(
              "http://127.0.0.1:8000/api/posts/"
            );
            setPosts(response.data)
            setFilteredPosts(response.data)
        }catch(err){
            alert("Error catching posts:", err.message)
        }finally{
            setLoading(false)
        }
    }

    const handleDelete = (postId) => {
        axios.delete(`http://127.0.0.1:8000/api/posts/${postId}`)
        .then(() => {
            alert(`post has been deleted successfully`)
            fetchPosts()
        })
        .catch((err) => {
            alert("Errror Deleting Post: ", err.message);
        })
        
    }

    useEffect(()=> {
        fetchPosts();
    },[])
        


  return (
    <PostSection
      filteredPosts={filteredPosts}
      setFilteredPosts={setFilteredPosts}
      posts={posts}
      loading={loading}
      handleDelete={handleDelete}
    />
  );
}

export default Home