import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./containers/LandingPage/LandingPage";
import MenuPage from "./containers/MenuPage/MenuPage";
import ProductCard from './components/ProductCard/ProductCard';

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products">
            <ProductCard/>
          </Route>
          <Route path="/menu" exact>
            <MenuPage />
          </Route>
          <Route path="/" exact>
            <LandingPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
