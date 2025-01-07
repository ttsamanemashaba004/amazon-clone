import React, { useEffect, useReducer, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }

  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }
};

const Login = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("check");
      setIsFormValid(
        state.emailValue.includes("@") && state.passwordValue.trim().length > 7
      );
    }, 2000);

    return () => {
      console.log("Cleanup is triggered");
      clearTimeout(identifier);
    };
  }, [state.emailValue, state.passwordValue]);

  const emailChangeHandler = (e) => {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    console.log(isFormValid);
    console.log("Email: ", state.emailValue);
    console.log("Password: ", state.passwordValue);
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
            value={state.emailValue}
            onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input
            type="password"
            placeholder="Password"
            value={state.passwordValue}
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
