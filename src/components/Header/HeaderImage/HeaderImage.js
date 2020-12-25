import React from "react";

import './HeaderImage.scss';

import headerImage from "../../../assets/headerImage.JPG";

const HeaderImage = () => {
  return (
    <div className="header-img">
      <img src={headerImage} alt="Assorted Breads" />
    </div>
  );
};

export default HeaderImage;
