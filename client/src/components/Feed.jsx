import "../styles/feed.css";
import Post from "./Post";
import Share from "./Share";
import { Posts } from "../FakeData";

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  );
}
