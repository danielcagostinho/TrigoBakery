import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "./containers/LandingPage/LandingPage";
import MenuPage from "./containers/MenuPage/MenuPage";
import ProductPage from "./containers/ProductPage/ProductPage";
import NavBar from "./components/UI/NavBar/NavBar";
import ScrollToTop from "./containers/ScrollToTop/ScrollToTop";

import "./App.scss";
import LeftGrain from './assets/Left-Grain.PNG';
import RightGrain from './assets/Right-Grain.PNG';

// Breads 
import Bolo_Livedo from './assets/new-products/Breads/Bolo-Livedo.jpg';
import Broa_Amarelo from './assets/new-products/Breads/Broa-Amarelo.jpg';
import Broa_Branco from './assets/new-products/Breads/Broa-Branco.jpg';
import Calabrese_Large from './assets/new-products/Breads/Calabrese-Large.jpg';
import Calabrese_Small from './assets/new-products/Breads/Calabrese-Small.jpg';
import Grandpa_Bread from './assets/new-products/Breads/Grandpa-Bread.jpg';
import Large_Bread from './assets/new-products/Breads/Large-Bread.jpg';
import Large_Bread_2 from './assets/new-products/Breads/Large-Bread-2.jpg';
import Large_Bread_3 from './assets/new-products/Breads/Large-Bread-3.jpg';
import Large_Bread_4 from './assets/new-products/Breads/Large-Bread-4.jpg';
import Large_Bread_5 from './assets/new-products/Breads/Large-Bread-5.jpg';
import Large_Bread_6 from './assets/new-products/Breads/Large-Bread-6.jpg';
import Nine_Grain_Bun from './assets/new-products/Breads/Nine-Grain-Bun.jpg';
import Padas from './assets/new-products/Breads/Padas.jpg';
import Pao_Com_Chorico from './assets/new-products/Breads/Pao-Com-Chorico.jpg';
import Pao_Davo from './assets/new-products/Breads/Pao-Davo.jpg';
import Papo_Seco from './assets/new-products/Breads/Papo-Seco.jpg';
import Papo_Seco_Small from './assets/new-products/Breads/Papo-Seco-Small.jpg';
import Ring_Bread from './assets/new-products/Breads/Ring-Bread.jpg';
import Vienna from './assets/new-products/Breads/Vienna.jpg';

