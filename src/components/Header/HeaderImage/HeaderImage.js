import React from "react";

import "./HeaderImage.scss";

import headerImage from "../../../assets/headerImage.JPG";

const HeaderImage = () => {
  // let clips = [];
  // for (let i = 0; i < 1; i++) {
  // clips.push(
    // <img
      // src={headerImage}
      // alt="Assorted Breads"
      // className="header-mask"
    // key={i}
    // />
  // );
  // }
  return (
    <div className="header-img">
      {/* <div style={{ display: "flex", justifyContent: "center" }}>{clips}</div> */}
      <div className="header-parallax p1"/>
      <div className="header-parallax p2"/>
      <div className="header-parallax p2"/>
      <div className="header-parallax p2"/>
      <div className="header-parallax p2"/>
      <div className="header-parallax p2"/>
    </div>
  );
};

export default HeaderImage;
