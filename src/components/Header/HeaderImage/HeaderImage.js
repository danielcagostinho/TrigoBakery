import React from "react";

import "./HeaderImage.scss";

import headerImage from "../../../assets/headerImage.JPG";

const HeaderImage = () => {
  let clips = [];
  for (let i = 0; i < 5; i++) {
    clips.push(
      <img
        src={headerImage}
        alt="Assorted Breads"
        className="header-mask"
        key={i}
      />
    );
  }
  return (
    <div className="header-img">
      <div style={{ display: "flex", justifyContent: "center" }}>{clips}</div>
    </div>
  );
};

export default HeaderImage;
