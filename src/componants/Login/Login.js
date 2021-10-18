import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";

const Login = () => {
  const { signInWithGoogle } = UseAuth();

  const location = useLocation();
  const history = useHistory();

  const redirect_uri = location.state?.from || "/shop";

  const handleGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h2>Log In</h2>
        <form>
          <input type="email" name="" placeholder="Your Email" />
          <br />
          <input type="password" name="" placeholder="Enter Password" />
          <br />
          <br />
          <input type="submit" value="Submit" placeholder="Re-enter Password" />
        </form>
        <p>
          New to Ema-John? <Link to="/register">Create Account</Link>
        </p>
        <p>--------- OR ---------</p>
        <button onClick={handleGoogleLogin} className="btn">
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
