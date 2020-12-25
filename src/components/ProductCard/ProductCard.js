import React from "react";

import "./ProductCard.scss";

import broaWhite from '../../assets/products/breads/broa-white.jpg';

const ProductCard = () => {
  return (
    <div className="card">
      <div className="card-title-container">
        <p className="card-title">Broa White</p>
      </div>
      <div className="card-image-container">
        <div className="card-image">
          <img src={broaWhite} alt="White Cornbread"/>
        </div>
      </div>
      <div className="card-description-container">
        <p className="card-description">
          Traditional Portuguese Corn bread, typical from the northern region of
          Portugal.
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
