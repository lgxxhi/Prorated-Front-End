import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Global.scss";
import SearchBar from "./SearchBar";
import { auth } from "./Firebase/Firebase";
import { useAuth } from "../Components/Firebase/AuthContext";
import { signOut } from "firebase/auth";
import { UsersContext } from "../context/UsersContext";

function Nav() {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { authUser } = useAuth();
  const { userData } = useContext(UsersContext);
  console.log(userData);

  function handleClick(e, location) {
    e.preventDefault();
    navigate(location);
  }

  function displaySearchbar() {
    return window.location.pathname !== "/" ? (
      <SearchBar location="navbar" />
    ) : (
      <></>
    );
  }

  // function handleScroll() {
  //   const currentScrollPos = window.scrollY;
  //   if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
  //     setVisible(false);
  //   } else {
  //     setVisible(true);
  //   }
  //   setPrevScrollPos(currentScrollPos);
  // }

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // console.log(window.scrollY);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert(`Logout successful!`);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <nav className="navbar">
      <div
        className={`navbar__menu ${visible ? "navbar-show" : "navbar-hide"}`}
      >
        <div className="navbar__menu__components">
          <h1
            onClick={(e) => handleClick(e, "/")}
            className="navbar__menu__components__logo"
          >
            PRORATED
          </h1>
          <Link to="/about-us" className="navbar__menu__components__button">
            About us
          </Link>
          {displaySearchbar()}
        </div>

        <div className="navbar__menu__buttons">
          {authUser ? (
            <div>
              <button
                className="navbar__menu__buttons__dashboard-btn btn"
                onClick={(e) => handleClick(e, `/user-profile/${userData.id}`)}
              >
                My profile
              </button>
              <button
                className="navbar__menu__buttons__logout-btn btn"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              className="navbar__menu__buttons__login-btn btn"
              onClick={(e) => handleClick(e, "/login-signup")}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
export default Nav;
