import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditPicModal from "./EditPicModal";
import { MdOutlineEditNote } from "react-icons/md";
import Button from "../Button/Button";
import "./ManageUserAccount.css";

import { getSingleUser, updateUserById } from "../../Api/usersAPI";

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
      window.alert("Account Updated!");
      navigate(`/user-profile/${id}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="manageUserContainer">
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
      <form id="manageUser" onSubmit={handleSubmit}>
        <h3 className="accountH3">
          <MdOutlineEditNote /> Manage Account
        </h3>
        <div className="editDetails">
          <h4 className="basicInfoH4">Basic Info</h4>
          <div id="edInputs">
            <div id="usernameEd">
              <label htmlFor="username">Username: </label>
              <input
                id="username"
                type="text"
                name="username"
                value={user.username}
                onChange={handleTextChange}
              />
            </div>
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
            <div id="emailEd">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleTextChange}
              />
            </div>
            <div id="phonenumberEd">
              <label htmlFor="phone_number">Phone Number:</label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                value={user.phone_number}
                onChange={handleTextChange}
              />
            </div>
            <div id="locationEd">
              <label htmlFor="location">Location: </label>
              <input
                type="text"
                id="location"
                name="location"
                value={user.location}
                onChange={handleTextChange}
              />
            </div>
          </div>
          <Button id={1} value={"Save"} className={"button-save"}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ManageUserAccount;
