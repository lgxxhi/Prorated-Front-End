import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchContractorDetails } from "../../common/usersAPI";
import "./ContractorDetails.css";
import ContractorReviewDetails from "../ContractorReviewDetails/ContractorReviewDetails";
import StarRating from "../StarRating/StarRating";

function ContractorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [contractorProfile, setContractorProfile] = useState({});
  useEffect(() => {
    const fetchContractor = async () => {
      try {
        let result = await fetchContractorDetails(id);
        setContractorProfile(result.data.data.contractor);
        console.log(result.data.data);
      } catch (error) {
        console.error("Error fetching contractor details:", error);
      }
    };
    fetchContractor();
  }, [id]);

  return (
    <div className="contractor-profile-container">
      <div className="container-details">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="image">
            <img
              className="profile-img"
              src="https://picsum.photos/200/300"
              alt=""
            />
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
        <p>Location: {contractorProfile.location}</p>
        <p>Experience: {contractorProfile.experience} years</p>
        <p>Contact: {contractorProfile.contact}</p>
        <p>Phone Number: {contractorProfile.phone_number}</p>
      </div>
      <div>
        <h3>About {contractorProfile.name}</h3>
        <p>{contractorProfile.description}</p>
      </div>
      <div className="past-jobs">
        <h3>Past Jobs</h3>
        {contractorProfile.pastjobs && contractorProfile.pastjobs.length > 0 ? (
          <ul>
            {contractorProfile.pastjobs.map((job, index) => (
              <li key={index}>
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <img src={job.image} alt={`Job ${index + 1}`} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No past jobs available</p>
        )}
      </div>
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
