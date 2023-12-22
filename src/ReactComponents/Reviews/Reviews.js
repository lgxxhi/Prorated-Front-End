import React from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import { useAuth } from "../Firebase/AuthContext";
import moment from "moment";
import "./Reviews.css";
// import "./Reviews.scss";

function Reviews({ reviews, contractor }) {
  const { authUser } = useAuth();
  console.log(contractor);
  const navigate = useNavigate();
  console.log(reviews);

  return (
    <div className="reviewList">
      {reviews.map((review) => {
        console.log(review);
        return (
          <div className="review-card" key={review.id}>
            <div className="review-card-header">
              <div className="review-card-image">
                <img alt="#" src="https://picsum.photos/200/300" />
              </div>
              <div className="review-card-header-content">
                <div className="review-card-name">
                  <p>{review.name}</p>
                </div>

                <div className="review-card-info">
                  <StarRating rating={review.rating} />
                  <div className="info-line">|</div>
                  <div>
                    <i class="fa-regular fa-calendar"></i>{" "}
                    {moment(review.date).fromNow()}
                  </div>
                  <div className="info-line">|</div>
                  <div className="chat-div">
                    <div>
                      {authUser ? (
                        <div onClick={() => navigate("/chats")}>
                          {" "}
                          <i
                            style={{
                              marginRight: "4px",
                              color: "hsl(229, 100%, 71%)",
                            }}
                            className="fa-regular fa-comments"
                          ></i>
                          <div
                            style={{
                              fontWeight: "500",
                              color: "hsl(229, 100%, 71%)",
                            }}
                          >
                            Chat With {review.name}
                          </div>
                        </div>
                      ) : (
                        <div onClick={() => navigate("/login-signup")}>
                          <i
                            style={{
                              marginRight: "4px",
                              color: "hsl(229, 100%, 71%)",
                            }}
                            className="fa-regular fa-comments"
                          ></i>
                          <div
                            style={{
                              fontWeight: "500",
                              color: "hsl(229, 100%, 71%)",
                            }}
                          >
                            Chat With {review.name}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="review-card-review">{review.review}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Reviews;
