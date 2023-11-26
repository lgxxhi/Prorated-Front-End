import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import moment from "moment";
import "./Reviews.css";

function Reviews({ reviews, contractor }) {
  console.log(contractor);
  const navigate = useNavigate();

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
            <div className="contact">
              <span>
                <i
                  onClick={() => navigate("/login-signup")}
                  className="bx bx-message-rounded"
                ></i>
              </span>
              <span>
                <small> Contact For Price</small>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
