import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

function LoginSignup() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    profile_picture: "",
    location: "",
  });
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const url = process.env.REACT_APP_API_URL;

  const handleToggle = () => {
    setError(null);
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (isLogin) {
      try {
        const response = await axios.get(`${url}/users`, {
          params: { email: user.email, password: user.password },
        });

        const foundUser = response.data[0];

        if (foundUser) {
          setUserData(foundUser);
        } else {
          console.error("User not found");
          setError("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.error("Error logging in:", error.message);
        setError("Login failed. Please try again.");
      } finally {
        setIsLoading(false);
        if (userData) {
          navigate("/");
        }
      }
    } else {
      try {
        const response = await axios.post(`${url}/users`, user);
        console.log("User signed up successfully!", response.data);
        navigate("/");
      } catch (error) {
        console.error("Error signing up:", error.message);
        setError("Sign up failed. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
    setUser({
      email: "",
      password: "",
      username: "",
      first_name: "",
      last_name: "",
      phone_number: "",
      profile_picture: "",
      location: "",
    });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-signup container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="form container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              required
              onChange={handleChange}
            />

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              required
              onChange={handleChange}
            />

            {!isLogin && (
              <div>
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  value={user.username}
                  onChange={handleChange}
                />

                <label htmlFor="first_name">First Name: </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={user.first_name}
                  onChange={handleChange}
                />

                <label htmlFor="last_name">Last Name: </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={user.last_name}
                  onChange={handleChange}
                />

                <label htmlFor="phone_number">Phone Number: </label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  value={user.phone_number}
                  onChange={handleChange}
                />

                <label htmlFor="profile_picture">Profile Picture URL: </label>
                <input
                  type="text"
                  id="profile_picture"
                  name="profile_picture"
                  placeholder="Enter your profile picture URL"
                  value={user.profile_picture}
                  onChange={handleChange}
                />

                <label htmlFor="location">Location: </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter your location"
                  value={user.location}
                  onChange={handleChange}
                />
              </div>
            )}
            <button type="submit" disabled={isLoading}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p>
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button onClick={handleToggle} disabled={isLoading}>
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
          {error && <p className="error-message">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default LoginSignup;