// Cakes
import Bear_Cake from './assets/new-products/Cakes/Bear-Cake.jpg';
import Bird_Cake from './assets/new-products/Cakes/Bird-Cake.jpg';
import Birthday_Cake from './assets/new-products/Cakes/Birthday-Cake.jpg';
import Blossom_Cake from './assets/new-products/Cakes/Blossom-Cake.jpg';
import Blue_Cake from './assets/new-products/Cakes/Blue-Cake.jpg';
import Bolo_De_Cafe from './assets/new-products/Cakes/Bolo-De-Cafe.jpg';
import Bolo_De_Caramel from './assets/new-products/Cakes/Bolo-De-Caramel.jpg';
import Bolo_De_Maca from './assets/new-products/Cakes/Bolo-De-Maca.jpg';
import Bolo_De_Mango from './assets/new-products/Cakes/Bolo-De-Mango.jpg';
import Bolo_De_Marble from './assets/new-products/Cakes/Bolo-De-Marble.jpg';
import Bolo_De_Noz from './assets/new-products/Cakes/Bolo-De-Noz.jpg';
import Caramel_Cake from './assets/new-products/Cakes/Caramel-Cake.JPG';
import Carrot_Cake from './assets/new-products/Cakes/Carrot-Cake.jpg';
import Chanel_Cake from './assets/new-products/Cakes/Chanel-Cake.JPG';
import Chocolate_Cake from './assets/new-products/Cakes/Chocolate-Cake.jpg';
import Communion_Cake from './assets/new-products/Cakes/Communion-Cake.jpg';
import Communion_Cake_2 from './assets/new-products/Cakes/Communion-Cake-2.jpg';
import Dragon_Cake from './assets/new-products/Cakes/Dragon-Cake.jpg';
import Flower_Cake from './assets/new-products/Cakes/Flower-Cake.jpg';
import Flower_Cake_2 from './assets/new-products/Cakes/Flower-Cake-2.jpg';
import Flower_Cake_3 from './assets/new-products/Cakes/Flower-Cake-3.jpg';
import Fortnite_Cake from './assets/new-products/Cakes/Fortnite-Cake.jpg';
import Frozen_Cake from './assets/new-products/Cakes/Frozen-Cake.jpg';
import Macaron_Cake from './assets/new-products/Cakes/Macaron-Cake.jpg';
import Macaron_Cake_2 from './assets/new-products/Cakes/Macaron-Cake-2.jpg';
import Mickey_Mouse_Cake from './assets/new-products/Cakes/Mickey-Mouse-Cake.jpg';
import M_M_Cake from './assets/new-products/Cakes/M-M-Cake.jpg';
import Panda_Cake from './assets/new-products/Cakes/Panda-Cake.jpg';
import Paris_Cake from './assets/new-products/Cakes/Paris-Cake.jpg';
import Pink_Cake from './assets/new-products/Cakes/Pink-Cake.jpg';
import Pink_Cake_2 from './assets/new-products/Cakes/Pink-Cake-2.jpg';
import Pink_Cake_3 from './assets/new-products/Cakes/Pink-Cake-3.jpg';
import Present_Cake from './assets/new-products/Cakes/Present-Cake.jpg';
import Purple_Cake from './assets/new-products/Cakes/Purple-Cake.jpg';
import Rocket_Cake from './assets/new-products/Cakes/Rocket-Cake.jpg';
import Rose_Cake from './assets/new-products/Cakes/Rose-Cake.JPG';
import Rose_Cake_2 from './assets/new-products/Cakes/Rose-Cake-2.jpg';
import Rose_Cake_3 from './assets/new-products/Cakes/Rose-Cake-3.jpg';
import Strawberry_Cake from './assets/new-products/Cakes/Strawberry-Cake.jpg';
import Strawberry_Chocolate_Cake from './assets/new-products/Cakes/Strawberry-Chocolate-Cake.jpg';
import Sunflower_Cupcake from './assets/new-products/Cakes/Sunflower-Cupcake.jpg';
import Sweet_16_Cake from './assets/new-products/Cakes/Sweet-16-Cake.jpg';
import White_Chocolate_Cake from './assets/new-products/Cakes/White-Chocolate-Cake.jpg';
import White_Flower_Cake from './assets/new-products/Cakes/White-Flower-Cake.jpg';
import Wine_Cake from './assets/new-products/Cakes/Wine-Cake.jpg';

// Desserts
import Arroz_Doce from './assets/new-products/Desserts/Arroz-Doce.jpg';
import Bolo_De_Arroz from './assets/new-products/Desserts/Bolo-De-Arroz.jpg';
import Bolo_De_Berlim_Custard from './assets/new-products/Desserts/Bolo-De-Berlim-Custard.jpg';
import Bolo_De_Berlim_Nutella from './assets/new-products/Desserts/Bolo-De-Berlim-Nutella.jpg';
import Bolo_De_Coco_2 from './assets/new-products/Desserts/Bolo-De-Coco-2.jpg';
import Bolos_De_Berlim from './assets/new-products/Desserts/Bolos-De-Berlim.jpg';
import Broa_De_Noz from './assets/new-products/Desserts/Broa-De-Noz.jpg';
import Broa_De_Noz_2 from './assets/new-products/Desserts/Broa-De-Noz-2.jpg';
import Cavacas from './assets/new-products/Desserts/Cavacas.JPG';
import Chocolate_Mousse from './assets/new-products/Desserts/Chocolate-Mousse.jpg';
import Coconut_Pastry from './assets/new-products/Desserts/Coconut-Pastry.jpg';
import Croissant_Chocolate from './assets/new-products/Desserts/Croissant-Chocolate.jpg';
import Malassadas from './assets/new-products/Desserts/Malassadas.jpg';
import Natas from './assets/new-products/Desserts/Natas.jpg';
import Natas_Com_Nutella from './assets/new-products/Desserts/Natas-Com-Nutella.jpg';
import Natas_Do_Ceu from './assets/new-products/Desserts/Natas-Do-Ceu.jpg';
import Pastry_1 from './assets/new-products/Desserts/Pastry-1.jpg';
import Pastry_Almond_Tart from './assets/new-products/Desserts/Pastry-Almond-Tart.jpg';
import Pastry_Feijao from './assets/new-products/Desserts/Pastry-Feijao.jpg';
import Pastry_Feijao_2 from './assets/new-products/Desserts/Pastry-Feijao-2.jpg';
import Portuguese_Mille_Feuille from './assets/new-products/Desserts/Portuguese-Mille-Feuille.jpg';
import Pudim_Flan from './assets/new-products/Desserts/Pudim-Flan.jpg';
import Sicilian_Cannoli from './assets/new-products/Desserts/Sicilian-Cannoli.jpg';
import Strawberry_Cheesecake from './assets/new-products/Desserts/Strawberry-Cheesecake.jpg';
import Tiramisu from './assets/new-products/Desserts/Tiramisu.jpg';
import Torta_Da_Laranja from './assets/new-products/Desserts/Torta-Da-Laranja.jpg';
import Walnut_Cheesecake from './assets/new-products/Desserts/Walnut-Cheesecake.JPG';

