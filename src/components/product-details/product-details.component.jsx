import React from "react";

import "./product-details.styles.scss";

const ProductDetails = ({ product }) => {
  const { title, price, description, image, productCode } = product;
  return (
    <div className="product-details">
      <div className="image">
        <img src={`${image}`} alt={title} />
      </div>
      <div className="product-info">
        <h4 className="product-title">{title}</h4>
        <div className="product-code">
          <div>ProductCode</div>
          <div>{productCode}</div>
        </div>
        <div className="product-description">{description}</div>
        <h1 className="price">${price.toFixed(2)}</h1>
        <button className="btn primary-btn btn-xl">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
