import { useContext, useEffect, useState } from "react";
import "../styles/rightbar.css";
import { Users } from "../FakeData";
import Online from "./Online";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Add, Remove } from "@material-ui/icons";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const nopic =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/800px-Oryctolagus_cuniculus_Rcdo.jpg";

export default function RightBar({ user }) {
  const [friends, setFriends] = useState([]);

  const { user: currentUser, dispatch } = useContext(AuthContext);

  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axios.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {}
  };

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            src="https://images.unsplash.com/photo-1513201099705-a9746e1e201f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpZnQlMjBib3h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="gift"
            className="birthdayImg"
          />
          <span className="birthdayText">
            <b>Maki Zenin</b>and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1551383616-a9e150c07fca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFkdmVydGlzZW1lbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="adv"
          className="rightbarAd"
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? (
              <>
                Unfollow <Remove />{" "}
              </>
            ) : (
              <>
                Follow <Add />{" "}
              </>
            )}
          </button>
        )}
        <h1 className="rightbarTitle">User Information</h1>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1 ? "Single" : "...."}
            </span>
          </div>
        </div>
        <h1 className="rightbarTitle">User Friends</h1>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  alt={friend.username}
                  src={
                    friend.profilePicture ? PF + friend.profilePicture : nopic
                  }
                  className="rightbarFollowingImg"
                ></img>
                <span className="rightbarFollowingName">
                  {friend.username}{" "}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
