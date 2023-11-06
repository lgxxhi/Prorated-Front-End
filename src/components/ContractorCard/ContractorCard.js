import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContractorCard.css";

import ServicesOffered from "../ServicesOffered/ServicesOffered";

function ContractorCard(contractorData) {
  console.log(contractorData.contractorData.contractorData);

  const [contractorListings, setContractorListings] = useState(
    contractorData.contractorData.contractorData
  );

  function handleStars(rating) {
    let rounded = Math.round(rating / 0.5) * 0.5;

    return rounded;
  }

  return (
    <div className="contractor-card">
      {contractorListings.length > 0
        ? contractorListings.map((item) => {
            return (
              <div key={item.id} className="profile-card">
                <div className="profile-split">
                  <div className="image">
                    <img className="profile-img" src={item.img} />
                  </div>
                  <div className="card-content">
                    <div className="text-data">
                      <span className="name">{item.business_name}</span>
                    </div>

                    <div className="ratings">
                      {handleStars(item.rating)}
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star-half"></i>
                      <span className="review-count">
                        <small>({item.reviews})</small>
                      </span>
                    </div>
                    <div className="hires">
                      <span>
                        <i className="bx bx-trophy"></i>
                        <small> 54 hires on ProRated</small>
                      </span>
                      <span>
                        <i className="bx bx-been-here"></i>
                        <small>
                          <span className="bold">Area:</span> Manhattan,
                          Brooklyn
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
                <div className="services">
                  <h2 className="show">
                    <i class="bx bx-chevron-down"></i>
                  </h2>

                  <div className="hide">
                    <ServicesOffered />
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default ContractorCard;
