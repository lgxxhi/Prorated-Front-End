import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <h1>PRORATED</h1>
        <div className="footer__info__social-media">
          <i className="bx bxl-instagram" style={{ color: "#e1306c" }}></i>
          <i className="bx bxl-twitter" style={{ color: "#1da1f2" }}></i>
          <i
            className="bx bxl-facebook-circle"
            style={{ color: "#4267b2" }}
          ></i>
          <i className="bx bxl-youtube" style={{ color: "#ff0000" }}></i>
        </div>
      </div>
      <div className="footer__sitemap">
        <h2>Overview</h2>
        <button>Home</button>
        <button>Account</button>
        <button>About Us</button>
      </div>
      <div className="footer__email">
        <h2>Stay Up to Date with our Newsletter</h2>
        <form className="footer__email__form">
          <input
            type="email"
            className="footer__email__form__text"
            placeholder="Email..."
            required
          />
          <input
            type="submit"
            className="footer__email__form__submit"
            value="Sign Up"
          />
        </form>
      </div>
    </footer>
  );
}
