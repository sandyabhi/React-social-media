import Feed from "../components/Feed";
import RightBar from "../components/RightBar";
import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  );
}
