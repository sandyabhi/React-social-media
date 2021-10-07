import "../styles/login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Time Social</h3>
          <span className="loginDesc">Connect with .sss........</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
              <input type="email" className="loginInput" />
              <input type="password" className="loginInput" />
              <button className="loginButton">Log In</button>
              <button className="loginForgot">Forgot Password?</button>
              <button className="loginRegister">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
