import "./Navbar.scss";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../../ReactComponents/Searchbar/SearchBar";
import { auth } from "../../ReactComponents/Firebase/Firebase";
import { signOut } from "firebase/auth";
import { useAuth } from "../../ReactComponents/Firebase/AuthContext";

function Nav() {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { authUser } = useAuth();

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

  function handleScroll() {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setPrevScrollPos(currentScrollPos);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert(`Logout successful!`);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  console.log(prevScrollPos);
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
          <div className="navbar__menu__components__searchBar">
            {displaySearchbar()}
          </div>
        </div>

        {authUser ? (
          <div className="navbar__menu__buttons">
            <button
              className="navbar__menu__buttons__btn"
              onClick={(e) => handleClick(e, "/about-us")}
            >
              About us
            </button>
            <button
              className="navbar__menu__buttons__btn"
              onClick={(e) => handleClick(e, "/user-profile/6")}
            >
              My profile
            </button>
            <button
              className="navbar__menu__buttons__logout"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="navbar__menu__buttons">
            <button
              className="navbar__menu__buttons__login"
              onClick={(e) => handleClick(e, "/login-signup")}
            >
              Log In
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
export default Nav;
