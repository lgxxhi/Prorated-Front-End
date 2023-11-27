import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContractorCard.css";
import { v4 as uuidv4 } from "uuid";

import ServicesOffered from "../ServicesOffered/ServicesOffered";
import StarRating from "../StarRating/StarRating";
import { motion } from "framer-motion";

function ContractorCard({ contractor }) {
  function handleStars(rating) {
    let rounded = Math.round(rating / 0.5) * 0.5;
    let arr = [];

    for (let i = rounded; i >= 1; i--) {
      arr.push(<i key={uuidv4()} className="bx bxs-star"></i>);
      if (i == 1.5) {
        arr.push(<i key={uuidv4()} className="bx bxs-star-half"></i>);
      }
    }
    for (let i = 5 - rounded; i >= 1; i--) {
      arr.push(<i key={uuidv4()} className="bx bx-star"></i>);
    }
    return arr;
  }

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      // transition={{ duration: 1 }}
      className="contractor-card"
    >
      <Link
        to={`/profile/${contractor.id}`}
        key={contractor.id}
        style={{ textDecoration: "none" }}
        className="profile-card"
      >
        <div className="profile-split">
          <div className="image">
            <img
              className="profile-img"
              alt="#"
              src="https://picsum.photos/200/300"
            />
          </div>
          <div className="card-content">
            <div className="text-data">
              <span className="name">{contractor.name}</span>
            </div>

            <div className="ratings">
              <div style={{ display: "flex", alignItems: "center" }}>
                <StarRating rating={contractor.average_rating} />
                <span style={{ fontSize: "small" }} className="count-span">
                  {contractor.count ? `(${contractor.count})` : 0}
                </span>
              </div>
            </div>
            <div className="hires">
              <span>
                <i className="bx bx-trophy"></i>
                <small> 54 hires on ProRated</small>
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
