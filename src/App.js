import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./containers/LandingPage/LandingPage";
import MenuPage from "./containers/MenuPage/MenuPage";
import ProductPage from "./containers/ProductPage/ProductPage";
import NavBar from "./components/UI/NavBar/NavBar";
import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";

import "./App.scss";

import paoDaAvoGrande from "./assets/products/breads/big-pao.jpg";
import broaAmarelo from "./assets/products/breads/broa-amarelo.jpg";
import broaWhite from "./assets/products/breads/broa-white.jpg";
import calabrese from "./assets/products/breads/calabrese-bread.jpg";
import farmers from "./assets/products/breads/farmers-bread.png";
import kaiser from "./assets/products/breads/kaiser.jpg";
import nineGrain from "./assets/products/breads/nine-grain.jpg";
import nineGrainLoaf from "./assets/products/breads/nine-grain-loaf.jpg";
import pada from "./assets/products/breads/pada.jpg";
import paoDaAvo from "./assets/products/breads/pao-davo.jpg";
import paoDeMilhoPequeno from "./assets/products/breads/pao-de-milho-pequeno.jpg";
import papoSeco from "./assets/products/breads/papo-seco.jpg";

import bolaDeBerlim from "./assets/products/pastries/bola-de-berlim.JPG";
import boloRei from "./assets/products/pastries/bolo-rei.JPG";
import broaDePinhao from "./assets/products/pastries/broa-de-pinhao.JPG";
import cavacas from "./assets/products/pastries/cavacas.JPG";
import malassadas from "./assets/products/pastries/malassadas.JPG";
import pasteis from "./assets/products/pastries/pasteis.JPG";
import assortedPastries from "./assets/products/pastries/pastries.JPG";

// Cakes
import bearCake from "./assets/products/cakes/bear-cake.jpg";
import blueFlowerCake from "./assets/products/cakes/blue-flower-cake.jpg";
import bunnyCake from "./assets/products/cakes/bunny-cake.jpg";
import fruitCake from "./assets/products/cakes/cake-1.jpg";
import circusCake from "./assets/products/cakes/circus-cake.png";
import communionCake from "./assets/products/cakes/communion-cake.jpg";
import flamingoCake from "./assets/products/cakes/flamingo-cake.jpg";
import kitKatCake from "./assets/products/cakes/kit-kat-cake.jpg";
import lightPinkFlowerCake from "./assets/products/cakes/light-pink-flower-cake.jpg";
import lionCake from "./assets/products/cakes/lion-cake.jpg";
import minionCake from "./assets/products/cakes/minion-cake.png";
import oceanCake from "./assets/products/cakes/ocean-cake.jpg";
import oneYearOldCake from "./assets/products/cakes/one-year-old-cake.jpg";
import pawPatrolCake from "./assets/products/cakes/paw-patrol-cake.jpg";
import pinkBlueFlowerCake from "./assets/products/cakes/pink-blue-flower-cake.jpg";
import pinkCake from "./assets/products/cakes/pink-cake.jpg";
import pinkCrossCake from "./assets/products/cakes/pink-cross-cake.jpg";
import pinkFlowerCake from "./assets/products/cakes/pink-flower-cake.jpg";
import pirateCake from "./assets/products/cakes/pirate-cake.jpg";
import pregnancyCake from "./assets/products/cakes/pregnant-cake.jpg";
import pumpkinCake from "./assets/products/cakes/pumpkin-cake.jpg";
import spidermanCake from "./assets/products/cakes/spiderman-cake.jpg";
import spiderman2Cake from "./assets/products/cakes/spiderman-cake-2.jpg";
import strawCake from "./assets/products/cakes/straw-cake.jpg";
import teddyBearCake from "./assets/products/cakes/teddy-bear-cake.jpg";
import thomasCake from "./assets/products/cakes/thomas-cake.jpg";
import toyStoryCake from "./assets/products/cakes/toy-story.jpg";
import unicornCake from "./assets/products/cakes/uni-cake.jpg";
import unicorn2Cake from "./assets/products/cakes/unicorn.jpg";
import unicorn3Cake from "./assets/products/cakes/unicorn-cake.jpg";
import weddingCake from "./assets/products/cakes/wedding-cake.jpg";
import whiteCake from "./assets/products/cakes/white-cake.jpg";
import whiteFlower from "./assets/products/cakes/white-flower-cake.png";

