import React from "react";
import ContractorDetails from "../Pages/ContractorDetails";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <>
        <Link to="/profile">Contractor Profile</Link>
      </>
    </nav>
  );
}
export default Nav;
