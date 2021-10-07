import "../styles/profile.css";
import Feed from "./Feed";
import RightBar from "./RightBar";
import SideBar from "./SideBar";
import TopBar from "./TopBar";

export default function Profile() {
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="https://images2.alphacoders.com/665/thumbbig-665356.webp"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">ssswwww</h4>
                <span className="profileInfoDesc">dadadadadaddada</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}
