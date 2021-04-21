import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Cart from "../components/Cart/Cart";
import Checkout from "../components/Checkout/Checkout";
import Orders from "../components/Orders/Orders"; 
import AboutUs from '../components/AboutUs';

function RouterApp(){   

  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer   />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path= '/about-us'>
            <AboutUs/>
          </Route>
          <Route path="/">
            <Home />
            
            <ItemListContainer   />
          </Route>
        </Switch>
         
      </div>
    </Router>
  );
};

export default RouterApp;