// Hot Table
import Beef_Croquette from './assets/new-products/Hot-Table/Beef-Croquette.jpg';
import Bifana from './assets/new-products/Hot-Table/Bifana.jpg';
import Bifana_2 from './assets/new-products/Hot-Table/Bifana-2.jpg';
import Bifana_3 from './assets/new-products/Hot-Table/Bifana-3.jpg';
import Bolo_de_Bacalhau from './assets/new-products/Hot-Table/Bolo-de-Bacalhau.jpg';
import Caldo_Verde from './assets/new-products/Hot-Table/Caldo-Verde.jpg';
import Deli_Sandwich from './assets/new-products/Hot-Table/Deli-Sandwich.jpg';
import Rissois_De_Camarao from './assets/new-products/Hot-Table/Rissois-De-Camarao.jpg';
import Rissol_De_Atum from './assets/new-products/Hot-Table/Rissol-De-Atum.jpg';
import Sopa_De_Spinafres from './assets/new-products/Hot-Table/Sopa-De-Spinafres.jpg';
import Sopa_Do_Marisco from './assets/new-products/Hot-Table/Sopa-Do-Marisco.jpg';

var Breads = [
  {
    name: 'Bolo Livedo',
    imgSrc: Bolo_Livedo,

  },
  {
    name: 'Broa Amarelo',
    imgSrc: Broa_Amarelo,

  },
  {
    name: 'Broa Branco',
    imgSrc: Broa_Branco,

  },
  {
    name: 'Calabrese Large',
    imgSrc: Calabrese_Large,

  },
  {
    name: 'Calabrese Small',
    imgSrc: Calabrese_Small,

  },
  {
    name: 'Grandpa Bread',
    imgSrc: Grandpa_Bread,

  },
  {
    name: 'Large Bread',
    imgSrc: Large_Bread,

  },
  {
    name: 'Large Bread 2',
    imgSrc: Large_Bread_2,

  },
  {
    name: 'Large Bread 3',
    imgSrc: Large_Bread_3,

  },
  {
    name: 'Large Bread 4',
    imgSrc: Large_Bread_4,

  },
  {
    name: 'Large Bread 5',
    imgSrc: Large_Bread_5,

  },
  {
    name: 'Large Bread 6',
    imgSrc: Large_Bread_6,

  },
  {
    name: 'Nine Grain Bun',
    imgSrc: Nine_Grain_Bun,

  },
  {
    name: 'Padas',
    imgSrc: Padas,

  },
  {
    name: 'Pao Com Chorico',
    imgSrc: Pao_Com_Chorico,

  },
  {
    name: 'Pao Davo',
    imgSrc: Pao_Davo,

  },
  {
    name: 'Papo Seco',
    imgSrc: Papo_Seco,

  },
  {
    name: 'Papo Seco Small',
    imgSrc: Papo_Seco_Small,

  },
  {
    name: 'Ring Bread',
    imgSrc: Ring_Bread,

  },
  {
    name: 'Vienna',
    imgSrc: Vienna,

  },
];

