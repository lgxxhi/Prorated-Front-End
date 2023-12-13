import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { useAuth } from "../Firebase/AuthContext";
import moment from "moment";
import "./Reviews.css";

function Reviews({ reviews, contractor }) {
  const { authUser } = useAuth();
  console.log(contractor);
  const navigate = useNavigate();

  return (
    <div className="review-card-container">
      {reviews.map((review) => {
        return (
          <div className="review-card" key={review.id}>
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
                {authUser ? (
                  <i
                    onClick={() => navigate("/chats")}
                    className="bx bx-message-rounded"
                  ></i>
                ) : (
                  <i
                    onClick={() => navigate("/login-signup")}
                    className="bx bx-message-rounded"
                  ></i>
                )}{" "}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
