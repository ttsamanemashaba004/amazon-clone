import { Link } from "react-router-dom";
import "./Login.css";
import { useRef } from "react";

function Login() {
  // useRef
  const emailRef = useRef("");
  const passwordRef = useRef("");

  // useStates

  // functions for email password

  // signIn button function
  function signIn(e) {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log("email: ", enteredEmail + " password: ", enteredPassword);
  }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          {/* Email */}
          <h5>Email</h5>
          <input type="text" ref={emailRef} />
          {/* Password */}
          <h5>Password</h5>
          <input type="password" ref={passwordRef} />
          {/* Sign In Button */}
          <button type="submit" className="login_signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, out Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
