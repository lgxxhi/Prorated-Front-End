import React, { useEffect, useState, useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleUser } from "../../Api/usersAPI";
import "./UserProfile.css";
import moment from "moment";
import StarRating from "../../Components/StarRating/StarRating";
import "./UserProfile.scss";
import { MdLocationPin } from "react-icons/md";
import { MdStarBorder } from "react-icons/md";
import { TbTools } from "react-icons/tb";
import { MdOutlineEditNote } from "react-icons/md";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { MdOutlineCarpenter } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";

import ProjectListingsCards from "./ProjectListingsCards";

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const { userData } = useContext(UsersContext);
  console.log(userData);
  useEffect(() => {
    const fetchUserById = async () => {
      try {
        let result = await getSingleUser(id);
        console.log(result.data);

        setUserProfile(result.data.data.user);
        setUserReviews(result.data.data.reviews);
        // console.log(result.data.data.reviews);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserById();
  }, [id]);

  return (
    <div className="profile-details-container">
      <div className="profile_details">
        <div className="profile_details__user_info">
          <div className="profile_details__user_info__profile_img">
            <img
              className="profile_details__user_info__profile_img__profile_picture"
              src={userProfile.profile_picture}
              alt="profilepic"
            />
          </div>
          <div className="profile_details__user_info__title">
            <h3 className="profile_details__user_info__title__name">
              {userProfile.first_name} {userProfile.last_name}
            </h3>
          </div>
          <div className="profile_details__user_info__items">
            <div className="profile_details__user_info__items__container">
              <div className="profile_details__user_info__items__container__icon">
                <MdLocationPin />
              </div>
              <div>{userProfile.location}</div>
            </div>
            <div className="profile_details__user_info__items__container">
              <div className="profile_details__user_info__items__container__icon">
                <MdStarBorder />
              </div>
              <div>
                <b>{userProfile.count ? userProfile.count : 0}</b>{" "}
                {console.log(userProfile.count)}
                <span>{userProfile.count === "1" ? "Review" : "Reviews"}</span>
              </div>
            </div>
            <div className="profile_details__user_info__items__container">
              <div className="profile_details__user_info__items__container__icon">
                <TbTools />{" "}
              </div>
              <div>
                <b>
                  {userProfile.listings_count ? userProfile.listings_count : 0}
                </b>{" "}
                <span>
                  {userProfile.listings_count === "1" ? "Project" : "Projects"}
                </span>
              </div>
            </div>
          </div>
          <div className="profile_details__user_info__bio">
            <p>
              Business maverick by day, DIY warrior by weekend - that's me,
              Tommy! My Craftsman charmer is my canvas, and I love getting my
              hands dirty (paint-splattered too!). But when the pipes gurgle a
              plumbing symphony or the roof whispers wind secrets, I know it;s
              time to call in the big guns.
            </p>
          </div>
          <div className="profile_details__user_info__edit_profile">
            <button onClick={() => navigate(`/user-profile/${id}/edit`)}>
              <MdOutlineEditNote />
              Edtit Profile
            </button>
          </div>
        </div>
        <div className="profile_details__content">
          <div className="profile_details__content__project_listings">
            <div className="profile_details__content__project_listings__header">
              <h3 className="profile_details__content__project_listings__header__title">
                <TbTools /> Project Listings
              </h3>
              <div className="profile_details__content__project_listings__header__filter_buttons">
                <button>All</button>
                <button>Current</button>
                <button>Complete</button>
              </div>
            </div>
            <div className="profile_details__content__project_listings__cards">
              <ProjectListingsCards />
            </div>
          </div>
          <div className="profile_details__content__bottom_content">
            <div className="profile_details__content__bottom_content__saved">
              <div className="profile_details__content__bottom_content__saved__header">
                <h3>
                  <BsFillPersonVcardFill />
                  Saved Contractors
                </h3>
              </div>
              <div className="profile_details__content__bottom_content__saved__card_container">
                <div className="profile_details__content__bottom_content__saved__card_container__card">
                  <div className="profile_details__content__bottom_content__saved__card_container__card__card_header">
                    <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__image">
                      <img alt="#" src="https://picsum.photos/200/300" />
                    </div>
                    <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content">
                      <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__contractor_name">
                        <h4>Danny Plumbing</h4>
                      </div>
                      <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__items">
                        <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__items__type">
                          <HiOutlineWrenchScrewdriver />
                          <p>Plumbing</p>
                        </div>
                        <div>|</div>
                        <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__items__location">
                          <MdOutlineLocationOn />
                          <p>Manhattan</p>
                        </div>
                        <div>|</div>
                        <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__items__contact">
                          <BiPhone />
                          <p>Call Now</p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="profile_details__content__bottom_content__saved__card_container__card__bio">
                    <p>
                      Danny plumbing, a Manhattan-based company, offering a
                      variety of services including plumbing, heating, boiler
                      repair and installation, and bathroom fitting. We're known
                      for our quality worksmanship, excellent customer service,
                      and free quotations. All work is quaranteed and performed
                      by qualified professionals.
                    </p>
                  </div>
                </div>
                <div className="profile_details__content__bottom_content__saved__card_container__card">
                  <div className="profile_details__content__bottom_content__saved__card_container__card__card_header">
                    <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__image">
                      <img alt="#" src="https://picsum.photos/200/300" />
                    </div>
                    <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content">
                      <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__contractor_name">
                        <h4>Chuck's carpentry</h4>
                      </div>
                      <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__items">
                        <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__items__type">
                          <MdOutlineCarpenter />
                          <p>Carpentry</p>
                        </div>
                        <div>|</div>
                        <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__items__location">
                          <MdOutlineLocationOn />
                          <p>Manhattan</p>
                        </div>
                        <div>|</div>
                        <div className="profile_details__content__bottom_content__saved__card_container__card__card_header__content__items__contact">
                          <BiPhone />
                          <p>Call Now</p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="profile_details__content__bottom_content__saved__card_container__card__bio">
                    <p>
                      Chuck's carpenty, location in Manhattan, specialized in
                      carpentry, flooring, and kitchen fitting. Our reputation
                      is built on superior craftsmanship, exceptional customer
                      service, and transparent pricing. Our team of certified
                      professionals ensures every job is completed to the
                      highest standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile_details__content__bottom_content__reviews">
              <div className="profile_details__content__bottom_content__reviews__header">
                <h3>
                  <MdStarBorder /> Reviews
                </h3>
              </div>
              <div className="profile_details__content__bottom_content__reviews">
                <div className="profile_details__content__bottom_content__reviews__reviews_container">
                  {userReviews &&
                    userReviews.map((review) => {
                      return (
                        <div className="profile_details__content__bottom_content__reviews__reviews_container__card">
                          <div className="profile_details__content__bottom_content__reviews__reviews_container__card__cardheader">
                            <div className="profile_details__content__bottom_content__reviews__reviews_container__card__cardheader__image">
                              <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                                alt="contractorImg"
                              />
                            </div>
                            <div className="profile_details__content__bottom_content__reviews__reviews_container__card__cardheader__content">
                              <div className="profile_details__content__bottom_content__reviews__reviews_container__card__cardheader__content__title">
                                <h4>{review.name}</h4>
                                <StarRating rating={review.rating} />
                              </div>

                              <div className="profile_details__content__bottom_content__reviews__reviews_container__card__cardheader__content__items">
                                <div className="profile_details__content__bottom_content__reviews__reviews_container__card__cardheader__content__items__type">
                                  <HiOutlineWrenchScrewdriver />
                                  <p>Plumbing</p>
                                </div>
                                <div>|</div>
                                <div className="profile_details__content__bottom_content__reviews__reviews_container__card__cardheader__content__items__location">
                                  <MdOutlineLocationOn />
                                  <p>{review.location}</p>
                                </div>
                                <div>|</div>
                                <div className="profile_details__content__bottom_content__reviews__reviews_container__card__cardheader__content__items__date">
                                  {" "}
                                  <MdOutlineDateRange />
                                  <p>{moment(review.date).fromNow()}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="profile_details__content__bottom_content__reviews__reviews_container__card__info">
                            <p>{review.review}</p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
