import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./ServicesOffered.css";

function ServicesOffered(contractorData) {
  const services = contractorData.contractorData.services_offerred.slice(0, 8);

  return (
    <div>
      <div className="grid-container">
        {services.map((item) => (
          <div key={uuidv4()} className="grid-item">
            <div className="item">{item}</div>
          </div>
        ))}
        {contractorData.contractorData.services_offerred.length > 8 ? (
          <div className="more">And More...</div>
        ) : null}
      </div>
    </div>
  );
}

export default ServicesOffered;
