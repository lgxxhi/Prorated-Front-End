import React from "react";

import "./ContractorListings.css";

import Dropdown from "../Dropdown/Dropdown";
import ContractorCard from "../ContractorCard/ContractorCard";
import FilterBar from "../FilterBar/FilterBar";
import SecondDropdown from "../SecondDropdown/SecondDropdown";

function ContractorListings(contractorData) {
  return (
    <div className="container">
      <nav>Nav</nav>{" "}
      {/* <div className="sidebar">
        <h2>ProRated</h2>
        <FilterBar />
      </div> */}
      <div className="main">
        <div className="main-header">
          <div className="left-main">
            <h2>
              <span className="results-for">Results For</span>
              <span className="service-found"> Plumbing</span>
            </h2>
            <p>{contractorData.contractorData.length} services available </p>
          </div>

          {/* <Dropdown /> */}
          <SecondDropdown />
        </div>

        <div className="main-content">
          <ContractorCard contractorData={contractorData} />
        </div>
      </div>
    </div>
  );
}

export default ContractorListings;
