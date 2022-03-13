import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar.scss";

import Logo from "../../../assets/logo.jpg";

const NavBar = () => {

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  let navClasses = scrollPosition > 450 ? "nav nav--bg-solid" : "nav nav--bg-clear";

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);
  return (
    <div className={navClasses}>
      <div className="nav-bar">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <div className="nav-logo-container">
          <img src={Logo} className="nav-logo" alt="Trigo Logo" />
        </div>
        <Link to="/menu" className="nav-link">
          Menu
        </Link>
      </div>
      <div className="nav-gradient"></div>
    </div>
  );
};

export default NavBar;
