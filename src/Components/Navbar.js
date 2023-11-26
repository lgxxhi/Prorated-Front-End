import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Global.scss";
import SearchBar from "./SearchBar";

function Nav() {
  const navigate = useNavigate();

  function handleClick(e, location) {
    e.preventDefault();
    navigate(location);
  }

  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <div className="navbar__menu__components">
          <h1
            onClick={(e) => handleClick(e, "/")}
            className="navbar__menu__components__logo"
          >
            PRORATED
          </h1>
        </div>
        <SearchBar location="navbar" />

        <div className="navbar__menu__buttons">
          <button
            className="navbar__menu__buttons__signup-btn btn"
            onClick={(e) => handleClick(e, "/signup")}
          >
            Sign Up
          </button>
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