const breads = [
  {
    name: "Pao da Avo",
    imgSrc: paoDaAvoGrande,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Broa Amarelo",
    imgSrc: broaAmarelo,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Broa White",
    imgSrc: broaWhite,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Calabrese",
    imgSrc: calabrese,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Farmer's Bread",
    imgSrc: farmers,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Kaiser Bun",
    imgSrc: kaiser,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Nine Grain Bun",
    imgSrc: nineGrain,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Nine Grain Loaf",
    imgSrc: nineGrainLoaf,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Pada",
    imgSrc: pada,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Pao da Avo",
    imgSrc: paoDaAvo,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Pao de Milho Pequeno",
    imgSrc: paoDeMilhoPequeno,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Papo Seco",
    imgSrc: papoSeco,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
];

const pastries = [
  {
    name: "Bola de Berlim",
    imgSrc: bolaDeBerlim,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Bolo Rei",
    imgSrc: boloRei,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Broa de Pinhao",
    imgSrc: broaDePinhao,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Cavacas",
    imgSrc: cavacas,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Malassadas",
    imgSrc: malassadas,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Pasteis de Nata",
    imgSrc: pasteis,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
  {
    name: "Assorted Pastries",
    imgSrc: assortedPastries,
    description: "Id sit adipisicing non veniam ea proident commodo magna.",
  },
];

const cakes = [
  {
    name: "Bear Cake",
    imgSrc: bearCake,
  },
  {
    name: "Blue Flower Cake",
    imgSrc: blueFlowerCake,
  },
  {
    name: "Bunny Cake",
    imgSrc: bunnyCake,
  },
  {
    name: "Fruit Cake",
    imgSrc: fruitCake,
  },
  {
    name: "Circus Cake",
    imgSrc: circusCake,
  },
  {
    name: "Communion Cake",
    imgSrc: communionCake,
  },
  {
    name: "Flamingo Cake",
    imgSrc: flamingoCake,
  },
  {
    name: "Kit Kat Cake",
    imgSrc: kitKatCake,
  },
  {
    name: "Light Pink Flower Cake",
    imgSrc: lightPinkFlowerCake,
  },
  {
    name: "Lion Cake",
    imgSrc: lionCake,
  },
  {
    name: "Minion Cake",
    imgSrc: minionCake,
  },
  {
    name: "Ocean Cake",
    imgSrc: oceanCake,
  },
  {
    name: "Birthday Cake",
    imgSrc: oneYearOldCake,
  },
  {
    name: "Paw Patrol Cake",
    imgSrc: pawPatrolCake,
  },
  {
    name: "Pink Blue Flower Cake",
    imgSrc: pinkBlueFlowerCake,
  },
  {
    name: "Pink Cake",
    imgSrc: pinkCake,
  },
  {
    name: "Pink Cross Cake",
    imgSrc: pinkCrossCake,
  },
  {
    name: "Pink Flower Cake",
    imgSrc: pinkFlowerCake,
  },
  {
    name: "Pirate Cake",
    imgSrc: pirateCake,
  },
  {
    name: "Pregnancy Cake",
    imgSrc: pregnancyCake,
  },
  {
    name: "Pumpkin Cake",
    imgSrc: pumpkinCake,
  },
  {
    name: "Spiderman Cake",
    imgSrc: spidermanCake,
  },
  {
    name: "Spiderman Cake",
    imgSrc: spiderman2Cake,
  },
  {
    name: "Strawberry Cake",
    imgSrc: strawCake,
  },
  {
    name: "Teddy Bear Cake",
    imgSrc: teddyBearCake,
  },
  {
    name: "Thomas the Tank Engine Cake",
    imgSrc: thomasCake,
  },
  {
    name: "Toy Story Cake",
    imgSrc: toyStoryCake,
  },
  {
    name: "Unicorn Cake",
    imgSrc: unicornCake,
  },
  {
    name: "Unicorn Cake",
    imgSrc: unicorn2Cake,
  },
  {
    name: "Unicorn Cake",
    imgSrc: unicorn3Cake,
  },
  {
    name: "Wedding Cake",
    imgSrc: weddingCake,
  },
  {
    name: "White Cake",
    imgSrc: whiteCake,
  },
  {
    name: "White Flower Cake",
    imgSrc: whiteFlower,
  },
];

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <ScrollToTop>
          <NavBar />
          <Switch>
            <Route path="/breads" exact>
              <ProductPage
                products={breads}
                productType="breads"
                productDescription={
                  "Trigo’s a local family-run bakery specializing in Portuguese bread, cake, and pastries. Located in Mississuaga, Ontario."
                }
              />
            </Route>
            <Route path="/pastries" exact>
              <ProductPage
                products={pastries}
                productType="pastries"
                productDescription={
                  "Trigo’s a local family-run bakery specializing in Portuguese bread, cake, and pastries. Located in Mississuaga, Ontario."
                }
              />
            </Route>
            <Route path="/cakes" exact>
              <ProductPage
                products={cakes}
                productType="cakes"
                productDescription={
                  "Trigo’s a local family-run bakery specializing in Portuguese bread, cake, and pastries. Located in Mississuaga, Ontario."
                }
              />
            </Route>
            <Route path="/menu" exact>
              <MenuPage />
            </Route>
            <Route path="/" exact>
              <LandingPage />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
