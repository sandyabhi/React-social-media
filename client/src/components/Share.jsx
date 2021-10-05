import "../styles/share.css";
import { PermMedia } from "@material-ui/icons";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" alt="img" className="shareProfileImg" />
     
    <input placeholder="What's in your mind" className="shareInput" />
        </div>
        <hr className="shareHr"/>
        
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
