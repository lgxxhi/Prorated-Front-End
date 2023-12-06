import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchContractorDetails } from "../../common/usersAPI";
import "./ContractorDetails.css";
import Reviews from "../Reviews/Reviews";
import ContractorReviewDetails from "../ContractorReviewDetails/ContractorReviewDetails";
import StarRating from "../StarRating/StarRating";
import ContractorProfileImages from "./ContractorProfileImages";
function ContractorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contractorProfile, setContractorProfile] = useState({});
  useEffect(() => {
    const fetchContractor = async () => {
      try {
        let result = await fetchContractorDetails(id);
        setContractorProfile(result.data.data.contractor);
        console.log(result.data.data.contractor);
      } catch (error) {
        console.error("Error fetching contractor details:", error);
      }
    };
    fetchContractor();
  }, [id]);
  console.log(contractorProfile.images);
  return (
    <div className="contractor-profile-container">
      <div className="container-details">
        <div
          className="profile-header"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div className="image">
            <img className="profile-img" src="https://picsum.photos/200/300" />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <h3>{contractorProfile.name}</h3>
            <div className="ratings">
              <div style={{ display: "flex", alignItems: "center" }}>
                <StarRating rating={contractorProfile.average_rating} />
                <span style={{ fontSize: "small" }} className="count-span">
                  {contractorProfile.count ? `(${contractorProfile.count})` : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-info-description">
          <p>
            <b>Location</b>: {contractorProfile.location}
          </p>
          <p>
            <b>Experience</b>: {contractorProfile.experience} years
          </p>
          <p>
            {" "}
            <b> Contact </b> : {contractorProfile.contact}
          </p>
          <p>
            <b> Phone Number </b>: {contractorProfile.phone_number}
          </p>
        </div>
      </div>
      <hr />
      <div className="description">
        <h3>About {contractorProfile.name}</h3>
        <p>{contractorProfile.description}</p>
      </div>
      <hr />
      <div className="past-jobs">
        <h3>Past Jobs</h3>

        {contractorProfile.images && contractorProfile.images.length > 0 ? (
          <ContractorProfileImages images={contractorProfile.images} />
        ) : (
          <p>No past jobs available</p>
        )}
      </div>
      <hr />
      <ContractorReviewDetails />
      <button
        onClick={() =>
          navigate(`/contractors/${contractorProfile.id}/addReview`)
        }
        className="more-details"
      >
        Add Review
      </button>
    </div>
  );
}

export default ContractorDetails;
