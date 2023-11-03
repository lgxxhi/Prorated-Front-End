import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Global.scss";

function Nav() {
  const logo = require("../Assets/Images/ProRatedLogo.png");
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <img src={logo} alt="logo" className="navbar__menu__logo" />
        <Link to="/" className="navbar__menu__button">
          Home
        </Link>
        <Link to="/profile" className="navbar__menu__button">
          Contractor Profile
        </Link>
      </div>
    </nav>
  );
}
export default Nav;
