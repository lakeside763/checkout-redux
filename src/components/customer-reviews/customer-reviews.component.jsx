import React from "react";

import './customer-reviews.styles.scss';

const CustomerReviews = () => {
  return (
    <div className="customer-reviews">
      <h4>Customer Reviews</h4>
      <div className="reviews">
        <div className="review-list">
          <div className="flex-item">
            <div>Moses</div>
            <div>January 2, 2022</div>
          </div>
          <div className="flex-item">
            <div>Stars</div>
            <div>Description</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
