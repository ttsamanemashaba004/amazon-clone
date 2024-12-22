import { Link } from "react-router-dom";
import "./Login.css";
import { useEffect, useReducer, useState } from "react";

// REDUCER FUNCTION
const reducer = (state, action) => {
  if (action.type === "EMAIL_INPUT") {
    return { ...state, emailValue: action.payload };
  }

  if (action.type === "PASS_INPUT") {
    return { ...state, passwordValue: action.payload };
  }
  return { emailValue: "", passwordValue: "" };
};

function Login() {
  //USESTATES
  const [formIsValid, setformIsValid] = useState(false);

  //USEREDUCERS                                                                                                                                                             
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "",
    passwordValue: "",
  });

  const { emailValue: email, passwordValue: password } = state;

  //USEEFFECTS
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("check");
      setformIsValid(
        email.includes("@") && password.trim().length > 6
      );
    }, 1000);

    return () => {
      console.log("cleanup");
      clearTimeout(identifier);
    };
  }, [email, password]);

  //FUNCTIONS
  function emailChangeHandler(e) {
    dispatch({ type: "EMAIL_INPUT", payload: e.target.value });
  }

  function passwordChangeHandler(e) {
    dispatch({ type: "PASS_INPUT", payload: e.target.value });
  }

  function signIn(e) {
    e.preventDefault();
    console.log("Entered Email: ", email);
    console.log("Entered Password: ", password);
  }

  //JSX
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
          <input
            type="text"
            value={email}
            onChange={emailChangeHandler}
          />
          {/* Password */}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
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
