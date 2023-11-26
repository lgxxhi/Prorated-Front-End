import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Global.scss";
import SearchBar from "./SearchBar";

function Nav() {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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

  // console.log(window.scrollY);

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
          <button
            className="navbar__menu__buttons__login-btn btn"
            onClick={(e) => handleClick(e, "/login")}
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
