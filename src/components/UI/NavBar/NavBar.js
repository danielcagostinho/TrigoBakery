import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

import Logo from "../../../assets/logo.jpg";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-bar">
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
        <div className="nav-logo-container">
          <img src={Logo} className="nav-logo" alt="Trigo Logo" />
        </div>
        <Link to="/" className="nav-link">
          Visit Us
        </Link>
      </div>
      <div className="nav-gradient"></div>
    </div>
  );
};

export default NavBar;
