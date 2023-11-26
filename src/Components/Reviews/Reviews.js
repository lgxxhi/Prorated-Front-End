import React from "react";
import StarRating from "../StarRating/StarRating";
import "./Reviews.css";

function Reviews({ reviews }) {
  // console.log(reviews);
  return (
    <div>
      {reviews.map((review) => {
        return (
          <div className="review-card">
            <div className="review-card-header">
              <span>{review.name}</span>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="review-card-body">
              <p className="review-card-text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
