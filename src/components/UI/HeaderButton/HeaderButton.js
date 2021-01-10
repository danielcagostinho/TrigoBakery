import React from "react";
import { Link } from "react-router-dom";

import "./HeaderButton.scss";

const HeaderButton = ({ url, variant, ...props }) => {
  return (
    <Link className="link" to={url}>
      <div className={`header-button ${variant}`}>
        <div className="link-text">{props.children}</div>
      </div>
    </Link>
  );
};

export default HeaderButton;
