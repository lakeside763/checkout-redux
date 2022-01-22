import React from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectProductItem } from "../../redux/product/product.selector";

import "./product.styles.scss";
import ProductDetails from "../../components/product-details/product-details.component";
import ProductRatings from "../../components/product-ratings/product-ratings.component";
import WriteProductReview from "../../components/product-review/write-product-review.component";
import CustomerReviews from "../../components/customer-reviews/customer-reviews.component";

const ProductPage = () => {
  const { productId } = useParams();
  const product = useSelector(selectProductItem(productId));

  console.log(product);

  return (
    <div className="product-page container">
      <ProductDetails product={product} />
      <div className="product-reviews">
        <ProductRatings product={product} />
        <WriteProductReview product={product} />
      </div>
      <CustomerReviews product={product} />
    </div>
  );
};

export default ProductPage;
