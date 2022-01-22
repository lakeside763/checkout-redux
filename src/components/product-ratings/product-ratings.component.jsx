import React from "react";

import "./product-ratings.scss";

const ProductRatings = ({
  product: { ratings, averageRating, totalReviews },
}) => {
  return (
    <div className="product-ratings">
      <h4 className="ratings">Product Ratings</h4>
      <div className="graph-analysis">
        <div className="graph">
          {ratings.map((rating) => {
            const { slug, percentage } = rating;
            return (
              <div className="rating" key={slug}>
                <div className="star">{slug.replace("_", " ")}</div>
                <div className="bar">
                  <div
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="percentage">{percentage}%</div>
              </div>
            );
          })}
        </div>
        <div className="summary">
          {averageRating} out of {totalReviews}
        </div>
      </div>
    </div>
  );
};

export default ProductRatings;
