import React from "react";
import "../Styles/Global.scss";
import logo from "../Assets/Images/ProRatedLogo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="" className="footer__logo" />
      <div className="footer__routes">
        <a className="footer__routes__button" href="/">
          Home
        </a>
        <a className="footer__routes__button" href="/">
          Dashboard
        </a>
        <a className="footer__routes__button" href="/">
          Account
        </a>
        <a className="footer__routes__button" href="/">
          About
        </a>
        <a className="footer__routes__button" href="/">
          Contact us
        </a>
      </div>
    </footer>
  );
}
