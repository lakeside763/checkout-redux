import React from "react";
import { FiStar } from "react-icons/fi";
import { useHistory } from "react-router-dom/";

import "./product-item.styles.scss";

const ProductItem = ({ product }) => {
  const history = useHistory();
  const { id, title, image, price, averageRating, totalReviews } = product;
  return (
    <div className="item-card" onClick={() => history.push(`/product/${id}`)}>
      <div className="image">
        <img src={`${image}`} alt="product" />
      </div>
      <div className="item-card-body">
        <h4 className="title">{title}</h4>
        <p className="price">${price}</p>
        <div className="sold-by"></div>
        <div className="ratings">
          <div className="stars">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <FiStar
                  key={i}
                  fontSize="12"
                  fill={i < Math.round(averageRating) ? "#f59e0c" : "#cfdde4"}
                  color={i < Math.round(averageRating) ? "#f59e0c" : "#cfdde4"}
                />
              ))}
          </div>
          <div className="text">{totalReviews} review</div>
        </div>
        <button type="button" className="btn primary-btn btn-large">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
