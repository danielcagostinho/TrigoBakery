import React from "react";

import "./ProductCard.scss";
import cardTexture from '../../assets/Card-Texture.png';

const ProductCard = ({ productName, imgSrc, description, productType }) => {
  let cardStyles = "card";
  let imageStyles ="card-image";
  let imageContainerStyles = "card-image-container";
  
  console.log(productType)
  if (productType === "cakes") {
    // cardStyles = "card-cakes";
    // imageContainerStyles += " container-cakes"
  } else if (productType === "pastries") {
    // imageStyles += " image-pastries";
  } 

  return (
    <div className={cardStyles}>
      <img src={cardTexture} alt="grains" className="card-texture"/>
      <div className="card-content">
        <div className="card-title-container">
          <p className="card-title">{productName}</p>
        </div>
        <div className={imageContainerStyles}>
          <div className={imageStyles}>
            <img src={imgSrc} alt="White Cornbread" />
          </div>
        </div>
        {productType === "cakes" ? null : (
          <div className="card-description-container">
            <p className="card-description">{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
