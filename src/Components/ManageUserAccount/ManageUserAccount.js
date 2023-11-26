import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditPicModal from "./EditPicModal";
import "./ManageUserAccount.css";

import { getSingleUser, updateUserById } from "../../common/usersAPI";

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
        await getSingleUser(id, setUser);
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
      window.alert("Account Updated!");
      navigate(`/user-profile/${id}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="manageUserContainer">
      <h2 className="accountH2">Manage Account</h2>

      <div className="imgxPencil">
        <h4 className="user_Name">
          {user.first_name} {user.last_name}
        </h4>
        <img className="img" src={user.profile_picture} alt="profilepic" />
        <div className="editMod">
          <EditPicModal
            profilePic={user.profile_picture}
            handleTextChange={handleTextChange}
          />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="editDetails">
          <h3 className="basicInfoH3">Basic Info</h3>
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
      </form>
    </div>
  );
}

export default ManageUserAccount;
