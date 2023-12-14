import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { useAuth } from "../Firebase/AuthContext";
import moment from "moment";
import "./Reviews.scss";

function Reviews({ reviews, contractor }) {
  const { authUser } = useAuth();
  console.log(contractor);
  const navigate = useNavigate();

  return (
    <>
      {reviews.map((review) => {
        return (
          <div className="review-card" key={review.id}>
            <div className="review-card__header">
              <p className="review-card__header__name">
                {review.name}
                <span className="review-card__header__name__chat">
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
              </p>

              <span className="review-card__header__stars">
                <StarRating rating={review.rating} />
              </span>
            </div>
            <div className="review-card__date">
              {" "}
              {moment(review.date).fromNow()}
            </div>
            <div className="review-card__body">
              <p className="review-card__body__text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Reviews;
