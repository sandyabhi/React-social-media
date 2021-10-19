import "../styles/chatonline.css";

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://images.unsplash.com/photo-1532542547952-eb9fdf502856?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVkaGVhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>

        <span className="chatOnlineName">May</span>
      </div>
    </div>
  );
}
