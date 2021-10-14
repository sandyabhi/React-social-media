import "../styles/register.css";

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Time Social</h3>
          <span className="loginDesc">Connect with .sss........</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
              <input placeholder="Username" className="loginInput" />
              <input placeholder="Email" className="loginInput" />
              <input placeholder="Password" className="loginInput" />
              <input placeholder="Password again" className="loginInput" />
              <button className="loginButton">Sign Up</button>
              <button className="loginRegister">Login In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
