import React from "react";
import StarRating from "../StarRating/StarRating";
import moment from "moment";
import "./Reviews.css";

function Reviews({ reviews, contractor }) {
  console.log(contractor);

  return (
    <div className="review-card-container">
      {reviews.map((review) => {
        return (
          <div className="review-card">
            <div className="review-card-header">
              <span>{review.name}</span>
              <div> {moment(review.date).fromNow()}</div>
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
