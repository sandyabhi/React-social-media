import { useState, useEffect } from "react";
import "../styles/feed.css";
import Post from "./Post";
import Share from "./Share";
import axios from "axios";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("posts/profile/" + username)
        : await axios.get("posts/timeline/6159999bda00932da76a0eb6");
      console.log(res);
      setPosts(res.data);
    };

    fetchPosts();
  }, [username]);

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
