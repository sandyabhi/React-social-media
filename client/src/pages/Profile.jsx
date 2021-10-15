import { useEffect, useState } from "react";
import "../styles/profile.css";
import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import axios from "axios";
import { useParams } from "react-router";

const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const nopic =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oryctolagus_cuniculus_Rcdo.jpg/800px-Oryctolagus_cuniculus_Rcdo.jpg";

export default function Profile() {
  const [user, setUser] = useState({});

  // const params= useParams()
  // console.log(params.username)
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      // /user ???
      const res = await axios.get(`/users?username=${username}`);
      console.log(res);
      setUser(res.data);
    };

    fetchUser();
  }, [username]);

  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={user.coverPicture ? PF + user.coverPicture : nopic}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={user.profilePicture ? PF + user.profilePicture : nopic}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
