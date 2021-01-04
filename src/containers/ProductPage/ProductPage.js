import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

import "./ProductPage.scss";



const ProductPage = ({ products, productType, productDescription }) => {
  const productsGrid = products.map((product) => {
    return (
      <ProductCard
        productName={product.name}
        imgSrc={product.imgSrc}
        description={product.description}
      />
    );
  });

  return (
    <div className="products-page">
      <div className="products-info">
        <p className="section-name">Menu |</p>
        <h1>{productType}</h1>
        <p>{productDescription}</p>
      </div>
      <div className="products-container">{productsGrid}</div>
    </div>
  );
};

export default ProductPage;
