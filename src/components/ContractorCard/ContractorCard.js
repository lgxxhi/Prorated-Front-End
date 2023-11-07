import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ContractorCard.css";

import ServicesOffered from "../ServicesOffered/ServicesOffered";

function ContractorCard(contractorData) {
  const [contractorListings, setContractorListings] = useState(
    contractorData.contractorData.contractorData
  );

  function handleStars(rating) {
    let rounded = Math.round(rating / 0.5) * 0.5;
    let arr = [];

    for (let i = rounded; i <= 5; i--) {
      if (i > 0.5) {
        arr.push(<i className="bx bxs-star"></i>);
      } else if (i <= 0.5) {
        arr.push(<i className="bx bxs-star-half"></i>);
      } else {
        arr.push(<i class="bx bx-star"></i>);
      }
    }
    console.log(arr);
    // return arr;
  }

  return (
    <div className="contractor-card">
      {contractorListings.length > 0
        ? contractorListings.map((item) => {
            return (
              <Link
                key={item.id}
                style={{ textDecoration: "none" }}
                className="profile-card"
              >
                <div className="profile-split">
                  <div className="image">
                    <img className="profile-img" alt="#" src={item.img} />
                  </div>
                  <div className="card-content">
                    <div className="text-data">
                      <span className="name">{item.business_name}</span>
                    </div>

                    <div className="ratings">
                      {handleStars(item.rating)}
                      {/* <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star"></i>
                      <i className="bx bxs-star-half"></i> */}
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
                  <div className="show">
                    <i className="bx bx-chevron-down"></i>
                  </div>

                  <div className="hide">
                    <ServicesOffered contractorData={item} />
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
}

export default ContractorCard;