var Cakes = [
{
name: 'Bear Cake',
imgSrc: Bear_Cake
},
{
name: 'Bird Cake',
imgSrc: Bird_Cake
},
{
name: 'Birthday Cake',
imgSrc: Birthday_Cake
},
{
name: 'Blossom Cake',
imgSrc: Blossom_Cake
},
{
name: 'Blue Cake',
imgSrc: Blue_Cake
},
{
name: 'Bolo De Cafe',
imgSrc: Bolo_De_Cafe
},
{
name: 'Bolo De Caramel',
imgSrc: Bolo_De_Caramel
},
{
name: 'Bolo De Maca',
imgSrc: Bolo_De_Maca
},
{
name: 'Bolo De Mango',
imgSrc: Bolo_De_Mango
},
{
name: 'Bolo De Marble',
imgSrc: Bolo_De_Marble
},
{
name: 'Bolo De Noz',
imgSrc: Bolo_De_Noz
},
{
name: 'Caramel Cake',
imgSrc: Caramel_Cake
},
{
name: 'Carrot Cake',
imgSrc: Carrot_Cake
},
{
name: 'Chanel Cake',
imgSrc: Chanel_Cake
},
{
name: 'Chocolate Cake',
imgSrc: Chocolate_Cake
},
{
name: 'Communion Cake',
imgSrc: Communion_Cake
},
{
name: 'Communion Cake 2',
imgSrc: Communion_Cake_2
},
{
name: 'Dragon Cake',
imgSrc: Dragon_Cake
},
{
name: 'Flower Cake',
imgSrc: Flower_Cake
},
{
name: 'Flower Cake 2',
imgSrc: Flower_Cake_2
},
{
name: 'Flower Cake 3',
imgSrc: Flower_Cake_3
},
{
name: 'Fortnite Cake',
imgSrc: Fortnite_Cake
},
{
name: 'Frozen Cake',
imgSrc: Frozen_Cake
},
{
name: 'Macaron Cake',
imgSrc: Macaron_Cake
},
{
name: 'Macaron Cake 2',
imgSrc: Macaron_Cake_2
},
{
name: 'Mickey Mouse Cake',
imgSrc: Mickey_Mouse_Cake
},
{
name: 'M M Cake',
imgSrc: M_M_Cake
},
{
name: 'Panda Cake',
imgSrc: Panda_Cake
},
{
name: 'Paris Cake',
imgSrc: Paris_Cake
},
{
name: 'Pink Cake',
imgSrc: Pink_Cake
},
{
name: 'Pink Cake 2',
imgSrc: Pink_Cake_2
},
{
name: 'Pink Cake 3',
imgSrc: Pink_Cake_3
},
{
name: 'Present Cake',
imgSrc: Present_Cake
},
{
name: 'Purple Cake',
imgSrc: Purple_Cake
},
{
name: 'Rocket Cake',
imgSrc: Rocket_Cake
},
{
name: 'Rose Cake',
imgSrc: Rose_Cake
},
{
name: 'Rose Cake 2',
imgSrc: Rose_Cake_2
},
{
name: 'Rose Cake 3',
imgSrc: Rose_Cake_3
},
{
name: 'Strawberry Cake',
imgSrc: Strawberry_Cake
},
{
name: 'Strawberry Chocolate Cake',
imgSrc: Strawberry_Chocolate_Cake
},
{
name: 'Sunflower Cupcake',
imgSrc: Sunflower_Cupcake
},
{
name: 'Sweet 16 Cake',
imgSrc: Sweet_16_Cake
},
{
name: 'White Chocolate Cake',
imgSrc: White_Chocolate_Cake
},
{
name: 'White Flower Cake',
imgSrc: White_Flower_Cake
},
{
name: 'Wine Cake',
imgSrc: Wine_Cake
},
];

