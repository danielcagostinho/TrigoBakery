import React from "react";

import ProductCard from "../../components/ProductCard/ProductCard";
import MoreCard from "../../components/MoreCard/MoreCard";
import HeaderButton from "../../components/UI/HeaderButton/HeaderButton";
import Footer from "../../components/Footer/Footer";

import paoDaAvo from "../../assets/new-products/Breads/Pao-Davo.jpg";
import broaAmarelo from "../../assets/new-products/Breads/Broa-Amarelo.jpg";
import Bear_Cake from "../../assets/new-products/Cakes/Bear-Cake.jpg";
import Blossom_Cake from "../../assets/new-products/Cakes/Blossom-Cake.jpg";
import broaPinhao from "../../assets/new-products/Desserts/Broa-De-Noz.jpg";
import bolaDeBerlim from "../../assets/new-products/Desserts/Bolo-De-Berlim-Nutella.jpg";
import Caldo_Verde from '../../assets/new-products/Hot-Table/Caldo-Verde.jpg';
import Bifana from '../../assets/new-products/Hot-Table/Bifana-3.jpg';

import "./MenuPage.scss";

const MenuPage = () => {
  return (
    <>
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
            <HeaderButton variant="dark" url="/hot-table">
              Hot Table
            </HeaderButton>
            <HeaderButton variant="dark" url="/cakes">
              Cakes
            </HeaderButton>
            <HeaderButton variant="dark" url="/desserts">
              Desserts
            </HeaderButton>
          </div>
        </div>
        <div className="menu-section">
          <div className="section-header">
            <h2 className="section-title">Breads</h2>
            <p className="section-description">
              Our breads are baked every morning to bring you the authentic
              Trigo flavour you know and love.
            </p>
          </div>
          <div className="section-cards">
            <ProductCard
              productName="Pão d'avó"
              imgSrc={paoDaAvo}
              description="Think of Pão da Avó as a 'house bread'. Just like your grandmother’s bread."
              productType="breads"
            />
            {window.innerWidth > 680 ? (
              <ProductCard
                productName="Broa de Milho"
                imgSrc={broaAmarelo}
                description="Has a hard crust with characteristic cracks on it and keeps for a few days."
                productType="breads"
              />
            ) : null}
            <MoreCard productType="breads" />
          </div>
        </div>
        <div className="menu-section">
          <div className="section-header">
            <h2 className="section-title">Hot Table</h2>
            <p className="section-description">
              Our breads are baked every morning to bring you the authentic Trigo
              flavour you know and love.
            </p>
          </div>
          <div className="section-cards">
            <ProductCard
              productName="Caldo Verde"
              imgSrc={Caldo_Verde}
              description="Think of Pão da Avó as a 'house bread'. Just like your grandmother’s bread."
              productType="hot-table"
            />
            {window.innerWidth > 680 ? (
              <ProductCard
                productName="Bifana"
                imgSrc={Bifana}
                description="Has a hard crust with characteristic cracks on it and keeps for a few days."
                productType="hot-table"
              />
            ) : null}

            <MoreCard productType="hot-table" />
          </div>
        </div>
        <div className="menu-section">
          <div className="section-header">
            <h2 className="section-title">Cakes</h2>
            <p className="section-description">
              Our breads are baked every morning to bring you the authentic Trigo
              flavour you know and love.
            </p>
          </div>
          <div className="section-cards">
            <ProductCard
              productName="Unicorn Cake"
              imgSrc={Bear_Cake}
              description="Think of Pão da Avó as a 'house bread'. Just like your grandmother’s bread."
              productType="cakes"
            />
            {window.innerWidth > 680 ? (
              <ProductCard
                productName="Circus Cake"
                imgSrc={Blossom_Cake}
                description="Has a hard crust with characteristic cracks on it and keeps for a few days."
                productType="cakes"
              />
            ) : null}

            <MoreCard productType="cakes" />
          </div>
        </div>
        <div className="menu-section">
          <div className="section-header">
            <h2 className="section-title">Desserts</h2>
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
            {window.innerWidth > 680 ? (
              <ProductCard
                productName="Bola de Berlim"
                imgSrc={bolaDeBerlim}
                description="Has a hard crust with characteristic cracks on it and keeps for a few days."
                productType="pastries"
              />
            ) : null}

            <MoreCard productType="desserts" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MenuPage;
