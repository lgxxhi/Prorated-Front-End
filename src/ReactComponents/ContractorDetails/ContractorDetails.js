import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchContractorDetails } from "../../Api/usersAPI";
import ContractorReviewDetails from "../ContractorReviewDetails/ContractorReviewDetails";
import StarRating from "../StarRating/StarRating";
import ContractorProfileImages from "./ContractorProfileImages";
import "./ContractorDetails.scss";
import { BiPhone } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

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

  const openContact = (contactType) => {
    if (contactType === "email") {
      window.location.href = `mailto:${contractorProfile.contact}`;
    } else if (contactType === "phone") {
      window.location.href = `mailto:${contractorProfile.phone_number}`;
    }
  };

  return (
    <div className="contractor-details-container">
      <div className="contractor-details">
        <div className="contractor-details__profile">
          <div className="contractor-details__profile__profile-img">
            <img
              className="contractor-details__profile__profile-img__profile-picture"
              src={contractorProfile.logo}
              alt=""
            />
          </div>
          <div className="contractor-details__profile__title">
            <h3 className="contractor-details__profile__title__name">
              {contractorProfile.name}
            </h3>
            <div className="contractor-details__profile__title__ratings">
              <span>
                {contractorProfile.count ? `${contractorProfile.count}` : 0}
              </span>

              <StarRating rating={contractorProfile.average_rating} />
            </div>
          </div>

          <div className="contractor-details__profile__about">
            <p>{contractorProfile.description}</p>
          </div>

          <div className="contractor-details__profile__info">
            <p>
              <MdLocationPin />
              <b>Location</b>: {contractorProfile.location}
            </p>
            <p>
              <FaRegBuilding />
              <b>Experience</b>: {contractorProfile.experience} years
            </p>
            <p>
              <MdOutlineEmail />
              <b> Email </b> : {contractorProfile.contact}
            </p>
            <p>
              <BiPhone />
              <b> Phone Number </b>: {contractorProfile.phone_number}
            </p>
          </div>
        </div>
        <div className="contractor-details__details">
          <div className="contractor-details__details__past-jobs">
            {contractorProfile.images && contractorProfile.images.length > 0 ? (
              <ContractorProfileImages images={contractorProfile.images} />
            ) : (
              <p>No past jobs available</p>
            )}
          </div>
          <div className="contractor-details__details__reviews">
            <ContractorReviewDetails />
            <div className="contractor-details__details__reviews__button">
              <button
                onClick={() =>
                  navigate(`/contractors/${contractorProfile.id}/addReview`)
                }
                className="more-details"
              >
                Add Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractorDetails;