var Desserts = [
  {
  name: 'Arroz Doce',
  imgSrc: Arroz_Doce,
  },
  {
  name: 'Bolo De Arroz',
  imgSrc: Bolo_De_Arroz,
  },
  {
  name: 'Bolo De Berlim Custard',
  imgSrc: Bolo_De_Berlim_Custard,
  },
  {
  name: 'Bolo De Berlim Nutella',
  imgSrc: Bolo_De_Berlim_Nutella,
  },
  {
  name: 'Bolo De Coco 2',
  imgSrc: Bolo_De_Coco_2,
  },
  {
  name: 'Bolos De Berlim',
  imgSrc: Bolos_De_Berlim,
  },
  {
  name: 'Broa De Noz',
  imgSrc: Broa_De_Noz,
  },
  {
  name: 'Broa De Noz 2',
  imgSrc: Broa_De_Noz_2,
  },
  {
  name: 'Cavacas',
  imgSrc: Cavacas,
  },
  {
  name: 'Chocolate Mousse',
  imgSrc: Chocolate_Mousse,
  },
  {
  name: 'Coconut Pastry',
  imgSrc: Coconut_Pastry,
  },
  {
  name: 'Croissant Chocolate',
  imgSrc: Croissant_Chocolate,
  },
  {
  name: 'Malassadas',
  imgSrc: Malassadas,
  },
  {
  name: 'Natas',
  imgSrc: Natas,
  },
  {
  name: 'Natas Com Nutella',
  imgSrc: Natas_Com_Nutella,
  },
  {
  name: 'Natas Do Ceu',
  imgSrc: Natas_Do_Ceu,
  },
  {
  name: 'Pastry 1',
  imgSrc: Pastry_1,
  },
  {
  name: 'Pastry Almond Tart',
  imgSrc: Pastry_Almond_Tart,
  },
  {
  name: 'Pastry Feijao',
  imgSrc: Pastry_Feijao,
  },
  {
  name: 'Pastry Feijao 2',
  imgSrc: Pastry_Feijao_2,
  },
  {
  name: 'Portuguese Mille Feuille',
  imgSrc: Portuguese_Mille_Feuille,
  },
  {
  name: 'Pudim Flan',
  imgSrc: Pudim_Flan,
  },
  {
  name: 'Sicilian Cannoli',
  imgSrc: Sicilian_Cannoli,
  },
  {
  name: 'Strawberry Cheesecake',
  imgSrc: Strawberry_Cheesecake,
  },
  {
  name: 'Tiramisu',
  imgSrc: Tiramisu,
  },
  {
  name: 'Torta Da Laranja',
  imgSrc: Torta_Da_Laranja,
  },
  {
  name: 'Walnut Cheesecake',
  imgSrc: Walnut_Cheesecake,
  },
  ];
  

var Hot_Table = [
  {
    name: 'Beef Croquette',
    imgSrc: Beef_Croquette,

  },
  {
    name: 'Bifana',
    imgSrc: Bifana,

  },
  {
    name: 'Bifana 2',
    imgSrc: Bifana_2,

  },
  {
    name: 'Bifana 3',
    imgSrc: Bifana_3,

  },
  {
    name: 'Bolo de Bacalhau',
    imgSrc: Bolo_de_Bacalhau,

  },
  {
    name: 'Caldo Verde',
    imgSrc: Caldo_Verde,

  },
  {
    name: 'Deli Sandwich',
    imgSrc: Deli_Sandwich,

  },
  {
    name: 'Rissois De Camarao',
    imgSrc: Rissois_De_Camarao,

  },
  {
    name: 'Rissol De Atum',
    imgSrc: Rissol_De_Atum,

  },
  {
    name: 'Sopa De Spinafres',
    imgSrc: Sopa_De_Spinafres,

  },
  {
    name: 'Sopa Do Marisco',
    imgSrc: Sopa_Do_Marisco,

  },
];

function App() {
  return (
    <div className="App">
      <Router basename={process.env.REACT_APP_PUBLIC_URL}>
        <ScrollToTop>
          <NavBar />
          <img src={LeftGrain} alt="trigo" className="HeaderAccent" />
          <img src={RightGrain} alt="trigo" className="HeaderAccent" />
          <Switch>
            <Route path="/breads" exact>
              <ProductPage
                products={Breads}
                productType="breads"
                productDescription={
                  "Trigo’s a local family-run bakery specializing in Portuguese bread, cake, and pastries. Located in Mississuaga, Ontario."
                }
              />
            </Route>
            <Route path="/hot-table" exact>
              <ProductPage
                products={Hot_Table}
                productType="hot-table"
                productDescription={
                  "Trigo’s a local family-run bakery specializing in Portuguese bread, cake, and pastries. Located in Mississuaga, Ontario."
                }
              />
            </Route>
            <Route path="/cakes" exact>
              <ProductPage
                products={Cakes}
                productType="cakes"
                productDescription={
                  "Trigo’s a local family-run bakery specializing in Portuguese bread, cake, and pastries. Located in Mississuaga, Ontario."
                }
              />
            </Route>
            <Route path="/desserts" exact>
              <ProductPage
                products={Desserts}
                productType="desserts"
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
