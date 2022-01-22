import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Switch, Route } from "react-router-dom";

import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";

import { fetchProductsStart } from './redux/product/product.actions';

import ProductRoute from "./pages/product/product-route.component";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  console.log(process.env.NODE_ENV);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/product" component={ProductRoute} />
      </Switch>
    </div>
  );
}

export default App;
