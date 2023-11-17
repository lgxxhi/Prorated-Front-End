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
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserById();
  }, [id]);

  return (
    <div className="profile">
      <h2>My Dashboard</h2>
      <div className="userProfile">
        <img
          className="user"
          src={userProfile.profile_picture}
          alt="profilepic"
        />
        <p>
          <h3>
            {userProfile.first_name} {userProfile.last_name}
          </h3>
        </p>
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

      <div>
        <button>Edit profile</button>
      </div>

      <div className="saved">
        <h3>Saved Contractors</h3>
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
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
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
        <p>
          <h3>Past Reviews</h3>
          <ul>
            <li>
              <h5>Danny Plumbing</h5>
              <h6>Manhattan</h6>
              <p>
                <span>⭐️⭐️⭐️⭐️</span> | 5 months ago
              </p>
              <p>He unclogged my pipes!</p>
            </li>
            <li>
              <h5>Smith Construction</h5>
              <h6>Manhattan</h6>
              <p>
                <span>⭐️⭐️⭐️⭐️</span> | 5 months ago
              </p>
              <p>Fixed my roof!</p>
            </li>
            <li>
              <h5>J Landscaping</h5>
              <h6>Manhattan</h6>
              <p>
                <span>⭐️⭐️⭐️⭐️⭐️</span> | 5 months ago
              </p>
              <p>He fixed my garden!</p>
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
