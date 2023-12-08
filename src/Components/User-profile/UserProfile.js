import React, { useEffect, useState, useContext } from "react";
import { UsersContext } from "../../context/UsersContext";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleUser } from "../../common/usersAPI";
import "./UserProfile.css";
import moment from "moment";
import StarRating from "../../Components/StarRating/StarRating";

function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userProfile, setUserProfile] = useState([]);
  const [userReviews, setUserReviews] = useState([]);
  const { userData } = useContext(UsersContext);

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        let result = await getSingleUser(id);

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
    <div className="profile">
      <h2 className="dashboardH2">My Dashboard</h2>
      <div className="userProfile">
        <img
          className="user"
          src={userProfile.profile_picture}
          alt="profilepic"
        />

        <div className="userInfo">
          <h3>
            {userProfile.first_name} {userProfile.last_name}
          </h3>
          <p>
            <span>{userProfile.count !== 0 ? userProfile.count : 0}</span>{" "}
            Reviews
          </p>
          <p>
            From | <span>{userProfile.location}</span>
          </p>

          <p>
            <span>10</span> Past Projects{" "}
          </p>
        </div>
      </div>

      <div>
        <button onClick={() => navigate(`/user-profile/${id}/edit`)}>
          Edit profile
        </button>
      </div>
      <div>
        <h2>User Profile</h2>
        <p>Email: {userData?.email}</p>
      </div>

      <div className="saved">
        <h3 className="savedH3">Saved Contractors</h3>
        <div className="picNdesc">
          <ul>
            <li>
              <img
                className="contractor"
                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                alt="contractorImg"
              />{" "}
              <h5 className="contractorH5">Smith Contruction</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
            <li>
              <img
                className="contractor"
                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                alt="contractorImg"
              />{" "}
              <h5 className="contractorH5">Danny Plumbing</h5>
              <p className="contractorPtag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="pastReviews">
        <h3>Past Reviews</h3>
        <ul>
          {userReviews &&
            userReviews.map((review) => {
              return (
                <li>
                  <img
                    className="contractor"
                    src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                    alt="contractorImg"
                  />
                  <h5>
                    <small>{review.name}</small>
                  </h5>
                  <h6 className="locationh6">{review.location}</h6>
                  <p className="rating">
                    <span>{<StarRating rating={review.rating} />}</span> |{" "}
                    {moment(review.date).fromNow()}
                  </p>
                  <p className="review">{review.review}</p>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;
