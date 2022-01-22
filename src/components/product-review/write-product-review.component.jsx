import React, { useCallback, useState } from "react";
// import { useDispatch } from "react-redux";

import { FiStar } from "react-icons/fi";

import "./write-product-review.styles.scss";

const WriteProductReview = ({ product }) => {
  const { id } = product;
  const defaultReview = {
    id,
    name: "",
    email: "",
    rating: 0,
    comment: "",
    slug: "",
  };

  const [review, setReview] = useState(defaultReview);
  // const dispatch = useDispatch();

  const handleRating = useCallback((i) => {
    setReview({ ...review, rating: i + 1 })
  }, [review]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!review.name || !review.email || !review.comment) return true;
    const slug = `${review.rating}_star${review.rating === 1 ? "" : "s"}`;
    setReview({ ...review, slug});
    console.log(review);
    // dispatch();
  }

  const handleChange = useCallback((e) => {
    setReview({ ...review, [e.target.name]: e.target.value })
  }, [review]);

  return (
    <div className="write-review">
      <h4>Review this product</h4>
      <p>Share your thoughts with other customers</p>
      <div className="review-body">
        <form className="product-review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={review.name}
            placeholder="Enter names"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={review.email}
            placeholder="Enter email"
            onChange={handleChange}
          />

          <div className="rating-stars">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <FiStar
                  fontSize="20"
                  cursor="pointer"
                  onMouseOver={() => handleRating(i)}
                  onClick={() => handleRating(i)}
                  key={i}
                  fill={i < review.rating ? "#f59e0c" : "#fff"}
                  color={i < review.rating ? "#f59e0c" : "#000"}
                />
              ))}
          </div>

          <textarea
            placeholder="Enter Comments"
            name="comment"
            value={review.comment}
            onChange={handleChange}
          ></textarea>
          <div>
            <button type="submit" className="btn info-btn primary-btn">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WriteProductReview;
