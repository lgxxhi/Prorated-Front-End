import React from "react";

import "./ContractorListings.css";

import Dropdown from "../Dropdown/Dropdown";
import ContractorCard from "../ContractorCard/ContractorCard";
import FilterBar from "../FilterBar/FilterBar";

function ContractorListings(contractorData) {
  return (
    <div className="container">
      <nav>Nav</nav>

      <div className="main">
        <div className="main-header">
          <div className="left-main">
            <h2>
              <span className="results-for">Results For</span>
              <span className="service-found"> Plumbing</span>
            </h2>
            <p>{contractorData.contractorData.length} services available </p>
          </div>

          <Dropdown />
        </div>

        <div className="main-content">
          <ContractorCard contractorData={contractorData} />
        </div>
      </div>

      {/* <div className="sidebar">
        <header>ProRated</header>
        <FilterBar />
      </div> */}
    </div>
  );
}

export default ContractorListings;
