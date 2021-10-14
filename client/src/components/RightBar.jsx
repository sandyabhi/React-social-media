import "../styles/rightbar.css";
import { Users } from "../FakeData";
import Online from "./Online";

export default function RightBar({ user }) {
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
          <div className="rightbarFollowing">
            <img
              alt="img"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName">RIO </span>
          </div>
          <div className="rightbarFollowing">
            <img
              alt="img"
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
              className="rightbarFollowingImg"
            ></img>
            <span className="rightbarFollowingName">RIO </span>
          </div>
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
