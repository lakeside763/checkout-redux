import React from "react";

import { useSelector } from "react-redux";
import ProductList from "../../components/product-list/product-list.component";

import { selectIsProductsFetching } from "../../redux/product/product.selector";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const ProductListWithSpinner = WithSpinner(ProductList);

const Homepage = () => {
  const isLoading = useSelector(selectIsProductsFetching);
  return (
    <div>
      <ProductListWithSpinner isLoading={isLoading} />
    </div>
  );
};

export default Homepage;
