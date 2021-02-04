import React from "react";
import { Link } from "react-router-dom";
import { isMobile } from 'react-device-detect';

import "./MoreCard.scss";

import moreBreads from "../../assets/menu/more-bread.png";
import moreCakes from "../../assets/menu/more-cakes.png";
import morePastries from "../../assets/menu/more-pastries.png";
import arrow from "../../assets/icons/Arrow.png";

const MoreCard = ({ productType }) => {
  let moreImage = null;
  let cardStyles = "more-card";
  let imageStyles = "more-image";

  switch (productType) {
    case "breads":
      moreImage = moreBreads;
      break;
    case "cakes":
      moreImage = moreCakes;
      // cardStyles = "more-card-cakes";
      // imageStyles = "more-image-cakes";
      break;
    case "pastries":
      moreImage = morePastries;
      break;
    default:
      moreImage = moreBreads;
      break;
  }

  return (
    <div className={cardStyles}>
      <div className="more-card-content">
        <img src={moreImage} alt="Bread" className={imageStyles} />
        <div className="more-caption">
          <div>
            <p className="more-title">
              View All <span>{productType}</span>
            </p>
            {!isMobile && <p>12+ Unique {productType}</p> }
          </div>
          <Link to={productType}>
            <div className="more-button">
              <img src={arrow} alt="View All Breads Button" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MoreCard;
