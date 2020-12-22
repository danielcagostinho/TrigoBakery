import React from "react";
import { Link } from "react-router-dom";

import "./Logo.scss";

import trigoLogo from "../../../assets/logo.jpg";

const Logo = () => {
  return (
    <div className="logo-container">
      <Link className="logo-link" to="/">
        <img src={trigoLogo} alt="Trigo Bakery Logo" />
      </Link>
    </div>
  );
};

export default Logo;
