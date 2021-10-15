import { useState, useEffect, useContext } from "react";
import "../styles/feed.css";
import Post from "./Post";
import Share from "./Share";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/"+ user._id);
      console.log(res);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
