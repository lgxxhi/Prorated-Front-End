import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleUser } from "../../common/usersAPI";
import "./UserProfile.css";

function UserProfile() {
  const { id } = useParams();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        let result = await getSingleUser(id);
        setUserProfile(result.data);
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
            <span>7</span> Reviews
          </p>
          <p>
            From | <span>{userProfile.location}</span>
          </p>

          <p>
            <span>10</span> Past Projects{" "}
          </p>
        </div>
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
          <li>
            <img
              className="contractor"
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              alt="contractorImg"
            />
            <h5>Danny Plumbing</h5>
            <h6 className="locationh6">Manhattan</h6>
            <p className="rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span> | 4 months ago
            </p>
            <p className="review">He unclogged my pipes!</p>
          </li>
          <li>
            <img
              className="contractor"
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              alt="contractorImg"
            />
            <h5>Smith Contruction</h5>
            <h6 className="locationh6">Manhattan</h6>
            <p className="rating">
              <span>⭐️⭐️⭐️⭐️</span> | 5 months ago
            </p>
            <p className="review">Fixed My Roof!</p>
          </li>
          <li>
            <img
              className="contractor"
              src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
              alt="contractorImg"
            />
            <h5>Landscapes Landscaping</h5>
            <h6 className="locationh6">Manhattan</h6>
            <p className="rating">
              <span>⭐️⭐️⭐️⭐️⭐️</span> | 6 months ago
            </p>
            <p className="review">Fixed My Garden!</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfile;