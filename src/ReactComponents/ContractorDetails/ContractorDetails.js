import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { fetchContractorDetails } from "../../Api/usersAPI";
import ContractorReviewDetails from "../ContractorReviewDetails/ContractorReviewDetails";
import StarRating from "../StarRating/StarRating";
import ContractorProfileImages from "./ContractorProfileImages";
import { UsersContext } from "../../context/UsersContext";
import DetailsAddContractorReview from "../DetailsAddContractorReview/DetailsAddContractorReview";
import { TbPencil } from "react-icons/tb";
import "./ContractorDetails.scss";
import { BiPhone } from "react-icons/bi";
import { MdLocationPin } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { UsersContext } from "../../context/UsersContext";

function ContractorDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userData } = useContext(UsersContext);

  const [contractorProfile, setContractorProfile] = useState({});
  const [logged, setLogged] = useState(false);
  const [div, setDiv] = useState(false);

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
    if (userData) {
      setLogged(true);
    }
  }, [id]);

  const openContact = (contactType, value) => {
    if (contactType === "email") {
      navigate(`/email/${value}`);
    } else if (contactType === "phone") {
      navigate(`/phone/${value}`);
    }
  };

  const isSignedIn = () => {
    if (userData) {
      setLogged(true);
    } else if (!userData) {
      setLogged(false);
      setDiv(true);
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
              <StarRating rating={contractorProfile.average_rating} />
              <span>
                {contractorProfile.count
                  ? `(${contractorProfile.count})`
                  : "(0)"}
              </span>
            </div>
          </div>

          <div className="contractor-details__profile__about">
            <p>{contractorProfile.description}</p>
          </div>

          <div className="contractor-details__profile__info">
            <p>
              <MdLocationPin />
              <b>Location:</b> {contractorProfile.location}
            </p>
            <p>
              <FaRegBuilding />
              <b>Experience:</b> {contractorProfile.experience} years
            </p>
            <p onClick={() => openContact("email", contractorProfile.contact)}>
              <MdOutlineEmail />
              <b>Email:</b>
              <Link to={`/email/${contractorProfile.contact}`}>
                {contractorProfile.contact}
              </Link>
            </p>
            <p
              onClick={(e) =>
                openContact("phone", contractorProfile.phone_number)
              }
            >
              <BiPhone />
              <b>Phone:</b>
              <Link to={`/phone/${contractorProfile.phone_number}`}>
                {contractorProfile.phone_number}
              </Link>
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
            <div className="contractor-details__details__reviews__header">
              <div className="contractor-details__details__reviews__header__star-reviews">
                <i className="contractor-details__details__reviews__header__header-star fa-regular fa-star"></i>
                <h3 className="contractor-details__details__reviews__header__title">
                  Reviews
                </h3>
              </div>
              <div className="contractor-details__details__reviews__header__button">
                <button onClick={isSignedIn}>
                  <TbPencil style={{ marginRight: "2px" }} />
                  Write A Review
                </button>
              </div>
            </div>

            {div ? (
              <div className="contractor-details__details__reviews__user-or-not">
                <div className="contractor-details__details__reviews__user-or-not__paragraph">
                  <p>
                    In order to reach our goal of a more transparent contractor
                    experience, you must have an account to leave a review. No
                    worries, it's really simple!
                  </p>
                </div>
                <div className="contractor-details__details__reviews__user-or-not__buttons">
                  <button
                    onClick={() => navigate("/login-signup")}
                    className="contractor-details__details__reviews__user-or-not__buttons__log-in"
                  >
                    Login
                  </button>
                  <button className="contractor-details__details__reviews__user-or-not__buttons__sign-up">
                    Sign Up
                  </button>
                </div>
              </div>
            ) : null}

            {logged ? <DetailsAddContractorReview /> : null}

            <ContractorReviewDetails />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContractorDetails;
