import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditPicModal from "./EditPicModal";
import "./ManageUserAccount.css";

import { getSingleUser, updateUserById } from "../../common/usersAPI";

function ManageUserAccount() {
  // const navigate = useNavigate();
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
        setUser(result.data);
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
      // navigate(`/edit/${id}`)
      window.alert("Account Updated!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="manageUserContainer">
      <div className="account-container"></div>
      <h2 className="accountH2">Manage Account</h2>
      <div className="basicInfo-container">
        <h3 className="basicInfoH3">Basic Info</h3>
        <form onSubmit={handleSubmit}>
          <div className="profilePicDiv">
            <div className="editImg">
              <div className="userImg">
                <img
                  className="img"
                  src={user.profile_picture}
                  alt="profilepic"
                />
                <div className="content">
                  <img
                    className="hoverPic"
                    src="https://t4.ftcdn.net/jpg/01/07/57/91/360_F_107579101_QVlTG43Fwg9Q6ggwF436MPIBTVpaKKtb.jpg"
                    alt="profilepic"
                  />
                </div>
              </div>
            </div>
            <EditPicModal
              profilePic={user.profile_picture}
              handleTextChange={handleTextChange}
            />
          </div>
          <br />
          
          <div className="userDets">
            <h4 className="user_Name">
              {user.first_name} {user.last_name} - <span>{user.id}</span>
            </h4>
            <label htmlFor="username">Username: </label>
            <input
              id="username"
              type="text"
              name="username"
              value={user.username}
              onChange={handleTextChange}
            />
            <br />
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
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleTextChange}
            />
            <br />
            <br />
            <label htmlFor="phone_number">Phone Number:</label>
            <input
              type="text"
              id="phone_number"
              name="phone_number"
              value={user.phone_number}
              onChange={handleTextChange}
            />
            <br />
            <br />
            <label htmlFor="location">Location: </label>
            <input
              type="text"
              id="location"
              name="location"
              value={user.location}
              onChange={handleTextChange}
            />
            <br />
            <br />
            <button className="saveButton">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManageUserAccount;
