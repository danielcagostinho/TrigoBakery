import React from "react";
import Footer from "../../components/Footer/Footer";
import ProductCard from "../../components/ProductCard/ProductCard";
import HeaderButton from "../../components/UI/HeaderButton/HeaderButton";

import "./ProductPage.scss";

const ProductPage = ({ products, productType, productDescription }) => {
  const productsGrid = products.map((product) => {
    return (
      <ProductCard
        productType={productType}
        key={product.imgSrc}
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
        <div className="button--back">
          <HeaderButton variant="dark" url="/menu" >
            Menu
          </HeaderButton>
        </div>
      </div>
      <div className="products-container">{productsGrid}</div>
      <Footer />
    </div>
  );
};

export default ProductPage;
