import React from "react";

import "./HeaderImage.scss";

import headerImage from "../../../assets/headerImage.JPG";

const HeaderImage = () => {
  let clips = [];
  // let styles;
  for (let i = 0; i < 5; i++) {
    // styles = {
    //   height: 860,
    //   width: 1240,
    //   clipPath: `polygon(${15 * i} 0, ${15 * (i + 1)}% 0, ${
    //     15 * (i + 1)
    //   }% 100%, ${15 * i} 100%)`,
    // };
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
      {/* <img
        src={headerImage}
        alt="Assorted Breads"
        style={{
          height: 860,
          width: 1440,
          objectFit: 'cover'
        }}
      /> */}
    </div>
  );
};

export default HeaderImage;
