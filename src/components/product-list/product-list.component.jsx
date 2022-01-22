import React from "react";
import { useSelector } from "react-redux";

import ProductItem from "../product-item.jsx/prodcut-item.component";

import { selectProductList } from "../../redux/product/product.selector";
import "./product-list.styles.scss";

const ProductList = () => {
  const productList = useSelector(selectProductList);
  return (
    <div className="product-list container">
      <div className="list">
        {productList.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
