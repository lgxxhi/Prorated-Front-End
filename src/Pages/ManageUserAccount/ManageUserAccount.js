import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditPicModal from "./EditPicModal";
import "./ManageUserAccount.css";

import {
  getSingleUser,
  updateUserById,
} from "../../Components/common/usersAPI";

function ManageUserAccount() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    profile_picture: "",
    location: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        let result = await getSingleUser(id);
        setUser(result.data.data.user);
      } catch (e) {
        console.log(e);
      }
    };
    fetchUserById();
  }, [id]);

  const handleTextChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserById(id, user);
      navigate(`user-profile/${id}/edit`);
      window.alert("Account Updated!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="account-container">
      <div className="manageUserContainer">
        <h2 className="accountH2">Manage Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="basicInfo-container">
            <div className="profilePicDiv">
              <h4 className="user_Name">
                {user.first_name} {user.last_name}
              </h4>
              <div className="userImg">
                <img
                  className="img"
                  src={user.profile_picture}
                  alt="profilepic"
                />
                <div className="pencil">
                  <EditPicModal
                    profilePic={user.profile_picture}
                    handleTextChange={handleTextChange}
                  />
                </div>
              </div>
            </div>
            <div className="userDets">
              <h3 className="basicInfoH3">Basic Info</h3>
              <div className="info">
                <span>Id: {user.id}</span>
                <br />
                <label htmlFor="username">Username: </label>
                <br />
                <input
                  id="username"
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={handleTextChange}
                />
                <br />
                <div id="password">
                  <label htmlFor="password">Password: </label>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={user.password}
                    onChange={handleTextChange}
                  />
                  {!showPassword ? (
                    <i
                      className="fa-solid fa-eye"
                      id="showPassword"
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  ) : (
                    <i
                      className="fa-regular fa-eye-slash"
                      id="showPassword"
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  )}
                </div>
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleTextChange}
                />
                <br />
                <label htmlFor="phone_number">Phone Number:</label>
                <br />{" "}
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  value={user.phone_number}
                  onChange={handleTextChange}
                />
                <br />
                <label htmlFor="location">Location: </label>
                <br />
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={user.location}
                  onChange={handleTextChange}
                />
                <br />
                <button className="saveButton">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageUserAccount;
