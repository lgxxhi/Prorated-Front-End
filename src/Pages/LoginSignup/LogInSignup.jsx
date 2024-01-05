import "./LoginSignup.scss";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo, createUser } from "../../Api/Api";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { UsersContext } from "../../context/UsersContext";
import { useAuth } from "../../Firebase/AuthContext";
import { auth } from "../../Firebase/Firebase";

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
  const navigate = useNavigate();
  const { setAuthUser } = useAuth();
  const { setUserData } = useContext(UsersContext);

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
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        setAuthUser(userCredentials.user);
        const loggedUser = await fetchUserInfo(user.email);
        setUserData(loggedUser);
        console.log("User data after setting:", loggedUser);
        navigate(`/user-profile/${loggedUser.id}`);
      } catch (error) {
        console.log(error);
        setError("Sign-in failed. Please check your email and password.");
      } finally {
        setIsLoading(false);
      }
    } else {
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        setAuthUser(userCredentials.user);
        const signedUpUser = await createUser(user);
        setUserData(signedUpUser);
        navigate(`/user-profile/${signedUpUser.id}`);
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
    <div className="login-signup">
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="login-signup__box">
          <h2 className="login-signup__box__title">
            {isLogin ? "Login" : "Sign Up"}
          </h2>
          <form className="login-signup__box__form" onSubmit={handleSubmit}>
            <label className="login-signup__box__form__label" htmlFor="email">
              Email:{" "}
            </label>
            <input
              className="login-signup__box__form__textBox"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              required
              onChange={handleChange}
            />

            <label
              className="login-signup__box__form__label"
              htmlFor="password"
            >
              Password:{" "}
            </label>
            <input
              className="login-signup__box__form__textBox"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              required
              onChange={handleChange}
            />

            {!isLogin && (
              <>
                <label
                  className="login-signup__box__form__label"
                  htmlFor="username"
                >
                  Username:{" "}
                </label>
                <input
                  className="login-signup__box__form__textBox"
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={user.username}
                  onChange={handleChange}
                />

                <label
                  className="login-signup__box__form__label"
                  htmlFor="first_name"
                >
                  First Name:{" "}
                </label>
                <input
                  className="login-signup__box__form__textBox"
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={user.first_name}
                  onChange={handleChange}
                />

                <label
                  className="login-signup__box__form__label"
                  htmlFor="last_name"
                >
                  Last Name:{" "}
                </label>
                <input
                  className="login-signup__box__form__textBox"
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  value={user.last_name}
                  onChange={handleChange}
                />

                <label
                  className="login-signup__box__form__label"
                  htmlFor="phone_number"
                >
                  Phone Number:{" "}
                </label>
                <input
                  className="login-signup__box__form__textBox"
                  type="text"
                  name="phone_number"
                  placeholder="Enter your phone number"
                  value={user.phone_number}
                  onChange={handleChange}
                />

                <label
                  className="login-signup__box__form__label"
                  htmlFor="profile_picture"
                >
                  Profile Picture URL:{" "}
                </label>
                <input
                  className="login-signup__box__form__textBox"
                  type="text"
                  name="profile_picture"
                  placeholder="Enter your profile picture URL"
                  value={user.profile_picture}
                  onChange={handleChange}
                />

                <label
                  className="login-signup__box__form__label"
                  htmlFor="location"
                >
                  Location:{" "}
                </label>
                <input
                  className="login-signup__box__form__textBox"
                  type="text"
                  name="location"
                  placeholder="Enter your location"
                  value={user.location}
                  onChange={handleChange}
                />
              </>
            )}
            <button
              className="login-signup__box__form__submitbtn"
              type="submit"
              disabled={isLoading}
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="login-signup__box__signUp">
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
