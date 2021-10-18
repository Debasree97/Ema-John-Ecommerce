import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h2>Register: Create Account</h2>
        <form>
          <input type="email" name="" id="" placeholder="Your Email" />
          <br />
          <input type="password" name="" id="" placeholder="Enter Password" />
          <br />
          <input
            type="password"
            name=""
            id=""
            placeholder="Re-enter Password"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already Have an account? <Link to="/login">Log In</Link>
        </p>
        <p>--------- OR ---------</p>
        <button className="btn">Google Sign In</button>
      </div>
    </div>
  );
};

export default Register;
