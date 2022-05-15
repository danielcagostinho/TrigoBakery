import React from "react";
import { Link } from "react-router-dom";

import "./MoreCard.scss";

import moreBreads from "../../assets/menu/more-bread.png";
import moreCakes from "../../assets/menu/more-cakes.png";
import moreHotTable from "../../assets/menu/more-hot-table.jpg";
import moreDesserts from "../../assets/menu/more-desserts.png";
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
    case "desserts":
      moreImage = moreDesserts;
      break;
    case "hot-table":
      moreImage = moreHotTable;
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
            <h3 className="more-title">
              View All <span>{productType}</span>
            </h3>
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
