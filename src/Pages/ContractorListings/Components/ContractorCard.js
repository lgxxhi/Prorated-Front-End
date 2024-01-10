import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ContractorCard.css";
import StarRating from "../../../ReactComponents/StarRating/StarRating";
import { motion } from "framer-motion";
import { getContractorReviews } from "../../../Api/Api";

function ContractorCard({ contractor }) {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState();
  const randomNumber = Math.floor(Math.random() * 50) + 2;
  const getReviews = async () => {
    try {
      const data = await getContractorReviews(contractor.id);
      setReviews(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
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
                <StarRating rating={reviews.length} />
                <span style={{ fontSize: "small" }} className="count-span">
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
