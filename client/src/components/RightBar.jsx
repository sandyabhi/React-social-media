import "../styles/rightbar.css";
import { Users } from "../FakeData";
import Online from "./Online";

export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
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
      </div>
    </div>
  );
}
