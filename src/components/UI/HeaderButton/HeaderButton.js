import React from "react";
import { Link } from "react-router-dom";

import "./HeaderButton.scss";

const HeaderButton = ({ url, variant, ...props }) => {
  return (
    <div className={`header-button ${variant}`}>
      <Link className="link" to={url}>{props.children}</Link>
    </div>
  );
};

export default HeaderButton;
