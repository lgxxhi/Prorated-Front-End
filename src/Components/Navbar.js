import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Global.scss";
import SearchBar from "./SearchBar";

function Nav() {
  const navigate = useNavigate();

  function logoClick(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <h1 onClick={(e) => logoClick(e)} className="navbar__menu__logo">
          PRORATED
        </h1>
        <Link to="/" className="navbar__menu__button">
          Home
        </Link>
        <Link to="/profile" className="navbar__menu__button">
          ConProf
        </Link>
        <SearchBar location="navbar" />
      </div>
    </nav>
  );
}
export default Nav;
