import "../styles/friends.css";

export default function Friends({ user }) {
  return (
    <>
      <li className="sidebarFriend">
        <img src={user.profilePicture} alt="img" className="sidebarFriendImg" />
        <span className="sideBarFriendName">{user.username}</span>
      </li>
    </>
  );
}
