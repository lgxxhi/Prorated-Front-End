import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ContractorCard.scss";
import StarRating from "../../../ReactComponents/StarRating/StarRating";
import { motion } from "framer-motion";
import { getContractorReviews } from "../../../Api/Api";

function ContractorCard({ contractor }) {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState();
  const randomNumber = Math.floor(Math.random() * (70 - 65 + 1) + 65);
  const getReviews = async () => {
    try {
      const data = await getContractorReviews(contractor.id);
      setReviews(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getRatingAverage = (reviews) => {
    let sum = 0;
    reviews.forEach((x) => (sum += x.rating));
    return sum / reviews.length;
  };

  useEffect(() => {
    getReviews();
  }, []);

  return loading ? (
    <div className="loader"></div>
  ) : (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      // transition={{ duration: 1 }}
      className="contractor-card"
    >
      {console.log(reviews)}
      <Link
        to={`/profile/${contractor.id}`}
        key={contractor.id}
        style={{ textDecoration: "none" }}
        className="profile-card"
      >
        <div className="profile-split">
          <div className="image">
            <img className="profile-img" alt="#" src={contractor.logo} />
          </div>
          <div className="card-content">
            <div className="text-data">
              <span className="name">{contractor.name}</span>
            </div>

            <div className="ratings">
              <div style={{ display: "flex", alignItems: "center" }}>
                <StarRating rating={getRatingAverage(reviews)} />
                <span
                  style={{ fontSize: "small", color: "black" }}
                  className="count-span"
                >
                  {reviews.length ? ` (${reviews.length})` : " (0)"}
                </span>
              </div>
            </div>
            <div className="hires">
              <span>
                <i className="bx bx-trophy"></i>
                <small> {randomNumber} hires on ProRated</small>
              </span>
              <span>
                <i className="bx bx-been-here"></i>
                <small>
                  <span className="bold">
                    Area: <span>{contractor.location}</span>
                  </span>
                </small>
              </span>
            </div>
          </div>
        </div>

        <div className="card-side">
          <div className="contact">
            <span>
              <i className="bx bx-message-rounded"></i>
            </span>
            <span>
              <small> Contact For Price</small>
            </span>
          </div>
          <button className="more-details">More Details</button>
        </div>
      </Link>
    </motion.div>
  );
}

export default ContractorCard;
