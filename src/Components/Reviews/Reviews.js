import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import moment from "moment";
import "./Reviews.scss";

function Reviews({ reviews, contractor }) {
  console.log(contractor);
  const navigate = useNavigate();

  return (
    <div className="review">
      <p className="review__title">Reviews</p>
      {reviews.map((review) => {
        return (
          <div className="review__card">
            <div className="review__card__header">
              <div className="review__card__header__name">
                <p>{review.name}</p>
                <span>
                  <i
                    onClick={() => navigate("/chats")}
                    className="bx bx-message-rounded"
                  ></i>
                </span>
              </div>
              <span>
                <StarRating rating={review.rating} />
              </span>
            </div>
            <p className="review__card__date">
              {" "}
              {moment(review.date).fromNow()}
            </p>
            <div className="review__card__body">
              <p className="review__card__body--text">{review.review}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
