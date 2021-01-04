import React from "react";

import "./MenuPage.scss";

import ProductCard from "../../components/ProductCard/ProductCard";
import paoDaAvo from "../../assets/products/breads/pao-davo.jpg";
import broaAmarelo from "../../assets/products/breads/broa-amarelo.jpg";
import unicornCake from "../../assets/products/cakes/UnicornCake.jpg";
import circusCake from "../../assets/products/cakes/CircusCake.png";
import broaPinhao from "../../assets/products/pastries/broa-de-pinhao.JPG";
import bolaDeBerlim from "../../assets/products/pastries/bola-de-berlim.JPG";

import MoreCard from "../../components/MoreCard/MoreCard";
import HeaderButton from "../../components/UI/HeaderButton/HeaderButton";
import Footer from "../../components/Footer/Footer";

const MenuPage = () => {
  return (
    <div className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>
          Trigo’s a local family-run bakery specializing in Portuguese breads,
          cakes, and pastries. Located in Mississuaga, Ontario.
        </p>
        <div className="menu-links">
          <HeaderButton variant="dark" url="/breads">
            Breads
          </HeaderButton>
          <HeaderButton variant="dark" url="/cakes">
            Cakes
          </HeaderButton>
          <HeaderButton variant="dark" url="/pastries">
            Pastries
          </HeaderButton>
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <h1 className="section-title">Breads</h1>
          <p className="section-description">
            Our breads are baked every morning to bring you the authentic Trigo
            flavour you know and love.
          </p>
        </div>
        <div className="section-cards">
          <ProductCard
            productName="Pão d'avó"
            imgSrc={paoDaAvo}
            description="Think of Pão da Avó as a 'house bread'. Just like your grandmother’s bread."
            productType="breads"
          />
          <ProductCard
            productName="Broa de Milho"
            imgSrc={broaAmarelo}
            description="Has a hard crust with characteristic cracks on it and keeps for a few days."
            productType="breads"
          />
          <MoreCard productType="breads" />
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <h1 className="section-title">Cakes</h1>
          <p className="section-description">
            Our breads are baked every morning to bring you the authentic Trigo
            flavour you know and love.
          </p>
        </div>
        <div className="section-cards">
          <ProductCard
            productName="Unicorn Cake"
            imgSrc={unicornCake}
            description="Think of Pão da Avó as a 'house bread'. Just like your grandmother’s bread."
            productType="cakes"
          />
          <ProductCard
            productName="Circus Cake"
            imgSrc={circusCake}
            description="Has a hard crust with characteristic cracks on it and keeps for a few days."
            productType="cakes"
          />
          <MoreCard productType="cakes" />
        </div>
      </div>
      <div className="section">
        <div className="section-header">
          <h1 className="section-title">Pastries</h1>
          <p className="section-description">
            Our breads are baked every morning to bring you the authentic Trigo
            flavour you know and love.
          </p>
        </div>
        <div className="section-cards">
          <ProductCard
            productName="Broa de Pinhao"
            imgSrc={broaPinhao}
            description="Think of Pão da Avó as a 'house bread'. Just like your grandmother’s bread."
            productType="pastries"
          />
          <ProductCard
            productName="Bola de Berlim"
            imgSrc={bolaDeBerlim}
            description="Has a hard crust with characteristic cracks on it and keeps for a few days."
            productType="pastries"
          />
          <MoreCard productType="pastries" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
