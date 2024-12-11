import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("check");
      setIsFormValid(email.includes("@") && password.trim().length > 7);
    }, 2000);

    return () => {
      console.log("Cleanup is triggered");
      clearTimeout(identifier);
    };
  }, [email, password]);

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    console.log(isFormValid);
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon-logo"
          className="login_logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={passwordChangeHandler}
          />
          <button type="submit" className="login_signInButton" onClick={login}>
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE conditions of use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Adds Notice.{" "}
        </p>
        <button className="login_registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
