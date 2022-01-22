import React from "react";
import { Route } from "react-router-dom";

import ProductPage from "./product-page.component";

import "./product.styles.scss";

const ProductRoute = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}/:productId`} component={ProductPage} />
    </div>
  );
};

export default ProductRoute;
