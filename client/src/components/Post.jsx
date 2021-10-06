import "../styles/post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../FakeData";

export default function Post({ post }) {
  console.log(post);
  const user = Users.filter((u) => u.id === 1);
  console.log(user[0].username);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
            src={Users.filter((u) => u.id === post.userId)[0].profilePicture} alt="img"
              className="postProfileImg"
            />
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate"> {post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              src="https://media.istockphoto.com/photos/red-heart-isolated-on-white-background-picture-id637711124?b=1&k=20&m=637711124&s=170667a&w=0&h=KpSnKU6wn-e3zXcfdaQkT8GzzyzeDKavjaC2tAkY-TE="
              alt="love"
              className="likeIcon"
            />
            <img
              src="https://media.istockphoto.com/photos/red-heart-isolated-on-white-background-picture-id637711124?b=1&k=20&m=637711124&s=170667a&w=0&h=KpSnKU6wn-e3zXcfdaQkT8GzzyzeDKavjaC2tAkY-TE="
              alt="love"
              className="likeIcon"
            />
            <span className="postLikeCounter">{post.like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
