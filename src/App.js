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
import Caramel_Cake from './assets/new-products/Cakes/Caramel-Cake.jpg';
import Carrot_Cake from './assets/new-products/Cakes/Carrot-Cake.jpg';
import Chanel_Cake from './assets/new-products/Cakes/Chanel-Cake.jpg';
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
import Rose_Cake from './assets/new-products/Cakes/Rose-Cake.jpg';
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
import Cavacas from './assets/new-products/Desserts/Cavacas.jpg';
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
import Walnut_Cheesecake from './assets/new-products/Desserts/Walnut-Cheesecake.jpg';

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
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Broa Amarelo',
    imgSrc: Broa_Amarelo,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Broa Branco',
    imgSrc: Broa_Branco,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Calabrese Large',
    imgSrc: Calabrese_Large,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Calabrese Small',
    imgSrc: Calabrese_Small,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Grandpa Bread',
    imgSrc: Grandpa_Bread,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Large Bread',
    imgSrc: Large_Bread,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Large Bread 2',
    imgSrc: Large_Bread_2,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Large Bread 3',
    imgSrc: Large_Bread_3,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Large Bread 4',
    imgSrc: Large_Bread_4,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Large Bread 5',
    imgSrc: Large_Bread_5,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Large Bread 6',
    imgSrc: Large_Bread_6,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Nine Grain Bun',
    imgSrc: Nine_Grain_Bun,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Padas',
    imgSrc: Padas,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Pao Com Chorico',
    imgSrc: Pao_Com_Chorico,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Pao Davo',
    imgSrc: Pao_Davo,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Papo Seco',
    imgSrc: Papo_Seco,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Papo Seco Small',
    imgSrc: Papo_Seco_Small,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Ring Bread',
    imgSrc: Ring_Bread,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Vienna',
    imgSrc: Vienna,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
];

var Cakes = [
{
name: 'Bear Cake',
imgSrc: Bear_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Bird Cake',
imgSrc: Bird_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Birthday Cake',
imgSrc: Birthday_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Blossom Cake',
imgSrc: Blossom_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Blue Cake',
imgSrc: Blue_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Bolo De Cafe',
imgSrc: Bolo_De_Cafe,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Bolo De Caramel',
imgSrc: Bolo_De_Caramel,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Bolo De Maca',
imgSrc: Bolo_De_Maca,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Bolo De Mango',
imgSrc: Bolo_De_Mango,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Bolo De Marble',
imgSrc: Bolo_De_Marble,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Bolo De Noz',
imgSrc: Bolo_De_Noz,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Caramel Cake',
imgSrc: Caramel_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Carrot Cake',
imgSrc: Carrot_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Chanel Cake',
imgSrc: Chanel_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Chocolate Cake',
imgSrc: Chocolate_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Communion Cake',
imgSrc: Communion_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Communion Cake 2',
imgSrc: Communion_Cake_2,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Dragon Cake',
imgSrc: Dragon_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Flower Cake',
imgSrc: Flower_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Flower Cake 2',
imgSrc: Flower_Cake_2,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Flower Cake 3',
imgSrc: Flower_Cake_3,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Fortnite Cake',
imgSrc: Fortnite_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Frozen Cake',
imgSrc: Frozen_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Macaron Cake',
imgSrc: Macaron_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Macaron Cake 2',
imgSrc: Macaron_Cake_2,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Mickey Mouse Cake',
imgSrc: Mickey_Mouse_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'M M Cake',
imgSrc: M_M_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Panda Cake',
imgSrc: Panda_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Paris Cake',
imgSrc: Paris_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Pink Cake',
imgSrc: Pink_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Pink Cake 2',
imgSrc: Pink_Cake_2,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Pink Cake 3',
imgSrc: Pink_Cake_3,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Present Cake',
imgSrc: Present_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Purple Cake',
imgSrc: Purple_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Rocket Cake',
imgSrc: Rocket_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Rose Cake',
imgSrc: Rose_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Rose Cake 2',
imgSrc: Rose_Cake_2,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Rose Cake 3',
imgSrc: Rose_Cake_3,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Strawberry Cake',
imgSrc: Strawberry_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Strawberry Chocolate Cake',
imgSrc: Strawberry_Chocolate_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Sunflower Cupcake',
imgSrc: Sunflower_Cupcake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Sweet 16 Cake',
imgSrc: Sweet_16_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'White Chocolate Cake',
imgSrc: White_Chocolate_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'White Flower Cake',
imgSrc: White_Flower_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
{
name: 'Wine Cake',
imgSrc: Wine_Cake,
description: 'Id sit adipisicing non veniam ea proident commodo magna.'
},
];

var Desserts = [
  {
  name: 'Arroz Doce',
  imgSrc: Arroz_Doce,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Bolo De Arroz',
  imgSrc: Bolo_De_Arroz,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Bolo De Berlim Custard',
  imgSrc: Bolo_De_Berlim_Custard,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Bolo De Berlim Nutella',
  imgSrc: Bolo_De_Berlim_Nutella,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Bolo De Coco 2',
  imgSrc: Bolo_De_Coco_2,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Bolos De Berlim',
  imgSrc: Bolos_De_Berlim,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Broa De Noz',
  imgSrc: Broa_De_Noz,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Broa De Noz 2',
  imgSrc: Broa_De_Noz_2,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Cavacas',
  imgSrc: Cavacas,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Chocolate Mousse',
  imgSrc: Chocolate_Mousse,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Coconut Pastry',
  imgSrc: Coconut_Pastry,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Croissant Chocolate',
  imgSrc: Croissant_Chocolate,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Malassadas',
  imgSrc: Malassadas,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Natas',
  imgSrc: Natas,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Natas Com Nutella',
  imgSrc: Natas_Com_Nutella,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Natas Do Ceu',
  imgSrc: Natas_Do_Ceu,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Pastry 1',
  imgSrc: Pastry_1,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Pastry Almond Tart',
  imgSrc: Pastry_Almond_Tart,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Pastry Feijao',
  imgSrc: Pastry_Feijao,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Pastry Feijao 2',
  imgSrc: Pastry_Feijao_2,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Portuguese Mille Feuille',
  imgSrc: Portuguese_Mille_Feuille,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Pudim Flan',
  imgSrc: Pudim_Flan,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Sicilian Cannoli',
  imgSrc: Sicilian_Cannoli,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Strawberry Cheesecake',
  imgSrc: Strawberry_Cheesecake,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Tiramisu',
  imgSrc: Tiramisu,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Torta Da Laranja',
  imgSrc: Torta_Da_Laranja,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
  name: 'Walnut Cheesecake',
  imgSrc: Walnut_Cheesecake,
  description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  ];
  

var Hot_Table = [
  {
    name: 'Beef Croquette',
    imgSrc: Beef_Croquette,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Bifana',
    imgSrc: Bifana,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Bifana 2',
    imgSrc: Bifana_2,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Bifana 3',
    imgSrc: Bifana_3,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Bolo de Bacalhau',
    imgSrc: Bolo_de_Bacalhau,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Caldo Verde',
    imgSrc: Caldo_Verde,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Deli Sandwich',
    imgSrc: Deli_Sandwich,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Rissois De Camarao',
    imgSrc: Rissois_De_Camarao,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Rissol De Atum',
    imgSrc: Rissol_De_Atum,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Sopa De Spinafres',
    imgSrc: Sopa_De_Spinafres,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
  {
    name: 'Sopa Do Marisco',
    imgSrc: Sopa_Do_Marisco,
    description: 'Id sit adipisicing non veniam ea proident commodo magna.'
  },
];

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
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
