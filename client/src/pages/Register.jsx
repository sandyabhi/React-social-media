import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router";
import "../styles/register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Time Social</h3>
          <span className="loginDesc">Connect with .sss........</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              ref={username}
              required
              className="loginInput"
              type="text"
            />
            <input
              placeholder="Email"
              ref={email}
              required
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              required
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password again"
              ref={passwordAgain}
              required
              className="loginInput"
              type="password"
              minLength="6"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegister">Login In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
