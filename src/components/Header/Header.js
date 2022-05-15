import React from "react";

import HeaderButton from "../UI/HeaderButton/HeaderButton";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Portuguese baking right to your table</h1>
      <p className="header__description">
        Trigo’s a local family-run bakery specializing in Portuguese bread,
        cakes, and pastries. Located in Mississuaga, Ontario.
      </p>

      <div className="nav-links">
        <HeaderButton className="link" variant="light" url="/menu">
          Menu
        </HeaderButton>
        <HeaderButton className="link" variant="dark" url="/">
          Visit Us
        </HeaderButton>
      </div>
    </div>
  );
};

export default Header;
