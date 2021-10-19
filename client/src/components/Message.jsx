import "../styles/message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src="https://images.unsplash.com/photo-1532542547952-eb9fdf502856?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVkaGVhZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
          alt=""
          className="messageImg"
        />
        <p className="messageText">Hello this is a message</p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
}
