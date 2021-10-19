import "../styles/messenger.css";
import TopBar from "../components/TopBar";
import Conversation from "../components/Conversation";
import Message from "../components/Message";
import ChatOnline from "../components/ChatOnline";
export default function Messenger() {
  return (
    <>
      <TopBar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              className="chatMenuInput"
              placeholder="Search for friends"
            />
            <Conversation />
            <Conversation />
            <Conversation />
          </div>
        </div>

        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message />
              <Message own={true} />
              <Message />
              <Message own={true} />
              <Message />
             
            </div>
            <div className="chatBoxBottom">
              <textarea
                placeholder="Type a Message"
                className="chatMessageInput"
              ></textarea>
              <button className="chatSubmitButton">Send</button>
            </div>
          </div>
        </div>

        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
