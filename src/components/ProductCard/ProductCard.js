import React from "react";

import "./ProductCard.scss";
import cardTexture from '../../assets/Card-Texture.png';

const ProductCard = ({ productName, imgSrc, description, productType }) => {
  let cardStyles = "card";
  let imageStyles ="card-image";
  let imageContainerStyles = "card-image-container";
  
  if (productType === "cakes") {
    console.log("Product Type", productType)
    // cardStyles = "card-cakes";
    // imageContainerStyles += " container-cakes"
    imageStyles += " card-image--no-border";
    console.log("image styles", imageStyles)

  } else if (productType === "pastries") {
    // imageStyles += " image-pastries";
  } 

  return (
    <div className={cardStyles}>
      <img src={cardTexture} alt="grains" className="card-texture"/>
      <div className="card-content">
        <div className="card-title-container">
          <h3 className="card-title">{productName}</h3>
        </div>
        <div className={imageContainerStyles}>
            <img src={imgSrc} alt="White Cornbread" className={imageStyles}/>
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
