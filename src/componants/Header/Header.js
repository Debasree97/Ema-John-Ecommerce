import React from "react";
import { NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = UseAuth();
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/review">Order Review</NavLink>
        <NavLink to="/inventory">Manage Inventory here</NavLink>
        {user.email ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
