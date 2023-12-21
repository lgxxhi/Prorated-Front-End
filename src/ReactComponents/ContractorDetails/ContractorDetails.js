import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchContractorDetails } from "../../Api/usersAPI";
import ContractorReviewDetails from "../ContractorReviewDetails/ContractorReviewDetails";
import StarRating from "../StarRating/StarRating";
import ContractorProfileImages from "./ContractorProfileImages";
import DetailsAddContractorReview from "../DetailsAddContractorReview/DetailsAddContractorReview";
import { TbPencil } from "react-icons/tb";
import "./ContractorDetails.scss";

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
    <div className="contractor-details-container">
      <div className="contractor-details">
        <div className="contractor-details__profile">
          <img
            className="contractor-details__profile__profile-picture"
            src={contractorProfile.logo}
            alt=""
          />
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
          <hr />
          <div className="contractor-details__profile__about">
            <h3>Description</h3>
            <p>{contractorProfile.description}</p>
          </div>
          <hr />
          <div className="contractor-details__profile__info">
            <h3>Details</h3>
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
        <div className="contractor-details__details">
          <div className="contractor-details__details__past-jobs">
            <p>Past Jobs</p>
            {contractorProfile.images && contractorProfile.images.length > 0 ? (
              <ContractorProfileImages images={contractorProfile.images} />
            ) : (
              <p>No past jobs available</p>
            )}
          </div>

          <div className="contractor-details__details__reviews">
            <div className="contractor-details__details__reviews__header">
              <div className="contractor-details__details__reviews__header__star-reviews">
                <i className="contractor-details__details__reviews__header__header-star fa-regular fa-star"></i>
                <h3 className="contractor-details__details__reviews__header__title">
                  Reviews
                </h3>
              </div>
              <div className="contractor-details__details__reviews__header__button">
                <button
                  onClick={() =>
                    navigate(`/contractors/${contractorProfile.id}/addReview`)
                  }
                >
                  <TbPencil style={{ marginRight: "2px" }} />
                  Write A Review
                </button>
              </div>
            </div>
            <div className="contractor-details__details__reviews__user-or-not">
              <div className="contractor-details__details__reviews__user-or-not__paragraph">
                <p>
                  In order to reach our goal of a more transparent contractor
                  experience, you must have an account to leave a review. No
                  worries, it's really simple!
                </p>
              </div>
              <div className="contractor-details__details__reviews__user-or-not__buttons">
                <button className="contractor-details__details__reviews__user-or-not__buttons__log-in">
                  Login
                </button>
                <button className="contractor-details__details__reviews__user-or-not__buttons__sign-up">
                  Sign Up
                </button>
              </div>
            </div>
            <DetailsAddContractorReview />

            <ContractorReviewDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractorDetails;
