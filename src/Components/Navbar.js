import React from "react";
import "../Styles/Global.scss";

import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <>
        <Link to="/">Home</Link>
        <Link to="/profile">Contractor Profile</Link>
      </>
    </nav>
  );
}
export default Nav;
