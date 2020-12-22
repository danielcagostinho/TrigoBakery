import React from "react";
import { Link } from "react-router-dom";

import "./NavButton.scss";

const NavButton = ({ url, variant, ...props }) => {
  return (
    <div className={`nav-button ${variant}`}>
      <Link className="link" to={url}>{props.children}</Link>
    </div>
  );
};

export default NavButton;
