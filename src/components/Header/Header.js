import React from "react";

import NavButton from "../UI/NavButton/NavButton";
import Logo from "../UI/Logo/Logo";

import "./Header.scss";

import headerImage from "../../assets/headerImage.JPG";

const Header = () => {
  // let masks = [];
  // for (let i = 0; i < 5; i++) {
  //   masks.push(
  //     <div
  //       className="header-masks"
  //       style={{ top: 0, left: i * (288 + 24), position: 'absolute', zIndex: 2, backgroundColor: 'red', height: '100%', width: 288 }}
  //     ></div>
  //   );
  // }
  return (
    <div className="header">
      <Logo />
      <h1>Portuguese baking right to your table</h1>
      <p>
        Trigo’s a local family-run bakery specializing in Portuguese bread,
        cake, and pastries. Located in Mississuaga, Ontario.
      </p>

      <div className="nav-links">
        <NavButton className="link" variant="light" url="/menu">
          Menu
        </NavButton>
        <NavButton className="link" variant="dark" url="/menu">
          Visit Us
        </NavButton>
      </div>

      <div className="header-img">
        <img src={headerImage} alt="Assorted Breads" />
        {/* {masks} */}
      </div>
    </div>
  );
};

export default Header;
